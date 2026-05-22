import { View, Text, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons"; // Biblioteca nativa do Expo para ícones

export default function BoasVindas() {
  // A regra de ouro: todo componente React precisa RETORNAR a interface
  return (
    <View>
      
      {/* BLOCO CENTRAL */}
      <View>
        {/* Usando um ícone temporário de bandeira para simular a sua logo */}
        <Feather name="flag" size={48} color="white" />
        
        <Text>ReportaAi</Text>
        <Text>Sua cidade mais limpa e organizada começa aqui</Text>

        {/* BLOCO DA LISTA */}
        <View>
          <View>
            <Feather name="check" size={16} color="white" />
            <Text>Reporte problemas urbanos</Text>
          </View>
          
          <View>
            <Feather name="check" size={16} color="white" />
            <Text>Acompanhe em tempo real</Text>
          </View>

          <View>
            <Feather name="check" size={16} color="white" />
            <Text>Ganhe pontos e medalhas</Text>
          </View>
        </View>

        <Pressable>
          <Text>Começar</Text>
        </Pressable>
      </View>

      {/* RODAPÉ */}
      <Text>v1.0.0 • Prefeitura Municipal</Text>

    </View>
  );
}