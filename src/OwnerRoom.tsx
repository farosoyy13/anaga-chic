import React, { useEffect, useState } from 'react';
import { db } from './firebaseconfig';
import { collection, onSnapshot, query, doc, updateDoc, where } from 'firebase/firestore';
import { X, Lock, Unlock, LayoutDashboard, MessageSquare, TrendingUp, ShieldAlert, Users, Database, Eye } from 'lucide-react';

export default function OwnerRoom({ onClose }: { onClose: () => void }) {
  const [blockedUsers, setBlockedUsers] = useState<any[]>([]);

  useEffect(() => {
    const q = query(collection(db, "users"), where("isBlocked", "==", true));
    return onSnapshot(q, (snapshot) => {
      setBlockedUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const unblockUser = async (userId: string) => {
    await updateDoc(doc(db, "users", userId), { isBlocked: false, loginAttempts: 0 });
    alert("تم استعادة صلاحية الوصول للمستخدم.");
  };

  const ownerTools = [
    { icon: <LayoutDashboard />, label: 'إحصائيات الموقع', desc: 'مراقبة حركة الزوار ونشاط الموقع لحظياً.' },
    { icon: <MessageSquare />, label: 'رسائل العملاء', desc: 'استعراض والرد على كافة تواصل العملاء.' },
    { icon: <TrendingUp />, label: 'التقارير المالية', desc: 'متابعة حركة المبيعات والأرباح بدقة.' },
    { icon: <ShieldAlert />, label: 'سجل الاختراقات', desc: 'كشف أي محاولات مشبوهة أو اختراق للمنصة.' },
    { icon: <Database />, label: 'إدارة البيانات', desc: 'تعديل أو حذف أي منتج أو إعلان في الموقع.' },
    { icon: <Eye />, label: 'وضع التخفي', desc: 'تصفح الموقع كزائر لمراقبة الجودة دون علم أحد.' }
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={{ color: '#d4af37', fontSize: '1.6rem' }}>👑 مكتب المالك: البروفيسور فهد بن حمود بن فهد الشمري</h2>
        <button onClick={onClose} style={closeBtnStyle}><X /></button>
      </div>

      {/* لوحة الصلاحيات التعريفية */}
      <div style={gridStyle}>
        {ownerTools.map((tool, i) => (
          <div key={i} style={cardStyle}>
            {tool.icon}
            <h3 style={{ fontSize: '0.9rem', margin: '10px 0' }}>{tool.label}</h3>
            <p style={{ fontSize: '0.7rem', color: '#aaa' }}>{tool.desc}</p>
          </div>
        ))}
      </div>

      {/* منطقة السيطرة الأمنية */}
      <div style={securitySectionStyle}>
        <h3 style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '10px' }}><Lock /> السيطرة على المستخدمين:</h3>
        {blockedUsers.map((user) => (
          <div key={user.id} style={userRowStyle}>
            <span>{user.email}</span>
            <button onClick={() => unblockUser(user.id)} style={unblockBtnStyle}><Unlock size={14} /> منح الوصول</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// التنسيقات الملكية
const containerStyle: React.CSSProperties = { background: '#050505', color: '#d4af37', height: '100vh', padding: '20px', fontFamily: 'serif', overflowY: 'auto' };
const headerStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d4af37', paddingBottom: '20px' };
const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', marginTop: '20px' };
const cardStyle: React.CSSProperties = { padding: '15px', border: '1px solid #d4af37', borderRadius: '10px', background: '#0a0a0a', textAlign: 'center' };
const securitySectionStyle: React.CSSProperties = { background: '#0a0a0a', border: '1px solid #d4af37', padding: '20px', borderRadius: '15px', marginTop: '30px' };
const userRowStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #333', alignItems: 'center' };
const unblockBtnStyle: React.CSSProperties = { background: '#d4af37', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' };
const closeBtnStyle: React.CSSProperties = { background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', cursor: 'pointer', padding: '5px' };
