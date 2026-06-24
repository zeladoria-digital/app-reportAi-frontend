import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { styles } from './styles';
import * as Network from 'expo-network';
import { salvarReporteOffline } from '../../storage/offlineStorage';
import api from '../../services/api'; 

// Importação da chave do cofre global
import { useReport } from '../../contexts/reportContext'; 

export function Confirmation() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Coleta os dados guardados no Contexto
  const { report, limparReport } = useReport();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const networkState = await Network.getNetworkStateAsync();

      if (networkState.isConnected && networkState.isInternetReachable) {
        console.log('Internet OK! Preparando o Caminhão Pesado (FormData)...');

        const formData = new FormData();

        // Embala a foto
        // @ts-ignore
        formData.append('foto', {
          uri: report.fotoUri,
          name: `denuncia_${Date.now()}.jpg`,
          type: 'image/jpeg',
        });

// 1. FORMATANDO A DATA 
const [dataExif, horaExif] = report.dataHora.split(' ');
        const dataIso = `${dataExif.replace(/:/g, '-')}T${horaExif}-03:00`;

        // 2. O PACOTE PERFEITO FINAL
        const dados = {
          // Se o usuário não digitar nada, mandamos um texto com mais de 10 caracteres pra não quebrar a regra
          description: report.descricao || "Sem descrição informada",
          category: report.categoria, // 🚀 Agora vai a categoria real que você clicou na tela!
          neighborhood: 'Centro', // Mantemos fixo por enquanto
          location: {
            latitude: report.latitude,
            longitude: report.longitude,
          },
          exif: {
            dateTaken: dataIso, 
            latitude: report.latitude,
            longitude: report.longitude,
          }
        };

        formData.append('dados', JSON.stringify(dados));

        const resposta = await api.post('/complaints/citizen', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Sucesso! Resposta do servidor:', resposta.data);
        Alert.alert("Sucesso", "Sua denúncia foi enviada para a prefeitura!");

      } else {
        console.log('Sem internet! Guardando na Caixa Preta...');
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
      
      limparReport(); 
      router.push('/(app)/home-tabs');

    } catch (error: any) {
      console.error("Erro no servidor:", error.response?.data || error.message);
      Alert.alert("Erro", error.response?.data?.error || "Ocorreu um problema ao processar sua denúncia.");
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

        {/* Card da Foto */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="image" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Foto capturada</Text>
            <View style={styles.liveBadge}>
              <Text style={styles.liveBadgeText}>✓ Ao vivo</Text>
            </View>
          </View>
          {report.fotoUri ? (
            <Image source={{ uri: report.fotoUri }} style={{ height: 200, borderRadius: 12, marginTop: 12 }} />
          ) : (
            <View style={styles.photoPreview} />
          )}
        </View>

        {/* Card da Categoria */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="pricetag" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Categoria</Text>
          </View>
          <View style={styles.categoryDisplay}>
            <View style={[styles.categoryIcon, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="alert-circle" size={20} color="#F59E0B" />
            </View>
            <Text style={styles.categoryName}>{report.categoria || 'Não informada'}</Text>
          </View>
        </View>

        {/* Card da Localização */}
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

        {/* Card da Descrição */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="document-text" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Descrição</Text>
          </View>
          <Text style={styles.descriptionText}>
            {report.descricao || 'Nenhuma descrição fornecida.'}
          </Text>
        </View>

        {/* Banner de Gamificação */}
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

        {/* Botão de Envio */}
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