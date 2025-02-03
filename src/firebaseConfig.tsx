import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPFoC37oRqDEg0XtCVzSr7qu88FeT6INo",
  authDomain: "reactauth-3580f.firebaseapp.com",
  projectId: "reactauth-3580f",
  storageBucket: "reactauth-3580f.firebasestorage.app",
  messagingSenderId: "554406935796",
  appId: "1:554406935796:web:c3c32dab2881b06701b2a1"
};

// Initialize Firebase
const appReact = initializeApp(firebaseConfig);
export default appReact;