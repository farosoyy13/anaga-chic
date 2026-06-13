import React, { useState } from "react";
import { Crown, ShieldCheck, Sparkles } from "lucide-react";
import LoginForm from "./LoginForm";

const securityNote = (
  <div style={{
    background: "#d4af37", color: "#000", fontWeight: 900, fontSize: "1.14rem",
    borderRadius: 10, padding: "17px 19px", margin: "22px auto 28px auto", textAlign: "center", maxWidth: 550,
    border: "2px solid #b59b24", boxShadow: "0 2px 11px #bba33f33"
  }}>
    🚨 <span>موقع <b>أناقة CHIC</b> يمتلك نظام حماية تقني شديد القوة، وخصوصية <b>جميع المستخدمين</b> خط أحمر…  
      لا يمكن لأي شخص أو جهة الاطلاع أو الوصول على أي معلومة تخصهم  صاحب الموقع يرى فقط من أجل حمايتهم.<br />
      جميع بياناتك <b>مشفرة بالكامل</b> وتمتثل لأعلى معايير الأمان الرقمي. أي محاولة تهكير أو تسلل يتم كشفها لحظياً وإغلاقها فورًا وتنبيه الإدارة.
    </span>
  </div>
);

const topAdvice = (
  <div style={{ marginBottom: 16, textAlign: "center" }}>
    <div style={{
      fontSize: "2.6rem", fontWeight: 900,
      letterSpacing: 3, color: "#d4af37", textShadow: "0 0 24px #ab8e2f"
    }}>
      👑 أناقة CHIC 👑
    </div>
    <div style={{
      margin: "9px 0 2px 0", fontSize: "0.88rem",
      color: "#c2b49e", fontWeight: 700
    }}>
      "{`لا تقطع رزق أحد، واعلم أن الحسد لا يرفعك بل يحرمك الخير!`}<br />
      {`عود نفسك النية الطيبة تحل البركة وتزيدك رزقًا، ولا تنازع أحدا في خيره.`}"
    </div>
  </div>
);

const wrapperStyle: React.CSSProperties = {
  minHeight: "100vh", background: "#0e0e07",
  display: "flex", flexDirection: "column", alignItems: "center",
  justifyContent: "center", overflow: "hidden", fontFamily: "serif"
};
const cardsContainerStyle: React.CSSProperties = {
  display: "flex", flexDirection: "row", gap: "32px"
};
const cardBaseStyle: React.CSSProperties = {
  minWidth: 235, minHeight: 149, maxWidth: 330,
  borderRadius: "15px", display: "flex", flexDirection: "column",
  alignItems: "center", justifyContent: "center", boxShadow: "0 2px 22px #b79a3496",
  cursor: "pointer", transition: "all 0.22s", fontWeight: 800, fontSize: "1rem"
};

export default function Login() {
  const [openRole, setOpenRole] = useState<null | "OWNER" | "ADMIN">(null);

  const handleLoginSuccess = () => {
    window.location.href = "/";
  };
  const handleBack = () => setOpenRole(null);

  const [hoverOwner, setHoverOwner] = useState(false);

  return (
    <div style={wrapperStyle}>
      {securityNote}
      {topAdvice}

      {openRole === null ? (
        <>
          <div style={cardsContainerStyle}>
            <div
              style={{
                ...cardBaseStyle,
                boxShadow: hoverOwner
                  ? "0 0 44px 11px #d4af3799, 0 0 120px 35px #cbaa32a0"
                  : "0 0 16px 3px #cab36b75",
                background: "linear-gradient(135deg,#fff9e3 70%,#d4af37 95%)",
                transform: hoverOwner ? "scale(1.05)" : "scale(1)",
                border: "3px solid #d4af37", color: "#463108"
              }}
              onMouseEnter={() => setHoverOwner(true)}
              onMouseLeave={() => setHoverOwner(false)}
              onClick={() => setOpenRole("OWNER")}
            >
              <div style={{ fontSize: 44, marginBottom: 7 }}>
                <Crown size={44} color="#d4af37" />
                <span style={{
                  marginLeft: 9, color: "#b89c41",
                  textShadow: "0 0 9px #d4af37"
                }}>صاحب الموقع</span>
              </div>
              <div style={{
                fontWeight: 700, color: "#685324", fontSize: "1.16rem"
              }}>
                دخول أصحاب السلطة والقرارات <Sparkles size={18} />
              </div>
            </div>
            <div
              style={{
                ...cardBaseStyle,
                background:
                  "linear-gradient(135deg,#ece7d4 70%,#bfb975 95%)",
                border: "2px solid #bfb975", color: "#413915"
              }}
              onClick={() => setOpenRole("ADMIN")}
            >
              <div style={{ fontSize: 36 }}>
                <ShieldCheck size={34} color="#b6a836" />
                <span style={{ marginLeft: 7 }}>المشرفين</span>
              </div>
              <div style={{ fontWeight: 600, color: "#857700", fontSize: "1.02rem" }}>
                دخول حماية النظام
              </div>
            </div>
          </div>
          <div style={{
            margin: "39px 0 0 0", fontSize: "0.99rem",
            color: "#ff2e1d", textAlign: "center", fontWeight: 700
          }}>
            ⚠️
            <span style={{ marginRight: 6 }}>
              التسجيل فقط بحساب رسمي (بريد إلكتروني مفعل أو عبر Google)، لا يمكن لأي شخص دخول الموقع بدون تحقق البريد أو حساب جوجل فعّال. <b>لا توجد خاصية "زائر" نهائيًا - حماية كاملة لخصوصيتك.</b>
            </span>
          </div>
        </>
      ) : (
        <LoginForm
          role={openRole}
          onSuccess={handleLoginSuccess}
          onBack={handleBack}
        />
      )}
    </div>
  );
}