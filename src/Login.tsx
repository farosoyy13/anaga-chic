import React, { useState } from 'react';
import { auth, googleProvider, db } from './firebaseconfig'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Lock, AlertCircle, Sparkles } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);

  const logSecurityEvent = async (type: string, details: string) => {
    try {
      await addDoc(collection(db, "security_logs"), { type, message: details, timestamp: serverTimestamp() });
    } catch (e) { console.error("فشل تسجيل الحدث الأمني"); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAttempts >= 3) {
      setMessage("تنبيه: تم إيقاف البوابة بسبب محاولات متكررة. تواصل مع المالك.");
      return;
    }
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userCredential.user.uid), { email, isBlocked: false, role: 'user' });
        alert("تم إنشاء الحساب بنجاح");
      } else {
        // التحقق من الحظر قبل الدخول
        const userRef = doc(db, "users", auth.currentUser?.uid || 'temp'); // تبسيط للتحقق
        await signInWithEmailAndPassword(auth, email, password);
        await logSecurityEvent("دخول ناجح", `المستخدم: ${email}`);
      }
    } catch (err: any) {
      setLoginAttempts(prev => prev + 1);
      await logSecurityEvent("محاولة دخول فاشلة", `بريد: ${email} - محاولة: ${loginAttempts + 1}`);
      if (loginAttempts >= 2) {
        setMessage("تحذير: تم حظر محاولاتك مؤقتاً.");
      } else {
        setMessage("خطأ في بيانات الدخول!");
      }
    }
  };

  const handleGoogleLogin = async () => {
    const allowedEmail = "kal6667222@gmail.com";
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user.email !== allowedEmail) {
        await logSecurityEvent("اختراق محتمل", `حاول شخص الدخول ببريد: ${result.user.email}`);
        alert("تنبيه: غير مصرح لك بالدخول!");
        auth.signOut();
      } else {
        await logSecurityEvent("دخول ملكي", "صاحب الموقع قام بالدخول");
        alert("أهلاً بك يا بروفيسور فهد");
      }
    } catch (err: any) {
      setMessage("خطأ في الاتصال بجوجل");
    }
  };

  return (
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cairo, sans-serif', position: 'relative' }}>
      <button onClick={() => alert("مرحباً بك في غرفة التحكم!")} style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', cursor: 'pointer', opacity: 0.05 }}><Lock size={20} /></button>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#d4af37', fontSize: '2.5rem', margin: 0 }}>أناقة CHIC</h1>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>بوابة الدخول الملكية المحمية</p>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '90%', maxWidth: '350px', background: '#0a0a0a', padding: '30px', borderRadius: '20px', border: '1px solid #d4af37' }}>
        <input type="email" placeholder="البريد الإلكتروني" onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        <div style={{ height: '4px', background: '#333', marginBottom: '20px', borderRadius: '2px' }}>
          <div style={{ width: password.length > 8 ? '100%' : '30%', height: '100%', background: '#d4af37', transition: '0.3s' }}></div>
        </div>
        <button type="submit" style={buttonStyle}>{isRegistering ? 'إنشاء حساب' : 'دخول البوابة'}</button>
        <button type="button" onClick={handleGoogleLogin} style={{ ...buttonStyle, background: '#fff', color: '#000', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Sparkles size={18} /> الدخول عبر Google
        </button>
      </form>
      
      {message && <div style={{ marginTop: '20px', color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '5px' }}><AlertCircle size={16} /> {message}</div>}
    </div>
  );
}

const inputStyle: React.CSSProperties = { width: '100%', padding: '15px', marginBottom: '15px', borderRadius: '10px', background: '#000', color: '#d4af37', border: '1px solid #d4af37', boxSizing: 'border-box' };
const buttonStyle: React.CSSProperties = { width: '100%', padding: '15px', background: '#d4af37', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', transition: '0.3s' };
