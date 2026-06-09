import React, { useState } from 'react';

export default function AnaqaChic() {
  const [view, setView] = useState('home');

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #000 0%, #1a1a00 100%)', 
      color: '#d4af37', 
      minHeight: '100vh', 
      direction: 'rtl', 
      fontFamily: "'Playfair Display', serif",
      padding: '20px' 
    }}>
      {/* تأثير الـ Golden Pulse في العنوان */}
      <style>{`
        @keyframes pulse { 0% { text-shadow: 0 0 5px #d4af37; } 50% { text-shadow: 0 0 20px #d4af37; } 100% { text-shadow: 0 0 5px #d4af37; } }
        .royal-title { animation: pulse 2s infinite; }
      `}</style>

      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="royal-title" style={{ fontSize: '3.5rem', color: '#d4af37' }}>أناقة CHIC</h1>
        <p style={{ letterSpacing: '2px', color: '#fff' }}>Professor Fahd bin Hamoud bin Fahd Al-Shammari</p>
      </header>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
        {['الرئيسية', 'الحراج', 'تواصل معنا'].map((item) => (
          <button 
            key={item} 
            onClick={() => setView(item === 'الرئيسية' ? 'home' : item === 'الحراج' ? 'haraj' : 'contact')}
            style={{ background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '10px 20px', cursor: 'pointer' }}
          >
            {item}
          </button>
        ))}
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', border: '2px solid #d4af37', padding: '30px', background: '#0a0a0a' }}>
        {view === 'home' && (
          <div style={{ textAlign: 'center' }}>
            <h2>أهلاً بكم في عالم الفخامة</h2>
            <p>وجهتكم الأولى لأرقى العبايات والجلابيات - الجيل الذهبي</p>
          </div>
        )}

        {view === 'haraj' && (
          <div>
            <h2 style={{ textAlign: 'center' }}>قسم الحراج (العروض الذهبية)</h2>
            <div style={{ borderBottom: '1px solid #333', padding: '15px' }}>عباية استقبال مطرزة بالذهب - 500 ريال</div>
            <div style={{ padding: '15px' }}>جلابية حرير للوالدة (الجيل الذهبي) - 350 ريال</div>
          </div>
        )}

        {view === 'contact' && (
          <div style={{ textAlign: 'center' }}>
            <h2>اتصل بنا</h2>
            <p>حفر الباطن - طريق الملك فهد بن عبد العزيز</p>
            <button style={{ background: '#d4af37', color: '#000', border: 'none', padding: '15px 30px', fontWeight: 'bold' }}>مراسلة واتساب</button>
          </div>
        )}
      </main>
    </div>
  );
}
