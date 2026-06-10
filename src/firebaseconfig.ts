import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// إعدادات Firebase الخاصة بمشروعك "أناقة CHIC"
const firebaseConfig = {
  apiKey: "AIzaSyCK8IWcEV_z9DXj0YKq8IjObm1AzEJsjgE",
  authDomain: "anaqachic-5.firebaseapp.com",
  projectId: "anaqachic-5",
  storageBucket: "anaqachic-5.firebasestorage.app",
  messagingSenderId: "403484478286",
  appId: "1:403484478286:web:1ce25b87ea7ebec8ddec1f",
  measurementId: "G-PZSBZ0BKZN"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة الأدوات
export const auth = getAuth(app);
export const db = getFirestore(app);

// تهيئة التحليلات مع التحقق من الدعم (لضمان استقرار الموقع)
export let analytics: any = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});
