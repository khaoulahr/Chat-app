import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-fb262.firebaseapp.com",
  projectId: "chat-fb262",
  storageBucket: "chat-fb262.appspot.com",
  messagingSenderId: "811386838215",
  appId: "1:811386838215:web:6adc3f277b480b25e1b2e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
