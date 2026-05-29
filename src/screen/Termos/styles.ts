import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF', // Fundo branco
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
        flexDirection: 'row',       // Coloca o ícone e o texto na mesma linha
        backgroundColor: '#EFF6FF', // Azul bem clarinho (Tailwind blue-50)
        borderColor: '#BFDBFE',     // Borda azul um pouco mais escura
        borderWidth: 1,             // Liga a linha da borda
        padding: 20,                // Respiro interno
        borderRadius: 8,            // Cantos levemente arredondados
        marginBottom: 32,           // Dá um espaço bom antes de começar a lista de dados
        alignItems: 'center',       // Centraliza o ícone com o texto verticalmente
    },
    alertaTexto: {
        flex: 1,                    // Diz pro texto usar o espaço que sobrar e quebrar a linha
        marginLeft: 12,             // Descola o texto do ícone amarelo
        fontSize: 15,
        color: '#1E3A8A',           // Azul escuro para facilitar a leitura
    },
    pilarContainer: {
        flexDirection: 'row',       // Coloca o ícone e o bloco de texto lado a lado
        marginBottom: 24,           // Dá um espaço para o próximo pilar não colar neste
    },
    pilarIconeContainer: {
        backgroundColor: '#F1F5F9', // Um fundo cinza bem clarinho (ajustaremos a cor exata depois se precisar)
        padding: 12,                // Respiro interno para o ícone não colar na borda
        borderRadius: 12,           // Deixa a caixinha do ícone arredondada
        marginRight: 16,            // Empurra os textos para a direita, descolando do ícone
        alignSelf: 'flex-start',    // Faz a caixinha do ícone ficar no topo, mesmo que o texto do lado seja gigante
    },
    pilarTextContainer: {
        flex: 1,                    // Impede que textos longos quebrem a tela para os lados
    },
    pilarTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 4,            // Descola um pouquinho o título da descrição
    },
    pilarDescricao: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,             // Aumenta o espaço entre as linhas do texto para ficar mais fácil de ler
    },
    direitosContainer: {
        backgroundColor: '#F8FAFC', // Cinza muito clarinho (fundo da caixa)
        padding: 16,                // Espaço interno para o texto não colar na borda cinza
        borderRadius: 8,            // Arredonda as pontas da caixa
        marginBottom: 32,           // Dá um espaço antes de chegar no rodapé final
    },
    direitosTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 12,           // Empurra a lista de itens para baixo
    },
    direitoItem: {
        flexDirection: 'row',       // A MÁGICA: Coloca o "Check" e o Texto lado a lado
        marginBottom: 8,            // Dá um espacinho entre uma linha e a de baixo
        alignItems: 'flex-start',   // Alinha o check no topo da linha (útil se o texto quebrar pra 2 linhas)
    },
    direitoIcone: {
        marginRight: 8,             // Descola o ícone do texto
        marginTop: 2,               // Dá uma leve abaixada no ícone para alinhar perfeitamente com a fonte
    },
    direitoTexto: {
        flex: 1,                    // Permite que o texto quebre a linha sem empurrar a tela
        fontSize: 14,
        color: '#475569',
    },
    linha: {
        height: 1,                  // Altura de 1 pixel (é o que faz parecer uma linha)
        backgroundColor: '#E2E8F0', // Cinza claro
        marginBottom: 24,

    },
    checkbox: {
        flexDirection: 'row',       // Coloca o quadradinho e o texto lado a lado
        alignItems: 'center',       // Alinha os dois no meio da linha imaginária
        marginBottom: 24,
    },
    texto: {
        flex: 1,                    // Impede o texto de "vazar" da tela
        marginLeft: 12,             // Descola o texto do quadradinho
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
    },
    botaoAceitar: {
        backgroundColor: '#2563EB', // O fundo azul
        height: 56,                 // Altura do botão
        borderRadius: 8,            // Bordas redondas
        justifyContent: 'center',   // Centraliza o texto na vertical
        alignItems: 'center',       // Centraliza o texto na horizontal
        marginBottom: 16,           // Empurra o botão de "Recusar" para baixo
    },
    textoBotaoAceitar: {
        color: '#FFFFFF',           // Texto branco
        fontSize: 16,
        fontWeight: 'bold',
    },
    botaoRecusar: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotaoRecusar: {
        color: '#475569',           // Texto cinza escuro
        fontSize: 16,
    }

});