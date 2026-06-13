import React, { useState } from 'react';
import { auth } from './firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Loader2, Lock, EyeOff } from 'lucide-react';

interface Props {
  role: 'OWNER' | 'ADMIN' | 'GUEST';
  onSuccess: (stealth?: boolean) => void; // متغير خاص بوضع التخفي
  onBack: () => void;
}

const ROLE_LABELS = {
  OWNER: 'دخول صاحب الموقع',
  ADMIN: 'دخول المشـرفين',
  GUEST: 'دخول الزوار'
}

export default function LoginForm({ role, onSuccess, onBack }: Props) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [stealth, setStealth] = useState(false); // حالة الدخول المخفي

  const handleLogin = async () => {
    if (!email || !pwd) { setMsg('يرجى تعبئة جميع الحقول.'); return; }
    setLoading(true); setMsg('');
    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      // ننقل الحالة onSuccess (سواء كان دخول مخفي أو عادي)
      if (role === "OWNER") {
        onSuccess(stealth);
      } else {
        onSuccess();
      }
    } catch (err: any) {
      setMsg('بيانات الاعتماد غير صحيحة.');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minWidth: 310, minHeight: 320,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "#fffbe7", borderRadius: 13, boxShadow: "0 2px 24px #2221",
      padding: 25, position: "relative"
    }}>
      <h2 style={{
        fontFamily: "serif", color: "#bfa246",
        fontWeight: 800, letterSpacing: 2, marginBottom: 12
      }}>
        {ROLE_LABELS[role]}
      </h2>
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          marginBottom: 11, padding: 11, width: "98%",
          borderRadius: 6, border: "1.4px solid #f5d87d", fontFamily: "inherit"
        }}
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        value={pwd}
        onChange={e => setPwd(e.target.value)}
        style={{
          marginBottom: 17, padding: 11, width: "98%",
          borderRadius: 6, border: "1.4px solid #f5d87d", fontFamily: "inherit"
        }}
      />

      {/* مربع الدخول المخفي يظهر فقط لصاحب الموقع */}
      {role === "OWNER" && (
        <label style={{
          display: "flex", alignItems: "center",
          gap: 7, marginBottom: 13, color: "#6c5e2a",
          fontWeight: 600, cursor: "pointer", fontSize: "1.02rem"
        }}>
          <input
            type="checkbox"
            checked={stealth}
            onChange={e => setStealth(e.target.checked)}
            style={{ accentColor: "#bfa246", width: 18, height: 18 }}
          />
          <EyeOff size={17} style={{ marginTop: -2 }} />
          <span>
            دخول مخفي (لن يظهر صوت أو شريط دخول لصاحب الموقع)
          </span>
        </label>
      )}

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{
          background: "#d4af37", color: "#211b08", padding: "11px 40px", fontSize: 16,
          border: "none", borderRadius: 8, fontWeight: 700, marginBottom: 17,
          boxShadow: "0 2px 8px #d4af378c", cursor: "pointer", fontFamily: "serif"
        }}>
        {loading ? <Loader2 className="animate-spin" /> : <span>تسجيل الدخول</span>}
      </button>
      <button onClick={onBack} style={{
        background: "transparent", color: "#a29357",
        textDecoration: "underline", border: "none", cursor: "pointer",
        padding: 0, fontFamily: "inherit"
      }}>
        الرجوع للصفحة الرئيسية
      </button>
      <div style={{
        color: "#d82020", marginTop: 12, minHeight: 27,
        fontSize: "0.97rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 7
      }}>
        {msg ? <><Lock size={16}/>{msg}</> : null}
      </div>
      {/* تنبيه باللون الأحمر أسفل النموذج */}
      <div style={{ color: "#e93a00", fontSize: "0.7rem", paddingTop: 9 }}>
        ⚠️ الرجاء التسجيل بالإيميل الصحيح، لن يتم استعادة كلمة المرور إلا عبر البريد الإلكتروني.
      </div>
    </div>
  );
}