import { useEffect } from "react";
import { Stack } from "expo-router";
import * as Network from "expo-network";
import api from "../../src/services/api";
import { carregarReportesOffline, removerReporteOfflinePorId } from "../../src/storage/offlineStorage";
export default function AppLayout() {
    useEffect(() => {
        async function verificarESincronizar() {
            try {
                const estadoRede = await Network.getNetworkStateAsync();
                if (estadoRede.isConnected && estadoRede.isInternetReachable) {
                    console.log("[Sincronizador] Internet detectada! Iniciando checagem da Caixa Preta...");
                    const filaOffline = await carregarReportesOffline();
                    if (filaOffline.length === 0) {
                        console.log("[Sincronizador] Nenhuma denúncia pendente de envio.");
                        return;
                    }
                    console.log(`[Sincronizador] Encontrada(s) ${filaOffline.length} denúncia(s) pendente(s). Processando...`);
                    for (const reporte of filaOffline) {
                        try {
                            const formData = new FormData();
                            const uri = reporte.fotoUri;
                            const nomeArquivo = uri.split('/').pop() || `foto_${Date.now()}.jpg`;
                            formData.append('foto', {
                                uri: uri,
                                name: nomeArquivo,
                                type: 'image/jpeg'
                            } as any);
                            const agora = new Date();
                            const dataIso = agora.getFullYear() + '-' +
                                String(agora.getMonth() + 1).padStart(2, '0') + '-' +
                                String(agora.getDate()).padStart(2, '0') + 'T' +
                                String(agora.getHours()).padStart(2, '0') + ':' +
                                String(agora.getMinutes()).padStart(2, '0') + ':' +
                                String(agora.getSeconds()).padStart(2, '0') + '-03:00';
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
                                neighborhood: "Centro",
                                photoUrl: "https://processando.com/foto.jpg"
                            };
                            formData.append('dados', JSON.stringify(dadosCorpo));
                            const resposta = await api.post('/complaints/citizen', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                }
                            });
                            if (resposta.status === 201) {
                                await removerReporteOfflinePorId(reporte.idLocal);
                            }
                        }
                        catch (erroEnvio) {
                            console.error(`[Sincronizador] Erro ao enviar reporte local ${reporte.idLocal}:`, erroEnvio);
                        }
                    }
                }
            }
            catch (erroGeral) {
                console.error("[Sincronizador] Erro geral na execução do fluxo offline:", erroGeral);
            }
        }
        verificarESincronizar();
    }, []);
    return (<Stack screenOptions={{
            headerShown: false,
            animationEnabled: true,
        }}>
      
      <Stack.Screen name="home-tabs"/>

      
      <Stack.Screen name="new-report"/>
      <Stack.Screen name="camera"/>
      <Stack.Screen name="category"/>
      <Stack.Screen name="location"/>
      <Stack.Screen name="description"/>
      <Stack.Screen name="confirmation"/>
    </Stack>);
}
