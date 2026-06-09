import React, { useState, useEffect } from 'react';

export default function Radar() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      background: '#050505', 
      padding: '30px', 
      borderRadius: '20px', 
      border: '1px solid #d4af37',
      textAlign: 'center',
      marginTop: '20px'
    }}>
      <h3 style={{ color: '#d4af37', marginBottom: '20px' }}>رادار أناقة CHIC الملكي 📡</h3>
      <div style={{ position: 'relative', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* موجات الرادار */}
        <div style={{ 
          width: pulse ? '100px' : '50px', 
          height: pulse ? '100px' : '50px', 
          borderRadius: '50%', 
          border: '2px solid #d4af37',
          transition: 'all 2s',
          opacity: pulse ? 0 : 1
        }}></div>
        <div style={{ position: 'absolute', color: '#fff', fontSize: '0.8rem' }}>
          جارٍ رصد عمليات بيع في: <span style={{ color: '#d4af37' }}>حفر الباطن، الرياض، جدة</span>
        </div>
      </div>
      <p style={{ fontSize: '0.7rem', color: '#777' }}>نظام تتبع الفخامة - الإصدار الملكي 2026</p>
    </div>
  );
}
