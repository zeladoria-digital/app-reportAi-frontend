import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. A CHAVE ÚNICA: Como o professor ensinou, usamos um prefixo claro.
const CHAVE_OFFLINE = '@smartzeladoria:reportes_offline';

// 2. FUNÇÃO DE LER (Carregar)
export async function carregarReportesOffline() {
  try {
    const texto = await AsyncStorage.getItem(CHAVE_OFFLINE);
    
    // Se for null, significa que é a primeira vez ou a gaveta está vazia
    if (texto === null) {
      return [];
    }

    // Transforma o Texto de volta em Objetos
    return JSON.parse(texto);
  } catch (erro) {
    console.error('Erro ao carregar reportes offline:', erro);
    return [];
  }
}

// 3. FUNÇÃO DE SALVAR (Adicionar um novo reporte na caixa preta)
export async function salvarReporteOffline(novoReporte) {
  try {
    // Primeiro, abrimos a gaveta para ver se já tem outros reportes lá
    const reportesAtuais = await carregarReportesOffline();

    // Adicionamos o novo reporte na lista (junto com um ID único gerado na hora)
    const reporteComId = {
      ...novoReporte,
      idLocal: Date.now().toString(), 
      status: 'Aguardando Internet'
    };

    const novaLista = [...reportesAtuais, reporteComId];

    // Transformamos a lista inteira em Texto (Serialização) e fechamos a gaveta
    await AsyncStorage.setItem(CHAVE_OFFLINE, JSON.stringify(novaLista));
    
    console.log("Reporte salvo na Caixa Preta com sucesso!");
    return true;
  } catch (erro) {
    console.error('Erro ao salvar reporte offline:', erro);
    return false;
  }
}

// 4. FUNÇÃO DE LIMPAR (Para o futuro, quando a internet voltar e o app enviar para o Kauê)
export async function limparReportesOffline() {
  await AsyncStorage.removeItem(CHAVE_OFFLINE);
}

// 5. FUNÇÃO DE REMOÇÃO SELETIVA (A Nova Limpeza Segura do Sincronizador)
// Remove apenas o reporte que já foi transmitido com sucesso para a API
export async function removerReporteOfflinePorId(idLocal) {
  try {
    const reportesAtuais = await carregarReportesOffline();
    
    // Filtra a lista mantendo apenas os reportes que NÃO possuem o ID enviado
    const novaLista = reportesAtuais.filter((reporte) => reporte.idLocal !== idLocal);
    
    await AsyncStorage.setItem(CHAVE_OFFLINE, JSON.stringify(novaLista));
    console.log(`Reporte ${idLocal} removido do armazenamento local com segurança.`);
  } catch (erro) {
    console.error('Erro ao remover reporte específico offline:', erro);
  }
}