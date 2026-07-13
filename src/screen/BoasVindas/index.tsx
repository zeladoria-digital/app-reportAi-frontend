import { View, Text, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function BoasVindas() {
    return (<View>
      
      
      <View>
        
        <Feather name="flag" size={48} color="white"/>
        
        <Text>ReportaAi</Text>
        <Text>Sua cidade mais limpa e organizada começa aqui</Text>

        
        <View>
          <View>
            <Feather name="check" size={16} color="white"/>
            <Text>Reporte problemas urbanos</Text>
          </View>
          
          <View>
            <Feather name="check" size={16} color="white"/>
            <Text>Acompanhe em tempo real</Text>
          </View>

          <View>
            <Feather name="check" size={16} color="white"/>
            <Text>Ganhe pontos e medalhas</Text>
          </View>
        </View>

        <Pressable>
          <Text>Começar</Text>
        </Pressable>
      </View>

      
      <Text>v1.0.0 • Prefeitura Municipal</Text>

    </View>);
}
