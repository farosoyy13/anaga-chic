import React, { useState } from 'react';
import { auth } from './firebaseconfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("تم إنشاء الحساب بنجاح!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setMessage("خطأ: " + err.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) { setMessage("الرجاء إدخال الإيميل أولاً للاسترجاع"); return; }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني.");
    } catch (err: any) {
      setMessage("خطأ في الاسترجاع: " + err.message);
    }
  };

  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '40px', textAlign: 'center', height: '100vh', fontFamily: 'Cairo, sans-serif' }}>
      <h1 style={{ color: '#fff' }}>أناقة CHIC</h1>
      <div style={{ color: '#ff4d4d', marginBottom: '20px', fontWeight: 'bold', border: '1px solid #ff4d4d', padding: '10px', borderRadius: '5px' }}>
        الرجاء وضع الإيميل الحقيقي لاستعادة كلمة المرور لاحقاً.
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: '350px', margin: '0 auto' }}>
        <input type="email" placeholder="البريد الإلكتروني" onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '5px', background: '#1a1a1a', color: '#fff' }} />
        <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '5px', background: '#1a1a1a', color: '#fff' }} />
        
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#d4af37', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          {isRegistering ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
        </button>
      </form>

      <button onClick={() => setIsRegistering(!isRegistering)} style={{ background: 'none', color: '#fff', border: 'none', marginTop: '15px', cursor: 'pointer' }}>
        {isRegistering ? 'لديك حساب؟ سجل دخول' : 'ليس لديك حساب؟ سجل الآن'}
      </button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePasswordReset} style={{ background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '5px', cursor: 'pointer' }}>
          نسيت كلمة المرور؟ استرجعها هنا
        </button>
      </div>
      {message && <p style={{ color: '#ff4d4d' }}>{message}</p>}
    </div>
  );
}
