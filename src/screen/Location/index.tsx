import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export function Location() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/(app)/description');
  };

  const handleAdjust = () => {
    // Open manual location picker
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
            Localização
          </Text>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Passo 3 de 4</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map" size={48} color="#9CA3AF" />
          <Text style={styles.mapPlaceholderText}>
            Mapa carregando...
          </Text>
        </View>

        {/* Compass Button */}
        <TouchableOpacity style={styles.compassButton}>
          <Ionicons name="compass" size={24} color="#2563EB" />
        </TouchableOpacity>

        {/* Bottom Card */}
        <View style={styles.bottomCard}>
          {/* Confirmation Header */}
          <View style={styles.confirmationHeader}>
            <View style={styles.confirmationIcon}>
              <Ionicons name="checkmark-circle" size={24} color="#16A34A" />
            </View>
            <View style={styles.confirmationContent}>
              <Text style={styles.confirmationTitle}>
                Localização Confirmada
              </Text>
              <Text style={styles.addressText}>
                Rua das Flores, 123 - Centro
              </Text>
              <Text style={styles.coordsText}>
                Lat: -5.1505° Long: -36.6333°
              </Text>
            </View>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Sua localização GPS foi capturada automaticamente para maior precisão
            </Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>

          {/* Adjust Button */}
          <TouchableOpacity 
            style={styles.adjustButton}
            onPress={handleAdjust}
          >
            <Text style={styles.adjustButtonText}>
              Ajustar localização manualmente
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
