import React from 'react';
import AdminDashboard from './AdminDashboard';

export default function OwnerRoom() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      <div style={{ padding: '20px', borderBottom: '2px solid #d4af37' }}>
        <h1 style={{ color: '#d4af37', textAlign: 'center' }}>غرفة العمليات الملكية الخاصة بـ البروفيسور فهد بن حمود بن فهد الشمري</h1>
      </div>
      
      {/* هنا يتم استدعاء لوحة التحكم داخل الغرفة */}
      <AdminDashboard />
    </div>
  );
}
