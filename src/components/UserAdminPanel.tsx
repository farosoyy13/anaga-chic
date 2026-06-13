import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebaseconfig';
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isBanned?: boolean;
}

export default function UserAdminPanel() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // تحميل البيانات من Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const snapshot = await getDocs(collection(db, 'users'));
      setUsers(snapshot.docs.map(docu => ({
        id: docu.id,
        ...docu.data()
      })) as User[]);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  // وظائف الصلاحيات الحية
  const handleBan = async (id: string) => {
    await updateDoc(doc(db, 'users', id), { isBanned: true });
    setUsers(users => users.map(u => u.id === id ? { ...u, isBanned: true } : u));
  };
  const handleUnban = async (id: string) => {
    await updateDoc(doc(db, 'users', id), { isBanned: false });
    setUsers(users => users.map(u => u.id === id ? { ...u, isBanned: false } : u));
  };
  const handleMakeAdmin = async (id: string) => {
    await updateDoc(doc(db, 'users', id), { role: "admin" });
    setUsers(users => users.map(u => u.id === id ? { ...u, role: "admin" } : u));
  };
  const handleRemoveAdmin = async (id: string) => {
    await updateDoc(doc(db, 'users', id), { role: "guest" });
    setUsers(users => users.map(u => u.id === id ? { ...u, role: "guest" } : u));
  };
  const handleFixLogin = async (id: string) => {
    // مثال: تحديث حقل خاص إذا كان لديك مشاكل دخول (عدله حسب قاعدة بياناتك)
    await updateDoc(doc(db, 'users', id), { loginProblem: false });
    alert("تم إصلاح مشكلة دخول المستخدم (المستخدم يجب أن يجرب الدخول من جديد).");
  };

  if (loading) return <div>جاري تحميل بيانات المستخدمين...</div>;

  return (
    <div style={{margin:"0 auto",background:"#fffbe8",borderRadius:13,padding:"23px",maxWidth:"650px"}}>
      <h3 style={{color:"#bfa246",fontWeight:800,fontSize:22,margin:"0 0 16px 0"}}>إدارة المستخدمين</h3>
      <table style={{width:"100%",borderCollapse:'collapse',fontFamily:'inherit'}}>
        <thead>
          <tr style={{background:"#f0ead6"}}>
            <th>الاسم</th>
            <th>البريد</th>
            <th>الدور</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{
              background: user.isBanned ? "#ffd6da" : "#f8f4ea"
            }}>
              <td style={{padding:"9px 7px"}}>{user.name || "-"}</td>
              <td style={{padding:"9px 7px",direction:"ltr"}}>{user.email}</td>
              <td style={{padding:"9px 7px"}}>{user.role}</td>
              <td style={{padding:"7px 5px"}}>
                {user.isBanned
                  ?
                <button onClick={()=>handleUnban(user.id)} style={{background:"#41a642",color:"#fff",border:"none",borderRadius:7,padding:"5px 14px",marginRight:4,cursor:"pointer"}}>
                  استرجاع
                </button>
                  :
                <button onClick={()=>handleBan(user.id)} style={{background:"#dc2626",color:"#fff",border:"none",borderRadius:7,padding:"5px 14px",marginRight:6,cursor:"pointer"}}>
                  طرد
                </button>
                }
                <button onClick={()=>handleFixLogin(user.id)} style={{background:"#0369a1",color:"#fff",border:"none",borderRadius:7,padding:"5px 10px",margin:"0 3px",cursor:"pointer"}}>
                  إصلاح الدخول
                </button>
                {user.role !== "admin" &&
                  <button onClick={()=>handleMakeAdmin(user.id)} style={{background:"#c39d36",color:"#000",border:"none",borderRadius:7,padding:"5px 10px",margin:"0 3px",cursor:"pointer"}}>
                    تعيين مشرف
                  </button>
                }
                {user.role === "admin" &&
                  <button onClick={()=>handleRemoveAdmin(user.id)} style={{background:"#b72626",color:"#fff",border:"none",borderRadius:7,padding:"5px 10px",margin:"0 3px",cursor:"pointer"}}>
                    إلغاء إشراف
                  </button>
                }
                <div style={{fontSize:"0.76rem",color:"#888",marginTop:2}}>
                  {user.isBanned
                    ? "استعادة المستخدم بعد الطرد"
                    : "طرد المستخدم وحظر دخوله"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{color:"#666",fontSize:"0.92rem",marginTop:13}}>
        يمكنك طرد/استرجاع/تعيين مشرف/إلغاء إشراف أو إصلاح أي حساب بضغطة زر. كل العمليات حية وفورية.
      </div>
    </div>
  );
}