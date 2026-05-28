import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';

export function Camera() {
  const router = useRouter();

  const handleCapture = () => {
    // Capture photo and navigate to category
    router.push('/(app)/category');
  };

  const handleCancel = () => {
    router.back();
  };

  const handleToggleFlash = () => {
    // Toggle flash
  };

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCancel}>
            <Ionicons name="close" size={28} color="#FFFFFF" />
          </TouchableOpacity>

          <View style={styles.liveBadge}>
            <View style={styles.liveIndicator} />
            <Text style={styles.liveBadgeText}>AO VIVO</Text>
          </View>

          <TouchableOpacity onPress={handleToggleFlash}>
            <Ionicons name="flash" size={28} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Camera Area */}
        <View style={styles.cameraArea} />

        {/* Controls */}
        <View style={styles.controls}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 13 }}>
              Cancelar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>

          <View style={{ width: 56 }} />
        </View>
      </View>
    </>
  );
}
