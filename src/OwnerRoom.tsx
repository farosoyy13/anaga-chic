import React from 'react';
import { FaCrown, FaUsers, FaUserShield, FaEye, FaChartBar, FaSirenOn } from "react-icons/fa";
import { MdSecurity, MdNotificationsActive, MdMail } from "react-icons/md";

// تعريف واجهة الخصائص (Props)
interface OwnerRoomProps {
  onClose?: () => void;
}

export default function OwnerRoom({ onClose }: OwnerRoomProps) {
  return (
    <div style={{
      maxWidth: "920px",
      margin: "28px auto",
      background: "#f8f1e0",
      borderRadius: "22px",
      boxShadow: "0 4px 32px #d7c27e55",
      padding: "36px 24px",
      border: "4px solid #d4af37",
      fontFamily: "serif",
      color: "#503c1a",
      position: "relative"
    }}>
      {/* زر الإغلاق */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            background: "#d4af37",
            color: "#000",
            border: "none",
            borderRadius: "50%",
            width: "35px",
            height: "35px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ✕
        </button>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 25 }}>
        <FaCrown size={37} style={{color:'#d4af37'}} />
        <h2 style={{ fontSize: 34, fontWeight: 800, margin: "0 0 5px 0" }}>
          غرفة صاحب الموقع الملكية — الإدارة العليا
        </h2>
      </div>
      <div style={{ color: "#c39d36", fontWeight: 800, marginBottom: "17px" }}>
        (هذه الغرفة لا يراها إلا أنت، وتحتوي كل الصلاحيات المطلقة في الموقع) 
      </div>
      
      {/* قائمة الصلاحيات — نماذج أولية فقط */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"30px"}}>
        <div style={boxStyle}>
          <FaUsers size={30} /> <br/> إدارة المستخدمين <div style={descStyle}>طرد - إرجاع - إصلاح - بحث</div>
        </div>
        <div style={boxStyle}>
          <FaUserShield size={30} /> <br/> صلاحيات المشرفين <div style={descStyle}>ضبط/منح/إلغاء أي صلاحية</div>
        </div>
        <div style={boxStyle}>
          <FaEye size={30} /> <br/> مراقبة الرسائل <div style={descStyle}>عرض جميع الرسائل الخاصة</div>
        </div>
        <div style={boxStyle}>
          <MdNotificationsActive size={30} /> <br/> مركز الإشعارات <div style={descStyle}>جميع الأحداث — دعم فوري</div>
        </div>
        <div style={boxStyle}>
          <FaChartBar size={30}/> <br/> إحصائيات وزوار <div style={descStyle}>تتبع حي — خريطة حرارية</div>
        </div>
        <div style={boxStyle}>
          <MdMail size={30}/> <br/> تحكم بالبلاغات <div style={descStyle}>معالجة شكوى أي عضو</div>
        </div>
        <div style={boxStyle}>
          <MdSecurity size={30}/> <br/> الحماية الصارمة <div style={descStyle}>كشف محاولات التسلل والهاكرز</div>
        </div>
        <div style={boxStyle}>
          <FaSirenOn size={30}/> <br/> إنذار سريع <div style={descStyle}>زر طوارئ — تغيير كلمة مر