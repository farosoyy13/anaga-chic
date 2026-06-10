import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // هذه الأداة ضرورية

const firebaseConfig = {
  apiKey: "AIzaSyCK8IWcEV_z9DXj0YKq8IjObm1AzEJsjgE",
  authDomain: "anaqachic-5.firebaseapp.com",
  projectId: "anaqachic-5",
  storageBucket: "anaqachic-5.firebasestorage.app",
  messagingSenderId: "403484478286",
  appId: "1:403484478286:web:1ce25b87ea7ebec8ddec1f",
  measurementId: "G-PZSBZ0BKZN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // هنا قمنا بتهيئة قاعدة البيانات
export const googleProvider = new GoogleAuthProvider();
