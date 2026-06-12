import React, { useState } from 'react';
import { auth, db } from './firebaseconfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { Crown, ShieldCheck, User, Sparkles, Loader2, Lock } from 'lucide-react';

// تعريف الواجهة لتحديد نوع الخصائص المستقبلة (TypeScript Strict Mode)
interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // تحصين سجلات الأمن: تسجيل محاولات الدخول مع حماية من الأخطاء
  const logSecurityEvent = async (type: string, details: string) => {
    try {
      await addDoc(collection(db, "security_logs"), { 
        type, 
        message: details, 
        timestamp: serverTimestamp(),
        ip_info: "Protected" // تمويه للمعلومات الحساسة
      });
    } catch (e) { console.error("Security Logging Restricted"); }
  };

  const handleLogin = async (role: string) => {
    if (!email || !password) {
      setMessage("يرجى إدخال البيانات الموثقة");
      return;
    }
    
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await logSecurityEvent("SUCCESSFUL_AUTH", `Role: ${role} | User: ${email}`);
      onLoginSuccess(); // الانتقال الداخلي الآمن دون تحديث الصفحة
    } catch (err) {
      await logSecurityEvent("FAILED_AUTH_ATTEMPT", `Role: ${role} | User: ${email}`);
      setMessage("بيانات الاعتماد مرفوضة. تم تسجيل المحاولة.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <Sparkles size={60} color="#d4af37" style={{ marginBottom: '15px' }} />
      <h1 style={titleStyle}>أناقة CHIC</h1>
      <p style={subtitleStyle}>البوابة الملكية المحصنة | 2026</p>

      <div style={formStyle}>
        <input type="email" placeholder="البريد المعتمد" onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />

        <button disabled={loading} onClick={() => handleLogin('OWNER')} style={ownerButtonStyle}>
          {loading ? <Loader2 className="animate-spin" /> : <><Crown size={20} /> دخول صاحب الموقع (العرش)</>}
        </button>
        
        <button disabled={loading} onClick={() => handleLogin('ADMIN')} style={adminButtonStyle}>
          <ShieldCheck size={20} /> دخول المشرفين
        </button>
        
        <button disabled={loading} onClick={() => handleLogin('GUEST')} style={guestButtonStyle}>
          <User size={20} /> دخول الزوار
        </button>
      </div>

      {message && <p style={messageStyle}><Lock size={14} /> {message}</p>}
    </div>
  );
}

// التنسيقات الفاخرة (CSS-in-JS لضمان الاستقرار)
const containerStyle: React.CSSProperties = { background: '#0a0a0a', color: '#d4af37', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'serif' };
const titleStyle: React.CSSProperties = { fontSize: '3rem', margin: '0', textShadow: '0 0 20px #d4af37' };
const subtitleStyle: React.CSSProperties = { marginBottom: '30px', letterSpacing: '3px', fontSize: '0.9rem', opacity: '0.8' };
const formStyle: React.CSSProperties = { width: '90%', maxWidth: '350px', display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle: React.CSSProperties = { width: '100%', padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '4px', textAlign: 'center' };
const baseButtonStyle: React.CSSProperties = { padding: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontWeight: 'bold', border: '1px solid #d4af37', transition: '0.3s' };
const ownerButtonStyle: React.CSSProperties = { ...baseButtonStyle, background: '#d4af37', color: '#000' };
const adminButtonStyle: React.CSSProperties = { ...baseButtonStyle, background: 'transparent', color: '#d4af37' };
const guestButtonStyle: React.CSSProperties = { ...baseButtonStyle, background: '#1a1a1a', color: '#d4af37' };
const messageStyle: React.CSSProperties = { marginTop: '20px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' };
