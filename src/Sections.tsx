import React from 'react';

export default function Sections() {
  // مثال على كيفية إضافة صورة داخل أي قسم
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
      
      {/* 1. قسم العبايات والفساتين */}
      <section style={{ marginBottom: '40px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' }}>
        <h2 style={{ color: '#fff' }}>أناقة العبايات والفساتين</h2>
        <p>تشكيلة مختارة بعناية من أفخم الأقمشة العالمية لتناسب ذائقتك الرفيعة.</p>
        {/* أضف رابط الصورة في src */}
        <ImageWithPulse src="رابط_صورة_العباية" alt="عباية ملكية" />
      </section>

      {/* 2. قسم الجيل الذهبي (للأمهات) */}
      <section style={{ marginBottom: '40px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' }}>
        <h2 style={{ color: '#fff' }}>الجيل الذهبي (للأمهات)</h2>
        <p>تميزي بأجود أنواع الجلاليب والبراقع التي تجمع بين الأصالة والوقار.</p>
        <ImageWithPulse src="رابط_صورة_الجلابية" alt="جلابية ملكية" />
      </section>

      {/* 3. قسم الإكسسوارات */}
      <section style={{ marginBottom: '40px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' }}>
        <h2 style={{ color: '#fff' }}>فخامة الإكسسوارات</h2>
        <p>لمسات نهائية من الشنط الراقية التي تكمل إطلالتك الملكية.</p>
        <ImageWithPulse src="رابط_صورة_الشنطة" alt="شنطة فاخرة" />
      </section>

      {/* 4. الابتكار: قسم الشحن والضمان */}
      <section style={{ marginBottom: '40px', background: '#1a1a1a', padding: '20px', borderRadius: '15px' }}>
        <h2 style={{ color: '#fff' }}>خدمات التوصيل والضمان الذهبي</h2>
        <p>نحن لا نبيع منتجاً، نحن نهدي تجربة:</p>
        <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '2' }}>
          <li>✓ شحن سريع ومؤمن لجميع مناطق المملكة.</li>
          <li>✓ ضمان استرجاع ذهبي في حال وجود أي ملاحظة.</li>
          <li>✓ متابعة فورية للطلب عبر واتساب صاحب الموقع.</li>
        </ul>
      </section>

      {/* 5. الابتكار: قسم التقييمات */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h3 style={{ color: '#fff' }}>رأي عملائنا (نخبة المجتمع)</h3>
        <p style={{ fontStyle: 'italic' }}>"أناقة CHIC هي وجهتنا الأولى للفخامة والأصالة."</p>
      </section>

    </div>
  );
}
