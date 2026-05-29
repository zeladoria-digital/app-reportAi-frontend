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
        flexDirection: 'row',       // Coloca o quadradinho e o texto na mesma linha
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    checkboxText: {
        marginLeft: 12,             // Descola o texto do quadradinho
        fontSize: 20,
        color: '#475569',
        flex: 1,

    },
    linkTermos: {
        color: '#3b82f6',           // Destaca a palavra "Termos" em verde
        fontWeight: 'bold',
        textDecorationLine: 'underline',

    },
    botaoPrimario: {
        backgroundColor: '#3b82f6', // O fundo verde do botão
        height: 56,                 // Altura generosa para o dedo clicar
        borderRadius: 8,            // Bordas redondas
        alignItems: 'center',       // Centraliza o texto no meio do botão
        justifyContent: 'center',

    },
    textoBotaoPrimario: {
        color: '#FFFFFF',           // Texto branco
        fontSize: 25,
        fontWeight: 'bold',
    }

})