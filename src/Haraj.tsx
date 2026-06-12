import React, { useState } from 'react';
import { Star, ShieldCheck, ShoppingBag, DollarSign, CheckCircle } from 'lucide-react';

export default function Haraj() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const items = [
    { id: 1, name: 'عباية ملكية فاخرة', price: '500 SAR', featured: true },
    { id: 2, name: 'فستان أعراس مطرز', price: '800 SAR', featured: false },
    { id: 3, name: 'حقيبة جلدية ماركة', price: '300 SAR', featured: false },
  ];

  const handleProcessPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("تم إرسال طلبك للتدقيق الملكي، سنتواصل معك فوراً.");
      setSelectedItem(null);
    }, 2000);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>منصة حراج أناقة CHIC الملكية</h2>

      {items.map((item) => (
        <div key={item.id} style={itemCardStyle(item.featured)}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 style={{ margin: 0 }}>{item.name} {item.featured && <Star size={16} fill="#d4af37" />}</h3>
            <ShoppingBag size={20} color="#d4af37" />
          </div>
          <p style={priceStyle}><DollarSign size={16} /> {item.price}</p>
          <button onClick={() => setSelectedItem(item)} style={goldButtonStyle}>
            طلب المنتج (دفع آمن)
          </button>
        </div>
      ))}

      {selectedItem && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <h3 style={{ color: '#d4af37' }}>{selectedItem.name}</h3>
            <div style={paymentDetailsStyle}>
              <p>حساباتنا البنكية الموثقة:</p>
              <p>• الراجحي: 09608010069017</p>
              <p>• العربي: 0108088851870011</p>
            </div>
            <button onClick={handleProcessPayment} style={goldButtonStyle} disabled={isProcessing}>
              {isProcessing ? "جاري التوثيق..." : "تأكيد التحويل"}
            </button>
            <button onClick={() => setSelectedItem(null)} style={closeButtonStyle}>إلغاء</button>
          </div>
        </div>
      )}
    </div>
  );
}

// التنسيقات الملكية (الآن أصبحت أكثر فخامة وثباتاً)
const containerStyle: React.CSSProperties = { background: '#050505', color: '#d4af37', height: '100vh', padding: '20px', overflowY: 'auto', fontFamily: 'serif' };
const headerStyle: React.CSSProperties = { textAlign: 'center', fontSize: '1.8rem', borderBottom: '1px solid #d4af37', paddingBottom: '10px' };
const itemCardStyle = (featured: boolean): React.CSSProperties => ({ border: '1px solid #d4af37', padding: '15px', margin: '15px 0', borderRadius: '15px', background: '#0a0a0a', boxShadow: featured ? '0 0 10px rgba(212, 175, 55, 0.2)' : 'none' });
const priceStyle: React.CSSProperties = { color: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '5px', margin: '10px 0' };
const goldButtonStyle: React.CSSProperties = { background: 'linear-gradient(45deg, #bf953f, #fcf6ba)', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' };
const modalOverlayStyle: React.CSSProperties = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
const modalStyle: React.CSSProperties = { background: '#0a0a0a', padding: '25px', border: '1px solid #d4af37', borderRadius: '15px', width: '85%', maxWidth: '400px' };
const paymentDetailsStyle: React.CSSProperties = { background: '#111', padding: '15px', borderRadius: '8px', margin: '15px 0' };
const closeButtonStyle: React.CSSProperties = { background: 'transparent', color: '#d4af37', border: '1px solid #d4af37', width: '100%', padding: '10px', marginTop: '10px', borderRadius: '8px', cursor: 'pointer' };
