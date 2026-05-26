import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBfItXjR6fjKd5WvhNABhytCdPXfXzxUs",
  authDomain: "amarism-website.firebaseapp.com",
  projectId: "amarism-website",
  storageBucket: "amarism-website.firebasestorage.app",
  messagingSenderId: "968929125613",
  appId: "1:968929125613:web:8872cd5861bfda5ea8d8e4",
  measurementId: "G-F7W2R1EJZJ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);