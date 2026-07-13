import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import api from './api';
const auth = getAuth();
const AuthService = {
    async login(email, password) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const idToken = await userCredential.user.getIdToken();
        const response = await api.post('/users/login', { idToken });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data;
    },
    async loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const idToken = await userCredential.user.getIdToken();
        const response = await api.post('/users/login-google', { idToken });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data;
    },
    async register(data) {
        const response = await api.post('/users/register', data);
        return response.data;
    },
    async logout() {
        await auth.signOut();
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
    },
    async getStoredUser() {
        const user = await AsyncStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
};
export default AuthService;
