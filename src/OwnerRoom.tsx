import React from 'react';
import { Eye, Lock, MessageSquare, Zap, Target, Shield, Users, BarChart, Settings, Trash2, Globe, FileText, Power, RefreshCcw, Camera, X } from 'lucide-react';

export default function OwnerRoom({ onClose }: { onClose: () => void }) {
  const powers = [
    { title: "الرصد اللحظي", icon: Eye, desc: "مراقبة تحركات المستخدمين لحظة بلحظة" },
    { title: "تجميد الحسابات", icon: Lock, desc: "إيقاف أي مستخدم أو مشرف بضغطة زر" },
    { title: "البث الملكي", icon: MessageSquare, desc: "إرسال رسالة تظهر لكل المستخدمين في وقت واحد" },
    { title: "التلاعب بالأسعار", icon: Zap, desc: "تغيير سعر أي منتج عالمياً بضغطة زر" },
    { title: "قراءة الأفكار", icon: Target, desc: "عرض سجل محادثات أي مستخدم مع الدعم الفني" },
    { title: "حجب المحتوى", icon: Trash2, desc: "مسح أي تعليق أو تقييم لا يعجبك فوراً" },
    { title: "تحويل الرتب", icon: Users, desc: "ترقية أو خفض رتبة أي مشرف" },
    { title: "النمط الخفي", icon: Shield, desc: "دخول الموقع دون أن تظهر في قائمة المتواجدين" },
    { title: "تقرير الأرباح", icon: BarChart, desc: "كشف المبيعات الفعلية لحظياً" },
    { title: "تعديل المخزون", icon: Settings, desc: "إضافة أو حذف كميات المنتجات يدوياً" },
    { title: "التحكم بالثيم", icon: Globe, desc: "تغيير ألوان الموقع بناءً على ذوقك الشخصي" },
    { title: "أرشفة السجلات", icon: FileText, desc: "سحب نسخة احتياطية من كل بيانات المتجر" },
    { title: "قفل المتجر", icon: Power, desc: "إغلاق الموقع تماماً للصيانة بلمسة واحدة" },
    { title: "المحاكي السلوكي", icon: RefreshCcw, desc: "اختبار الميزات الجديدة قبل إطلاقها للعامة" },
    { title: "التحكم بالستارة", icon: Camera, desc: "فتح أو إغلاق الستارة الملكية يدوياً لكل زائر" }
  ];

  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '30px', minHeight: '100vh', border: '3px solid #d4af37', position: 'relative', fontFamily: 'Cairo, sans-serif' }}>
      
      {/* الزر المخفي للإغلاق في الزاوية */}
      <button 
        onClick={onClose} 
        style={{ position: 'absolute', top: '20px', left: '20px', background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}
      >
        <X size={20} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#fff', fontSize: '2rem' }}>👑 غرفة صاحب الموقع الخاصة 👑</h2>
        <p style={{ fontSize: '1rem', fontStyle: 'italic', opacity: 0.8 }}>"العدل أساس الملك - هنا تُحل المظالم بخصوصية تامة"</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {powers.map((power, index) => (
          <div key={index} style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', background: '#0a0a0a', textAlign: 'center' }}>
            <power.icon size={30} style={{ margin: '0 auto 15px', color: '#d4af37' }} />
            <h3 style={{ fontSize: '0.9rem', marginBottom: '5px' }}>{power.title}</h3>
            <p style={{ fontSize: '10px', color: '#666' }}>{power.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', borderTop: '1px solid #d4af37', paddingTop: '20px', textAlign: 'center' }}>
        <h3 style={{ color: '#fff' }}>لوحة التحكم والشكاوى</h3>
        <p style={{ opacity: 0.7 }}>استقبل هنا شكاوى الموظفين والزوار. كل ما يرد هنا مشفر ومحجوب عن الجميع.</p>
        <div style={{ padding: '40px', color: '#555', border: '1px dashed #333', borderRadius: '10px' }}>
          لا توجد شكاوى حالياً - النظام يعمل بكفاءة
        </div>
      </div>
    </div>
  );
}
