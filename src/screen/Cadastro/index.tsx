import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from '@expo/vector-icons';

export function Cadastro() {

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [telefone, setTelefone] = useState('')
const [cpf, setCpf] = useState('')
const [senha, setSenha] = useState('')
const [confirmarSenha, setConfirmarSenha] = useState('')
const [aceitouTermos, setAceitouTermos] = useState(false)
const [dataNascimento, setDataNascimento] = useState('')
const [cep, setCep] = useState('')
const [numeroEndereco, setNumeroEndereco] = useState('')


    return(
        <KeyboardAvoidingView >

        <Stack.Screen
        options={{
        title: 'Voltar para login',
        headerShadowVisible: false,
        headerStyle: { backgroundColor: '#F8FAFC' },
      }}  />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.containerPrincipal}>
                    <View style={styles.headerContainer}>
                        <View style={styles.iconeContainer}>
                            <Ionicons name="person" size={40} color="black" ></Ionicons>
                        </View>

                        <Text style={styles.titulo}>Criar Conta</Text>
                        <Text style={styles.subtitulo}>Junte-se á Comunidade de Currais Novos</Text>
                    </View>

                    <View style={styles.cardBranco}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>NOME COMPLETO</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="person-outline" size={20} color="gray"></Ionicons>
                            <TextInput
                            style={styles.input}
                            placeholder="Seu nome Completo"
                            value={nome}
                            onChangeText={setNome}
                            ></TextInput>
                            </View>
                        </View>                        
                        
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>EMAIL</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="mail-outline" size={20} color="gray"></Ionicons>
                            <TextInput
                            style={styles.input}
                            placeholder="Seu@email.com"
                            value={email}
                            onChangeText={setEmail}
                            ></TextInput>
                            </View>
                        </View>  

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>CPF</Text>
                            <View style={styles.inputContainer}>
                                <FontAwesome name="id-card" size={20} color="gray" />
                            <TextInput
                            keyboardType='numeric'
                            style={styles.input}
                            placeholder="000.000.000-00"
                            value={cpf}
                            onChangeText={setCpf}
                            ></TextInput>
                            </View>
                        </View>                           
                        
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>TELEFONE(Opicional)</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="call-outline" size={20} color="gray"></Ionicons>
                            <TextInput
                            style={styles.input}
                            placeholder="(84) 99999-9999"
                            value={telefone}
                            onChangeText={setTelefone}
                            ></TextInput>
                            </View>
                        </View>    

                        {/* --- NOVO: DATA DE NASCIMENTO --- */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>DATA DE NASCIMENTO</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="calendar-outline" size={20} color="gray"></Ionicons>
                                <TextInput
                                    style={styles.input}
                                    placeholder="DD/MM/AAAA"
                                    keyboardType="numeric"
                                    maxLength={10} // Impede de digitar mais que 10 caracteres
                                    value={dataNascimento}
                                    onChangeText={setDataNascimento}
                                />
                            </View>
                        </View>                    
{/* --- NOVO: ENDEREÇO (CEP) --- */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>CEP</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="map-outline" size={20} color="gray"></Ionicons>
                                <TextInput
                                    style={styles.input}
                                    placeholder="00000-000"
                                    keyboardType="numeric"
                                    maxLength={9}
                                    value={cep}
                                    onChangeText={setCep}
                                />
                            </View>
                        </View>

                        {/* --- NOVO: NÚMERO DO ENDEREÇO --- */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>NÚMERO DA RESIDÊNCIA</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="home-outline" size={20} color="gray"></Ionicons>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Ex: 123 ou SN"
                                    value={numeroEndereco}
                                    onChangeText={setNumeroEndereco}
                                />
                            </View>
                        </View>
                        
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>SENHA</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="gray"></Ionicons>
                            <TextInput
                            style={styles.input}
                            placeholder="Crie uma senha forte"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry={true}
                            ></TextInput>
                            </View>
                        </View>                        
                        
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>CONFIRMAR SENHA*</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="gray"></Ionicons>
                            <TextInput
                            style={styles.input}
                            placeholder="Confirme sua senha"
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            secureTextEntry={true}
                            ></TextInput>
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Pressable 
                            style={styles.checkboxContainer}
                            onPress={() => setAceitouTermos(!aceitouTermos)}>
                                <Ionicons
                                name={aceitouTermos ? "checkbox" : "square-outline"}
                                size={30}
                                color="gray">
                                </Ionicons>
                                <Text style={styles.checkboxText}>
                                    Declaro ter lido e aceito os <Text style={styles.linkTermos}>Termos de Uso</Text>                                
                                </Text>
                            </Pressable>
                        </View>

                        <Pressable style={styles.botaoPrimario}>
                            <Text style={styles.textoBotaoPrimario}>Criar Conta</Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}