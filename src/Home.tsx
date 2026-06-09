import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { adsData } from './Haraj';

export default function Home() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState('');

  // نظام التنبيهات الحية (فكرة مجرمة للمصداقية)
  useEffect(() => {
    const messages = [
      "تم بيع شنطة هيرميس في الرياض قبل قليل!",
      "فهد من حفر الباطن اشترى عباية مطرزة الآن!",
      "نورة من جدة أضافت فستاناً جديداً للمنصة!",
      "تم تحديث أسعار الجيل الذهبي للعبايات!"
    ];

    const interval = setInterval(() => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setNotification(randomMsg);
      setTimeout(() => setNotification(''), 4000); // اختفاء التنبيه بعد 4 ثواني
    }, 10000); // يظهر تنبيه كل 10 ثواني

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: '#000', color: '#d4af37', fontFamily: 'Cairo, sans-serif', padding: '20px', minHeight: '100vh' }}>
      
      {/* نظام التنبيهات المنبثق */}
      {notification && (
        <div style={{ position: 'fixed', top: '20px', left: '10px', right: '10px', background: '#d4af37', color: '#000', padding: '15px', borderRadius: '10px', zIndex: 1000, textAlign: 'center', fontWeight: 'bold' }}>
          {notification}
        </div>
      )}

      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>أناقة CHIC</h1>

      {/* زر الحراج بنظام النبض الذهبي (Golden Pulse) */}
      <button 
        onClick={() => navigate('/haraj')}
        style={{ 
          width: '100%', 
          padding: '20px', 
          background: 'linear-gradient(45deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)',
          color: '#000', 
          border: 'none', 
          borderRadius: '15px', 
          fontWeight: 'bold', 
          fontSize: '1.2rem', 
          cursor: 'pointer',
          boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
          animation: 'pulse 2s infinite'
        }}
      >
        ✨ تصفح منصة الحراج الكبرى ✨
      </button>

      {/* الشاشة المصغرة */}
      <div style={{ marginTop: '30px', padding: '20px', background: '#111', borderRadius: '15px', border: '1px solid #d4af37' }}>
        <h2 style={{ color: '#d4af37', textAlign: 'center', fontSize: '1.2rem' }}>أحدث معروضات الأعضاء</h2>
        {adsData.slice(0, 3).map((ad) => (
          <div key={ad.id} style={{ borderBottom: '1px solid #333', padding: '10px 0' }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              <span style={{ color: '#fff' }}>{ad.item}</span> - {ad.price} | {ad.name}
            </p>
          </div>
        ))}
      </div>

      {/* لمسة إضافية: إضافة CSS للنبض الذهبي */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
      `}</style>

      {/* رابط من نحن */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button onClick={() => navigate('/about')} style={{ background: 'transparent', color: '#d4af37', border: 'none', textDecoration: 'underline' }}>
          عن الموقع وصاحبه
        </button>
      </div>
    </div>
  );
}
