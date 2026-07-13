import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useReport } from '@/src/contexts/reportContext';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
export function Camera() {
    const router = useRouter();
    const { salvarFoto, salvarDataHora } = useReport();
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);
    if (!permission) {
        return <View style={styles.container}/>;
    }
    if (!permission.granted) {
        return (<View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <Text style={{ color: 'white', textAlign: 'center', marginBottom: 20, fontSize: 16 }}>
                        O ReportaAI precisa acessar sua câmera para você registrar suas denuncias na cidade.
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: '#2563EB', padding: 15, borderRadius: 10 }} onPress={requestPermission}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Liberar Câmera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
                        <Text style={{ color: 'gray' }}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>);
    }
    const handleCapture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync({
                    quality: 0.5,
                    base64: true,
                    exif: true
                });
                console.log("FOTO TIRADA! Onde ela está:", photo.uri);
                salvarFoto(photo.uri);
                if (photo.exif && photo.exif.DateTimeOriginal) {
                    salvarDataHora(photo.exif.DateTimeOriginal);
                    console.log("EXIF CAPTURADO! Horário exato da lente:", photo.exif.DateTimeOriginal);
                }
                else {
                    const dataAtual = new Date().toISOString();
                    salvarDataHora(dataAtual);
                    console.log("EXIF não suportado pela lente. Usando relógio do sistema:", dataAtual);
                }
                setTimeout(() => {
                    router.push('/(app)/category');
                }, 100);
            }
            catch (error) {
                console.log("Erro ao tirar foto:", error);
            }
        }
    };
    const handleCancel = () => {
        router.back();
    };
    const toggleCameraFacing = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    };
    return (<View style={styles.container}>
            
            <CameraView style={styles.cameraView} facing={facing as any} ref={cameraRef}>
                
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleCancel}>
                        <Ionicons name="close" size={28} color="#FFFFFF"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleCameraFacing}>
                        <Ionicons name="camera-reverse" size={28} color="#FFFFFF"/>
                    </TouchableOpacity>
                </View>

                
                <View style={styles.cameraArea}/>

                
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={{ color: '#FFFFFF', fontWeight: '600', fontSize: 13 }}>Cancelar</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
                        <View style={styles.captureButtonInner}/>
                    </TouchableOpacity>

                    <View style={{ width: 56 }}/>
                </View>
            </CameraView>
        </View>);
}
