tsx
import React, { useEffect, useState } from 'react';
import { auth } from './firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaUserShield, FaEye, FaChartBar, FaSirenOn, FaWhatsapp } from "react-icons/fa";
import { MdSecurity, MdNotificationsActive, MdMail } from "react-icons/md";

// واجهة المستخدم (يمكنك تطويرها لاحقًا بربط فعلي مع قاعدة بيانات المستخدمين)
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isBanned?: boolean;
}

export default function AdminDashboard() {
  const [authorized, setAuthorized] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // السماح فقط لصاحب الموقع بالدخول (يجب تحديث الايميل لو تغير لديك بالبريد الصحيح)
    const allowedEmail = "kal6667222@gmail.com";
    const user = auth.currentUser;
    if (user && user.email === allowedEmail) {
      setAuthorized(true);
      // هنا مستقبلا: تحميل بيانات المستخدمين، الرسائل، الاشعارات إلخ...
      // setUsers(...);
    } else {
      alert("تنبيه أمني: محاولة دخول غير مصرح بها لغرفة الملكية. تم منع الوصول.");
      navigate('/'); // طرد أي زائر فورا
    }
    // eslint-disable-next-line
  }, [navigate]);

  if (!authorized) {
    return <div style={{
      background: '#000', color: '#fff',
      height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>جاري التحقق من الصلاحيات الملكية...</div>;
  }

  return (
    <div style={{
      padding: '40px',
      background: '#f9f7f2',
      minHeight: '100vh',
      color: '#473207',
      fontFamily: 'Cairo, serif'
    }}>
      <header style={{
        borderBottom: '2px solid #d4af37',
        paddingBottom: '17px',
        marginBottom: '30px'
      }}>
        <h1 style={{
          textAlign: 'center', fontSize: '2.3rem',
          color: "#d4af37", marginBottom: 10
        }}>
          غرفة الملك - قيادة موقع أناقة CHIC
        </h1>
        <p style={{ textAlign: 'center' }}>
          <b>المستخدم الوحيد المخوّل هو صاحب الموقع الرسمي</b> <br />
          <span style={{ color: "#b70b0b" }}>القسم محمي بالكامل عن الجميع</span>
        </p>
      </header>

      {/* الصلاحيات الملكية */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '28px',
      }}>
        {/* إدارة المستخدمين */}
        <div style={boxStyle}>
          <FaUsers size={28}/>
          <h3 style={titleStyle}>إدارة المستخدمين</h3>
          <ul>
            <li>طرد/استعادة مستخدم</li>
            <li>تعيين أو إلغاء مشرف</li>
            <li>فحص الإيميلات: كشف الوهمي من الحقيقي</li>
            <li>إصلاح مشكلات الدخول</li>
          </ul>
          <div style={descStyle}>يمكنك إدارة جميع الحسابات والتحكم بها فورياً.</div>
        </div>

        {/* مراقبة الرسائل */}
        <div style={boxStyle}>
          <FaEye size={28}/>
          <h3 style={titleStyle}>مراقبة الرسائل الخاصة</h3>
          <ul>
            <li>عرض كل الرسائل بين العملاء</li>
            <li>حماية خصوصية المستخدمين</li>
            <li>تقارير فورية عن أي احتيال داخلي</li>
          </ul>
          <div style={descStyle}>كل الرسائل مشفرة، ومراقبتها حصرية لك فقط.</div>
        </div>

        {/* السجلات الرقابية */}
        <div style={boxStyle}>
          <FaChartBar size={28}/>
          <h3 style={titleStyle}>سجل الرقابة</h3>
          <ul>
            <li>شاهد كل الأحداث بشكل فوري</li>
            <li>إنذار عند أي محاولة اختراق</li>
            <li>مراقبة المدخلات من الهاكرز وحماية تلقائية</li>
          </ul>
          <div style={descStyle}>السجل هذه لا يطلع عليه غيرك أبدًا.</div>
        </div>

        {/* مركز الإشعارات */}
        <div style={boxStyle}>
          <MdNotificationsActive size={28}/>
          <h3 style={titleStyle}>مركز الإشعارات</h3>
          <ul>
            <li>تنبيه عند طرد أو حذف إعلان</li>
            <li>تنبيهات الحماية والمخاطر الأمنية</li>
            <li>مراقبة خروج أو دخول أي مشرف</li>
          </ul>
          <div style={descStyle}>الإشعارات حية وفورية ولا يمكن للمشرفين رؤيتها.</div>
        </div>

        {/* نظام الحماية الصارمة */}
        <div style={boxStyle}>
          <MdSecurity size={28}/>
          <h3 style={titleStyle}>نظام الحماية والأمان</h3>
          <ul>
            <li>فحص سجلات الدخول المشبوهة</li>
            <li>زر إنذار سريع لتغيير كلمة مرورك إذا لزم</li>
            <li>تنبيه تلقائي لتغيير كلمة سر البريد عند الضرورة</li>
          </ul>
          <div style={descStyle}>لا أحد يستطيع الدخول لغرفتك حتى مشرف النظام.</div>
        </div>

        {/* الانذار السريع والطوارئ */}
        <div style={boxStyle}>
          <FaSirenOn size={28}/>
          <h3 style={titleStyle}>الإنذار والطوارئ</h3>
          <ul>
            <li>تغير كلمة مرورك بضغطة واحدة</li>
            <li>إغلاق كافة الجلسات في الموقع فورًا عند الاشتباه</li>
          </ul>
          <div style={descStyle}>كل شيء تحت سيطرتك.</div>
        </div>

        {/* طرق التواصل المباشر */}
        <div style={boxStyle}>
          <FaWhatsapp size={28}/>
          <h3 style={titleStyle}>تواصل العملاء معك</h3>
          <ul>
            <li>واتساب مُرتبط بحسابك</li>
            <li>زر رسائل سريعة للرد على الشكاوى والطلبات</li>
          </ul>
          <div style={descStyle}>زر رسائل سريع ينقل العميل لمحادثتك مباشرة.</div>
        </div>
      </section>
      
      <div style={{
        color: "#99451d",
        background: "#ecfbe9",
        borderRadius: 13,
        border: '1px solid #d4af37',
        fontWeight: "bold",
        fontSize: "1.1rem",
        padding: "12px 19px",
        margin: "40px 0 0 0"
      }}>
        <span>توضيح:</span> جميع هذه الصلاحيات والأدوات لا يمكن الوصول لها إلا بواسطة <b>صاحب الموقع فقط</b>. لا يطلع عليها مشرف أو أي عضو ولا يستطيع أحد تفعيلها غيرك.
      </div>
    </div>
  );
}

// التصاميم
const boxStyle: React.CSSProperties = {
  background: "#fffbe7",
  borderRadius: "12px",
  padding: "24px 13px",
  textAlign: "right",
  fontWeight: 680,
  fontSize: "1.09rem",
  boxShadow: "0 2px 13px #cab97a33",
  border: "2.2px solid #d4af37",
  minHeight: 170
};
const titleStyle: React.CSSProperties = {
  color: "#c39d36", margin: '14px 0 10px 0'
};
const descStyle: React.CSSProperties = {
  fontSize: "0.95rem", color: "#888", marginTop: "4px", marginBottom:'5px'
};