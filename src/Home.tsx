import React from 'react';

export default function Home() {
  return (
    <div style={{ background: '#000', color: '#d4af37', fontFamily: 'Cairo, sans-serif', padding: '20px' }}>
      {/* الأشرطة المتحركة */}
      <marquee style={{ border: '1px solid #d4af37', padding: '10px', marginBottom: '10px', fontSize: '1.2rem' }}>
        أهلاً بك في أناقة CHIC - الموقع الملكي الأول - تسوق الآن بفخامة مطلقة
      </marquee>
      <marquee direction="right" style={{ border: '1px solid #d4af37', padding: '10px', marginBottom: '20px' }}>
        شعب طويق العظيم، فخر للخليج والعروبة - أناقة CHIC طريقك للتميز
      </marquee>

      {/* زاوية الملوك */}
      <div style={{ textAlign: 'center', margin: '30px 0', border: '2px solid #d4af37', padding: '20px', borderRadius: '15px' }}>
        <h2 style={{ fontSize: '1.8rem' }}>الولاء والقيادة</h2>
        <p style={{ fontSize: '1.1rem' }}>نعتز بملوكنا (الملك عبدالعزيز، الملك سلمان، وولي العهد محمد بن سلمان) - صناع المجد لشعب طويق العظيم، وبصمة فخر وثناء لكل أهل الخليج المبدعين.</p>
      </div>

      {/* الأزرار الرئيسية الملكية */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '40px' }}>
        <button style={{ padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '10px', cursor: 'pointer' }}>فساتين فخمة</button>
        <button style={{ padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '10px', cursor: 'pointer' }}>شنط ماركات</button>
        <button style={{ padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '10px', cursor: 'pointer' }}>العبايات</button>
        <button style={{ padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '10px', cursor: 'pointer' }}>الجيل الذهبي</button>
        <button style={{ padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '10px', cursor: 'pointer' }}>الأحذية</button>
        <button style={{ padding: '15px', background: '#111', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '10px', cursor: 'pointer' }}>ملابس البنات</button>
      </div>

      {/* مربع الذكاء الاصطناعي */}
      <div style={{ padding: '20px', border: '2px dashed #d4af37', borderRadius: '15px', marginBottom: '40px' }}>
        <h3 style={{ marginTop: 0 }}>مساعد أناقة CHIC الذكي</h3>
        <input type="text" placeholder="اسأل أي شيء عن الموقع أو خارج الموقع..." style={{ width: '100%', padding: '15px', background: '#000', color: '#fff', border: '1px solid #d4af37', borderRadius: '5px' }} />
      </div>

      {/* قسم التعليقات التلقائي */}
      <div style={{ marginTop: '50px', borderTop: '2px solid #d4af37', padding: '20px' }}>
        <h2 style={{ color: '#d4af37' }}>آراء عملائنا (الجيل الذهبي)</h2>
        <div style={{ height: '300px', overflowY: 'scroll', background: '#111', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{ borderBottom: '1px solid #333', marginBottom: '10px', paddingBottom: '10px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>عميل موثوق {i + 1}</p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>أناقة CHIC هي العنوان الحقيقي للفخامة، تعامل راقٍ ومنتجات أكثر من رائعة!</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px' }}>
          <textarea placeholder="اكتب تعليقك هنا..." style={{ width: '100%', height: '80px', background: '#000', color: '#d4af37', border: '1px solid #d4af37', padding: '10px' }} />
          <button style={{ marginTop: '10px', padding: '10px 20px', background: '#d4af37', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>إرسال التعليق</button>
        </div>
      </div>
    </div>
  );
}
