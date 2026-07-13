import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        padding: 24,
        marginTop: 50,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    iconeContainer: {
        backgroundColor: '#DCFCE7',
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 14,
        color: '#64748B',
        textAlign: 'center',
    },
    alertaContainer: {
        flexDirection: 'row',
        backgroundColor: '#EFF6FF',
        borderColor: '#BFDBFE',
        borderWidth: 1,
        padding: 20,
        borderRadius: 8,
        marginBottom: 32,
        alignItems: 'center',
    },
    alertaTexto: {
        flex: 1,
        marginLeft: 12,
        fontSize: 15,
        color: '#1E3A8A',
    },
    pilarContainer: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    pilarIconeContainer: {
        backgroundColor: '#F1F5F9',
        padding: 12,
        borderRadius: 12,
        marginRight: 16,
        alignSelf: 'flex-start',
    },
    pilarTextContainer: {
        flex: 1,
    },
    pilarTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 4,
    },
    pilarDescricao: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
    },
    direitosContainer: {
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 8,
        marginBottom: 32,
    },
    direitosTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 12,
    },
    direitoItem: {
        flexDirection: 'row',
        marginBottom: 8,
        alignItems: 'flex-start',
    },
    direitoIcone: {
        marginRight: 8,
        marginTop: 2,
    },
    direitoTexto: {
        flex: 1,
        fontSize: 14,
        color: '#475569',
    },
    linha: {
        height: 1,
        backgroundColor: '#E2E8F0',
        marginBottom: 24,
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    texto: {
        flex: 1,
        marginLeft: 12,
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
    },
    botaoAceitar: {
        backgroundColor: '#2563EB',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    textoBotaoAceitar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    botaoRecusar: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotaoRecusar: {
        color: '#475569',
        fontSize: 16,
    }
});
