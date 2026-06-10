import React, { useState } from 'react';
import OwnerRoom from './OwnerRoom';
import Haraj from './Haraj';

export default function Home() {
  const [showOwnerRoom, setShowOwnerRoom] = useState(false);
  const [view, setView] = useState('HOME');

  const handleAdminAccess = () => {
    const password = prompt("أدخل رمز الدخول الملكي:");
    if (password === "Fahd2026") { 
      alert("تم دخول صاحب الموقع: البروفيسور فهد بن حمود بن فهد الشمري.");
      setShowOwnerRoom(true);
    } else {
      alert("رمز خاطئ!");
    }
  };

  if (showOwnerRoom) return <OwnerRoom onClose={() => setShowOwnerRoom(false)} />;

  if (view === 'HARAJ') {
    return (
      <div style={{ background: '#000', minHeight: '100vh', padding: '20px' }}>
        <button onClick={() => setView('HOME')} style={{ marginBottom: '10px', padding: '5px 15px', cursor: 'pointer', background: '#d4af37', border: 'none', borderRadius: '5px' }}>العودة للرئيسية</button>
        <Haraj />
      </div>
    );
  }

  return (
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', padding: '20px', textAlign: 'center', fontFamily: 'Cairo, sans-serif' }}>
      
      <h1 onClick={handleAdminAccess} style={{ cursor: 'pointer', fontSize: '2.5rem', margin: '20px 0' }}>أناقة CHIC</h1>
      
      {/* مربع رسالة المالك */}
      <div style={{ margin: '30px auto', padding: '20px', border: '2px solid #d4af37', borderRadius: '20px', maxWidth: '400px', background: '#0a0a0a' }}>
        <h3 style={{ color: '#fff' }}>رسالة المالك:</h3>
        <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
          "يتمنى صاحب الموقع للجميع التوفيق والسداد. 
          نحن هنا لخدمتكم بأعلى معايير الجودة والخصوصية."
        </p>
      </div>

      {/* أزرار التواصل */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
        <a href="https://wa.me/966536667222" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem' }}>💬</a>
        <a href="https://snapchat.com/t/HPkkIfUp" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem' }}>👻</a>
        <a href="mailto:kal6667222@gmail.com" style={{ fontSize: '2rem' }}>📧</a>
      </div>

      {/* مربع خدمات التقسيط */}
      <div style={{ margin: '20px auto', padding: '15px', border: '1px solid #d4af37', borderRadius: '10px', maxWidth: '350px', background: '#1a1a1a', color: '#fff', fontSize: '0.9rem', marginBottom: '30px' }}>
          <p>✨ نوفر لكم خدمات الدفع بالتقسيط:</p>
          <p><strong>تابي (Tabby) | تمارا (Tamara) | Apple Pay</strong></p>
      </div>

      <button onClick={() => setView('HARAJ')} style={{ padding: '15px 40px', background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>
        دخول المنصة
      </button>
    </div>
  );
}
