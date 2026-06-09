import React from 'react';

export default function AdminDashboard() {
  return (
    <div style={{ padding: '40px', background: '#000', minHeight: '100vh', color: '#d4af37', fontFamily: 'Cairo, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #d4af37', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem' }}>غرفة العمليات - أناقة CHIC</h1>
        <p style={{ textAlign: 'center' }}>صلاحيات صاحب الموقع الحصرية</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {/* بطاقة إحصائيات */}
        <div style={{ padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', background: '#0a0a0a' }}>
          <h3>استعراض البيانات</h3>
          <p>لوحة التحكم الشاملة لجميع بيانات الموقع</p>
        </div>

        {/* بطاقة الرسائل */}
        <div style={{ padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', background: '#0a0a0a' }}>
          <h3>مراقبة الرسائل</h3>
          <p>نظام سري لمراقبة الرسائل الخاصة</p>
        </div>

        {/* بطاقة السجلات */}
        <div style={{ padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', background: '#0a0a0a' }}>
          <h3>سجل الرقابة</h3>
          <p>متابعة كافة تحركات المشرفين</p>
        </div>
      </div>
    </div>
  );
}
