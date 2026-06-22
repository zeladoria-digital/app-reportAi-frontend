import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff3f6', // Aquele cinza/gelo de fundo do Figma
        alignItems: 'center',       // Já garante que tudo fique centralizado
        justifyContent: 'center',   // Empurra tudo pro meio da tela
        padding: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    icone: {
        width: 120,
        height: 120,
        backgroundColor: '#3b82f6', 
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,

    },
    emojiIcon: {
        fontSize: 60,

    },
    titulo: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 25,
        color: '#64748B',
        fontWeight: 'bold'
    },
    cardBranco: {
        backgroundColor: 'white',
        width: '100%',        
        padding: 24,           
        borderRadius: 16,      
        elevation: 2,

    },
    botaoAzul: {
        backgroundColor: '#2563EB',
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'

    },
    textoBotaoAzul: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    divisorContainer: {
        flexDirection: 'row',  
        alignItems: 'center',  
        marginVertical: 24,

    },
    linhaDivisoria: {  
        flex: 1,              
        height: 1,            
        backgroundColor: '#E2E8F0', //      

    },
    textoOU: {
        marginHorizontal: 16,  
        color: '#94A3B8',
        fontSize: 16,

    },
    botaoBranco: {
        backgroundColor: 'white',
        borderWidth: 1,        
        borderColor: '#CBD5E1',
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'


    },
    textoBotaoBranco: {
        color: '#475569',
        fontSize: 18,
        fontWeight: 'bold',

    },
    gamificacaoContainer: {
        flexDirection: 'row',
        gap: 25,
        marginTop: 20,
        width: '100%'

    },
    miniCard: {
        flex: 1,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 30,
    },
    textoMiniCard: {
        fontSize: 20,
        color: '#475569',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8

    },
    rodaPe: {
        marginTop: 50,
        alignItems: 'center',
        gap: 24,
        width: '100%'

    },
    textoCriarConta: {
        color: '#2563EB',
        fontSize: 25,
        fontWeight: 'bold',

    },
    textoLgpd: {
        color: '#94A3B8',
        fontSize: 20, 
        textAlign: 'center',
        paddingHorizontal: 20
    },
    textoLinkLegal: {
        color: '#2563EB', 
        fontWeight: 'bold',
    }
    

});