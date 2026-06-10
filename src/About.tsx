import React from 'react';

export default function About() {
  return (
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', padding: '20px', textAlign: 'center', fontFamily: 'Cairo, sans-serif' }}>
      
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', borderBottom: '1px solid #d4af37', paddingBottom: '10px' }}>اتصل بنا</h2>

      {/* بيانات التواصل */}
      <div style={{ margin: '20px auto', padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', maxWidth: '400px', background: '#0a0a0a' }}>
        <h3 style={{ color: '#fff' }}>📱 قنوات التواصل</h3>
        <p>واتساب 1: 00966536667222</p>
        <p>واتساب 2: 00966507882771</p>
        <p>البريد الإلكتروني: kal6667222@gmail.com</p>
        <p>سناب شات: pmp.u</p>
      </div>

      {/* البيانات البنكية */}
      <div style={{ margin: '20px auto', padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', maxWidth: '400px', background: '#0a0a0a' }}>
        <h3 style={{ color: '#fff' }}>💳 البيانات البنكية الرسمية</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <p><strong>بنك الراجحي</strong></p>
          <p>الايبان: SA0980000509608010069017</p>
          <p>تحويل محلي: 09608010069017</p>
        </div>

        <div>
          <p><strong>البنك العربي</strong></p>
          <p>الايبان: SA9830400108088851870011</p>
          <p>تحويل محلي: 0108088851870011</p>
        </div>
      </div>
      
    </div>
  );
}
