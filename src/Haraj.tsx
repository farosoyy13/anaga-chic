import React, { useState } from 'react';

export default function Haraj() {
  const [selectedItem, setSelectedItem] = useState<{id: number, name: string, price: string} | null>(null);

  const items = [
    { id: 1, name: 'عباية ملكية', price: '500 SAR' },
    { id: 2, name: 'فستان فاخر', price: '800 SAR' },
    { id: 3, name: 'حقيبة جلدية', price: '300 SAR' },
  ];

  const handlePay = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ background: '#000', color: '#d4af37', minHeight: '100vh', padding: '20px', fontFamily: 'Cairo, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>المنصة - أناقة CHIC</h2>

      {items.map((item) => (
        <div key={item.id} style={{ 
            border: '1px solid #d4af37', 
            padding: '15px', 
            margin: '10px 0', 
            borderRadius: '10px', 
            background: '#0a0a0a' 
        }}>
          <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
          <p style={{ margin: '0 0 15px 0' }}>السعر: {item.price}</p>
          <button 
            onClick={() => handlePay(item)} 
            style={{ 
                background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                width: '100%'
            }}
          >
            دفع سريع
          </button>
        </div>
      ))}

      {/* نافذة الدفع المنبثقة */}
      {selectedItem && (
        <div style={{ 
            position: 'fixed', 
            top: '10%', 
            left: '5%', 
            right: '5%', 
            background: '#1a1a1a', 
            padding: '20px', 
            border: '2px solid #d4af37', 
            borderRadius: '15px', 
            zIndex: 10,
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
        }}>
          <h3 style={{ color: '#fff', textAlign: 'center' }}>إتمام الشراء لـ: {selectedItem.name}</h3>
          <p style={{ textAlign: 'center' }}>المبلغ: {selectedItem.price}</p>
          
          <div style={{ textAlign: 'right', fontSize: '0.9rem', color: '#d4af37', marginTop: '15px' }}>
            <p><strong>التحويل البنكي:</strong></p>
            <p>• بنك الراجحي: 09608010069017</p>
            <p>• البنك العربي: 0108088851870011</p>
            <hr style={{ borderColor: '#d4af37', margin: '15px 0' }} />
            <p><strong>خيارات الدفع السريع:</strong></p>
            <p style={{ color: '#fff' }}>• Apple Pay | تابي (Tabby) | تمارا (Tamara)</p>
          </div>

          <button 
            onClick={() => setSelectedItem(null)} 
            style={{ 
                marginTop: '20px', 
                width: '100%', 
                padding: '12px', 
                background: '#333', 
                color: '#fff', 
                border: '1px solid #d4af37', 
                borderRadius: '5px', 
                fontWeight: 'bold',
                cursor: 'pointer'
            }}
          >
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
}
