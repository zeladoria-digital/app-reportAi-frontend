import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#3b82f6'
    },
    conteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    titulo: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 24,
    },
    subtitulo: {
        fontSize: 32,
        color: '#e2e8f0', // Um cinza bem clarinho
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 40,
    },
    lista: {
        gap: 16,
        marginBottom: 48,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    listaTexto: {
        color: 'white',
        fontSize: 25,
    },
    botao: {
        backgroundColor: 'white',
        width: '50%',
        paddingVertical: 16,
        borderRadius: 30, // Deixa as bordas bem arredondadas igual no Figma
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#3b82f6',
        fontSize: 20,
        fontWeight: 'bold',
    },
    rodapeTexto: {
        color: '#cbd5e1',
        fontSize: 20,
        marginBottom: 16,
    }
})