import React, { useState } from 'react';

export default function Haraj() {
  const [selectedItem, setSelectedItem] = useState(null);

  // بيانات السلع (يمكنك التعديل عليها لاحقاً)
  const items = [
    { id: 1, name: 'عباية ملكية', price: '500 SAR' },
    { id: 2, name: 'فستان فاخر', price: '800 SAR' },
    { id: 3, name: 'حقيبة جلدية', price: '300 SAR' },
  ];

  const handlePay = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ padding: '20px', color: '#d4af37', fontFamily: 'Cairo, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>المنصة - أناقة CHIC</h2>

      {items.map((item) => (
        <div key={item.id} style={{ border: '1px solid #d4af37', padding: '15px', margin: '10px 0', borderRadius: '10px', background: '#0a0a0a' }}>
          <h3>{item.name}</h3>
          <p>السعر: {item.price}</p>
          <button 
            onClick={() => handlePay(item)} 
            style={{ background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            دفع سريع
          </button>
        </div>
      ))}

      {/* نافذة الدفع */}
      {selectedItem && (
        <div style={{ position: 'fixed', top: '10%', left: '5%', right: '5%', background: '#000', padding: '20px', border: '2px solid #d4af37', borderRadius: '15px', zIndex: 10 }}>
          <h3>اتمام عملية الشراء لـ: {selectedItem.name}</h3>
          <p>السعر: {selectedItem.price}</p>
          
          <div style={{ textAlign: 'right', fontSize: '0.9rem' }}>
            <p><strong>خيار الدفع:</strong></p>
            <p>• بنك الراجحي: 09608010069017</p>
            <p>• البنك العربي: 0108088851870011</p>
            <p>• تابي | تمارا | Apple Pay</p>
          </div>

          <button onClick={() => setSelectedItem(null)} style={{ marginTop: '20px', width: '100%', padding: '10px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
}
