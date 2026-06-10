import React, { useState } from 'react';
import { auth } from './firebaseconfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Lock, Eye, AlertCircle, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("تم إنشاء الحساب بنجاح - مرحباً بك في عالم أناقة CHIC الملكي");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setLoginAttempts(prev => prev + 1);
      setMessage("خطأ في التصريح الملكي: " + err.message);
      if (loginAttempts >= 2) setMessage("تحذير: محاولات متكررة! سيتم إغلاق البوابة إذا استمر الخطأ.");
    }
  };

  return (
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cairo, sans-serif', position: 'relative' }}>
      
      {/* الاختراع 4: الزر الملكي الخفي للوصول لغرفتك */}
      <button 
        onClick={() => alert("مرحباً بك يا بروفيسور فهد في غرفة التحكم الخفية!")}
        style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', cursor: 'pointer', opacity: 0.05 }}
      >
        <Lock size={20} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#d4af37', fontSize: '2.5rem', margin: 0 }}>أناقة CHIC</h1>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>بوابة الدخول الملكية المحمية</p>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '90%', maxWidth: '350px', background: '#0a0a0a', padding: '30px', borderRadius: '20px', border: '1px solid #d4af37' }}>
        <input type="email" placeholder="البريد الإلكتروني الملكي" onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        
        {/* الاختراع 3: مؤشر قوة التشفير */}
        <div style={{ height: '4px', background: '#333', marginBottom: '20px', borderRadius: '2px' }}>
          <div style={{ width: password.length > 8 ? '100%' : '30%', height: '100%', background: '#d4af37', transition: '0.3s' }}></div>
        </div>

        <button type="submit" style={buttonStyle}>
          {isRegistering ? 'إنشاء حساب جديد' : 'دخول البوابة'}
        </button>
      </form>

      <button onClick={() => setIsRegistering(!isRegistering)} style={{ background: 'none', color: '#888', border: 'none', marginTop: '20px', cursor: 'pointer', fontSize: '0.8rem' }}>
        {isRegistering ? 'لديك حساب ملكي؟ سجل دخول' : 'ليس لديك حساب؟ سجل الآن'}
      </button>

      {message && (
        <div style={{ marginTop: '20px', color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <AlertCircle size={16} /> {message}
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '10px', background: '#000', color: '#d4af37', border: '1px solid #d4af37', boxSizing: 'border-box'
};

const buttonStyle: React.CSSProperties = {
  width: '100%', padding: '15px', background: '#d4af37', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem'
};
