import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    containerPrincipal: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    cardBranco: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 24,
        borderRadius: 16,
        elevation: 3,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    iconeContainer: {
        backgroundColor: '#3b82f6',
        padding: 40,
        borderRadius: 20,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 25,
        color: '#64748B',
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#475569',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 48,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 20,
        color: '#1E293B',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    checkboxText: {
        marginLeft: 12,
        fontSize: 20,
        color: '#475569',
        flex: 1,
    },
    linkTermos: {
        color: '#3b82f6',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    botaoPrimario: {
        backgroundColor: '#3b82f6',
        height: 56,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoPrimario: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    erroText: {
        color: '#EF4444',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    },
    inputError: {
        borderColor: '#EF4444',
    },
    erroGeral: {
        backgroundColor: '#FEE2E2',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    erroGeralText: {
        color: '#EF4444',
        fontSize: 14,
        textAlign: 'center',
    },
});
