import React, { useState } from 'react';
import { Star, CreditCard, ShieldCheck, XCircle, ShoppingBag, DollarSign } from 'lucide-react';

export default function Haraj() {
  const [selectedItem, setSelectedItem] = useState<{id: number, name: string, price: string} | null>(null);

  const items = [
    { id: 1, name: 'عباية ملكية فاخرة', price: '500 SAR', featured: true },
    { id: 2, name: 'فستان أعراس مطرز', price: '800 SAR', featured: false },
    { id: 3, name: 'حقيبة جلدية ماركة', price: '300 SAR', featured: false },
  ];

  return (
    <div style={{ background: '#050505', color: '#d4af37', minHeight: '100vh', padding: '20px', fontFamily: 'serif' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', borderBottom: '1px solid #d4af37', paddingBottom: '10px' }}>
        منصة حراج أناقة CHIC الملكية
      </h2>

      {items.map((item) => (
        <div key={item.id} style={{ 
            border: '1px solid #d4af37', 
            padding: '20px', 
            margin: '15px 0', 
            borderRadius: '15px', 
            background: '#0a0a0a',
            boxShadow: item.featured ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: '0' }}>{item.name} {item.featured && <Star size={18} fill="#d4af37" />}</h3>
            <ShoppingBag size={20} />
          </div>
          <p style={{ margin: '10px 0', color: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <DollarSign size={18} /> {item.price}
          </p>
          <button 
            onClick={() => setSelectedItem(item)} 
            style={goldButtonStyle}
          >
            دفع سريع وأنيق
          </button>
        </div>
      ))}

      {/* نافذة الدفع الملكية */}
      {selectedItem && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h3 style={{ color: '#d4af37', textAlign: 'center' }}>إتمام الطلب الملكي: {selectedItem.name}</h3>
            <p style={{ textAlign: 'center', fontSize: '1.5rem', margin: '10px 0' }}>المبلغ: {selectedItem.price}</p>
            
            <div style={{ background: '#1a1a1a', padding: '15px', borderRadius: '10px', marginTop: '15px' }}>
              <p style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}><ShieldCheck size={18} /> التحويل البنكي المعتمد:</p>
              <p>• الراجحي: 09608010069017</p>
              <p>• البنك العربي: 0108088851870011</p>
              <hr style={{ borderColor: '#333' }} />
              <p style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}><CreditCard size={18} /> طرق الدفع السريع:</p>
              <p style={{ color: '#fff' }}>Apple Pay | Tabby | Tamara</p>
            </div>

            <button onClick={() => setSelectedItem(null)} style={closeButtonStyle}>
              <XCircle size={20} /> إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const goldButtonStyle = { background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '1rem' };
const modalOverlayStyle = { position: 'fixed' as 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
const modalStyle = { background: '#0a0a0a', padding: '25px', border: '2px solid #d4af37', borderRadius: '20px', width: '90%', maxWidth: '400px', boxShadow: '0 0 30px #d4af37' };
const closeButtonStyle = { marginTop: '20px', width: '100%', padding: '12px', background: 'transparent', color: '#d4af37', border: '1px solid #d4af37', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' };
