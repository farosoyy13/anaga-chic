import React, { useEffect, useState } from 'react';
import { db } from './firebaseconfig';
import { collection, onSnapshot, query, doc, updateDoc, where } from 'firebase/firestore';
import { X, AlertTriangle, Unlock } from 'lucide-react';

export default function OwnerRoom({ onClose }: { onClose: () => void }) {
  const [blockedUsers, setBlockedUsers] = useState<any[]>([]);

  // رصد المستخدمين المتعثرين (الذين تم حظرهم)
  useEffect(() => {
    const q = query(collection(db, "users"), where("isBlocked", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlockedUsers(users);
    });
    return () => unsubscribe();
  }, []);

  // دالة فك الحظر السيادية (حصراً لك)
  const unblockUser = async (userId: string) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        isBlocked: false,
        loginAttempts: 0 // تصفير العداد
      });
      alert("تم فك الحظر عن المستخدم بنجاح.");
    } catch (e) {
      alert("حدث خطأ أثناء فك الحظر");
    }
  };

  return (
    <div style={{ background: '#000', color: '#d4af37', padding: '30px', minHeight: '100vh', fontFamily: 'Cairo, sans-serif' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: '20px', left: '20px', background: 'transparent', border: 'none', color: '#fff' }}><X size={30} /></button>
      
      <h2 style={{ textAlign: 'center', color: '#fff' }}>👑 مركز فك الحظر السيادي 👑</h2>
      
      <div style={{ marginTop: '30px', border: '1px solid #d4af37', padding: '20px', borderRadius: '15px' }}>
        <h3 style={{ color: '#ff4d4d' }}>المستخدمون المحظورون (تعثروا في الدخول):</h3>
        {blockedUsers.length > 0 ? (
          blockedUsers.map((user) => (
            <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #333' }}>
              <span>{user.email}</span>
              <button 
                onClick={() => unblockUser(user.id)}
                style={{ background: '#d4af37', color: '#000', border: 'none', padding: '5px 15px', borderRadius: '5px', cursor: 'pointer' }}
              >
                <Unlock size={16} /> فك الحظر فوراً
              </button>
            </div>
          ))
        ) : (
          <p>لا يوجد مستخدمون محظورون حالياً.</p>
        )}
      </div>
    </div>
  );
}
