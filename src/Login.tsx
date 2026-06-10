import React, { useState } from 'react';
import { auth, googleProvider, db } from './firebaseconfig'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// هنا قمت باستيراد الأدوات التي تحتاجها لضمان عمل النظام
import { doc, setDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { Lock, AlertCircle, Sparkles } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');

  // دالة تسجيل الأحداث الأمنية في "غرفتك الخاصة"
  const logSecurityEvent = async (type: string, details: string) => {
    try {
      await addDoc(collection(db, "security_logs"), { 
        type, 
        message: details, 
        timestamp: serverTimestamp() 
      });
    } catch (e) { console.error("فشل تسجيل الحدث"); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // إنشاء سجل للمستخدم الجديد في قاعدة البيانات
        await setDoc(doc(db, "users", userCredential.user.uid), { 
          email: email, 
          isBlocked: false 
        });
        alert("تم إنشاء حسابك الملكي بنجاح");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        await logSecurityEvent("دخول", `دخول المستخدم: ${email}`);
      }
    } catch (err: any) {
      await logSecurityEvent("محاولة فاشلة", `فشل دخول: ${email}`);
      setMessage("خطأ في البيانات أو الحساب محظور.");
    }
  };

  const handleGoogleLogin = async () => {
    const allowedEmail = "kal6667222@gmail.com";
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user.email !== allowedEmail) {
        await logSecurityEvent("محاولة اختراق", `شخص غير مصرح له: ${result.user.email}`);
        auth.signOut();
        alert("تنبيه: لا تملك صلاحية الدخول!");
      } else {
        alert("أهلاً بك يا بروفيسور فهد");
      }
    } catch (err: any) {
      setMessage("خطأ في الاتصال بجوجل");
    }
  };

  return (
    // واجهة الدخول (نفس تصميمك السابق)
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>أناقة CHIC</h1>
      <form onSubmit={handleSubmit} style={{ width: '90%', maxWidth: '350px' }}>
        <input type="email" placeholder="البريد الإلكتروني" onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        <button type="submit" style={buttonStyle}>{isRegistering ? 'تسجيل جديد' : 'دخول'}</button>
        <button type="button" onClick={handleGoogleLogin} style={{ ...buttonStyle, background: '#fff', marginTop: '10px' }}>الدخول بجوجل</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

const inputStyle = { width: '100%', padding: '15px', marginBottom: '10px', background: '#000', color: '#d4af37', border: '1px solid #d4af37' };
const buttonStyle = { width: '100%', padding: '15px', background: '#d4af37', color: '#000', border: 'none', cursor: 'pointer' };
