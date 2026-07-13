import { auth } from '@/src/config/firebase';
import { useAuth } from '@/src/context/AuthContext';
import api from '@/src/services/api';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, Stack } from "expo-router";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
export function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const limparErro = (campo: string) => {
        setErros(prev => ({ ...prev, [campo]: '' }));
    };
    const validarEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const validarFormulario = () => {
        const novosErros: Record<string, string> = {};
        if (!email.trim())
            novosErros.email = 'Email é obrigatório';
        else if (!validarEmail(email))
            novosErros.email = 'Informe um email válido';
        if (!senha.trim())
            novosErros.senha = 'Senha é obrigatória';
        else if (senha.length < 6)
            novosErros.senha = 'Senha deve ter no mínimo 6 caracteres';
        setErros(novosErros);
        return Object.keys(novosErros).length === 0;
    };
    const handleLogin = async () => {
        if (!validarFormulario())
            return;
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const idToken = await userCredential.user.getIdToken();
            const response = await api.post('/users/login', { idToken });
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
            login();
            router.replace('/(app)/home-tabs');
        }
        catch (error: any) {
            console.error("Erro capturado no Log/in:", error);
            let tituloErro = "Ops!";
            let mensagemErro = "Ocorreu um problema inesperado.";
            if (error.code) {
                switch (error.code) {
                    case 'auth/invalid-credential':
                    case 'auth/wrong-password':
                    case 'auth/user-not-found':
                    case 'auth/invalid-email':
                        tituloErro = "Acesso Negado";
                        mensagemErro = "E-mail ou senha incorretos. Verifique suas credenciais e tente novamente.";
                        break;
                    case 'auth/network-request-failed':
                        tituloErro = "Sem Internet";
                        mensagemErro = "Verifique sua conexão com a internet para conseguir entrar no ReportaAI.";
                        break;
                    case 'auth/too-many-requests':
                        tituloErro = "Conta Bloqueada";
                        mensagemErro = "Muitas tentativas falhas. Tente novamente mais tarde ou redefina sua senha.";
                        break;
                    default:
                        tituloErro = "Erro na Autenticação";
                        mensagemErro = "Não foi possível validar seu usuário no momento.";
                }
            }
            else if (error.response) {
                const status = error.response.status;
                if (status === 401 || status === 403) {
                    tituloErro = "Sessão Inválida";
                    mensagemErro = "Houve um problema na verificação do seu acesso no servidor. Tente entrar novamente.";
                }
                else {
                    tituloErro = "Erro no Servidor";
                    mensagemErro = error.response?.data?.error || "Ocorreu uma instabilidade interna no sistema. Tente novamente mais tarde.";
                }
            }
            else if (error.request || error.message === "Network Error") {
                tituloErro = "Sistema Indisponível";
                mensagemErro = "Não foi possível conectar aos servidores da prefeitura. Verifique se o serviço está online.";
            }
            if (Platform.OS === 'web') {
                setErros(prev => ({ ...prev, geral: `${tituloErro}: ${mensagemErro}` }));
            }
            else {
                Alert.alert(tituloErro, mensagemErro);
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (<KeyboardAvoidingView>
      <Stack.Screen options={{
            title: 'Voltar',
            headerShadowVisible: false,
            headerStyle: { backgroundColor: '#F8FAFC' },
        }}/>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.containerPrincipal}>

          <Pressable style={styles.botaoVoltar} onPress={() => router.push('/menu')}>
          <Ionicons name="arrow-back" size={20} color="#3b82f6"/>
          <Text style={styles.textoBotaoVoltar}>Voltar</Text>
        </Pressable>

          
          <View style={styles.headerContainer}>
            <View style={styles.iconeContainer}>
              <Ionicons name="shield-checkmark" size={40} color="white"/>
            </View>
            <Text style={styles.titulo}>Bem-vindo</Text>
            <Text style={styles.subtitulo}>Entre na sua conta para continuar</Text>
          </View>

          
          <View style={styles.cardBranco}>

            
            {erros.geral ? (<View style={styles.erroGeral}>
                <Text style={styles.erroGeralText}>{erros.geral}</Text>
              </View>) : null}

            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL</Text>
              <View style={[styles.inputContainer, erros.email ? styles.inputError : null]}>
                <Ionicons name="mail-outline" size={20} color="gray"/>
                <TextInput style={styles.input} placeholder="seu@email.com" value={email} onChangeText={(text) => { setEmail(text); limparErro('email'); }} keyboardType="email-address" autoCapitalize="none"/>
              </View>
              {erros.email ? <Text style={styles.erroText}>{erros.email}</Text> : null}
            </View>

            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>SENHA</Text>
              <View style={[styles.inputContainer, erros.senha ? styles.inputError : null]}>
                <Ionicons name="lock-closed-outline" size={20} color="gray"/>
                <TextInput style={styles.input} placeholder="Sua senha" value={senha} onChangeText={(text) => { setSenha(text); limparErro('senha'); }} secureTextEntry/>
              </View>
              {erros.senha ? <Text style={styles.erroText}>{erros.senha}</Text> : null}
            </View>

            
            <Pressable style={styles.esqueciSenhaContainer} onPress={() => router.push('/esqueci-senha')}>
              <Text style={styles.esqueciSenhaText}>Esqueci minha senha</Text>
            </Pressable>

            
            <Pressable style={[styles.botaoPrimario, loading && styles.botaoDesabilitado]} onPress={handleLogin} disabled={loading}>
              <Text style={styles.textoBotaoPrimario}>
                {loading ? 'Entrando...' : 'Entrar'}
              </Text>
            </Pressable>

            
            <View style={styles.cadastroContainer}>
              <Text style={styles.cadastroText}>Não tem uma conta? </Text>
              <Pressable onPress={() => router.push('/cadastro')}>
                <Text style={styles.cadastroLink}>Cadastre-se</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>);
}
