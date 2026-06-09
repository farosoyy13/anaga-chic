import React from 'react';

// توليد 50 إعلان بأسماء وأسعار واقعية لضمان المصداقية
const generateAds = () => {
  const items = ['عباية كلوش', 'فستان سهرة مطرز', 'شنطة هيرميس', 'حذاء ماركة', 'عطر فرنسي', 'ساعة ذكية'];
  const names = ['نورة الشمري', 'سارة العتيبي', 'فهد العنزي', 'منيرة القحطاني', 'محمد الدوسري', 'هند الغامدي', 'عبدالله المطيري', 'لطيفة العتيبي'];
  const cities = ['الرياض', 'حفر الباطن', 'جدة', 'الدمام', 'الخبر'];
  
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: names[i % names.length],
    city: cities[i % cities.length],
    item: items[i % items.length],
    type: i % 2 === 0 ? 'جديد' : 'مستخدم',
    price: (Math.floor(Math.random() * 2000) + 150) + ' ريال',
    details: 'حالة ممتازة، سعر مغري جداً للجادين.'
  }));
};

export const adsData = generateAds();

export default function Haraj() {
  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '40px 20px', minHeight: '100vh', fontFamily: 'Cairo, sans-serif' }}>
      <h1 style={{ textAlign: 'center', borderBottom: '3px solid #d4af37', paddingBottom: '20px', marginBottom: '40px' }}>
        منصة حراج أناقة CHIC الكبرى
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '25px' 
      }}>
        {adsData.map((ad) => (
          <div key={ad.id} style={{ 
            border: '1px solid #d4af37', 
            padding: '20px', 
            borderRadius: '15px', 
            background: '#111',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#fff' }}>{ad.item}</h3>
            <div style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
              <p style={{ margin: '2px 0' }}><strong>المعلن:</strong> {ad.name}</p>
              <p style={{ margin: '2px 0' }}><strong>المدينة:</strong> {ad.city}</p>
              <p style={{ margin: '2px 0' }}><strong>الحالة:</strong> {ad.type}</p>
            </div>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#ccc' }}>{ad.details}</p>
            <div style={{ marginTop: '15px', borderTop: '1px solid #333', paddingTop: '10px' }}>
              <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#d4af37', margin: 0 }}>{ad.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
