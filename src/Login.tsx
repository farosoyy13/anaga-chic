import React, { useState } from 'react';
import { auth } from './firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // سيتم إعادة توجيه المستخدم تلقائياً بواسطة App.tsx
    } catch (err) {
      setError("بيانات الدخول غير صحيحة، يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '50px', textAlign: 'center', height: '100vh', fontFamily: 'Cairo, sans-serif' }}>
      <h1 style={{ color: '#fff' }}>أناقة CHIC</h1>
      <h2 style={{ marginBottom: '30px' }}>تسجيل الدخول الملكي</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <input 
          type="email" 
          placeholder="البريد الإلكتروني" 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #d4af37', background: '#1a1a1a', color: '#fff' }} 
        />
        <input 
          type="password" 
          placeholder="كلمة المرور" 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #d4af37', background: '#1a1a1a', color: '#fff' }} 
        />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#d4af37', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          دخول
        </button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
}
