import React from 'react';

export default function About() {
  return (
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', padding: '20px', fontFamily: 'Cairo, sans-serif' }}>
      
      {/* محتوى الصفحة */}
      <h2 style={{ textAlign: 'center' }}>معلومات الموقع</h2>
      <p style={{ textAlign: 'center' }}>هنا يمكن إضافة تفاصيل "من نحن" و"وظائفنا" لاحقاً.</p>

      {/* التذييل في نهاية الصفحة (القسم الكتابي فقط) */}
      <div style={{ 
          marginTop: '100px', 
          padding: '20px', 
          borderTop: '2px solid #d4af37', 
          textAlign: 'center',
          fontSize: '0.9rem' 
      }}>
          <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#fff' }}>اتصل بنا</h3>
              <p style={{ margin: '5px 0' }}>الهواتف: 00966536667222 / 00966507882771</p>
              <p style={{ margin: '5px 0' }}>سناب شات: pmp.u</p>
              <p style={{ margin: '5px 0' }}>البريد الإلكتروني: kal6667222@gmail.com</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px', color: '#888' }}>
              <span>من نحن</span>
              <span>وظائفنا</span>
              <span>سياسة الخصوصية</span>
          </div>
      </div>
    </div>
  );
}
