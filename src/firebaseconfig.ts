// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // أضفنا أدوات الدخول
import { getFirestore } from "firebase/firestore"; // أضفنا أدوات قاعدة البيانات
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK8IWcEV_z9DXj0YKq8IjObm1AzEJsjgE",
  authDomain: "anaqachic-5.firebaseapp.com",
  projectId: "anaqachic-5",
  storageBucket: "anaqachic-5.firebasestorage.app",
  messagingSenderId: "403484478286",
  appId: "1:403484478286:web:1ce25b87ea7ebec8ddec1f",
  measurementId: "G-PZSBZ0BKZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// تصدير الأدوات لكي تستخدمها في ملفات المشروع
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); // هذا هو مفتاح الدخول بجوجل
export const analytics = getAnalytics(app);
