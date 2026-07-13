import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { styles } from "./styles";
export function Notificacoes() {
    const NOTIFICACOES_MOCK = [
        {
            id: '1',
            title: 'Reporte resolvido!',
            description: 'Seu reporte "Buraco na via" foi concluído pela equipe',
            time: 'Há 2 horas',
            type: 'success',
            read: false,
        },
        {
            id: '2',
            title: 'Equipe a caminho',
            description: 'A equipe foi designada para "Lixo acumulado"',
            time: 'Há 5 horas',
            type: 'info',
            read: false,
        },
        {
            id: '3',
            title: 'Você subiu no ranking!',
            description: 'Parabéns! Você agora é #12 na cidade',
            time: 'Ontem',
            type: 'ranking',
            read: false,
        },
        {
            id: '4',
            title: 'Reporte em análise',
            description: 'Seu reporte "Sinalização danificada" está sendo avaliado',
            time: 'Há 2 dias',
            type: 'warning',
            read: true,
        }
    ];
    const TIPO_CONFIG = {
        success: { icon: 'checkmark-circle-outline', color: '#10B981', bgColor: '#DCFCE7' },
        info: { icon: 'information-circle-outline', color: '#3B82F6', bgColor: '#DBEAFE' },
        ranking: { icon: 'trending-up-outline', color: '#8B5CF6', bgColor: '#EDE9FE' },
        warning: { icon: 'warning-outline', color: '#F59E0B', bgColor: '#FEF3C7' },
    };
    return (<View style={styles.container}>

            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={25} color="#1E293B"/>
                </TouchableOpacity>

                <Text style={styles.headerTitulo}>Notificações</Text>

                <TouchableOpacity>
                    <Text style={styles.markReadText}>Marcar Todas Lidas</Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}>
                    <Text style={[styles.tabText, styles.tabTextActive]}>Todas (5)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabButton}>
                    <Text style={styles.tabText}>Não lidas (3)</Text>
                </TouchableOpacity>
            </View>

            
            <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
                
                {NOTIFICACOES_MOCK.map((notificacao) => {
            const config = TIPO_CONFIG[notificacao.type as keyof typeof TIPO_CONFIG];
            return (<TouchableOpacity key={notificacao.id} style={styles.notificationCard} activeOpacity={0.7}>
                            
                            <View style={[styles.iconContainer, { backgroundColor: config.bgColor }]}>
                                <Ionicons name={config.icon as any} size={24} color={config.color}/>
                            </View>

                            
                            <View style={styles.textContainer}>
                                <Text style={styles.notificationTitle}>{notificacao.title}</Text>
                                <Text style={styles.notificationDescription}>{notificacao.description}</Text>
                                <Text style={styles.notificationTime}>{notificacao.time}</Text>
                            </View>

                            
                            {!notificacao.read && (<View style={styles.unreadDot}/>)}
                        </TouchableOpacity>);
        })}

                <View style={{ height: 40 }}/>
            </ScrollView>
        </View>);
}
;
