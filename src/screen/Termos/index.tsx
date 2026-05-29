import { View, ScrollView, Text, Pressable } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";


export function Termos() {

    const [aceitouTermos, setAceitouTermos] = useState(false)
    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>

                    {/* Cabeçalho onde vai as informaçẽos do icone verde do escudo, o titulo e o subtitulo */}
                    <View style={styles.iconeContainer}>
                        <Ionicons name="shield-checkmark-outline" size={30} color='green'/>
                    </View>
                    <Text 
                    style={styles.titulo}
                    >
                    Termo de Privacidade e Uso de Dados    
                    </Text>
                    <Text style={styles.subtitulo}>Conforme Lei Geral de proteção de Dados</Text>
                    
                    </View>
                    {/*│(Fundo azul clarinho, ícone de aviso e texto "Aceite obrigatório") */}
                <View style={styles.alertaContainer}>
                    <Ionicons name="warning" size={30} color="#EAB308"></Ionicons>
                    <Text style={styles.alertaTexto}>
                        <Text style={{ fontWeight: 'bold'}}>Aceite Obrigatório:</Text>
                        Para usar o ReportaAi você precisa concordar com os termos abaixo
                    </Text>
                </View>

                {/*│ Os 3 Pilares de Dados (Uma lista com 3 itens repetitivos: Ícone, Título e Descrição)
        │     - Dados Coletados
        │     - Finalidade
        │     - Segurança */}
                <View style={styles.pilarContainer}>
                    <View style={styles.pilarIconeContainer} >
                        <Ionicons name="server-outline"></Ionicons>
                    </View>

                    <View style={styles.pilarTextContainer}>
                        <Text style={styles.pilarTitulo} >DADOS COLETADOS</Text>
                        <Text style={styles.pilarDescricao}>
                            Coletamos: localização GPS, fotos de ocorrências, categoria do problema, descrição opcional e identificação do usuário (email/Google)
                        </Text>
                    </View>
                </View>

                <View style={styles.pilarContainer}>
                    <View style={styles.pilarIconeContainer}>
                        <Ionicons name="eye-outline"></Ionicons>
                    </View>

                    <View style={styles.pilarTextContainer}>
                        <Text style={styles.pilarTitulo}>FINALIDADE</Text>
                        <Text style={styles.pilarDescricao}>
                            Os dados são usados exclusivamente para gestão de ocorrências urbanas e melhoria dos serviços públicos.
                        </Text>
                    </View>
                </View>

                <View style={styles.pilarContainer}>
                    <View style={styles.pilarIconeContainer}>
                        <Ionicons name="lock-closed-outline"></Ionicons>
                    </View>

                    <View style={styles.pilarTextContainer}>
                        <Text style={styles.pilarTitulo}>SEGURANÇA</Text>
                        <Text style={styles.pilarDescricao}>
                            Seus dados são criptografados e armazenados em servidores seguros. Apenas servidores públicos autorizados têm acesso.
                        </Text>
                    </View>
                </View>

                {/* │(Fundo cinza claro, título e 4 linhas com ícone de "check") */}
                <View style={styles.direitosContainer}>
                    <Text style={styles.direitosTitulo}>Seus Direitos(LGPD)</Text>

                    <View style={styles.direitoItem}>
                        <Ionicons name="checkmark-outline" style={styles.direitoIcone}></Ionicons>
                        <Text style={styles.direitoTexto}>Acessar seus dados a qualquer momento</Text>
                    </View>

                    <View style={styles.direitoItem}>
                        <Ionicons name="checkmark-outline" style={styles.direitoIcone}></Ionicons>
                        <Text style={styles.direitoTexto}>Solicitar correção de dados incorretos</Text>
                    </View>

                    <View style={styles.direitoItem}>
                        <Ionicons name="checkmark-outline" style={styles.direitoIcone}></Ionicons>
                        <Text style={styles.direitoTexto}>Solicitar exclusão de dados (exceto quando legalmente necessário)</Text>
                    </View>

                    <View style={styles.direitoItem}>
                        <Ionicons name="checkmark-outline" style={styles.direitoIcone}></Ionicons>
                        <Text style={styles.direitoTexto}>Revogar consentimento</Text>
                    </View>
                </View>

                {/* (Linha separadora, Checkbox de aceite, Botão Azul, Texto "Recusar e Sair") */}
                <View>
                    <View style={styles.linha}></View>

                    <Pressable 
                    onPress={() => setAceitouTermos(!aceitouTermos)}
                    style={styles.checkbox}
                    >
                        <Ionicons name={aceitouTermos ? "checkbox" : "square-outline"} />
                        <Text style={styles.texto}>Li e Concordo com os Termos de Privacidade e Autorizo o Tratamento dos meus dados conforme descrito acima.</Text>
                    </Pressable>

                    <Pressable style={styles.botaoAceitar}>
                        <Text style={styles.textoBotaoAceitar}>Aceitar e Continuar</Text>
                    </Pressable>

                    <Pressable style={styles.botaoRecusar}>
                        <Text style={styles.textoBotaoRecusar}>Recusar e Sair</Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    );
}