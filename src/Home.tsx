import React, { useState, useEffect } from 'react';
import Haraj from './Haraj';

export default function Home() {
  const [currentView, setCurrentView] = useState('HOME');
  const [goldBalance, setGoldBalance] = useState(150);

  // تنسيق الإطار الثابت (يمنع أي تمرير خارج الشاشة)
  const containerStyle: React.CSSProperties = {
    background: '#000',
    color: '#d4af37',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Cairo, sans-serif',
    overflow: 'hidden' // سر القوة: منع أي تمرير طولي
  };

  return (
    <div style={containerStyle} onClick={() => setGoldBalance(b => b + 1)}>
      
      {/* الرأس الثابت */}
      <header style={{ padding: '15px', textAlign: 'center', borderBottom: '1px solid #d4af37', flexShrink: 0 }}>
        <h1 style={{ margin: 0, fontSize: '1.4rem' }}>أناقة CHIC</h1>
        <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>💰 الرصيد الذهبي: {goldBalance} جرام</div>
      </header>

      {/* المحتوى المتغير (القلب النابض) */}
      <main style={{ flex: 1, overflow: 'hidden', padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {currentView === 'HOME' && (
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ border: '1px solid #d4af37', padding: '10px', borderRadius: '10px' }}>
              📡 الرادار: نشط في الرياض، جدة، حفر الباطن
            </div>
            
            <button 
              onClick={() => setCurrentView('HARAJ')}
              style={{ 
                padding: '20px', background: 'linear-gradient(45deg, #bf953f, #fcf6ba)',
                border: 'none', borderRadius: '15px', fontWeight: 'bold', fontSize: '1.2rem',
                cursor: 'pointer', animation: 'pulse 2s infinite'
              }}
            >
              ✨ تصفح منصة الحراج الكبرى ✨
            </button>
            
            <div style={{ padding: '15px', background: '#111', borderRadius: '10px' }}>
              تنبيه المزايدة: 04:59:00
            </div>
          </div>
        )}

        {currentView === 'HARAJ' && (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <button 
              onClick={() => setCurrentView('HOME')} 
              style={{ padding: '10px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', marginBottom: '10px' }}
            >
              ← العودة للرئيسية
            </button>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <Haraj />
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
      `}</style>
    </div>
  );
}
