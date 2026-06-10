import React from 'react';

export default function About() {
  return (
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', padding: '20px', fontFamily: 'Cairo, sans-serif' }}>
      
      {/* تعريف صاحب الموقع */}
      <div style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#fff' }}>صاحب موقع أناقة CHIC</h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>الأستاذ: فهد بن حمود بن فهد الشمري</p>
      </div>

      {/* قسم الشركاء */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ color: '#fff' }}>شركاء النجاح</h3>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>نعتز بشراكتنا الاستراتيجية مع كبرى الشركات العالمية والسعودية:</p>
        <div style={{ marginTop: '15px', color: '#d4af37' }}>
            <p>• الشركاء العالميون: Global Luxury Partners | Tech Innovators Corp</p>
            <p>• الشركاء السعوديون: Saudi Excellence Group | National Elegance Hub</p>
        </div>
      </div>

      {/* التذييل في نهاية الصفحة */}
      <div style={{ 
          marginTop: '60px', 
          padding: '20px', 
          borderTop: '2px solid #d4af37', 
          textAlign: 'center',
          fontSize: '0.9rem' 
      }}>
          {/* قسم اتصل بنا */}
          <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#fff' }}>اتصل بنا</h3>
              <p style={{ margin: '5px 0' }}>الهواتف: 00966536667222 / 00966507882771</p>
              <p style={{ margin: '5px 0' }}>سناب شات: pmp.u</p>
              <p style={{ margin: '5px 0' }}>البريد الإلكتروني: kal6667222@gmail.com</p>
          </div>

          {/* قسم الحسابات البنكية */}
          <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#fff' }}>البيانات البنكية</h3>
              <p style={{ margin: '10px 0 0 0' }}><strong>بنك الراجحي:</strong></p>
              <p style={{ margin: '2px 0' }}>الايبان: SA0980000509608010069017</p>
              <p style={{ margin: '2px 0' }}>الحساب: 09608010069017</p>
              
              <p style={{ margin: '15px 0 0 0' }}><strong>البنك العربي:</strong></p>
              <p style={{ margin: '2px 0' }}>الايبان: SA9830400108088851870011</p>
              <p style={{ margin: '2px 0' }}>الحساب: 0108088851870011</p>
          </div>

          {/* روابط إضافية وحقوق النشر */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', color: '#888' }}>
              <span>من نحن</span>
              <span>وظائفنا</span>
              <span>سياسة الخصوصية</span>
          </div>
          <p style={{ marginTop: '20px', color: '#555' }}>© 2026 جميع الحقوق محفوظة لموقع أناقة CHIC</p>
      </div>
    </div>
  );
}
