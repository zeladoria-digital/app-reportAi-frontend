import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {},
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
    descriptionBlock: {},
    gamificationBlock: {},
    timelineBlock: {},
    imagemCapa: {
        width: '100%',
        height: 280,
    },
    topButtonsContainer: {
        position: 'absolute',
        top: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    iconButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: 20,
        padding: 8,
    },
    statusBadge: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#10B981',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 24,
    },
    statusText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 4,
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
    descriptionBlock: {
        marginBottom: 24,
    },
    subtituloSecao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 8,
    },
    textoDescricao: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 20,
        marginBottom: 16,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tagBadge: {
        backgroundColor: '#EFF6FF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    tagText: {
        color: '#3B82F6',
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
    timelineContent: {},
    timelineTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#2a2a2a'
    },
    timelineDate: {
        fontSize: 20,
        color: "#3f3f3f"
    }
});
