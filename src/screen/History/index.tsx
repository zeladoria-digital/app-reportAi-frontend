import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import api from '@/src/services/api';

const MOCK_REPORTS = [
  {
    id: '1',
    title: 'Buraco na via',
    location: 'Rua das Flores, 123',
    date: '05/05',
    time: '14:30',
    status: 'resolved',
    points: 50,
    image: null,
  },
  {
    id: '2',
    title: 'Lixo acumulado',
    location: 'Av. Principal, 456',
    date: '03/05',
    time: '10:15',
    status: 'in_progress',
    points: 0,
    image: null,
  },
  {
    id: '3',
    title: 'Fossa cheia',
    location: 'Rua Central, 789',
    date: '01/05',
    time: '16:45',
    status: 'pending',
    points: 0,
    image: null,
  },
  {
    id: '4',
    title: 'Iluminação',
    location: 'Praça da Matriz',
    date: '28/04',
    time: '09:20',
    status: 'rejected',
    points: 0,
    image: null,
  },
];

const STATUS_CONFIG = {
  resolved: { icon: 'checkmark-circle', color: '#22C55E', bgColor: '#DCFCE7', label: 'Resolvido' },
  in_progress: { icon: 'time', color: '#3B82F6', bgColor: '#DBEAFE', label: 'Em andamento' },
  pending: { icon: 'alert-circle', color: '#F59E0B', bgColor: '#FEF3C7', label: 'Pendente' },
  rejected: { icon: 'close-circle', color: '#EF4444', bgColor: '#FEE2E2', label: 'Recusado' },
};

export function History() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false)
  const [reports, setReports] = useState<any[]>([]);

  const filteredReports = reports.filter((report) => {
    if (filter === 'resolved' && report.status !== 'resolved') return false;
    if (searchQuery && !report.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });


  useEffect(() => {
    const buscarMeusReportes = async () => {
      try {

        setIsLoading(true); // Se você criou aquele estado de loading antes
        const response = await api.get('/complaints/my');

        const dadosDoBanco = response.data;

        // 2. Mapeamos (traduzimos) para o formato exato da sua tela
        const dadosFormatados = dadosDoBanco.map((item: any) => {
          // Transformando a data ISO (2026-06-25T19:04:49.226Z) em objeto Date
          const dataObj = new Date(item.createdAt);

          // Pegando dia/mês e hora/minuto com 2 dígitos numéricos
          const dia = String(dataObj.getDate()).padStart(2, '0');
          const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
          const hora = String(dataObj.getHours()).padStart(2, '0');
          const minuto = String(dataObj.getMinutes()).padStart(2, '0');

          return {
            id: item.id,
            title: item.category || 'Sem categoria',
            location: item.neighborhood || 'Local não informado',
            date: `${dia}/${mes}`,
            time: `${hora}:${minuto}`,
            status: item.status,
            points: 0, // Como não veio do banco, deixamos 0 por padrão
            image: item.photoUrl || null,
          };
        });

        setReports(dadosFormatados);

      } catch (error: any) {
        console.error("Erro na requisição:", error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    };

    buscarMeusReportes();
  }, []);



  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.headerTitle]}>
            Meu Histórico
          </Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity>
            <Ionicons name="search" size={20} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="funnel" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={16} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar reportes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Text style={styles.totalText}>
          Total: <Text style={styles.totalBold}>{reports.length} reportes</Text>
        </Text>

        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
            onPress={() => setFilter('all')}
          >
            <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>
              Todos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterButton, filter === 'resolved' && styles.filterButtonActive]}
            onPress={() => setFilter('resolved')}
          >
            <Text style={[styles.filterText, filter === 'resolved' && styles.filterTextActive]}>
              Resolvidos
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Timeline */}
      {filteredReports.length > 0 ? (
        <ScrollView style={styles.timeline} showsVerticalScrollIndicator={false}>
          <View style={styles.timelineLine} />

          {filteredReports.map((report) => {
            const statusConfig = STATUS_CONFIG[report.status];

            return (
              <View key={report.id} style={styles.timelineItem}>
                <View
                  style={[
                    styles.timelineDot,
                    { backgroundColor: statusConfig.bgColor, borderColor: statusConfig.color },
                  ]}
                >
                  <Ionicons name={statusConfig.icon} size={16} color={statusConfig.color} />
                </View>

                <TouchableOpacity
                  style={styles.reportCard}
                  activeOpacity={0.7}
                  onPress={() => router.push({
                    pathname: '/detalhesDenuncia',
                    params: { idDaDenuncia: report.id }
                  })}
                >
                  <View style={styles.cardContent}>
                    <View style={styles.reportImage} />

                    <View style={styles.reportInfo}>
                      <View style={styles.reportHeader}>
                        <Text style={styles.reportTitle} numberOfLines={1}>
                          {report.title}
                        </Text>
                        {report.points > 0 && (
                          <View style={styles.pointsBadge}>
                            <Text style={styles.pointsText}>+{report.points}</Text>
                          </View>
                        )}
                      </View>

                      <View style={styles.locationRow}>
                        <Ionicons name="location" size={10} color="#9CA3AF" />
                        <Text style={styles.locationText} numberOfLines={1}>
                          {report.location}
                        </Text>
                      </View>

                      <View style={styles.reportFooter}>
                        <View style={styles.dateRow}>
                          <Ionicons name="time" size={10} color="#9CA3AF" />
                          <Text style={styles.dateText}>
                            {report.date} • {report.time}
                          </Text>
                        </View>

                        <View style={[styles.statusBadge, { backgroundColor: statusConfig.bgColor }]}>
                          <Ionicons name={statusConfig.icon} size={12} color={statusConfig.color} />
                          <Text style={[styles.statusText, { color: statusConfig.color }]}>
                            {statusConfig.label}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIcon}>
            <Ionicons name="clipboard-outline" size={48} color="#9CA3AF" />
          </View>
          <Text style={styles.emptyTitle}>Nenhum reporte encontrado</Text>
          <Text style={styles.emptyText}>
            {searchQuery
              ? 'Tente buscar com outros termos'
              : 'Você ainda não tem reportes. Crie o seu primeiro!'}
          </Text>
        </View>
      )}
    </>
  );
}
