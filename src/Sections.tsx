import React, { useState } from 'react';

export default function Sections() {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const ImageWithPulse = ({ src, alt }: { src: string; alt: string }) => (
    <img 
      src={src} 
      alt={alt} 
      style={{ 
        width: '100%', 
        borderRadius: '15px', 
        border: '2px solid #d4af37',
        boxShadow: '0 0 15px #d4af37',
        marginTop: '10px'
      }} 
    />
  );

  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '20px', fontFamily: 'Cairo, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>أقسام أناقة CHIC الملكية</h2>
      
      {/* زر نظام الطلب المخصص */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => setShowOrderForm(!showOrderForm)}
          style={{ 
            background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', 
            color: '#000', 
            padding: '15px 25px', 
            border: 'none', 
            borderRadius: '10px', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}
        >
          {showOrderForm ? 'إغلاق الطلب المخصص' : 'طلب تصميم خاص (تفصيل ملكي)'}
        </button>
      </div>

      {/* نموذج الطلب المخصص */}
      {showOrderForm && (
        <div style={{ border: '2px solid #d4af37', padding: '20px', borderRadius: '15px', marginBottom: '30px', background: '#1a1a1a' }}>
          <h3 style={{ color: '#fff', textAlign: 'center' }}>نموذج الطلب الملكي</h3>
          <input type="text" placeholder="الاسم الكريم" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }} />
          <textarea placeholder="وصف التصميم المطلوب..." style={{ width: '100%', padding: '10px', height: '100px', borderRadius: '5px', marginBottom: '10px' }} />
          <button style={{ width: '100%', background: '#d4af37', border: 'none', padding: '10px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
            إرسال الطلب عبر واتساب
          </button>
        </div>
      )}

      {/* الأقسام الأساسية */}
      <section style={{ marginBottom: '40px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' }}>
        <h2 style={{ color: '#fff' }}>أناقة العبايات والفساتين</h2>
        <p>تشكيلة مختارة بعناية من أفخم الأقمشة العالمية.</p>
        <ImageWithPulse src="رابط_صورة_العباية" alt="عباية ملكية" />
      </section>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' }}>
        <h2 style={{ color: '#fff' }}>الجيل الذهبي (للأمهات)</h2>
        <p>جلاليب وبراقع تجمع بين الأصالة والوقار.</p>
        <ImageWithPulse src="رابط_صورة_الجلابية" alt="جلابية ملكية" />
      </section>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' }}>
        <h2 style={{ color: '#fff' }}>فخامة الإكسسوارات</h2>
        <p>لمسات نهائية من الشنط الراقية.</p>
        <ImageWithPulse src="رابط_صورة_الشنطة" alt="شنطة فاخرة" />
      </section>

      <section style={{ marginBottom: '40px', background: '#1a1a1a', padding: '20px', borderRadius: '15px' }}>
        <h2 style={{ color: '#fff' }}>خدماتنا</h2>
        <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '2' }}>
          <li>✓ شحن سريع ومؤمن لجميع مناطق المملكة.</li>
          <li>✓ ضمان استرجاع ذهبي.</li>
          <li>✓ متابعة فورية للطلب عبر واتساب.</li>
        </ul>
      </section>
    </div>
  );
}
