import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCV6NdDP8yNJv9I3PJQ8gC28gPVLkaA0Vg",
  authDomain: "projeto-zeladoria-cn.firebaseapp.com",
  projectId: "projeto-zeladoria-cn",
  storageBucket: "projeto-zeladoria-cn.appspot.com",
  messagingSenderId: "338337234046",
  appId: "1:338337234046:web:102787b7d94cae94d6ac2f"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)