import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgkXkCv5VG_gj8mWeBR_H3chyfIEWQqB8",
  authDomain: "chatapp-8f621.firebaseapp.com",
  projectId: "chatapp-8f621",
  storageBucket: "chatapp-8f621.appspot.com",
  messagingSenderId: "924559359868",
  appId: "1:924559359868:web:cebb593eea8b495f7beef9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
