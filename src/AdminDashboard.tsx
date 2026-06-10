import React, { useEffect, useState } from 'react';
import { auth } from './firebaseconfig';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // هنا نضع بريدك الإلكتروني كـ "خط أحمر"
    const allowedEmail = "kal6667222@gmail.com"; 
    
    const checkAuth = () => {
      const user = auth.currentUser;
      if (user && user.email === allowedEmail) {
        setAuthorized(true);
      } else {
        alert("تنبيه أمني: محاولة دخول غير مصرح بها لغرفة العمليات. تم إغلاق الوصول.");
        navigate('/'); // طرد أي زائر للرئيسية
      }
    };
    checkAuth();
  }, [navigate]);

  if (!authorized) {
    return <div style={{ background: '#000', color: '#fff', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>جاري التحقق من الصلاحيات الملكية...</div>;
  }

  return (
    <div style={{ padding: '40px', background: '#000', minHeight: '100vh', color: '#d4af37', fontFamily: 'Cairo, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #d4af37', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem' }}>غرفة العمليات - أناقة CHIC</h1>
        <p style={{ textAlign: 'center' }}>صلاحيات صاحب الموقع الحصرية - (حالة النظام: محمية)</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', background: '#0a0a0a' }}>
          <h3>استعراض البيانات</h3>
          <p>لوحة التحكم الشاملة: مخفية عن غير المصرح لهم.</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', background: '#0a0a0a' }}>
          <h3>مراقبة الرسائل</h3>
          <p>نظام التشفير التام لخصوصية العملاء.</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', background: '#0a0a0a' }}>
          <h3>سجل الرقابة</h3>
          <p>أنت فقط من يملك مفتاح هذه السجلات.</p>
        </div>
      </div>
    </div>
  );
}
