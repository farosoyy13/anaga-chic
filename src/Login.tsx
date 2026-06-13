```tsx
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  Crown, ShieldCheck, User, Sparkles, Loader2, Lock
} from "lucide-react";

// اقتباسات فخمة متغيرة
const QUOTES = [
  "الأناقة ثقة... والفخامة هوية.",
  "من بوابة القصر يبدأ التميز.",
  "لكل ملك قصر.. ولكل أناقة منصة.",
  "الجمال في التفاصيل الملكية.",
  "أهلاً بمن يستحقون الترف.",
  "تميزك لا يشبه أحداً.",
];

// تعريف الخصائص المستقبلة (إمكانية تمرير: onLoginSuccess)
interface LoginProps {
  onLoginSuccess: () => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [theme, setTheme] = useState(true); // True => ملكي، False => أبيض أنيق

  // منع النسخ واللصق
  useEffect(() => {
    const killCopy = (e:any) => { e.preventDefault(); return false; }
    document.addEventListener("copy", killCopy);
    document.addEventListener("cut", killCopy);
    document.addEventListener("contextmenu", killCopy);
    return () => {
      document.removeEventListener("copy", killCopy);
      document.removeEventListener("cut", killCopy);
      document.removeEventListener("contextmenu", killCopy);
    };
  }, []);

  // عرض اقتباس جديد كل 4 ثوان
  useEffect(() => {
    const intrv = setInterval(() => setQuoteIndex(q => (q + 1) % QUOTES.length), 4000);
    return () => clearInterval(intrv);
  }, []);

  // تحصين سجلات الأمن
  const logSecurityEvent = async (type: string, details: string) => {
    try {
      await addDoc(collection(db, "security_logs"), {
        type,
        message: details,
        timestamp: serverTimestamp(),
        ip_info: "Protected"
      });
    } catch (e) {}
  };

  const handleLogin = async (role: string) => {
    if (!email || !password) {
      setMessage("يرجى إدخال البريد وكلمة المرور");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await logSecurityEvent("SUCCESSFUL_AUTH", `Role: ${role} | User: ${email}`);
      onLoginSuccess();
    } catch (err) {
      await logSecurityEvent("FAILED_AUTH_ATTEMPT", `Role: ${role} | User: ${email}`);
      setMessage("بيانات الاعتماد مرفوضة. تم تسجيل المحاولة.");
    } finally {
      setLoading(false);
    }
  };

  // تشغيل صوت ترحيبي (يمكنك إزالته بسهولة)
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    try {
      audio = new Audio("/sounds/welcome.mp3");
      audio.volume = 0.07; // منخفض وراقي
      audio.play();
    } catch (e) {}
    return () => { if (audio) { audio.pause(); audio = null; } }
  }, []);

  // (أفكار جمالية) تأثير الشرار على الأزرار
  const [hovered, setHovered] = useState<string | null>(null);

  // (أيضاً يمكنك إضافة درع أمان SVG متحرك في الزاوية)
  const SecurityShield = () => (
    <svg width="60" height="60" style={{
      position: 'absolute',
      top: 18, left: 18, animation: "rotate 3s linear infinite"
    }}>
      <g>
        <circle cx="30" cy="30" r="27" stroke="#d4af37" strokeWidth="3" fill="none" opacity="0.4"/>
        <polygon points="30,8 45,20 52,37 30,55 8,37 15,20" fill="#d4af37" opacity="0.2"/>
      </g>
      <style>
        {`@keyframes rotate { 100% {transform: rotate(360deg);} }`}
      </style>
    </svg>
  );

  return (
    <div style={{
      background: theme ? "#0a0a0a" : "#fafafa",
      color: theme ? "#d4af37" : "#3a2c13",
      height: '100vh', minHeight: '100dvh',
      width: '100vw', minWidth: "100dvw",
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: theme ? 'serif' : 'sans-serif',
      position: 'relative', overflow: 'hidden'
    }}>
      <SecurityShield/>
      <div style={{position: "absolute", top: 35, right: 35}}>
        <button aria-label="تبديل السمة" style={{
          background: 'none', border: 'none', outline: 'none',
          cursor: 'pointer', fontSize: 27, color: theme ? '#fff' : '#947a3b'
        }}
        onClick={() => setTheme((v) => !v)}>
          <Sparkles size={28}/>{theme ? "ملكي" : "أنيق"}
        </button>
      </div>

      {/* الرسالة الانيميشن الافتتاحية */}
      <div
        style={{
          fontSize: '1.2rem', marginBottom: 12,
          letterSpacing: '1px',
          opacity: 0.92,
          animation: "fadeInUp 1.7s both"
        }}>
        <span>مرحباً بك في <b>قصر أناقة CHIC الرقمي</b>!</span>
      </div>

      <h1 style={{
        fontSize: '2.9rem', margin: '0 0 8px 0',
        textShadow: theme
          ? '0 0 20px #d4af37' : '0 0 12px #eedd91'
      }}>أناقة CHIC</h1>
      {/* الاقتباس المتغير */}
      <div style={{
        minHeight: "28px", marginBottom: 12, transition: "all 0.4s"
      }}>
        <span style={{
          padding: "5px 20px", borderRadius: 15,
          background: theme ? '#222' : '#f5ecc4a8',
          fontWeight: 600, fontSize: '1.09rem'
        }}>
          {QUOTES[quoteIndex]}
        </span>
      </div>
      <p style={{
        marginBottom: 13, letterSpacing: '2.2px',
        fontSize: '0.96rem', opacity: '0.7'
      }}>
        البوابة الملكية المحصنة | <b>2026</b>
      </p>

      {/* نموذج البيانات */}
      <div style={{
        width: '90%', maxWidth: '370px',
        display: 'flex', flexDirection: 'column',
        gap: '15px', background: theme ? "#161616a2" : "#fff7e2e5",
        padding: "24px", borderRadius: 10, boxShadow: "0 2px 24px #3332"
      }}>
        <input
          type="email" placeholder="البريد الملكي"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%', padding: '14px',
            background: theme ? '#111' : '#fff',
            color: theme ? '#d4af37' : '#947a3b',
            border: '2px solid #d4af37', borderRadius: '6px',
            textAlign: 'center', fontSize: 16,
            fontFamily: "inherit", transition: "all 0.2s"
          }} />
        <input
          type="password" placeholder="كلمة المرور"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%', padding: '14px',
            background: theme ? '#111' : '#fff',
            color: theme ? '#d4af37' : '#947a3b',
            border: '2px solid #d4af37', borderRadius: '6px',
            textAlign: 'center', fontSize: 15,
            fontFamily: "inherit", transition: "all 0.2s"
          }} />

        {/* الأزرار الثلاثية الفاخرة */}
        <button
          disabled={loading}
          onMouseEnter={() => setHovered("owner")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleLogin('OWNER')}
          style={{
            ...baseButtonStyle,
            background: theme ? "#d4af37" : "#ffeabf",
            color: theme ? "#000" : "#947a3b",
            boxShadow: hovered === "owner" ? "0 0 26px 3px #d4af3799" : "0 0 10px #cbb44a55"
          }}>
          {loading ? <Loader2 className="animate-spin" /> : <><Crown size={20} />دخول صاحب الموقع (العرش)</>}
        </button>

        <button
          disabled={loading}
          onMouseEnter={() => setHovered("admin")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleLogin('ADMIN')}
          style={{
            ...baseButtonStyle,
            background: theme ? "transparent" : "#fff7e5",
            color: "#d4af37",
            border: "2px solid #d4af37",
            boxShadow: hovered === "admin" ? "0 0 18px #a89c62c5" : ""
          }}>
          <ShieldCheck size={19} />دخول المشرفين
        </button>

        <button
          disabled={loading}
          onMouseEnter={() => setHovered("guest")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleLogin('GUEST')}
          style={{
            ...baseButtonStyle,
            background: theme ? "#1a1a1a" : "#e6dacb",
            color: "#d4af37",
            boxShadow: hovered === "guest" ? "0 0 12px #b3a37090" : ""
          }}>
          <User size={19} />دخول الزوار
        </button>
      </div>

      {message && <p style={{
        marginTop: '19px', fontSize: '0.9rem',
        display: 'flex', alignItems: 'center', gap: '8px',
        background: '#2a2a2a55', borderRadius: 7, padding: "6px 13px"
      }}>
        <Lock size={14} /> {message}
      </p>
      }

      {/* توقيع صاحب المنصة */}
      <div style={{
        position: 'absolute', bottom: 12, left: 0, right: 0,
        width: "100vw", display: "flex",
        flexDirection: "column", alignItems: "center",
        justifyContent: "center", pointerEvents: "none"
      }}>
        <span style={{
          color: "#d4af37CC", fontFamily: 'serif',
          fontSize: "1.02rem", fontWeight: 700,
          letterSpacing: "2.1px", textShadow: "0 0 16px #cbb44a9c",
          animation: "fadeInUp 2.5s 1.8s both"
        }}>
          ✒️ الأستاذ: فهد بن حمود بن فهد الشمري - صاحب منصة الأناقة الملكية
        </span>
      </div>

      {/* أنماط التحريك */}
      <style>
        {`
        @keyframes fadeInUp {
          from {opacity: 0; transform: translateY(25px);}
          to {opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </div>
  );
}

// أنماط أساس الزر
const baseButtonStyle: React.CSSProperties = {
  padding: "14px", cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center", gap: "9px",
  fontWeight: "bold", border: 'none', fontSize: 16, borderRadius: 7,
  letterSpacing: "1px", transition: "all 0.16s", fontFamily: "inherit"
};