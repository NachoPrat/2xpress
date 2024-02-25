import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHCzH0sRkktZjJ5rUV6OHNkarZrX5VmYs",
  authDomain: "chat-cfe8c.firebaseapp.com",
  projectId: "chat-cfe8c",
  storageBucket: "chat-cfe8c.appspot.com",
  messagingSenderId: "626075331981",
  appId: "1:626075331981:web:6e819c21e158742036e1c4" //mi firebase
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()