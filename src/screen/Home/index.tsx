import { useAuth } from '@/src/context/AuthContext';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import api from '@/src/services/api';
import { styles } from './styles';

export function Home() {
  const router = useRouter();
  const { user } = useAuth(); 

  const [loading, setLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [complaints, setComplaints] = useState([]);
  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await api.get('complaints/my')
      setComplaints(response.data);
      setPoints(0);
      setRanking(null);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNotifications = () => {
    router.push('/notificacoes')
  };

  const handleNewReport = () => {
    router.push('/(app)/new-report');
  };

  const getStatusInfo = (status) => {
    const statusMap = {
      pending: { text: 'Recebido', color: '#F59E0B', bgStyle: styles.statusInProgress, textColor: '#0369A1' },
      approved: { text: 'Em Análise', color: '#F59E0B', bgStyle: styles.statusInProgress, textColor: '#0369A1' },
      in_progress: { text: 'Em andamento', color: '#F59E0B', bgStyle: styles.statusInProgress, textColor: '#0369A1' },
      resolved: { text: 'Resolvido', color: '#22C55E', bgStyle: styles.statusResolved, textColor: '#16A34A' },
      rejected: { text: 'Rejeitado', color: '#EF4444', bgStyle: styles.statusResolved, textColor: '#DC2626' },
    };
    return statusMap[status] || statusMap.pending;
  };

  const resolvedCount = complaints.filter((c: any) => c.status === 'resolved').length;

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#1E293B"/>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} scrollEventThrottle={16}>
        
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Olá, {user?.name?.split(' ')[0] || 'Cidadão'}</Text>
            <Text style={styles.subtitle}>Vamos melhorar a cidade</Text>
          </View>

          <TouchableOpacity onPress={handleNotifications} style={{ padding: 8 }}>
            <Ionicons name="notifications-outline" size={28} color="#1E293B"/>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{complaints.length}</Text>
            <Text style={styles.statLabel}>Reportes</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>{resolvedCount}</Text>
            <Text style={styles.statLabel}>Resolvidos</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>{ranking ? `#${ranking}` : '-'}</Text>
            <Text style={styles.statLabel}>Ranking</Text>
          </View>
        </View>

        <View style={styles.pointsCard}>
          <View style={styles.pointsContent}>
            <Text style={styles.pointsLabel}>Seus Pontos</Text>
            <Text style={styles.pointsValue}>{points.toLocaleString('pt-BR')}</Text>
          </View>
          <View style={styles.pointsIcon}>
            <MaterialCommunityIcons name="trophy" size={28} color="#FFFFFF"/>
          </View>
        </View>

        <TouchableOpacity style={styles.newReportButton} onPress={handleNewReport}>
          <View style={styles.newReportIcon}>
            <MaterialCommunityIcons name="camera" size={24} color="#FFFFFF"/>
          </View>
          <View style={styles.newReportContent}>
            <Text style={styles.newReportTitle}>Novo Reporte</Text>
            <Text style={styles.newReportSubtitle}>Tire uma foto do problema agora</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>AO VIVO</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Atividade Recente</Text>

        <View style={styles.recentActivityContainer}>
          {complaints.length === 0 ? (
            <Text style={{ color: '#64748B', textAlign: 'center', padding: 16 }}>
              Você ainda não fez nenhum reporte
            </Text>
          ) : (
            complaints.slice(0, 5).map((complaint: any) => {
              const statusInfo = getStatusInfo(complaint.status);
              return (
                <View key={complaint.id} style={styles.activityItem}>
                  <View style={[styles.activityIndicator, { backgroundColor: statusInfo.color }]}/>
                  <Text style={styles.activityText}>{complaint.category}</Text>
                  <View style={[styles.activityStatus, statusInfo.bgStyle]}>
                    <Text style={{ color: statusInfo.textColor, fontSize: 10, fontWeight: '600' }}>
                      {statusInfo.text}
                    </Text>
                  </View>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </>
  );
}