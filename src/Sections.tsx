import React from 'react';

interface SectionsProps {
  onNavigate: (page: string) => void;
}

export default function Sections({ onNavigate }: SectionsProps) {
  return (
    <div style={sectionsContainerStyle}>
      <h2 style={titleStyle}>أقسام أناقة CHIC</h2>
      <p style={subtitleStyle}>تصفح المجموعات المختارة بعناية من قبل صاحب الموقع</p>
      
      <div style={gridStyle}>
        <button onClick={() => onNavigate('HOME')} style={btnStyle}>فساتين فخمة</button>
        <button onClick={() => onNavigate('HOME')} style={btnStyle}>شنط ماركة</button>
        <button onClick={() => onNavigate('HOME')} style={btnStyle}>الجيل الذهبي</button>
        <button onClick={() => onNavigate('HOME')} style={btnStyle}>عبايات فخمة</button>
      </div>

      <button onClick={() => onNavigate('HOME')} style={backBtnStyle}>
        العودة للرئيسية
      </button>
    </div>
  );
}

const sectionsContainerStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  color: '#d4af37',
  fontFamily: 'serif'
};

const titleStyle: React.CSSProperties = { fontSize: '2rem', marginBottom: '10px' };
const subtitleStyle: React.CSSProperties = { fontSize: '0.9rem', marginBottom: '20px', color: '#aaa' };

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '15px',
  marginBottom: '30px'
};

const btnStyle: React.CSSProperties = {
  padding: '15px',
  background: '#111',
  border: '1px solid #d4af37',
  color: '#d4af37',
  borderRadius: '8px',
  cursor: 'pointer'
};

const backBtnStyle: React.CSSProperties = {
  padding: '10px 20px',
  background: 'transparent',
  border: '1px solid #fff',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer'
};
