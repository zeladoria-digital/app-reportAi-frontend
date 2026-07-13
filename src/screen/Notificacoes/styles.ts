import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#F8FAFC'
    },
    header: {
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#E2E8F0',
        paddingBottom: 10
    },
    tabsContainer: {
        flexDirection: 'row',
        padding: 25,
        alignItems: 'center',
        gap: 15,
    },
    listContainer: {
        padding: 25,
    },
    headerTitulo: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    },
    markReadText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3B82F6'
    },
    tabButton: {
        backgroundColor: '#e7e9e7',
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 15
    },
    tabButtonActive: {
        backgroundColor: '#2563EB',
    },
    tabText: {
        color: '#64748B',
        fontWeight: 600,
        fontSize: 18,
    },
    tabTextActive: {
        color: '#FFFFFF'
    },
    notificationCard: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        flexDirection: 'row',
        padding: 20,
        marginBottom: 15
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    notificationTitle: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    notificationDescription: {
        fontSize: 20,
        color: '#64748B',
    },
    notificationTime: {
        fontSize: 20,
        color: '#64748B',
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#2563EB'
    }
});
