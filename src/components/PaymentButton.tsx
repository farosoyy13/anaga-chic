import React, { useState } from "react";
import RoyalButton from "./RoyalButton";
import { FaApplePay, FaCcMastercard, FaCcVisa, FaWhatsapp } from "react-icons/fa";

// تعريف واجهة الخصائص (Props)
interface PaymentButtonProps {
  productName: string;
  price: number | string;
}

export default function PaymentButton({ productName, price }: PaymentButtonProps) {
  const [open, setOpen] = useState(false);

  const accounts = [
    {
      bank: "مصرف الراجحي",
      iban: "SA0980000509608010069017",
      local: "09608010069017"
    },
    {
      bank: "البنك العربي",
      iban: "SA9830400108088851870011",
      local: "0108088851870011"
    }
  ];

  const copyText = (txt: string) => {
    navigator.clipboard.writeText(txt);
    alert("تم نسخ رقم الحساب!");
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <RoyalButton onClick={() => setOpen((s) => !s)}>
        💳 شراء فوري / دفع مباشر
      </RoyalButton>

      {open && (
        <div
          style={{
            background: "#fffbe7",
            border: "2px solid #edd079",
            borderRadius: 9,
            marginTop: 11,
            padding: 15,
            boxShadow: "0 2px 9px #eee6",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 7 }}>اختر وسيلة الدفع المناسبة:</div>
          <div style={{ margin: "4px 0" }}>
            <b style={{ color: "#323" }}>Apple Pay (أجهزة أبل)</b>
            <FaApplePay style={{ color: "#000", fontSize: 21, margin: "0 7px" }} />
            <span style={{ color: "#999", fontSize: 12 }}> (يظهر تلقائيًا في الأجهزة المدعومة)</span>
          </div>

          {accounts.map((acc) => (
            <div key={acc.iban} style={{ margin: "9px 0" }}>
              <b>{acc.bank}:</b>
              <span style={{ color: "#675805", marginRight: 6 }}>
                آيبان: {acc.iban}
              </span>
              <button style={copyBtn} onClick={() => copyText(acc.iban)}>
                نسخ الآيبان
              </button>
              <span style={{ color: "#888", marginRight: 7 }}>
                رقم الحساب المحلي: {acc.local}
              </span>
              <button style={copyBtn} onClick={() => copyText(acc.local)}>
                نسخ رقم الحساب
              </button>
            </div>
          ))}

          <div style={{ marginTop: 13, fontWeight: 700 }}>
            <div>
              أو عبر:{" "}
              <FaCcMastercard
                style={{ color: "#1870c3", fontSize: 17 }}
              />{" "}
              <FaCcVisa style={{ color: "#2456b3", fontSize: 17 }} />
            </div>
            <div style={{ fontSize: 14, color: "#668" }}>
              <span>طريقة الفاتورة السريعة:</span>
              <a
                href={`https://wa.me/966536667222?text=السلام عليكم، أريد شراء: ${productName} بسعر ${price} ريال.`}
                target="_blank"
                rel="noopener noreferrer"
                style={whatsBtn}
              >
                <FaWhatsapp style={{ verticalAlign: "middle" }} /> أطلب فاتورة واتساب
              </a>
            </div>
          </div>
          <div
            style={{
              color: "#be901b",
              fontWeight: 700,
              fontSize: 16,
              marginTop: 8,
            }}
          >
            متوفر لدينا خيارات <span style={{ fontWeight: 900 }}>تمارا</span>