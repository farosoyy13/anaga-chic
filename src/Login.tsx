رائع جداً👏، الآن انتقل للربط البرمجي بين الصفحة الملكية Login.tsx وبين نموذج تسجيل الدخول LoginForm.tsx بحيث كل مربع ـ عند الضغط عليه ـ يظهر النموذج المناسب له (صاحب الموقع/المشرف/الزائر) بدون مغادرة الصفحة.

---

# اسم الملف: src/Login.tsx

👇 الصق الكود كامل واستبدله تماماً بما يلي:

```tsx
import React, { useState } from "react";
import { Crown, ShieldCheck, User, Sparkles } from "lucide-react";
import LoginForm from "./LoginForm";

// الرسائل التوعوية فوق اسم الموقع
const topAdvice = (
  <div style={{ marginBottom: 18, textAlign: "center" }}>
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
  display: "flex", flexDirection: "row", gap: "30px"
};
const cardBaseStyle: React.CSSProperties = {
  minWidth: 220, minHeight: 142, maxWidth: 310,
  borderRadius: "15px", display: "flex", flexDirection: "column",
  alignItems: "center", justifyContent: "center", boxShadow: "0 2px 22px #b79a348c",
  cursor: "pointer", transition: "all 0.22s", fontWeight: 800, fontSize: "1rem"
};

export default function Login() {
  const [openRole, setOpenRole] = useState<null | "OWNER" | "ADMIN" | "GUEST">(null);

  // عند نجاح الدخول، يمكنك هنا تحويله للداشبورد المناسب (برمجياً مستقبلاً)
  const handleLoginSuccess = () => {
    // مثال أولي (عدّل حسب التنقل المطلوب):
    window.location.href = "/"; // أو استخدم React Router لاحقاً
  };
  // زر رجوع للواجهة الرئيسية
  const handleBack = () => setOpenRole(null);

  // حالة تفعيل المربع الملكي في التصميم (تأثير بصري)
  const [hoverOwner, setHoverOwner] = useState(false);

  return (
    <div style={wrapperStyle}>
      {topAdvice}

      {openRole === null ? (
        <>
          {/* واجهة الدخول بثلاث مربعات */}
          <div style={cardsContainerStyle}>
            {/* صاحب الموقع */}
            <div
              style={{
                ...cardBaseStyle,
                boxShadow: hoverOwner
                  ? "0 0 44px 11px #d4af3799, 0 0 120px 35px #cbaa32a0"
                  : "0 0 16px 3px #cab36b75",
                background: "linear-gradient(135deg,#fff9e3 70%,#d4af37 95%)",
                transform: hoverOwner ? "scale(1.04)" : "scale(1)",
                border: "3px solid #d4af37", color: "#463108"
              }}
              onMouseEnter={() => setHoverOwner(true)}
              onMouseLeave={() => setHoverOwner(false)}
              onClick={() => setOpenRole("OWNER")}
            >
              <div style={{ fontSize: 42, marginBottom: 6 }}>
                <Crown size={44} color="#d4af37" />
                <span style={{
                  marginLeft: 9, color: "#b89c41",
                  textShadow: "0 0 9px #d4af37"
                }}>صاحب الموقع</span>
              </div>
              <div style={{
                fontWeight: 700, color: "#685324", fontSize: "1.13rem"
              }}>
                دخول أصحاب السلطة والقرارات <Sparkles size={18} />
              </div>
            </div>
            {/* المشرفين */}
            <div
              style={{
                ...cardBaseStyle,
                background:
                  "linear-gradient(135deg,#ece7d4 70%,#bfb975 95%)",
                border: "2px solid #bfb975", color: "#413915"
              }}
              onClick={() => setOpenRole("ADMIN")}
            >
              <div style={{ fontSize: 35 }}>
                <ShieldCheck size={33} color="#b6a836" />
                <span style={{ marginLeft: 6 }}>المشرفين</span>
              </div>
              <div style={{ fontWeight: 600, color: "#857700", fontSize: "0.99rem" }}>
                دخول حماية النظام
              </div>
            </div>
            {/* الزوار */}
            <div
              style={{
                ...cardBaseStyle,
                background: "linear-gradient(135deg,#f4ede0 90%,#d5c176 100%)",
                border: "2px solid #e4c870", color: "#75592a"
              }}
              onClick={() => setOpenRole("GUEST")}
            >
              <div style={{ fontSize: 27 }}>
                <User size={30} color="#ceb76e" />
                <span style={{ marginLeft: 3 }}>الزوار</span>
              </div>
              <div style={{ fontWeight: 600, color: "#aa9759", fontSize: "0.9rem" }}>
                مشاهدة الجمال والمنتجات
              </div>
            </div>
          </div>
          {/* تنبيه باللون الأحمر حول أهمية الايميل */}
          <div style={{
            margin: "39px 0 0 0", fontSize: "0.99rem",
            color: "#ff2e1d", textAlign: "center", fontWeight: 700
          }}>
            ⚠️
            <span style={{ marginRight: 6 }}>
              الرجاء التسجيل بالإيميل الصحيح، لن يتم استعادة كلمة المرور إلا عبر البريد الإلكتروني.
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
```

---

## ملاحظات مهمة:
- الآن لو ضغط أي مربع من الثلاثة، يظهر نموذج تسجيل الدخول المناسب لذلك الدور.
- عند تعبئة البيانات والدخول بنجاح (أو بالزر "الرجوع") تعود للواجهة الرئيسية (مربعات الدخول).
- بعد اكتمال دخول صاحب الموقع لاحقًا، سنضيف (الموسيقى، الشريط المتحرك، الرسائل الخاصة إلخ.) في الخطوات التي بعدها.

---

## خطوتك الآن:
1. انسخ الكود أعلاه وضعه بالكامل في الملف  
   `src/Login.tsx`
2. جرب الصفحة وتأكد أن الضغط على أي مربع يفتح نموذج الدخول المناسب.
3. إذا كان كل شيء سليم، أكتب لي "تم الربط بين Login وLoginForm"  
4. ننتقل بعدها مباشرة لخطوة:
   - حماية الموقع بالكامل بعدم السماح لأي صفحة بدون تسجيل حقيقي.
   - تفعيل الشريط والموسيقى عند دخول صاحب الموقع.

---

بانتظارك بعد تجربة الخطوة!  
إذا هناك مشكلة أو أي ملاحظة بلغني قبل الانتقال للخطوة القادمة. 🚀