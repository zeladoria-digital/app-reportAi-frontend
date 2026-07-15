import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useState, useEffect } from 'react';
import * as ExpoLocation from 'expo-location';
import { useReport } from '../../contexts/reportContext';
export function Location() {
    const router = useRouter();
    const { salvarLocalizacao } = useReport();
    const [coords, setCoords] = useState<ExpoLocation.LocationObjectCoords | null>(null);
    const [address, setAddress] = useState('Buscando sinal do satélite...');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            let { status } = await ExpoLocation.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setAddress('Permissão de GPS negada pelo usuário.');
                setLoading(false);
                return;
            }
            try {
                let location = await ExpoLocation.getCurrentPositionAsync({});
                setCoords(location.coords);
                let geocode = await ExpoLocation.reverseGeocodeAsync({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                });
                if (geocode.length > 0) {
                    const place = geocode[0];
                    setAddress(`${place.street || place.route || 'Rua desconhecida'}, ${place.streetNumber || 'S/N'} - ${place.subregion || place.district || 'Currais Novos'}`);
                }
                else {
                    setAddress('Endereço não encontrado no mapa');
                }
            }
            catch (error) {
                setAddress('Erro ao buscar localização');
            }
            finally {
                setLoading(false);
            }
        })();
    }, []);
    const handleContinue = () => {
        if (coords) {
            salvarLocalizacao(coords.latitude, coords.longitude);
        }
        router.push('/(app)/description');
    };
    const handleAdjust = () => {
        console.log("Ajuste manual ainda não implementado");
    };
    return (<>
      
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#1E293B"/>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { marginLeft: 12 }]}>
            Localização
          </Text>
        </View>
      </View>

      
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Passo 3 de 4</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}/>
        </View>
      </View>

      
      <View style={styles.mapContainer}>
        
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map" size={48} color="#9CA3AF"/>
          <Text style={styles.mapPlaceholderText}>
            {loading ? "Calculando coordenadas..." : "Mapa indisponível"}
          </Text>
        </View>

        
        <TouchableOpacity style={styles.compassButton}>
          <Ionicons name="compass" size={24} color="#2563EB"/>
        </TouchableOpacity>

        
        <View style={styles.bottomCard}>
          
          <View style={styles.confirmationHeader}>
            <View style={styles.confirmationIcon}>
              {loading ? (<ActivityIndicator color="#16A34A"/>) : (<Ionicons name="checkmark-circle" size={24} color="#16A34A"/>)}
            </View>
            <View style={styles.confirmationContent}>
              <Text style={styles.confirmationTitle}>
                Localização Capturada
              </Text>
              
              
              <Text style={styles.addressText}>
                {address}
              </Text>
              
              
              <Text style={styles.coordsText}>
                {coords
            ? `Lat: ${coords.latitude.toFixed(5)}° Long: ${coords.longitude.toFixed(5)}°`
            : 'Aguardando satélite...'}
              </Text>
            </View>
          </View>

          
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              Sua localização GPS foi capturada automaticamente para maior precisão.
            </Text>
          </View>

          
          <TouchableOpacity style={[styles.continueButton, loading && { opacity: 0.5 }]} onPress={handleContinue} disabled={loading}>
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.adjustButton} onPress={handleAdjust}>
            <Text style={styles.adjustButtonText}>
              Ajustar localização manualmente
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>);
}
