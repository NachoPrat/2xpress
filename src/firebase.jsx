// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq_gfacf6InfAGIXjiUcMG7X8xzKMuTSE",
  authDomain: "loginreact-fed7f.firebaseapp.com",
  projectId: "loginreact-fed7f",
  storageBucket: "loginreact-fed7f.appspot.com",
  messagingSenderId: "781235459277",
  appId: "1:781235459277:web:52c8324e774a0434f44584",
  measurementId: "G-MZPGK2HZD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);