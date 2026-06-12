import React from 'react';
import { Mail, Phone, Building, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <div style={containerStyle}>
      {/* رأس الصفحة السيادي */}
      <div style={headerSectionStyle}>
        <h1 style={titleStyle}>صاحب أناقة CHIC</h1>
        <p style={nameStyle}>البروفيسور فهد بن حمود بن فهد الشمري</p>
        <span style={roleStyle}>رائد الأعمال والمؤسس</span>
      </div>

      {/* قسم الشراكات الموثوقة */}
      <div style={sectionStyle}>
        <h3 style={sectionTitleStyle}><Award size={20} /> شركاء الاستراتيجية الملكية</h3>
        <div style={partnerListStyle}>
          <p>• الشركاء العالميون: Global Luxury Partners | Tech Innovators Corp</p>
          <p>• الشركاء السعوديون: Saudi Excellence Group | National Elegance Hub</p>
        </div>
      </div>

      {/* منطقة المعلومات الرسمية */}
      <div style={footerStyle}>
        <div style={contactBlockStyle}>
          <h3 style={sectionTitleStyle}><Phone size={20} /> قنوات التواصل الرسمية</h3>
          <p>📞 00966536667222 | 00966507882771</p>
          <p>👻 سناب شات: pmp.u</p>
          <p>📧 البريد: kal6667222@gmail.com</p>
        </div>

        <div style={contactBlockStyle}>
          <h3 style={sectionTitleStyle}><Building size={20} /> المركز الرئيسي</h3>
          <p>حفر الباطن، طريق الملك فهد</p>
        </div>

        {/* قسم البنك المحصن */}
        <div style={bankSectionStyle}>
          <h3 style={sectionTitleStyle}><ShieldCheck size={20} /> البيانات البنكية المعتمدة</h3>
          <p><strong>مصرف الراجحي:</strong> SA0980000509608010069017</p>
          <p><strong>البنك العربي:</strong> SA9830400108088851870011</p>
        </div>
      </div>

      <p style={copyrightStyle}>© 2026 أناقة CHIC - جميع الحقوق محفوظة للبروفيسور فهد بن حمود الشمري</p>
    </div>
  );
}

// التنسيقات الفاخرة والثابتة
const containerStyle: React.CSSProperties = { background: '#050505', color: '#d4af37', height: '100vh', padding: '20px', fontFamily: 'serif', overflowY: 'auto' };
const headerSectionStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid #d4af37', paddingBottom: '20px' };
const titleStyle: React.CSSProperties = { fontSize: '1.2rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' };
const nameStyle: React.CSSProperties = { fontSize: '1.5rem', fontWeight: 'bold', margin: '5px 0' };
const roleStyle: React.CSSProperties = { fontSize: '0.9rem', color: '#d4af37' };
const sectionStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '30px', background: '#0a0a0a', padding: '15px', borderRadius: '10px' };
const sectionTitleStyle: React.CSSProperties = { color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px' };
const partnerListStyle: React.CSSProperties = { fontSize: '0.85rem', color: '#d4af37' };
const footerStyle: React.CSSProperties = { borderTop: '2px solid #d4af37', paddingTop: '20px' };
const contactBlockStyle: React.CSSProperties = { marginBottom: '20px', fontSize: '0.9rem' };
const bankSectionStyle: React.CSSProperties = { background: '#111', padding: '15px', borderRadius: '10px', fontSize: '0.85rem' };
const copyrightStyle: React.CSSProperties = { textAlign: 'center', marginTop: '30px', fontSize: '0.75rem', color: '#555' };
