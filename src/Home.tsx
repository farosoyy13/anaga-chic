import React, { useState } from 'react';
import OwnerRoom from './OwnerRoom';
import Haraj from './Haraj';
import AIChat from './AIChat';
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
      {/* شريط الإعلانات الملكي */}
      <div style={marqueeStyle}>
        ✨ أهلاً بك في أناقة CHIC - فخامة تليق بالجيل الذهبي | تسوق الآن واستمتع بالجودة الملكية ✨
      </div>

      {/* العنوان الملكي */}
      <h1 onClick={handleAdminAccess} style={titleStyle}>
        أناقة CHIC <Sparkles size={24} />
      </h1>

      {/* زاوية الولاء - فخر شعب طويق */}
      <div style={loyaltySectionStyle}>
        <Crown size={30} color="#d4af37" />
        <h2 style={{ fontSize: '1.1rem', margin: '10px 0' }}>نفتخر بقيادتنا الرشيدة</h2>
        <p style={loyaltyTextStyle}>
          الملك عبدالعزيز والملك سلمان وولي العهد محمد بن سلمان - عز وفخر. 
          شعب طويق الطموح ودرع الخليج الصامد.
        </p>
      </div>

      {/* الأزرار الملكية */}
      <div style={gridStyle}>
        {['فساتين فخمة', 'شنط ماركة', 'الجيل الذهبي', 'عبايات فخمة'].map((item) => (
          <button key={item} style={royalBtn}>{item}</button>
        ))}
      </div>

      {/* الزر الرئيسي */}
      <button onClick={() => onNavigate('HARAJ')} style={mainActionBtn}>
        دخول المنصة الملكية (حراج)
      </button>

      {/* زر المساعد الذكي */}
      <button onClick={() => setShowAI(true)} style={aiFloatBtn}>
        <MessageCircle /> مساعد أناقة الذكي
      </button>

      {showAI && <AIChat onClose={() => setShowAI(false)} />}
    </div>
  );
}

// التنسيقات الملكية (ثابتة لمنع تحرك الشاشة)
const homeContainerStyle: React.CSSProperties = { 
  background: '#050505', color: '#d4af37', height: '100vh', 
  display: 'flex', flexDirection: 'column', alignItems: 'center', 
  fontFamily: 'serif', overflow: 'hidden' 
};

const marqueeStyle: React.CSSProperties = { 
  background: '#1a1a1a', width: '100%', padding: '10px', 
  borderBottom: '1px solid #d4af37', textAlign: 'center', fontWeight: 'bold' 
};

const titleStyle: React.CSSProperties = { cursor: 'pointer', fontSize: '2.5rem', margin: '20px 0' };

const loyaltySectionStyle: React.CSSProperties = { 
  width: '85%', padding: '15px', border: '1px solid #d4af37', 
  borderRadius: '10px', textAlign: 'center', background: '#111' 
};

const loyaltyTextStyle: React.CSSProperties = { fontSize: '0.85rem', color: '#fff', lineHeight: '1.4' };

const gridStyle: React.CSSProperties = { 
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '20px', width: '90%' 
};

const royalBtn: React.CSSProperties = { 
  padding: '12px', background: '#111', border: '1px solid #d4af37', 
  color: '#d4af37', borderRadius: '5px', cursor: 'pointer' 
};

const mainActionBtn: React.CSSProperties = { 
  padding: '15px 30px', background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', 
  border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' 
};

const aiFloatBtn: React.CSSProperties = { 
  position: 'fixed', bottom: '20px', right: '20px', background: '#d4af37', 
  border: 'none', borderRadius: '30px', padding: '12px', cursor: 'pointer', zIndex: 999 
};
