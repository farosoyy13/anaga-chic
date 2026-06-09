import React from 'react';
import { useNavigate } from 'react-router-dom';
import { adsData } from './Haraj'; // ربط البيانات من المنصة الكبرى

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#000', color: '#d4af37', fontFamily: 'Cairo, sans-serif', padding: '20px' }}>
      {/* الأشرطة المتحركة */}
      <marquee style={{ border: '1px solid #d4af37', padding: '10px', marginBottom: '20px' }}>
        أهلاً بك في أناقة CHIC - الموقع الملكي الأول
      </marquee>

      {/* زر الانتقال للمنصة الكبرى */}
      <button 
        onClick={() => navigate('/haraj')}
        style={{ width: '100%', padding: '15px', background: '#d4af37', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
      >
        تصفح منصة الحراج الكبرى
      </button>

      {/* الشاشة المصغرة التابعة للمنصة */}
      <div style={{ marginTop: '30px', padding: '20px', background: '#111', borderRadius: '15px', border: '1px solid #d4af37' }}>
        <h2 style={{ color: '#d4af37', textAlign: 'center' }}>إعلانات سريعة</h2>
        <div style={{ display: 'grid', gap: '10px' }}>
          {adsData.slice(0, 5).map((ad) => (
            <div key={ad.id} style={{ borderBottom: '1px solid #333', padding: '5px 0' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <span style={{ color: '#fff' }}>{ad.item}</span> - {ad.price} | {ad.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* الأزرار الرئيسية */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginTop: '30px' }}>
        <button style={{ padding: '15px', background: '#111', border: '1px solid #d4af37', borderRadius: '10px' }}>الفساتين</button>
        <button style={{ padding: '15px', background: '#111', border: '1px solid #d4af37', borderRadius: '10px' }}>العبايات</button>
      </div>
      
      {/* رابط صفحة "من نحن" */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button onClick={() => navigate('/about')} style={{ background: 'transparent', color: '#d4af37', border: 'none', textDecoration: 'underline' }}>
          عن الموقع وصاحبه
        </button>
      </div>
    </div>
  );
}
