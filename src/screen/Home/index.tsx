import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export function Home() {
  const router = useRouter();

  const handleNotifications = () => {
    router.push('/notificacoes')
  };

  const handleNewReport = () => {
    router.push('/(app)/new-report');
  };

  return (
    <>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        scrollEventThrottle={16}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Olá, João</Text>
            <Text style={styles.subtitle}>Vamos melhorar a cidade</Text>
          </View>
          
          {/* Adicionamos o botão de Sino aqui na direita! */}
          <TouchableOpacity onPress={handleNotifications} style={{ padding: 8 }}>
            <Ionicons name="notifications-outline" size={28} color="#1E293B" />
          </TouchableOpacity>
        </View>

        {/* Statistics Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Reportes</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Resolvidos</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>#12</Text>
            <Text style={styles.statLabel}>Ranking</Text>
          </View>
        </View>

        {/* Points Card */}
        <View style={styles.pointsCard}>
          <View style={styles.pointsContent}>
            <Text style={styles.pointsLabel}>Seus Pontos</Text>
            <Text style={styles.pointsValue}>1.247</Text>
            <Text style={styles.pointsSubtitle}>Subiu 3 posições</Text>
          </View>
          <View style={styles.pointsIcon}>
            <MaterialCommunityIcons name="trophy" size={28} color="#FFFFFF" />
          </View>
        </View>

        {/* New Report Button */}
        <TouchableOpacity 
          style={styles.newReportButton}
          onPress={handleNewReport}
        >
          <View style={styles.newReportIcon}>
            <MaterialCommunityIcons name="camera" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.newReportContent}>
            <Text style={styles.newReportTitle}>Novo Reporte</Text>
            <Text style={styles.newReportSubtitle}>Tire uma foto do problema agora</Text>
          </View>
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>AO VIVO</Text>
          </View>
        </TouchableOpacity>

        {/* Recent Activity */}
        <Text style={styles.sectionTitle}>Atividade Recente</Text>

        <View style={styles.recentActivityContainer}>
          <View style={styles.activityItem}>
            <View style={[styles.activityIndicator, { backgroundColor: '#F59E0B' }]} />
            <Text style={styles.activityText}>Fossa cheia - Rua das Flores</Text>
            <View style={[styles.activityStatus, styles.statusInProgress]}>
              <Text style={{ color: '#0369A1', fontSize: 10, fontWeight: '600' }}>
                Em andamento
              </Text>
            </View>
          </View>

          <View style={styles.activityItem}>
            <View style={[styles.activityIndicator, { backgroundColor: '#F59E0B' }]} />
            <Text style={styles.activityText}>Buraco na via - Av. Principal</Text>
            <View style={[styles.activityStatus, styles.statusInProgress]}>
              <Text style={{ color: '#0369A1', fontSize: 10, fontWeight: '600' }}>
                Em andamento
              </Text>
            </View>
          </View>

          <View style={styles.activityItem}>
            <View style={[styles.activityIndicator, { backgroundColor: '#22C55E' }]} />
            <Text style={styles.activityText}>Lixo acumulado - Rua Central</Text>
            <View style={[styles.activityStatus, styles.statusResolved]}>
              <Text style={{ color: '#16A34A', fontSize: 10, fontWeight: '600' }}>
                Resolvido
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
