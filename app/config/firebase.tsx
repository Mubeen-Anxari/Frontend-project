// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBW_sWeXgqws7hvMsRkoznUnQVjocIVUIo",
  authDomain: "food-33120.firebaseapp.com",
  projectId: "food-33120",
  storageBucket: "food-33120.appspot.com",
  messagingSenderId: "1022587919221",
  appId: "1:1022587919221:web:578e41ad466c51d591513c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
