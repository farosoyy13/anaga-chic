import React, { useState } from 'react';
import OwnerRoom from './OwnerRoom';
import Haraj from './Haraj';
import AIChat from './AIChat';
import FakeReviews from './FakeReviews';
import { Crown, Sparkles, MessageCircle, Flag } from 'lucide-react';

// تعريف واجهة الخصائص (Props)
interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [showOwnerRoom, setShowOwnerRoom] = useState(false);
  const [showAI, setShowAI] = useState(false);

  // حماية أمنية: سنقوم لاحقاً بنقل التحقق إلى Firebase Auth
  const handleAdminAccess = () => {
    const password = prompt("أدخل رمز الدخول الملكي:");
    if (password === "Fahd2026") setShowOwnerRoom(true);
  };

  if (showOwnerRoom) return <OwnerRoom onClose={() => setShowOwnerRoom(false)} />;

  return (
    <div style={homeContainerStyle}>
      
      {/* شريط ملكي متحرك: عرض جديد ورسالة دعوة للعرض */}
      <div style={{
        overflow: "hidden", whiteSpace: "nowrap", background: "#fffbe0",
        borderRadius: 9, margin: "12px 2vw 10px 2vw", fontWeight: 800,
        color: "#7a5804", fontSize: "1.18rem", padding: "9px 0", position: "relative",
        border: '1px solid #edd8a7'
      }}>
        <span style={{ animation: "marquee 24s linear infinite", display: "inline-block" }}>
          عندك فستان زواج نظيف أو عباية راقية أو شنطة ماركة؟ أضيفي إعلانك الآن في أناقة CHIC ونضمن لك البيع بأسرع وقت! / إعلان منتجاتك مجاني 10 أيام في أول عرض — لا تفوتي الفرصة!
        </span>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(100vw);}
              100% { transform: translateX(-120vw);}
            }
          `}
        </style>
      </div>

      {/* العبارة الملكية الرسمية */}
      <div style={{
        color: "#d4af37", fontSize: "2.05rem", fontWeight: 900,
        textAlign: "center", margin: "12px 0 9px 0", letterSpacing: "1.5px", textShadow: "0 2px 28px #957918"
      }}>
        عاد إليكم <span style={{ color: "#b08613" }}>موقعكم أناقة CHIC</span>  
        <br />
        <span style={{fontSize:"1.1rem", color:"#fff", background:"#d4af37", padding:"1px 14px", borderRadius:8}}>
          بحلته وإطلالته الجديدة ليواكب ذوقكِ الرفيع ويعكس ملكيتكِ الشخصية
        </span>
      </div>

      {/* عبارة تابي وتمارا خيارات الدفع */}
      <div style={{
        color: "#fff", background: "#381b13", fontSize: "1.11rem", fontWeight: 900,
        textAlign: "center", borderRadius: 8, margin: "12px 2vw", padding: "9px"
      }}>
        💳 <span style={{ color: "#d4af37" }}>متوفر لدينا خيارات الدفع "تابي" و "تمارا"</span> — قسطي مشترياتكِ بلا فوائد!
      </div>

      {/* شريط الإعلانات الملكي الأصلي */}
      <div style={marqueeStyle}>
        ✨ أهلاً بك في أناقة CHIC - فخامة تليق بالجيل الذهبي | تسوقي الآن واستمتعي بالجودة الملكية ✨
      </div>

      {/* زاوية الولاء - فخر شعب طويق والقادة */}
      <div style={loyaltySectionStyle}>
