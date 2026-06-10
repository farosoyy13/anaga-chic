import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCK8IWcEV_z9DXj0YKq8IjObm1AzI",
  authDomain: "anaqachic-5.firebaseapp.com",
  projectId: "anaqachic-5",
  storageBucket: "anaqachic-5.firebasestorage.app",
  messagingSenderId: "403484478286",
  appId: "1:403484478286:web:1ce25b87ea7ebec886d38e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
