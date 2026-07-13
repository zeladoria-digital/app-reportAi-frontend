import { useAuth } from '@/src/context/AuthContext';
import { Feather } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import Zocial from '@expo/vector-icons/Zocial';
import { Stack, router } from "expo-router";
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
export function Menu() {
    const { login } = useAuth();
    const handleGoogleLogin = () => {
        login();
        router.replace('/(app)/home-tabs');
    };
    const handleEmailLogin = () => {
        login();
        router.push('/login');
    };
    return (<View style={styles.container}>

      <Stack.Screen options={{
            title: 'Voltar',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#F8FAFC' },
        }}/>
        
        <View style={styles.header}>
          
            <View style={styles.icone}>
                <Text style={styles.emojiIcon}>👋</Text>
            </View>

            <Text style={styles.titulo}>Bem-vindo de Volta!</Text>
            <Text style={styles.subtitulo}>Continue Fazendo a Diferença na sua Cidade</Text>
            
        </View>

        <View style={styles.cardBranco}>
          
          <Pressable style={styles.botaoAzul} onPress={handleGoogleLogin}>
            <AntDesign name="google" size={24} color="white"/>
            <Text style={styles.textoBotaoAzul}>Continuar com Google</Text>
          </Pressable>

          <View style={styles.divisorContainer}>
            <View style={styles.linhaDivisoria}></View>
            <Text style={styles.textoOU}>OU</Text>
            <View style={styles.linhaDivisoria}></View>
          </View>

          <Pressable style={styles.botaoBranco} onPress={handleEmailLogin}>
            <Zocial name='email' size={24} color="black"/>
            <Text style={styles.textoBotaoBranco}>Continuar com Email</Text>
          </Pressable>

        </View>

        <View style={styles.gamificacaoContainer}>

          <View style={styles.miniCard}>
            <Feather name="award" size={24} color="#EAB308"/>
            <Text style={styles.textoMiniCard}>Ganhe Pontos</Text>
          </View>          
          
          <View style={styles.miniCard}>
            <Feather name="trending-up" size={24} color="#22C55E"/>
            <Text style={styles.textoMiniCard}>Suba no Ranking</Text>
          </View>          
          
          <View style={styles.miniCard}>
            <Feather name="star" size={24} color="#A855F7"/>
            <Text style={styles.textoMiniCard}>Desbloqueie Medalhas</Text>
          </View>

        </View>

        <View style={styles.rodaPe}>
          <Pressable onPress={() => router.push('/cadastro')}>
            <Text style={styles.textoCriarConta}>Primeira vez? Criar Conta →</Text>
          </Pressable>

          
          <Text style={styles.textoLgpd}>
            Ao continuar, você concorda com nossos{' '}
            <Text style={styles.textoLinkLegal} onPress={() => console.log('Abrir Termos')}>
                Termos de uso
            </Text>
            {' '}e{' '}
            <Text style={styles.textoLinkLegal} onPress={() => console.log('Abrir Privacidade')}>
                Política de Privacidade
            </Text>
          </Text>
        </View>

    </View>);
}
