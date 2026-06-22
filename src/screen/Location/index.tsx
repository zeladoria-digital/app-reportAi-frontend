import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useState, useEffect } from 'react';

// 1. IMPORTAÇÕES NOVAS: O Satélite e o nosso Cofre!
import * as ExpoLocation from 'expo-location'; // Usamos um apelido para não dar conflito com o nome da tela
import { useReport } from '../../contexts/reportContext'; // Ajuste o caminho se precisar

export function Location() {
  const router = useRouter();
  
  // 2. A CHAVE DO COFRE
  const { salvarLocalizacao } = useReport();

  // 3. OS ESTADOS DA TELA (Memória de curto prazo)
  const [coords, setCoords] = useState<ExpoLocation.LocationObjectCoords | null>(null);
  const [address, setAddress] = useState('Buscando sinal do satélite...');
  const [loading, setLoading] = useState(true);

  // 4. O EFEITO DE INICIALIZAÇÃO (Roda assim que a tela abre)
  useEffect(() => {
    (async () => {
      // Pede permissão para usar o GPS
      let { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setAddress('Permissão de GPS negada pelo usuário.');
        setLoading(false);
        return;
      }

      try {
        // Pega a coordenada exata (Lat / Long)
        let location = await ExpoLocation.getCurrentPositionAsync({});
        setCoords(location.coords);

        // Faz o "Reverse Geocoding": Transforma a coordenada em nome de rua!
        let geocode = await ExpoLocation.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });

        if (geocode.length > 0) {
          const place = geocode[0];
          // Monta o endereço (Ex: Rua Manoel Lopes, Centro)
          setAddress(`${place.street || place.route || 'Rua desconhecida'}, ${place.streetNumber || 'S/N'} - ${place.subregion || place.district || 'Currais Novos'}`);
        } else {
          setAddress('Endereço não encontrado no mapa');
        }
      } catch (error) {
        setAddress('Erro ao buscar localização');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 5. A FUNÇÃO DE AVANÇAR
  const handleContinue = () => {
    if (coords) {
      // Guarda a latitude e longitude no nosso Caminhão de Mudança!
      salvarLocalizacao(coords.latitude, coords.longitude);
    }
    // Pula para a Tela 4 (Descrição)
    router.push('/(app)/description');
  };

  const handleAdjust = () => {
    // Futuro: Abrir um mapa para arrastar o pino
    console.log("Ajuste manual ainda não implementado");
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
            {loading ? "Calculando coordenadas..." : "Mapa indisponível"}
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
              {loading ? (
                 <ActivityIndicator color="#16A34A" />
              ) : (
                 <Ionicons name="checkmark-circle" size={24} color="#16A34A" />
              )}
            </View>
            <View style={styles.confirmationContent}>
              <Text style={styles.confirmationTitle}>
                Localização Capturada
              </Text>
              
              {/* ENDEREÇO REAL AQUI */}
              <Text style={styles.addressText}>
                {address}
              </Text>
              
              {/* COORDENADAS REAIS AQUI */}
              <Text style={styles.coordsText}>
                {coords 
                  ? `Lat: ${coords.latitude.toFixed(5)}° Long: ${coords.longitude.toFixed(5)}°` 
                  : 'Aguardando satélite...'}
              </Text>
            </View>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Sua localização GPS foi capturada automaticamente para maior precisão.
            </Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity 
            style={[styles.continueButton, loading && { opacity: 0.5 }]}
            onPress={handleContinue}
            disabled={loading} // Desativa o botão enquanto carrega
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