import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth'
import api from './api'

const auth = getAuth()

const AuthService = {
  // Login com email/senha
  async login(email, password) {
    // 1. Faz login no Firebase
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const idToken = await userCredential.user.getIdToken()

    // 2. Envia o idToken para o backend
    const response = await api.post('/users/login', { idToken })

    // 3. Salva o token do backend
    await AsyncStorage.setItem('token', response.data.token)
    await AsyncStorage.setItem('user', JSON.stringify(response.data.user))

    return response.data
  },

  // Login com Google
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    const idToken = await userCredential.user.getIdToken()

    const response = await api.post('/users/login-google', { idToken })

    await AsyncStorage.setItem('token', response.data.token)
    await AsyncStorage.setItem('user', JSON.stringify(response.data.user))

    return response.data
  },

  // Cadastro
  async register(data) {
    const response = await api.post('/users/register', data)
    return response.data
  },

  // Logout
  async logout() {
    await auth.signOut()
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('user')
  },

  // Pega o usuário salvo
  async getStoredUser() {
    const user = await AsyncStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },
}

export default AuthService