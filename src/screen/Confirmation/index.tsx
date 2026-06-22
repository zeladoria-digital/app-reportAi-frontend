import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { styles } from './styles';
import * as Network from 'expo-network'
import { salvarReporteOffline } from '../../storage/offlineStorage';

// 👇 1. Importamos a nossa chave do cofre!
import { useReport } from '../../contexts/reportContext'; 

export function Confirmation() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // 👇 2. Abrimos o cofre e pegamos TODOS os dados, além da função de limpar
  const { report, limparReport } = useReport();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // 1. O aplicativo verifica o status da internet naquele exato milissegundo
      const networkState = await Network.getNetworkStateAsync();

      // 2. A DECISÃO ARQUITETURAL: Tem internet?
      if (networkState.isConnected && networkState.isInternetReachable) {
        
        // MODO ONLINE: A ponte com o Back-end (Kauê) vai aqui no futuro!
        console.log('Internet OK! Disparando para o servidor do Kauê:', report);
        Alert.alert("Sucesso", "Sua denúncia foi enviada para a prefeitura!");

      } else {
        
        // MODO OFFLINE: O celular está sem sinal! Aciona a Caixa Preta (RNF06)
        console.log('Sem internet! Guardando na Caixa Preta (AsyncStorage)...');
        
        const salvoComSucesso = await salvarReporteOffline(report);
        
        if (salvoComSucesso) {
          Alert.alert(
            "Sem conexão de rede", 
            "Sua denúncia foi salva no celular de forma segura. Enviaremos automaticamente quando a internet voltar!"
          );
        } else {
          Alert.alert("Erro crítico", "Não foi possível salvar a denúncia no celular.");
        }
      }
      
      // 3. Esvazia o cofre de memória RAM (Context) e volta para a tela inicial
      limparReport(); 
      router.push('/(app)/home-tabs');

    } catch (error) {
      console.error("Erro no processamento do reporte:", error);
      Alert.alert("Erro", "Ocorreu um problema ao processar sua denúncia.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#1E293B" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { marginLeft: 12 }]}>
            Confirmar Reporte
          </Text>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#1E293B', marginBottom: 20 }}>
          Revise seus dados
        </Text>

        {/* FOTO REAIS AQUI */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="image" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Foto capturada</Text>
            <View style={styles.liveBadge}>
              <Text style={styles.liveBadgeText}>✓ Ao vivo</Text>
            </View>
          </View>
          {/* Se a foto existe no cofre, mostra a imagem. Se não, mostra o fundo cinza */}
          {report.fotoUri ? (
            <Image source={{ uri: report.fotoUri }} style={{ height: 200, borderRadius: 12, marginTop: 12 }} />
          ) : (
            <View style={styles.photoPreview} />
          )}
        </View>

        {/* CATEGORIA REAL AQUI */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="pricetag" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Categoria</Text>
          </View>
          <View style={styles.categoryDisplay}>
            <View style={[styles.categoryIcon, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="alert-circle" size={20} color="#F59E0B" />
            </View>
            {/* O texto agora vem do cofre! */}
            <Text style={styles.categoryName}>{report.categoria || 'Não informada'}</Text>
          </View>
        </View>

        {/* GPS REAL AQUI */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="location" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Localização</Text>
          </View>
          <Text style={styles.addressPrimary}>Coordenadas do Satélite</Text>
          <Text style={styles.addressSecondary}>
            {report.latitude 
              ? `Lat: ${report.latitude.toFixed(5)} / Long: ${report.longitude.toFixed(5)}` 
              : 'GPS não capturado'}
          </Text>
        </View>

        {/* DESCRIÇÃO REAL AQUI */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="document-text" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Descrição</Text>
          </View>
          {/* O texto e as tags juntos que salvamos no cofre */}
          <Text style={styles.descriptionText}>
            {report.descricao || 'Nenhuma descrição fornecida.'}
          </Text>
        </View>

        {/* Success Banner */}
        <View style={styles.successBanner}>
          <View style={{ marginRight: 12 }}>
            <Ionicons name="checkmark-circle" size={20} color="#16A34A" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.successTitle}>Reporte completo!</Text>
            <Text style={styles.successText}>
              Você ganhará <Text style={styles.successBold}>+50 pontos</Text> ao enviar
            </Text>
          </View>
        </View>

        <TouchableOpacity style={[styles.submitButton, loading && styles.submitButtonDisabled]} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Ionicons name="send" size={18} color="#FFFFFF" />
              <Text style={styles.submitButtonText}>Enviar Reporte</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Voltar e editar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}