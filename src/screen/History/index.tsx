import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import api from '@/src/services/api';

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
  const [isLoading, setIsLoading] = useState(false);
  const [reports, setReports] = useState<any[]>([]);

  // Novos estados para a paginação
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const filteredReports = reports.filter((report) => {
    if (filter === 'resolved' && report.status !== 'resolved') return false;
    if (searchQuery && !report.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const buscarMeusReportes = async (numeroDaPagina = 1) => {
    if (!hasMoreData && numeroDaPagina !== 1) return;

    try {
      if (numeroDaPagina === 1) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      // Adicionado os parâmetros de páginação na rota
      const response = await api.get(`/complaints/my?page=${numeroDaPagina}&limit=10`);
      const dadosDoBanco = response.data;

      // Se não vier nada novo, avisa que acabaram os dados no banco
      if (dadosDoBanco.length === 0) {
        setHasMoreData(false);
        return;
      }

      const dadosFormatados = dadosDoBanco.map((item: any) => {
        const dataObj = new Date(item.createdAt);
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
          points: 0,
          image: item.photoUrl || null,
        };
      });

      // Lógica crucial com FILTRO ANTI-CLONE
      if (numeroDaPagina === 1) {
        setReports(dadosFormatados);
      } else {
        setReports((prevReports) => {
          // Filtra para garantir que só vamos adicionar itens com IDs novos
          const itensIneditos = dadosFormatados.filter(
            (novoItem) => !prevReports.some((itemAntigo) => itemAntigo.id === novoItem.id)
          );

          // Se a API mandou dados, mas todos já eram repetidos, consideramos que acabou
          if (itensIneditos.length === 0) {
            setHasMoreData(false);
            return prevReports; // Devolve a lista como estava, sem alterar
          }

          // Junta a lista antiga apenas com as novidades
          return [...prevReports, ...itensIneditos];
        });
      }

    } catch (error: any) {
      console.error("Erro na requisição:", error.response?.data || error.message);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    // Ao iniciar a tela, busca a primeira página
    buscarMeusReportes(1);
  }, []);

  // Função chamada pelo FlatList quando chegar no fim da rolagem
  const carregarMaisItens = () => {
    if (!isLoadingMore && hasMoreData) {
      const proximaPagina = page + 1;
      setPage(proximaPagina);
      buscarMeusReportes(proximaPagina);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[styles.headerTitle]}>
            Meu Histórico
          </Text>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity>
            <Ionicons name="search" size={20} color="#64748B"/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="funnel" size={20} color="#64748B"/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={16} color="#9CA3AF" style={styles.searchIcon}/>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Buscar reportes..." 
          value={searchQuery} 
          onChangeText={setSearchQuery} 
          placeholderTextColor="#9CA3AF"
        />
      </View>

      <View style={styles.filtersContainer}>
        <Text style={styles.totalText}>
          Total: <Text style={styles.totalBold}>{reports.length} reportes</Text>
        </Text>

        <View style={styles.filterButtons}>
          <TouchableOpacity style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]} onPress={() => setFilter('all')}>
            <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>
              Todos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.filterButton, filter === 'resolved' && styles.filterButtonActive]} onPress={() => setFilter('resolved')}>
            <Text style={[styles.filterText, filter === 'resolved' && styles.filterTextActive]}>
              Resolvidos
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Timeline */}
      {filteredReports.length > 0 ? (
        <View style={styles.timeline}>
          <View style={styles.timelineLine} />

          <FlatList
            data={filteredReports}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            windowSize={5}
            onEndReachedThreshold={0.1}
            onEndReached={carregarMaisItens}
            ListFooterComponent={
              isLoadingMore ? (
                <View style={{ paddingVertical: 20 }}>
                  <ActivityIndicator size="small" color="#3B82F6" />
                </View>
              ) : null
            }
            renderItem={({ item: report }) => {
              const statusConfig = STATUS_CONFIG[report.status] || {
                icon: 'help-circle', color: '#64748B', bgColor: '#F1F5F9', label: report.status || 'Desconhecido'
              };

              return (
                <View style={styles.timelineItem}>
                  <View
                    style={[
                      styles.timelineDot,
                      { backgroundColor: statusConfig.bgColor, borderColor: statusConfig.color },
                    ]}
                  >
                    <Ionicons name={statusConfig.icon as any} size={16} color={statusConfig.color} />
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
                      {report.image ? (
                        <Image
                          source={{ uri: report.image }}
                          style={styles.reportImage}
                          resizeMode="cover"
                        />
                      ) : (
                        <View style={styles.reportImage} />
                      )}

                      <View style={styles.reportInfo}>
                        <View style={styles.reportHeader}>
                          <Text style={styles.reportTitle} numberOfLines={1}>
                            {report.title}
                          </Text>

                          {report.points > 0 ? (
                            <View style={styles.pointsBadge}>
                              <Text style={styles.pointsText}>+{report.points}</Text>
                            </View>
                          ) : null}
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
                            <Ionicons name={statusConfig.icon as any} size={12} color={statusConfig.color} />
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
            }}
          />
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIcon}>
            <Ionicons name="clipboard-outline" size={48} color="#9CA3AF"/>
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