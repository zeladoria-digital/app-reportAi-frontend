import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  // Use o IP da sua máquina onde o back-end está rodando
  baseURL: 'http://10.48.9.216:3000', 
});

// Interceptor para adicionar o token automaticamente (Versão Mobile)
api.interceptors.request.use(async (config) => {
  try {
    // Usamos o AsyncStorage em vez do localStorage!
    const token = await AsyncStorage.getItem('token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error("Erro ao resgatar o token:", error);
  }
  return config;
});

export default api;