import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const api = axios.create({
    baseURL: 'http://10.48.9.216:3000',
});
api.interceptors.request.use(async (config) => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    catch (error) {
        console.error("Erro ao resgatar o token:", error);
    }
    return config;
});
export default api;
