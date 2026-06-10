import React, { useEffect, useState } from 'react';
import { db } from './firebaseconfig'; // استيراد قاعدة البيانات
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { Eye, Lock, MessageSquare, Zap, Target, Shield, Users, BarChart, Settings, Trash2, Globe, FileText, Power, RefreshCcw, Camera, X, AlertTriangle } from 'lucide-react';

export default function OwnerRoom({ onClose }: { onClose: () => void }) {
  const [alerts, setAlerts] = useState<any[]>([]);

  // محرك الرصد الأمني اللحظي
  useEffect(() => {
    const q = query(collection(db, "security_logs"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const logs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAlerts(logs);
    });
    return () => unsubscribe();
  }, []);

  const powers = [
    { title: "الرصد اللحظي", icon: Eye, desc: "مراقبة تحركات المستخدمين لحظة بلحظة" },
    { title: "تجميد الحسابات", icon: Lock, desc: "إيقاف أي مستخدم أو مشرف بضغطة زر" },
    { title: "البث الملكي", icon: MessageSquare, desc: "إرسال رسالة تظهر لكل المستخدمين في وقت واحد" },
    { title: "حجب المحتوى", icon: Trash2, desc: "مسح أي تعليق أو تقييم غير لائق فوراً" },
  ];

  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '30px', minHeight: '100vh', border: '3px solid #d4af37', position: 'relative', fontFamily: 'Cairo, sans-serif' }}>
      
      <button onClick={onClose} style={{ position: 'absolute', top: '20px', left: '20px', background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}>
        <X size={20} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#fff', fontSize: '2rem' }}>👑 غرفة التحكم الأمنية - البروفيسور فهد 👑</h2>
        <p style={{ color: '#ff4d4d' }}>نظام الرصد مفعل: مراقبة كافة التجاوزات</p>
      </div>

      {/* منطقة التنبيهات الأمنية اللحظية */}
      <div style={{ marginBottom: '40px', border: '2px solid #ff4d4d', padding: '20px', borderRadius: '15px', background: '#1a0000' }}>
        <h3 style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <AlertTriangle /> إشعارات أمنية فورية
        </h3>
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div key={alert.id} style={{ padding: '10px', borderBottom: '1px solid #333', color: '#fff' }}>
              <strong>{alert.type}:</strong> {alert.message}
            </div>
          ))
        ) : (
          <p style={{ color: '#888' }}>النظام سليم - لا توجد اختراقات أو تجاوزات حالياً.</p>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {powers.map((power, index) => (
          <div key={index} style={{ border: '1px solid #333', padding: '20px', borderRadius: '15px', background: '#0a0a0a', textAlign: 'center' }}>
            <power.icon size={30} style={{ margin: '0 auto 15px', color: '#d4af37' }} />
            <h3 style={{ fontSize: '0.9rem' }}>{power.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
