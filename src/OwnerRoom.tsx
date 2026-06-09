import React from 'react';

export default function OwnerRoom({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ 
      background: '#000', color: '#d4af37', padding: '20px', 
      height: '100vh', border: '2px solid #d4af37', overflowY: 'auto' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ color: '#fff' }}>👑 غرفة صاحب الموقع الخاصة 👑</h2>
        <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>"العدل أساس الملك - هنا تُحل المظالم بخصوصية تامة"</p>
        <button onClick={onClose} style={{ background: '#d4af37', border: 'none', padding: '5px 15px', borderRadius: '5px' }}>إغلاق الغرفة</button>
      </div>

      <div style={{ border: '1px solid #333', padding: '15px', borderRadius: '10px' }}>
        <h3 style={{ borderBottom: '1px solid #d4af37' }}>لوحة التحكم والشكاوى</h3>
        <p>استقبل هنا شكاوى الموظفين والزوار. كل ما يرد هنا مشفر ومحجوب عن الجميع.</p>
        {/* هنا ستظهر الرسائل لاحقاً بعد ربط قاعدة البيانات */}
        <div style={{ padding: '20px', textAlign: 'center', color: '#555' }}>لا توجد شكاوى حالياً - النظام يعمل بكفاءة</div>
      </div>
    </div>
  );
}
