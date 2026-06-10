import React, { useEffect, useState } from 'react';
import { db } from './firebaseconfig';
import { collection, onSnapshot, query, doc, updateDoc, where, getDocs } from 'firebase/firestore';
import { X, AlertTriangle, Unlock, LayoutDashboard, MessageSquare, TrendingUp, ShieldAlert, Users } from 'lucide-react';

export default function OwnerRoom({ onClose }: { onClose: () => void }) {
  const [blockedUsers, setBlockedUsers] = useState<any[]>([]);

  // رصد المستخدمين المتعثرين
  useEffect(() => {
    const q = query(collection(db, "users"), where("isBlocked", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlockedUsers(users);
    });
    return () => unsubscribe();
  }, []);

  const unblockUser = async (userId: string) => {
    try {
      await updateDoc(doc(db, "users", userId), { isBlocked: false, loginAttempts: 0 });
      alert("تم فك الحظر عن المستخدم بنجاح.");
    } catch (e) { alert("حدث خطأ أثناء فك الحظر"); }
  };

  return (
    <div style={{ background: '#050505', color: '#d4af37', minHeight: '100vh', padding: '20px', fontFamily: 'serif' }}>
      {/* رأس الغرفة */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ color: '#fff', fontSize: '1.8rem' }}>👑 مكتب البروفيسور فهد بن حمود الشمري</h2>
        <button onClick={onClose} style={{ background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}><X /></button>
      </div>

      {/* لوحة الإحصائيات (Grid) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
        {[
          { icon: <LayoutDashboard />, label: 'إحصائيات الموقع' },
          { icon: <MessageSquare />, label: 'رسائل العملاء' },
          { icon: <TrendingUp />, label: 'التقارير المالية' },
          { icon: <ShieldAlert />, label: 'سجل الاختراقات' }
        ].map((item, i) => (
          <div key={i} style={cardStyle}>{item.icon} <h3 style={{ fontSize: '0.9rem', marginTop: '10px' }}>{item.label}</h3></div>
        ))}
      </div>

      {/* منطقة فك الحظر السيادية */}
      <div style={{ background: '#0a0a0a', border: '1px solid #d4af37', padding: '20px', borderRadius: '15px' }}>
        <h3 style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '10px' }}><Users /> المستخدمون المحظورون:</h3>
        {blockedUsers.length > 0 ? (
          blockedUsers.map((user) => (
            <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #333' }}>
              <span>{user.email}</span>
              <button onClick={() => unblockUser(user.id)} style={unblockBtnStyle}>
                <Unlock size={16} /> فك الحظر
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>لا يوجد مستخدمون محظورون - العرش في أمان.</p>
        )}
      </div>
    </div>
  );
}

const cardStyle = { padding: '20px', border: '1px solid #d4af37', borderRadius: '15px', background: '#111', textAlign: 'center' as 'center', cursor: 'pointer' };
const unblockBtnStyle = { background: '#d4af37', color: '#000', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' };
