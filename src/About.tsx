import React from 'react';

export default function About() {
  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '40px', fontFamily: 'Cairo, sans-serif', textAlign: 'center' }}>
      <h1 style={{ borderBottom: '2px solid #d4af37', display: 'inline-block', paddingBottom: '10px' }}>أناقة CHIC</h1>
      
      <div style={{ margin: '30px 0', fontSize: '1.2rem' }}>
        <h3>من نحن</h3>
        <p>وجهتكم الأولى للفخامة والتميز في عالم الأزياء والمنتجات الراقية.</p>
        
        <h3>وظائفنا</h3>
        <p>نعتز بتقديم دورات مجانية متخصصة في التجارة لتمكين الجيل القادم.</p>
        
        <h3>موقعنا</h3>
        <p>حفر الباطن، طريق الملك فهد.</p>
      </div>

      {/* لمسة الإبداع الملكية في مكان بارز */}
      <div style={{ marginTop: '50px', padding: '30px', border: '1px solid #d4af37', borderRadius: '20px', background: '#111' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>صاحب موقع ( أناقة CHIC )</p>
        <p style={{ fontSize: '1.3rem', color: '#fff' }}>الأستاذ: فهد بن حمود بن فهد الشمري</p>
      </div>

      <div style={{ marginTop: '40px', fontSize: '0.9rem', opacity: 0.7 }}>
        <p>جميع الحقوق محفوظة 2026 ©</p>
      </div>
    </div>
  );
}
