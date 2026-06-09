import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adsData } from './Haraj';

export default function Home() {
  const navigate = useNavigate();
  const [secretMode, setSecretMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(17999); // 5 ساعات تقريباً

  // منطق بوابة النخبة
  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setSecretMode(!secretMode);
      setClickCount(0);
    }
  };

  // منطق ساعة المزايدة
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 17999));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ 
      background: secretMode ? '#1a0000' : '#000', 
      color: '#d4af37', 
      fontFamily: 'Cairo, sans-serif', 
      padding: '20px', 
      minHeight: '100vh',
      transition: 'all 0.5s ease' 
    }}>
      
      {/* الشعار - بوابة النخبة */}
      <h1 onClick={handleLogoClick} style={{ textAlign: 'center', cursor: 'pointer', borderBottom: '2px solid #d4af37', paddingBottom: '10px' }}>
        {secretMode ? "👑 أناقة CHIC - مستوى النخبة 👑" : "أناقة CHIC"}
      </h1>

      {/* الرادار الملكي */}
      <div style={{ border: '1px solid #d4af37', padding: '15px', borderRadius: '15px', textAlign: 'center', background: '#0a0a0a' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>📡 رادار المبيعات: <span style={{ color: '#fff' }}>نشط الآن في (الرياض، جدة، الدمام)</span></p>
      </div>

      {/* الزر الذهبي النابض */}
      <button 
        onClick={() => navigate('/haraj')}
        style={{ 
          width: '100%', padding: '20px', margin: '20px 0',
          background: 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728)',
          border: 'none', borderRadius: '15px', fontWeight: 'bold', fontSize: '1.3rem',
          cursor: 'pointer', animation: 'pulse 2s infinite', color: '#000'
        }}
      >
        ✨ تصفح منصة الحراج الكبرى ✨
      </button>

      {/* ساعة المزايدة الصفرية */}
      <div style={{ padding: '20px', background: '#111', borderRadius: '15px', textAlign: 'center', border: '1px solid #d4af37' }}>
        <p style={{ fontSize: '1rem', marginBottom: '10px' }}>تنبيه: تنتهي فرص المزايدة على القطع النادرة بعد:</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', textShadow: '0 0 10px #d4af37' }}>
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* لمسات CSS الملكية */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
      `}</style>
    </div>
  );
}
