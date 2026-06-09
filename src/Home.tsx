import React from 'react';

export default function Home() {
  return (
    <div style={{ background: '#000', color: '#d4af37', fontFamily: 'Cairo, sans-serif', padding: '20px' }}>
      {/* الأشرطة المتحركة */}
      <marquee style={{ border: '1px solid #d4af37', padding: '10px', marginBottom: '10px' }}>
        أهلاً بك في أناقة CHIC - الموقع الملكي الأول - تسوق الآن بفخامة
      </marquee>

      {/* زاوية الملوك */}
      <div style={{ textAlign: 'center', margin: '30px 0', border: '2px solid #d4af37', padding: '20px' }}>
        <h2>الولاء والقيادة</h2>
        <p>نعتز بملوكنا (الملك عبدالعزيز، الملك سلمان، وولي العهد محمد بن سلمان) - صناع المجد لشعب طويق العظيم، وفخر للخليج والعروبة.</p>
      </div>

      {/* الأزرار الرئيسية الملكية */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        <button style={{ padding: '20px', background: '#111', color: '#d4af37', border: '1px solid #d4af37' }}>فساتين فخمة</button>
        <button style={{ padding: '20px', background: '#111', color: '#d4af37', border: '1px solid #d4af37' }}>شنط ماركات</button>
        <button style={{ padding: '20px', background: '#111', color: '#d4af37', border: '1px solid #d4af37' }}>العبايات</button>
        <button style={{ padding: '20px', background: '#111', color: '#d4af37', border: '1px solid #d4af37' }}>الجيل الذهبي</button>
      </div>

      {/* مربع الذكاء الاصطناعي */}
      <div style={{ marginTop: '40px', padding: '20px', border: '2px dashed #d4af37' }}>
        <h3>مساعد أناقة CHIC الذكي</h3>
        <input type="text" placeholder="اسأل أي شيء عن الموقع..." style={{ width: '100%', padding: '10px' }} />
      </div>
    </div>
  );
}
