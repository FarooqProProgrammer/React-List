import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkUQGaTuKEg6xmsTfXdSnvRUZNScrzuIw",
    authDomain: "chat-7ae03.firebaseapp.com",
    projectId: "chat-7ae03",
    storageBucket: "chat-7ae03.appspot.com",
    messagingSenderId: "918272609613",
    appId: "1:918272609613:web:dcb27a89bd40099a6dfb04"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()