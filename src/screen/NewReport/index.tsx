import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export function NewReport() {
  const router = useRouter();

  const handleOpenCamera = () => {
    router.push('/(app)/camera');
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
            Novo Reporte
          </Text>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Passo 1 de 4</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Alert Box */}
        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>Apenas fotos ao vivo</Text>
          <Text style={styles.alertText}>
            Por segurança, aceitamos apenas fotos tiradas agora. A galeria está desabilitada.
          </Text>
        </View>

        {/* Camera Button */}
        <TouchableOpacity 
          style={styles.cameraButton}
          onPress={handleOpenCamera}
        >
          <View style={styles.cameraIconContainer}>
            <Ionicons name="camera" size={40} color="#2563EB" />
          </View>
          <Text style={styles.cameraButtonTitle}>Abrir Câmera</Text>
          <Text style={styles.cameraButtonSubtitle}>
            Tire uma foto do problema
          </Text>
        </TouchableOpacity>

        {/* Tips Section */}
        <View style={styles.tipsSection}>
          <Text style={styles.tipsTitle}>Dicas para uma boa foto</Text>

          <View style={styles.tipItem}>
            <View style={styles.tipCheck}>
              <Text style={styles.tipCheckText}>✓</Text>
            </View>
            <Text style={styles.tipText}>
              Tire de dia, com boa iluminação
            </Text>
          </View>

          <View style={styles.tipItem}>
            <View style={styles.tipCheck}>
              <Text style={styles.tipCheckText}>✓</Text>
            </View>
            <Text style={styles.tipText}>
              Foque no problema principal
            </Text>
          </View>

          <View style={styles.tipItem}>
            <View style={styles.tipCheck}>
              <Text style={styles.tipCheckText}>✓</Text>
            </View>
            <Text style={styles.tipText}>
              Mantenha a câmera estável
            </Text>
          </View>

          <View style={styles.tipItem}>
            <View style={styles.tipCheck}>
              <Text style={styles.tipCheckText}>✓</Text>
            </View>
            <Text style={styles.tipText}>
              Certifique-se que o local está visível
            </Text>
          </View>
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Sua localização GPS será capturada automaticamente
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
