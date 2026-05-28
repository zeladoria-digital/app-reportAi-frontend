import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export function Profile() {
  const router = useRouter();

  const handleLogout = () => {
    // Show logout confirmation
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.headerTitle]}>
            Meu Perfil
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header with gradient */}
        <View style={styles.headerGradient}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>

          <Text style={styles.userName}>João Oliveira</Text>
          <Text style={styles.userEmail}>joao.oliveira@email.com</Text>

          {/* Stats */}
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Reportes</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Text style={styles.statValue}>1.247</Text>
              <Text style={styles.statLabel}>Pontos</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Text style={styles.statValue}>#12</Text>
              <Text style={styles.statLabel}>Ranking</Text>
            </View>
          </View>
        </View>

        {/* Section: Personal Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="person-outline" size={20} color="#64748B" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Nome completo</Text>
              <Text style={styles.menuItemSubtitle}>João Oliveira</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="mail-outline" size={20} color="#64748B" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Email</Text>
              <Text style={styles.menuItemSubtitle}>joao.oliveira@email.com</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="location-outline" size={20} color="#64748B" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Localização</Text>
              <Text style={styles.menuItemSubtitle}>São Paulo, SP</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Section: Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conquistas</Text>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="trophy-outline" size={20} color="#F59E0B" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Medalhas e Ranking</Text>
              <Text style={styles.menuItemSubtitle}>4 medalhas conquistadas</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="bar-chart-outline" size={20} color="#3B82F6" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Estatísticas</Text>
              <Text style={styles.menuItemSubtitle}>Ver métricas detalhadas</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Section: Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Configurações</Text>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="notifications-outline" size={20} color="#64748B" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Notificações</Text>
              <Text style={styles.menuItemSubtitle}>Gerenciar alertas</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="shield-outline" size={20} color="#64748B" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Privacidade e LGPD</Text>
              <Text style={styles.menuItemSubtitle}>Gerenciar seus dados</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle-outline" size={20} color="#64748B" />
            <View style={styles.menuItemContent}>
              <Text style={styles.menuItemTitle}>Ajuda e Suporte</Text>
              <Text style={styles.menuItemSubtitle}>Central de ajuda</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text style={styles.logoutText}>Sair da Conta</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>ReportaAi v1.0.0 • Prefeitura Municipal</Text>
      </ScrollView>
    </>
  );
}
