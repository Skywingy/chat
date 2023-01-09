// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDRjJX25HDQBYay-hViGKKF5a_D0K8i5o",
  authDomain: "chat-66527.firebaseapp.com",
  projectId: "chat-66527",
  storageBucket: "chat-66527.appspot.com",
  messagingSenderId: "478876743659",
  appId: "1:478876743659:web:096b9399cd8c9fb1148bae",
  measurementId: "G-5FYKKGWCFQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();