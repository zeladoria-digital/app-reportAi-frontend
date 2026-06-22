import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useReport } from '@/src/contexts/reportContext';

// 1. AS NOVAS IMPORTAÇÕES DO EXPO
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';

export function Camera() {
    const router = useRouter();

    const { salvarFoto, salvarDataHora } = useReport();

    // 2. O ESTADO DA CÂMERA (Cérebro)
    const [facing, setFacing] = useState('back'); // Começa com a câmera traseira
    const [permission, requestPermission] = useCameraPermissions(); // Motor de permissão do celular
    const cameraRef = useRef<CameraView>(null); // O nosso "controle remoto" da câmera

    // 3. A LÓGICA DE PERMISSÃO (A Trava de Segurança)
    // Se o Expo ainda não respondeu se tem permissão (celular tá pensando)
    if (!permission) {
        return <View style={styles.container} />;
    }

    // Se o usuário negou a permissão ou é a primeira vez que ele abre o app
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Text style={{ color: 'white', textAlign: 'center', marginBottom: 20, fontSize: 16 }}>
                        O ReportaAI precisa acessar sua câmera para você registrar suas denuncias na cidade.
                    </Text>
                    <TouchableOpacity 
                        style={{ backgroundColor: '#2563EB', padding: 15, borderRadius: 10 }}
                        onPress={requestPermission}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Liberar Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
                        <Text style={{ color: 'gray' }}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    // 4. A AÇÃO DO CLIQUE (O Disparo)
    const handleCapture = async () => {
        // Se a câmera estiver montada na tela e pronta
        if (cameraRef.current) {
try {
                // 👇 1. LIGAMOS O RADAR DE METADADOS: Adicionamos 'exif: true'
                const photo = await cameraRef.current.takePictureAsync({ 
                    quality: 0.5, 
                    base64: true,
                    exif: true 
                });
                
                console.log("FOTO TIRADA! Onde ela está:", photo.uri);

                // 2. Guarda a foto no carrinho global
                salvarFoto(photo.uri);

                // 👇 3. A MÁGICA ANTI-FRAUDE: Capturamos a data original da lente!
                if (photo.exif && photo.exif.DateTimeOriginal) {
                    salvarDataHora(photo.exif.DateTimeOriginal);
                    console.log("EXIF CAPTURADO! Horário exato da lente:", photo.exif.DateTimeOriginal);
                } else {
                    // Fallback (Plano B) caso o Android do usuário seja muito antigo
                    const dataAtual = new Date().toISOString();
                    salvarDataHora(dataAtual);
                    console.log("EXIF não suportado pela lente. Usando relógio do sistema:", dataAtual);
                }

                // 4. Segura o JavaScript por 0.1 segundo para processar o cofre
                setTimeout(() => {
                    router.push('/(app)/category');
                }, 100);

            } catch (error) {
                console.log("Erro ao tirar foto:", error);
            }
        }
    };

    const handleCancel = () => {
        router.back();
    };

    // Vira a câmera pra selfie ou pra rua
    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    };

    // 5. O VISUAL (A Tela Viva)
    return (
        <View style={styles.container}>
            {/* O COMPONENTE MÁGICO: Ele substituiu a sua tela preta */}
            <CameraView 
                style={styles.cameraView} 
                facing={facing as any}
                ref={cameraRef}
            >
                {/* Header (Fica sobreposto à imagem da câmera) */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleCancel}>
                        <Ionicons name="close" size={28} color="#FFFFFF" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleCameraFacing}>
                        <Ionicons name="camera-reverse" size={28} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                {/* Área vazia no meio para a pessoa ver a rua */}
                <View style={styles.cameraArea} />

                {/* Controls (Bolota branca de tirar foto) */}
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 13 }}>Cancelar</Text>
                    </TouchableOpacity>

                    {/* Quando clicar aqui, invoca a função handleCapture */}
                    <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
                        <View style={styles.captureButtonInner} />
                    </TouchableOpacity>

                    <View style={{ width: 56 }} />
                </View>
            </CameraView>
        </View>
    );
}