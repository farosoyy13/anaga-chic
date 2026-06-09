import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adsData } from './Haraj';

export default function Home() {
  const navigate = useNavigate();
  const [secretMode, setSecretMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(17999);
  const [goldBalance, setGoldBalance] = useState(150); // رصيد ذهب الزبون

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setSecretMode(!secretMode);
      setClickCount(0);
    }
  };

  // زيادة الذهب عند الضغط على أي مكان في الموقع (لتحفيز التفاعل)
  const handleInteract = () => setGoldBalance(prev => prev + 1);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 17999)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div onClick={handleInteract} style={{ 
      background: secretMode ? '#1a0000' : '#000', 
      color: '#d4af37', fontFamily: 'Cairo, sans-serif', padding: '20px', minHeight: '100vh', transition: 'all 0.5s' 
    }}>
      
      {/* 1. خزنة الذهب الرقمي (الميزة الجديدة) */}
      <div style={{ position: 'sticky', top: '10px', background: '#111', padding: '10px', borderRadius: '20px', border: '1px solid #d4af37', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>💰 رصيدك الذهبي:</span>
        <span style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 'bold' }}>{goldBalance} جرام ذهب</span>
      </div>

      <h1 onClick={handleLogoClick} style={{ textAlign: 'center', cursor: 'pointer', borderBottom: '2px solid #d4af37' }}>
        {secretMode ? "👑 أناقة CHIC - النخبة 👑" : "أناقة CHIC"}
      </h1>

      {/* 2. الرادار الملكي */}
      <div style={{ border: '1px solid #d4af37', padding: '10px', borderRadius: '15px', textAlign: 'center', background: '#0a0a0a', marginBottom: '20px' }}>
        <p style={{ margin: 0, fontSize: '0.8rem' }}>📡 رادار المبيعات: <span style={{ color: '#fff' }}>نشط في الرياض، جدة، حفر الباطن</span></p>
      </div>

      {/* 3. الزر الذهبي النابض */}
      <button onClick={() => navigate('/haraj')} style={{ 
        width: '100%', padding: '20px', background: 'linear-gradient(45deg, #bf953f, #fcf6ba)',
        border: 'none', borderRadius: '15px', fontWeight: 'bold', fontSize: '1.3rem', cursor: 'pointer', 
        animation: 'pulse 2s infinite', color: '#000' 
      }}>
        ✨ تصفح منصة الحراج الكبرى ✨
      </button>

      {/* 4. ساعة المزايدة الصفرية */}
      <div style={{ padding: '20px', background: '#111', borderRadius: '15px', textAlign: 'center', border: '1px solid #d4af37', marginTop: '20px' }}>
        <p style={{ fontSize: '0.9rem' }}>تنبيه: تنتهي فرص المزايدة على القطع النادرة بعد:</p>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', textShadow: '0 0 10px #d4af37' }}>
          {Math.floor(timeLeft/3600).toString().padStart(2,'0')}:{Math.floor((timeLeft%3600)/60).toString().padStart(2,'0')}:{(timeLeft%60).toString().padStart(2,'0')}
        </div>
      </div>

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
