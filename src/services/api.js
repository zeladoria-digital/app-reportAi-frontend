// src/services/api.js
import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://seu-backend.railway.app', // URL do backend hospedado
    baseURL: 'http://10.0.0.18:3000', // URL do backend local
})

// Interceptor para adicionar o token automaticamente
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token') // ou AsyncStorage no mobile
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api