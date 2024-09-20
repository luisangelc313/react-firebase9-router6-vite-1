import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBPpsDBsixh3o5gmSSfI6iUVGSTiLCyzPk",
  authDomain: "udemy-react-2024-6c6e0.firebaseapp.com",
  projectId: "udemy-react-2024-6c6e0",
  storageBucket: "udemy-react-2024-6c6e0.appspot.com",
  messagingSenderId: "949223819000",
  appId: "1:949223819000:web:9cedb70b037c4caf51dd0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };