import { styles } from '@/app/styles';
import { Feather } from "@expo/vector-icons";
import { Stack, router } from "expo-router"; // 1. Importação para controlar o Cabeçalho
import { Pressable, Text, View } from "react-native";

export default function BoasVindas() {
  return (

    <View style={styles.container}>
      
      {/* 2. Ocultando o Header do Expo Router nesta tela específica */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* BLOCO CENTRAL */}
      <View style={styles.conteudo}>
        <View style={styles.logoWrapper}>
            <Feather name="flag" size={48} color="white" />
        </View>
        <Text style={styles.titulo}>ReportaAi</Text>
        <Text style={styles.subtitulo}>Sua cidade mais limpa e organizada começa aqui</Text>

        {/* BLOCO DA LISTA */}
        <View style={styles.lista}>
          <View style={styles.listItem}>
            <View style={styles.iconWrapper}>
                <Feather name="check" size={16} color="white" />
            </View>
            <Text style={styles.listaTexto}>Reporte problemas urbanos</Text>
          </View>
          
          <View style={styles.listItem}>
            <View style={styles.iconWrapper}>
                <Feather name="check" size={16} color="white" />
            </View>
            <Text style={styles.listaTexto}>Acompanhe em tempo real</Text>
          </View>

          <View style={styles.listItem}>
            <View style={styles.iconWrapper}>
                <Feather name="check" size={16} color="white" />
            </View>
            <Text style={styles.listaTexto}>Ganhe pontos e medalhas</Text>
          </View>
        </View>

        {/* 3. Estilos aplicados no Botão */}
        <Pressable style={styles.botao} onPress={() => router.push('/menu')}>
          <Text style={styles.botaoTexto}>Começar</Text>
        </Pressable>
      </View>

      {/* 4. Estilo aplicado no Rodapé */}
      <Text style={styles.rodapeTexto}>v1.0.0 • Prefeitura Municipal</Text>

    </View>
  );
}