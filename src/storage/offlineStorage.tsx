import AsyncStorage from '@react-native-async-storage/async-storage';
const CHAVE_OFFLINE = '@smartzeladoria:reportes_offline';
export async function carregarReportesOffline() {
    try {
        const texto = await AsyncStorage.getItem(CHAVE_OFFLINE);
        if (texto === null) {
            return [];
        }
        return JSON.parse(texto);
    }
    catch (erro) {
        console.error('Erro ao carregar reportes offline:', erro);
        return [];
    }
}
export async function salvarReporteOffline(novoReporte) {
    try {
        const reportesAtuais = await carregarReportesOffline();
        const reporteComId = {
            ...novoReporte,
            idLocal: Date.now().toString(),
            status: 'Aguardando Internet'
        };
        const novaLista = [...reportesAtuais, reporteComId];
        await AsyncStorage.setItem(CHAVE_OFFLINE, JSON.stringify(novaLista));
        console.log("Reporte salvo na Caixa Preta com sucesso!");
        return true;
    }
    catch (erro) {
        console.error('Erro ao salvar reporte offline:', erro);
        return false;
    }
}
export async function limparReportesOffline() {
    await AsyncStorage.removeItem(CHAVE_OFFLINE);
}
export async function removerReporteOfflinePorId(idLocal) {
    try {
        const reportesAtuais = await carregarReportesOffline();
        const novaLista = reportesAtuais.filter((reporte) => reporte.idLocal !== idLocal);
        await AsyncStorage.setItem(CHAVE_OFFLINE, JSON.stringify(novaLista));
        console.log(`Reporte ${idLocal} removido do armazenamento local com segurança.`);
    }
    catch (erro) {
        console.error('Erro ao remover reporte específico offline:', erro);
    }
}
