import React from 'react';

export default function Login() {
  const boxStyle = {
    padding: '30px',
    margin: '15px',
    border: '2px solid #d4af37',
    borderRadius: '15px',
    background: '#0a0a0a',
    color: '#d4af37',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cairo, sans-serif' }}>
      <h1 style={{ color: '#d4af37', marginBottom: '50px' }}>بوابة دخول أناقة CHIC</h1>
      
      <div style={boxStyle} onClick={() => alert('دخول صاحب الموقع')}>مربع صاحب الموقع والفخامة</div>
      <div style={boxStyle} onClick={() => alert('دخول المشرفين')}>مربع إدارة النظام (المشرفون والمراقبون)</div>
      <div style={boxStyle} onClick={() => alert('دخول الزوار')}>مربع دخول الزوار العام</div>
    </div>
  );
}
