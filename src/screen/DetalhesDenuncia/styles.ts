import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {

    },
    headerContainer: {
        position: 'relative',


    },
    contentContainer: {
        backgroundColor: '#ffffff',
        padding: 30,

    },
    infoBlock: {
        marginBottom: 20

    },
    descriptionBlock: {

    },
    gamificationBlock: {

    },
    timelineBlock: {

    },
    imagemCapa: {
        width: '100%',        // Ocupa a largura inteira do celular
        height: 280,

    },
    topButtonsContainer: {
        position: 'absolute', // Faz flutuar
        top: 40,              // Descola 40 pixels do teto da caixa de vidro
        width: '100%',        // Ocupa a largura inteira para poder separar os botões
        flexDirection: 'row', // Coloca um botão do lado do outro
        justifyContent: 'space-between', // Empurra um pro canto esquerdo e outro pro direito
        paddingHorizontal: 20 // Empurra 20px para dentro para não colar na borda da tela

    },
    iconButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Preto com 40% de transparência (Efeito Blur/Vidro)
        borderRadius: 20,     // Deixa o botão perfeitamente redondo
        padding: 8,
        
    },
    statusBadge: {
        position: 'absolute', // Faz flutuar também
        bottom: 20,           // Prega ela 20px acima do chão da caixa de vidro
        left: 20,             // Prega ela 20px afastada da parede esquerda
        backgroundColor: '#10B981', // O verde de sucesso
        flexDirection: 'row', // Ícone do lado do texto
        alignItems: 'center', // Alinha no meio certinho
        paddingHorizontal: 12,// Espaço lateral dentro da pílula
        paddingVertical: 6,   // Espaço em cima/baixo dentro da pílula
        borderRadius: 24,     // Borda bem redondinha (Pílula)
    },
    statusText: {
        color: '#FFFFFF',     // Texto branco
        fontWeight: 'bold',
        marginLeft: 4,        // Espaço entre o ícone de check e a palavra "Resolvido"
    },
    tituloSecao: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 20,

    },
    linhaInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10

    }, 
    textoInfo: {
        marginLeft: 10,
        color: '#475569',
        
    },
    // O Bloco todo da descrição
    descriptionBlock: {
        marginBottom: 24, // Empurra o próximo bloco (o Troféu) para baixo
    },
    
    // Título "Descrição"
    subtituloSecao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E293B', // Cinza escuro/Azulado (padrão de títulos)
        marginBottom: 8,  // Descola do textão de baixo
    },
    
    // O texto principal
    textoDescricao: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,   // Respiro entre as linhas para não cansar a leitura
        marginBottom: 16, // Empurra as tags azuis para baixo
    },

    // A Caixa Invisível que segura as tags
    tagsContainer: {
        flexDirection: 'row', // Tenta colocar tudo lado a lado
        flexWrap: 'wrap',     // A MÁGICA: se faltar espaço, quebra a linha!
        gap: 8,               // Cria um espaço automático de 8px entre as pílulas (grid)
    }, 
    
    // A Pílula Azul
    tagBadge: {
        backgroundColor: '#EFF6FF', // Azul bem clarinho (fundo)
        paddingHorizontal: 12,      // Preenchimento interno nas laterais
        paddingVertical: 6,         // Preenchimento interno em cima/baixo
        borderRadius: 16,           // Arredonda as pontas para virar uma pílula
    },
    
    // O Texto dentro da pílula
    tagText: {
        color: '#3B82F6',           // Azul forte pra dar contraste e leitura
        fontSize: 12,
        fontWeight: 'bold',
    },
    gamificationCard: {
        backgroundColor: '#FFFBEB',
        borderWidth: 1,
        borderColor: '#FEF08A',
        borderRadius: 10,
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,

    },
    trophyIcon: {
        fontSize: 35,

    },
    gamificationTextContainer: {
        marginLeft: 20, 

    },
    gamificationTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#2a2a2a'

    },
    gamificationSubtitle: {
        fontSize: 15,
        color: "#3f3f3f"

    },
    timelineItem: {
        flexDirection: 'row',


    },
    timelineProgress: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 15

    },
    timelineDot: {
        width: 30,
        height: 30,
        backgroundColor: '#10B981',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    timelineLine: {
        width: 2,
        height: 50,
        backgroundColor: '#10B981',
    },
    timelineContent: {

    },
    timelineTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#2a2a2a'
    },
    timelineDate: {
        fontSize: 20,
        color: "#3f3f3f"
    }


})