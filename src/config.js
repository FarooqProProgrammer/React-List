import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDdTk2Jl06s2UeRtfjtfesl2Zqrp0zGvS0",
    authDomain: "chat2-adc88.firebaseapp.com",
    projectId: "chat2-adc88",
    storageBucket: "chat2-adc88.appspot.com",
    messagingSenderId: "829383627489",
    appId: "1:829383627489:web:827e07bcba61ae9a355da0"
  };
export const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const storage  = getStorage(app);
export const db  = getFirestore(app);


