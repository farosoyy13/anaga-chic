import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // يرجى استبدال هذه البيانات ببيانات مشروعك الخاصة من لوحة تحكم Firebase
  apiKey: "YOUR_API_KEY",
  authDomain: "anaqa-chic.firebaseapp.com",
  projectId: "anaqa-chic",
  storageBucket: "anaqa-chic.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
