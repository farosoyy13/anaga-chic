import React, { useState } from 'react';
import OwnerRoom from './OwnerRoom';
import Haraj from './Haraj';
import AIChat from './AIChat';
import FakeReviews from './FakeReviews';
import { Crown, Sparkles, MessageCircle, Flag } from 'lucide-react';

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
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

      {/* شريط الإعلانات الملكي الأصلي (يمكنك تكراره أو تغييره) */}
      <div style={marqueeStyle}>
        ✨ أهلاً بك في أناقة CHIC - فخامة تليق بالجيل الذهبي | تسوقي الآن واستمتعي بالجودة الملكية ✨
      </div>

      {/* زاوية الولاء - فخر شعب طويق والقادة */}
      <div style={loyaltySectionStyle}>
        <Crown size={30} color="#d4af37" />
        <h2 style={{ fontSize: '1.1rem', margin: '10px 0' }}>نفتخر بقيادتنا الرشيدة</h2>
        <p style={loyaltyTextStyle}>
          الملك عبدالعزيز، الملك سلمان، وولي العهد محمد بن سلمان — عز وفخر.<br />
          مدح خاص لشعب طويق الشجاع، ودرع الخليج الثابت. الخليج كلّه عز وكرامة.
        </p>
      </div>

      {/* الأزرار الملكية */}
      <div style={gridStyle}>
        {[
          'فساتين أعراس / حفلات', 'عبايات ملكية', 'شنط ماركة',
          'أحذية أنيقة', 'الجيل الذهبي', 'الأسر المنتجة'
        ].map((item, idx) => (
          <button
            key={item}
            style={{ ...royalBtn, background: idx % 2 ? "#111" : "#d4af37", color: idx % 2 ? "#d4af37" : "#23210b" }}
            onClick={() =>
              onNavigate ?
                (item === "الجيل الذهبي" ? onNavigate('SECTIONS') :
                  item === "الأسر المنتجة" ? onNavigate('PRODUCTIVE_FAMILIES') :
                  onNavigate('SECTIONS'))
                : undefined
            }
          >
            {item}
          </button>
        ))}
      </div>

      {/* زر حراج الملكي */}
      <button onClick={() => onNavigate('HARAJ')} style={mainActionBtn}>
        <Flag style={{marginLeft:7}} /> دخول منصة الحراج الملكية
      </button>

      {/* زر المساعد الذكي */}
      <button onClick={() => setShowAI(true)} style={aiFloatBtn}>
        <MessageCircle /> مساعد أناقة الذكي
      </button>

      {/* التعليقات الوهمية المقنعة جداً */}
      <div style={{width:"100%",maxWidth:670,margin:"28px auto 0 auto"}}><FakeReviews /></div>

      {showAI && <AIChat onClose={() => setShowAI(false)} />}
    </div>
  );
}

// ============== تنسيقات ملكية ثابتة ==============
const homeContainerStyle: React.CSSProperties = { 
  background: '#050505', color: '#d4af37', minHeight: '100vh', 
  display: 'flex', flexDirection: 'column', alignItems: 'center', 
  fontFamily: 'serif', overflow: 'hidden'
};

const marqueeStyle: React.CSSProperties = { 
  background: '#1a1a1a', width: '97%', padding: '10px',
  borderBottom: '1.5px solid #d4af37', textAlign: 'center', fontWeight: 'bold',
  margin: "18px 0 10px 0", borderRadius: 8, fontSize: "1.04rem"
};

const titleStyle: React.CSSProperties = { cursor: 'pointer', fontSize: '2.5rem', margin: '20px 0' };

const loyaltySectionStyle: React.CSSProperties = { 
  width: '87%', padding: '15px', border: '1.5px solid #d4af37', 
  borderRadius: '10px', textAlign: 'center', background: '#111', margin: "17px 0"
};

const loyaltyTextStyle: React.CSSProperties = { fontSize: '0.91rem', color: '#fff', lineHeight: '1.5' };

const gridStyle: React.CSSProperties = { 
  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', padding: '24px', width: '96%',
  justifyContent:'center'
};

const royalBtn: React.CSSProperties = { 
  padding: '13px 10px', background: '#111', border: '2px solid #d4af37', 
  color: '#d4af37', borderRadius: '9px', cursor: 'pointer', fontWeight: 900,
  fontSize: 18, boxShadow: "0 2px 16px #ebd17c44", transition: "0.17s"
};

const mainActionBtn: React.CSSProperties = { 
  padding: '15px 36px', background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', 
  border: 'none', borderRadius: '35px', fontWeight: 'bold', cursor: 'pointer',
  margin: '15px 0 29px 0', fontSize: 18, boxShadow: "0 6px 18px #d4af3740"
};

const aiFloatBtn: React.CSSProperties = { 
  position: 'fixed', bottom: '22px', right: '22px', background: '#d4af37', 
  border: 'none', borderRadius: '30px', padding: '13px 18px', fontWeight:900,
  cursor: 'pointer', zIndex: 999 , color:"#1a1410", fontSize:18,
  display:"flex", alignItems:'center', gap:7
};