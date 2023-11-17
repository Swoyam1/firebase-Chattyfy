import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-cd36b.firebaseapp.com",
  projectId: "chat-cd36b",
  storageBucket: "chat-cd36b.appspot.com",
  messagingSenderId: "1097539654373",
  appId: "1:1097539654373:web:e65b1e833f77d70eb6ba0c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
