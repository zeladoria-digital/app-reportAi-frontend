import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { styles } from './styles';

export function Confirmation() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Submit report
      console.log('Report submitted');
      // Navigate back to home
      router.push('/(app)/home-tabs');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
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

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Title */}
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#1E293B', marginBottom: 20 }}>
          Revise seus dados
        </Text>

        {/* Photo Card */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="image" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Foto capturada</Text>
            <View style={styles.liveBadge}>
              <Text style={styles.liveBadgeText}>✓ Ao vivo</Text>
            </View>
          </View>
          <View style={styles.photoPreview} />
        </View>

        {/* Category Card */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="pricetag" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Categoria</Text>
          </View>
          <View style={styles.categoryDisplay}>
            <View style={[styles.categoryIcon, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="water" size={20} color="#F59E0B" />
            </View>
            <Text style={styles.categoryName}>Fossa cheia</Text>
          </View>
        </View>

        {/* Location Card */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="location" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Localização</Text>
          </View>
          <Text style={styles.addressPrimary}>Rua das Flores, 123</Text>
          <Text style={styles.addressSecondary}>
            Centro - Currais Novos, RN
          </Text>
        </View>

        {/* Description Card */}
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <Ionicons name="document-text" size={16} color="#64748B" />
            <Text style={styles.cardTitle}>Descrição</Text>
          </View>
          <Text style={styles.descriptionText}>
            Fossa cheia causando mau cheiro na região. É preciso fazer a limpeza com urgência.
          </Text>
          <View style={styles.tagsDisplay}>
            <View style={styles.tagBadge}>
              <Text style={styles.tagBadgeText}>#urgente</Text>
            </View>
            <View style={styles.tagBadge}>
              <Text style={styles.tagBadgeText}>#risco</Text>
            </View>
          </View>
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

        {/* Submit Button */}
        <TouchableOpacity
          style={[styles.submitButton, loading && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Ionicons name="send" size={18} color="#FFFFFF" />
              <Text style={styles.submitButtonText}>Enviar Reporte</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar e editar</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
