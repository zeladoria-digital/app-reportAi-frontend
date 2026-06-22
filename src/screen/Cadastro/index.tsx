import api from '@/src/services/api';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack, router } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

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
  const [bairro, setBairro] = useState('')
  const [rua, setRua] = useState('')
  const [numeroEndereco, setNumeroEndereco] = useState('')

  // ← Estado de erros por campo
  const [erros, setErros] = useState<Record<string, string>>({})

  // ← Limpa o erro do campo quando o usuário começa a digitar
  const limparErro = (campo: string) => {
    setErros(prev => ({ ...prev, [campo]: '' }))
  }

  // Formatadores
  const formatCpf = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11) // ← máximo 11 dígitos
    
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
    if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`
}

  const formatTelefone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{1,4})$/, '$1-$2')
  }

  const formatData = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    return digits
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
  }

  const formatCep = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    return digits.replace(/(\d{5})(\d{1,3})$/, '$1-$2')
  }

  // Validadores
  const validarEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validarCpf = (cpf: string) => {
    const digits = cpf.replace(/\D/g, '')
    if (digits.length !== 11) return false
    if (/^(\d)\1{10}$/.test(digits)) return false

    let sum = 0
    for (let i = 0; i < 9; i++) sum += parseInt(digits[i]) * (10 - i)
    let remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(digits[9])) return false

    sum = 0
    for (let i = 0; i < 10; i++) sum += parseInt(digits[i]) * (11 - i)
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    return remainder === parseInt(digits[10])
  }

  const validarData = (data: string) => {
    const parts = data.split('/')
    if (parts.length !== 3) return false
    const dia = parseInt(parts[0])
    const mes = parseInt(parts[1])
    const ano = parseInt(parts[2])
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) return false
    if (dia < 1 || dia > 31) return false
    if (mes < 1 || mes > 12) return false
    if (ano < 1900 || ano > new Date().getFullYear()) return false

    const dataNasc = new Date(ano, mes - 1, dia)
    const hoje = new Date()
    const idade = hoje.getFullYear() - dataNasc.getFullYear()
    const mesAtual = hoje.getMonth() - dataNasc.getMonth()
    if (idade < 18 || (idade === 18 && mesAtual < 0)) return false
    return true
  }

  // ← Valida todos os campos e retorna true se tudo ok
  const validarFormulario = () => {
    const novosErros: Record<string, string> = {}

    if (!nome.trim()) novosErros.nome = 'Nome é obrigatório'
    
    if (!email.trim()) novosErros.email = 'Email é obrigatório'
    else if (!validarEmail(email)) novosErros.email = 'Informe um email válido'

    if (!cpf.trim()) novosErros.cpf = 'CPF é obrigatório'
    else if (!validarCpf(cpf)) novosErros.cpf = 'CPF inválido'

    if (!dataNascimento.trim()) novosErros.dataNascimento = 'Data de nascimento é obrigatória'
    else if (!validarData(dataNascimento)) novosErros.dataNascimento = 'Data inválida ou menor de 18 anos'

    if (!cep.trim()) novosErros.cep = 'CEP é obrigatório'
    else if (cep.replace(/\D/g, '').length !== 8) novosErros.cep = 'CEP deve ter 8 dígitos'

    if (!rua.trim()) novosErros.rua = 'Rua é obrigatória'
    if (!bairro.trim()) novosErros.bairro = 'Bairro é obrigatório'
    if (!numeroEndereco.trim()) novosErros.numeroEndereco = 'Número é obrigatório'

    if (!senha.trim()) novosErros.senha = 'Senha é obrigatória'
    else if (senha.length < 6) novosErros.senha = 'Senha deve ter no mínimo 6 caracteres'
    else if (!/[A-Z]/.test(senha)) novosErros.senha = 'Senha deve ter ao menos uma letra maiúscula'
    else if (!/[0-9]/.test(senha)) novosErros.senha = 'Senha deve ter ao menos um número'

    if (!confirmarSenha.trim()) novosErros.confirmarSenha = 'Confirme sua senha'
    else if (senha !== confirmarSenha) novosErros.confirmarSenha = 'As senhas não correspondem'

    if (!aceitouTermos) novosErros.termos = 'Você precisa aceitar os Termos de Uso'

    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

const handleCreateAccount = async () => {
  
  if (!validarFormulario()) {
    return
  }

  try {
    const cepDigits = cep.replace(/\D/g, '')
    
    const viaCepResponse = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`)
    const addressData = await viaCepResponse.json()

    const addressResponse = await api.post('/address', {
      cep,
      city: addressData.localidade,
      neighborhood: bairro,
      road: rua,
      houseNumber: numeroEndereco,
    })

    const addressId = addressResponse.data.id
    const [dia, mes, ano] = dataNascimento.split('/')
    const dateOfBirth = `${ano}-${mes}-${dia}`

    await api.post('/users/register', {
      name: nome,
      email,
      cpf,
      phoneNumber: telefone || null,
      dateOfBirth,
      addressId,
      password: senha,
      agreeLgpdTerms: aceitouTermos,
    })

    Alert.alert("Sucesso", "Conta criada com sucesso!", [
      { text: "OK", onPress: () => router.replace('/login') }
    ])

  } catch (error: any) {
    setErros(prev => ({ ...prev, geral: error.response?.data?.error || "Erro ao criar conta" }))
  }
}

  return (
    <KeyboardAvoidingView>
      <Stack.Screen
        options={{
          title: 'Voltar para login',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#F8FAFC' },
        }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.containerPrincipal}>
          <View style={styles.headerContainer}>
            <View style={styles.iconeContainer}>
              <Ionicons name="person" size={40} color="black" />
            </View>
            <Text style={styles.titulo}>Criar Conta</Text>
            <Text style={styles.subtitulo}>Junte-se à Comunidade de Currais Novos</Text>
          </View>

          <View style={styles.cardBranco}>

            {/* Erro geral do backend */}
            {erros.geral ? (
              <View style={styles.erroGeral}>
                <Text style={styles.erroGeralText}>{erros.geral}</Text>
              </View>
            ) : null}

            {/* NOME */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>NOME COMPLETO</Text>
              <View style={[styles.inputContainer, erros.nome ? styles.inputError : null]}>
                <Ionicons name="person-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="Seu nome completo"
                  value={nome}
                  onChangeText={(text) => { setNome(text); limparErro('nome') }}
                />
              </View>
              {erros.nome ? <Text style={styles.erroText}>{erros.nome}</Text> : null}
            </View>

            {/* EMAIL */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL</Text>
              <View style={[styles.inputContainer, erros.email ? styles.inputError : null]}>
                <Ionicons name="mail-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="seu@email.com"
                  value={email}
                  onChangeText={(text) => { setEmail(text); limparErro('email') }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              {erros.email ? <Text style={styles.erroText}>{erros.email}</Text> : null}
            </View>

            {/* CPF */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CPF</Text>
              <View style={[styles.inputContainer, erros.cpf ? styles.inputError : null]}>
                <FontAwesome name="id-card" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChangeText={(text) => { setCpf(formatCpf(text)); limparErro('cpf') }}
                  keyboardType="numeric"
                  maxLength={14}
                />
              </View>
              {erros.cpf ? <Text style={styles.erroText}>{erros.cpf}</Text> : null}
            </View>

            {/* TELEFONE */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>TELEFONE (Opcional)</Text>
              <View style={styles.inputContainer}>
                <Ionicons name="call-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="(84) 99999-9999"
                  value={telefone}
                  onChangeText={(text) => setTelefone(formatTelefone(text))}
                  keyboardType="numeric"
                  maxLength={15}
                />
              </View>
            </View>

            {/* DATA DE NASCIMENTO */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>DATA DE NASCIMENTO</Text>
              <View style={[styles.inputContainer, erros.dataNascimento ? styles.inputError : null]}>
                <Ionicons name="calendar-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/AAAA"
                  value={dataNascimento}
                  onChangeText={(text) => { setDataNascimento(formatData(text)); limparErro('dataNascimento') }}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              {erros.dataNascimento ? <Text style={styles.erroText}>{erros.dataNascimento}</Text> : null}
            </View>

            {/* CEP */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CEP</Text>
              <View style={[styles.inputContainer, erros.cep ? styles.inputError : null]}>
                <Ionicons name="map-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="00000-000"
                  value={cep}
                  onChangeText={(text) => { setCep(formatCep(text)); limparErro('cep') }}
                  keyboardType="numeric"
                  maxLength={9}
                />
              </View>
              {erros.cep ? <Text style={styles.erroText}>{erros.cep}</Text> : null}
            </View>

            {/* RUA */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>RUA</Text>
              <View style={[styles.inputContainer, erros.rua ? styles.inputError : null]}>
                <Ionicons name="navigate-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="Digite a rua"
                  value={rua}
                  onChangeText={(text) => { setRua(text); limparErro('rua') }}
                />
              </View>
              {erros.rua ? <Text style={styles.erroText}>{erros.rua}</Text> : null}
            </View>

            {/* BAIRRO */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>BAIRRO</Text>
              <View style={[styles.inputContainer, erros.bairro ? styles.inputError : null]}>
                <Ionicons name="business-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="Digite o bairro"
                  value={bairro}
                  onChangeText={(text) => { setBairro(text); limparErro('bairro') }}
                />
              </View>
              {erros.bairro ? <Text style={styles.erroText}>{erros.bairro}</Text> : null}
            </View>

            {/* NÚMERO */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>NÚMERO DA RESIDÊNCIA</Text>
              <View style={[styles.inputContainer, erros.numeroEndereco ? styles.inputError : null]}>
                <Ionicons name="home-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="Ex: 123 ou SN"
                  value={numeroEndereco}
                  onChangeText={(text) => { setNumeroEndereco(text); limparErro('numeroEndereco') }}
                />
              </View>
              {erros.numeroEndereco ? <Text style={styles.erroText}>{erros.numeroEndereco}</Text> : null}
            </View>

            {/* SENHA */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>SENHA</Text>
              <View style={[styles.inputContainer, erros.senha ? styles.inputError : null]}>
                <Ionicons name="lock-closed-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="Crie uma senha forte"
                  value={senha}
                  onChangeText={(text) => { setSenha(text); limparErro('senha') }}
                  secureTextEntry
                />
              </View>
              {erros.senha ? <Text style={styles.erroText}>{erros.senha}</Text> : null}
            </View>

            {/* CONFIRMAR SENHA */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>CONFIRMAR SENHA</Text>
              <View style={[styles.inputContainer, erros.confirmarSenha ? styles.inputError : null]}>
                <Ionicons name="lock-closed-outline" size={20} color="gray" />
                <TextInput
                  style={styles.input}
                  placeholder="Confirme sua senha"
                  value={confirmarSenha}
                  onChangeText={(text) => { setConfirmarSenha(text); limparErro('confirmarSenha') }}
                  secureTextEntry
                />
              </View>
              {erros.confirmarSenha ? <Text style={styles.erroText}>{erros.confirmarSenha}</Text> : null}
            </View>

            {/* TERMOS */}
            <View style={styles.inputGroup}>
              <Pressable
                style={styles.checkboxContainer}
                onPress={() => { setAceitouTermos(!aceitouTermos); limparErro('termos') }}
              >
                <Ionicons
                  name={aceitouTermos ? "checkbox" : "square-outline"}
                  size={30}
                  color={erros.termos ? '#EF4444' : 'gray'}
                />
                <Text style={styles.checkboxText}>
                  Declaro ter lido e aceito os{' '}
                  <Text style={styles.linkTermos} onPress={() => router.push('/termos')}>
                    Termos de Uso
                  </Text>
                </Text>
              </Pressable>
              {erros.termos ? <Text style={styles.erroText}>{erros.termos}</Text> : null}
            </View>

            <Pressable style={styles.botaoPrimario} onPress={handleCreateAccount}>
              <Text style={styles.textoBotaoPrimario}>Criar Conta</Text>
            </Pressable>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}