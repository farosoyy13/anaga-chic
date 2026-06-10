import React, { useState } from 'react';
import { auth, db } from './firebaseconfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { Crown, ShieldCheck, User, Sparkles, Loader2 } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // دالة تسجيل أمنية دقيقة
  const logSecurityEvent = async (type: string, details: string) => {
    try {
      await addDoc(collection(db, "security_logs"), { 
        type, 
        message: details, 
        timestamp: serverTimestamp() 
      });
    } catch (e) { console.error("فشل تسجيل الحدث"); }
  };

  const handleLogin = async (role: string) => {
    if (!email || !password) {
      setMessage("يرجى إدخال البريد وكلمة المرور");
      return;
    }
    
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await logSecurityEvent("دخول ناجح", `دخول ${role}: ${email}`);
      setMessage(`أهلاً بك في بوابة ${role} - جارٍ التوجيه...`);
      // هنا سيقوم الموقع تلقائياً بتحويل المستخدم للمنصة الرئيسية
      window.location.href = '/home'; 
    } catch (err: any) {
      await logSecurityEvent("محاولة دخول فاشلة", `فشل دخول ${role}: ${email}`);
      setMessage("عذراً، بيانات الدخول غير صحيحة.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#0a0a0a', color: '#d4af37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'serif' }}>
      <Sparkles size={50} color="#d4af37" style={{ marginBottom: '20px' }} />
      <h1 style={{ fontSize: '2.8rem', marginBottom: '10px', textShadow: '0 0 15px #d4af37' }}>أناقة CHIC</h1>
      <p style={{ marginBottom: '40px', letterSpacing: '2px' }}>البوابة الملكية الموثوقة</p>

      <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="email" placeholder="البريد الإلكتروني" onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

        <button disabled={loading} onClick={() => handleLogin('العرش')} style={buttonStyle}>
          {loading ? <Loader2 className="animate-spin" /> : <><Crown size={20} /> دخول صاحب الموقع</>}
        </button>
        <button disabled={loading} onClick={() => handleLogin('الإدارة')} style={{...buttonStyle, background: 'transparent', border: '1px solid #d4af37'}}>
          <ShieldCheck size={20} /> دخول المشرفين
        </button>
        <button disabled={loading} onClick={() => handleLogin('الزوار')} style={{...buttonStyle, background: '#1a1a1a'}}>
          <User size={20} /> دخول الزوار
        </button>
      </div>

      {message && <p style={{ marginTop: '25px', padding: '10px', borderRadius: '5px', background: '#1a1a1a', border: '1px solid #d4af37' }}>{message}</p>}
    </div>
  );
}

const inputStyle = { width: '100%', padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '8px', fontSize: '16px' };
const buttonStyle = { width: '100%', padding: '15px', background: '#d4af37', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 'bold', fontSize: '16px' };
