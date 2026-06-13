
import { FaWhatsapp, FaSnapchatGhost } from "react-icons/fa";
import { MdEmail, MdPhone, MdAccountBalance } from "react-icons/md";

export default function Contact() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", marginTop: 25, color: "#3d2714", fontFamily: "serif", padding: 14 }}>
      <h2 style={{ color: "#cf9f2b", fontWeight: 900, fontSize: 32 }}>اتصل بي مباشرة 👑</h2>
      
      <div style={{ fontSize: 22, margin: "17px 0" }}>
        <MdPhone style={{ color: "#43a047", fontSize: 28, marginLeft: 6, verticalAlign: "middle" }} />
        <b>جوال مباشر:</b>
        <a href="tel:00966536667222" style={{ color: "#113f07", margin: "0 12px", textDecoration: "underline" }}>
          00966536667222
        </a>
        <a href="tel:00966507882771" style={{ color: "#113f07", margin: "0 12px", textDecoration: "underline" }}>
          00966507882771
        </a>
      </div>
      
      <div style={{ fontSize: 20, margin: "8px 0" }}>
        <FaWhatsapp style={{ color: "#25d366", fontSize: 28, marginLeft: 7, verticalAlign: "middle" }} />
        واتساب مباشر:
        <a
          href="https://wa.me/966536667222"
          target="_blank"
          style={{ color: "#006e3c", fontWeight: 700, marginLeft: 10, textDecoration: "underline" }}
        >
          تحدث للمالك مباشرة
        </a>
      </div>
      
      <div style={{ fontSize: 20, margin: "8px 0" }}>
        <FaSnapchatGhost style={{ color: "#ffeb3b", fontSize: 28, marginLeft: 5, verticalAlign: "middle" }} />
        سناب شات:
        <a
          href="https://snapchat.com/t/HPkkIfUp"
          target="_blank"
          style={{ color: "#cfa426", fontWeight: 700, marginLeft: 10, textDecoration: "underline" }}
        >
          pmp.u
        </a>
      </div>

      <div style={{ fontSize: 19, margin: "8px 0 14px 0" }}>
        <MdEmail style={{ color: "#943b00", fontSize: 25, marginLeft: 7, verticalAlign: "middle" }} />
        البريد الإلكتروني:
        <a
          href="mailto:kal6667222@gmail.com"
          style={{ color: "#5d3222", fontWeight: 800, marginLeft: 10, textDecoration: "underline" }}
        >
          kal6667222@gmail.com
        </a>
      </div>

      <div style={{
        fontSize: 19, color: "#205688", background: "#faf9eb", borderRadius: 13, padding: "18px", margin: "22px 0", border: "1px dashed #d0b06b"
      }}>
        <h3 style={{ color: "#a08740" }}>🔒 الحسابات البنكية الرسمية للموقع:</h3>
        <b>بنك الراجحي:</b> <br /> 
        الآيبان: <span style={{ direction: "ltr", userSelect: "all", fontWeight: 800 }}>SA0980000509608010069017</span> <br />
        الحساب تحويل محلي: <span style={{ direction: "ltr", userSelect: "all" }}>09608010069017</span>
        <br /><br />
        <b>بنك العربي:</b> <br />
        الآيبان: <span style={{ direction: "ltr", userSelect: "all", fontWeight: 800 }}>SA9830400108088851870011</span> <br />
        الحساب تحويل محلي: <span style={{ direction: "ltr", userSelect: "all" }}>0108088851870011</span>
      </div>

      <hr />
      <div style={{color:"#a01d0a", background:"#f5e1ef", borderRadius:12, padding: "8px 16px", fontWeight:'bold', margin:"14px 0 9px 0"}}>
        <b>تنبيه مهم:</b>
        جميع بيانات التواصل والحسابات البنكية في هذه الصفحة رسمية وحقيقية، وأي وسيلة أو جهة أخرى خارج هذه الصفحة تعتبر مزيفة أو غير معتمدة. 
        الرجاء الانتباه والالتزام.
      </div>
    </div>
  )
}