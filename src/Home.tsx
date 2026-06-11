import React, { useState } from 'react';
import OwnerRoom from './OwnerRoom';
import Haraj from './Haraj';
import AIChat from './AIChat';
import { Crown, Sparkles, MessageCircle } from 'lucide-react';

export default function Home() {
  const [showOwnerRoom, setShowOwnerRoom] = useState(false);
  const [view, setView] = useState('HOME');
  const [showAI, setShowAI] = useState(false);

  const handleAdminAccess = () => {
    const password = prompt("أدخل رمز الدخول الملكي:");

    if (password === "Fahd2026") {
      setShowOwnerRoom(true);
    } else {
      alert("رمز خاطئ!");
    }
  };

  if (showOwnerRoom) {
    return <OwnerRoom onClose={() => setShowOwnerRoom(false)} />;
  }

  if (view === 'HARAJ') {
    return (
      <div style={{ background: '#000', minHeight: '100vh', padding: '20px' }}>
        <button
          onClick={() => setView('HOME')}
          style={navButtonStyle}
        >
          العودة للرئيسية
        </button>

        <Haraj />
      </div>
    );
  }

  return (
    <div
      style={{
        background: '#050505',
        color: '#d4af37',
        minHeight: '100vh',
        fontFamily: 'serif',
      }}
    >
      <div
        style={{
          background: '#1a1a1a',
          padding: '10px',
          overflow: 'hidden',
          borderBottom: '1px solid #d4af37',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
            animation: 'scrollText 15s linear infinite',
          }}
        >
          ✨ أهلاً بك في أناقة CHIC - فخامة تليق بالجيل الذهبي |
          تسوق الآن واستمتع بالجودة الملكية ✨
        </div>
      </div>

      <h1
        onClick={handleAdminAccess}
        style={{
          textAlign: 'center',
          cursor: 'pointer',
          fontSize: '3rem',
          margin: '20px 0',
          color: '#d4af37',
        }}
      >
        أناقة CHIC <Sparkles size={24} />
      </h1>

      <div
        style={{
          margin: '20px',
          padding: '20px',
          border: '1px solid #d4af37',
          borderRadius: '15px',
          textAlign: 'center',
        }}
      >
        <Crown size={40} style={{ marginBottom: '10px' }} />

        <h2 style={{ fontSize: '1.2rem' }}>
          نفتخر بقيادتنا الرشيدة
        </h2>

        <p
          style={{
            fontSize: '0.9rem',
            color: '#fff',
          }}
        >
          الملك عبدالعزيز والملك سلمان وولي العهد محمد بن سلمان -
          عز وفخر. شعب طويق الطموح ودرع الخليج الصامد،
          أنتم النبض والروح.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          padding: '20px',
        }}
      >
        {[
          'فساتين فخمة',
          'شنط ماركة',
          'الجيل الذهبي',
          'عبايات فخمة',
        ].map((item) => (
          <button key={item} style={royalBtn}>
            {item}
          </button>
        ))}
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <button
          onClick={() => setView('HARAJ')}
          style={mainActionBtn}
        >
          دخول المنصة الملكية (حراج)
        </button>
      </div>

      <button
        onClick={() => setShowAI(true)}
        style={aiFloatBtn}
      >
        <MessageCircle />
        مساعد أناقة الذكي
      </button>

      {showAI && (
        <AIChat onClose={() => setShowAI(false)} />
      )}

      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}

const navButtonStyle: React.CSSProperties = {
  padding: '10px 20px',
  background: '#d4af37',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const royalBtn: React.CSSProperties = {
  padding: '15px',
  background: '#111',
  border: '1px solid #d4af37',
  color: '#d4af37',
  borderRadius: '8px',
  cursor: 'pointer',
};

const mainActionBtn: React.CSSProperties = {
  padding: '20px 40px',
  background: 'linear-gradient(45deg, #bf953f, #fcf6ba)',
  border: 'none',
  borderRadius: '50px',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  cursor: 'pointer',
};

const aiFloatBtn: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  background: '#d4af37',
  border: 'none',
  borderRadius: '30px',
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  cursor: 'pointer',
  zIndex: 999,
};
