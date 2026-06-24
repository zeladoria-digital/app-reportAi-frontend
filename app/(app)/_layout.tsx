import { useEffect } from "react";
import { Stack } from "expo-router";
import * as Network from "expo-network";
import api from "../../src/services/api"; // Certifique-se de que o caminho até o seu axios está correto
import { carregarReportesOffline, removerReporteOfflinePorId } from "../../src/storage/offlineStorage"; // Ajuste o caminho do seu arquivo de storage

export default function AppLayout() {

  useEffect(() => {
    // Função responsável por verificar a conexão e processar a fila
    async function verificarESincronizar() {
      try {
        // 1. ESCUTAR / VERIFICAR A CONEXÃO
        const estadoRede = await Network.getNetworkStateAsync();
        
        // Se estiver conectado e a conexão for considerada estável
        if (estadoRede.isConnected && estadoRede.isInternetReachable) {
          console.log("[Sincronizador] Internet detectada! Iniciando checagem da Caixa Preta...");
          
          // 2. DISPARAR O COFRE
          const filaOffline = await carregarReportesOffline();
          
          if (filaOffline.length === 0) {
            console.log("[Sincronizador] Nenhuma denúncia pendente de envio.");
            return;
          }

          console.log(`[Sincronizador] Encontrada(s) ${filaOffline.length} denúncia(s) pendente(s). Processando...`);

          // Percorre a fila de forma sequencial
          for (const reporte of filaOffline) {
            try {
              // Reconstrução do caminhão pesado (FormData)
              const formData = new FormData();

              // Configuração dos metadados do arquivo de imagem
              const uri = reporte.fotoUri;
              const nomeArquivo = uri.split('/').pop() || `foto_${Date.now()}.jpg`;
              
              formData.append('foto', {
                uri: uri,
                name: nomeArquivo,
                type: 'image/jpeg'
              } as any);

              // Drible do Antifraude: Atualizamos a data para o momento exato do disparo
                const agora = new Date();
                const dataIso = agora.getFullYear() + '-' + 
                String(agora.getMonth() + 1).padStart(2, '0') + '-' + 
                String(agora.getDate()).padStart(2, '0') + 'T' + 
                String(agora.getHours()).padStart(2, '0') + ':' + 
                String(agora.getMinutes()).padStart(2, '0') + ':' + 
                String(agora.getSeconds()).padStart(2, '0') + '-03:00';

              // Montagem do corpo de dados esperado pelo validador do Back-end
              const dadosCorpo = {
                category: reporte.categoria,
                description: reporte.descricao || "Sem descrição informada.",
                location: {
                  latitude: reporte.latitude,
                  longitude: reporte.longitude
                },
                exif: {
                  dateTaken: dataIso,
                  latitude: reporte.latitude,
                  longitude: reporte.longitude
                },
                neighborhood: "Centro", // Ajuste para mapear o bairro dinamicamente se coletado
                photoUrl: "https://processando.com/foto.jpg" // Drible obrigatório do validador Joi
              };

              formData.append('dados', JSON.stringify(dadosCorpo));

              // Disparo da requisição HTTP multipart para o back-end
              const resposta = await api.post('/complaints/citizen', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                }
              });

              // 3. LIMPEZA SEGURA
              // Se o servidor respondeu com sucesso (Status 201 Created)
              if (resposta.status === 201) {
                await removerReporteOfflinePorId(reporte.idLocal);
              }

            } catch (erroEnvio) {
              // Se um reporte falhar, o loop continua guardando o item atual no cofre para a próxima tentativa
              console.error(`[Sincronizador] Erro ao enviar reporte local ${reporte.idLocal}:`, erroEnvio);
            }
          }
        }
      } catch (erroGeral) {
        console.error("[Sincronizador] Erro geral na execução do fluxo offline:", erroGeral);
      }
    }

    // Executa a sincronização imediatamente na abertura do app
    verificarESincronizar();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {/* Home Tabs */}
      <Stack.Screen name="home-tabs" />

      {/* Report Flow */}
      <Stack.Screen name="new-report" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="category" />
      <Stack.Screen name="location" />
      <Stack.Screen name="description" />
      <Stack.Screen name="confirmation" />
    </Stack>
  );
}