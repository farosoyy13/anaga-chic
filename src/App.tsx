import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Sections from './Sections';

export default function App() {
  const [currentPage, setCurrentPage] = useState('HOME');

  // تنسيق أزرار التنقل الملكي
  const navButtonStyle = {
    background: 'transparent',
    border: 'none',
    color: '#d4af37',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '10px',
    fontFamily: 'Cairo, sans-serif'
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#d4af37', fontFamily: 'Cairo, sans-serif' }}>
      
      {/* شريط التنقل الملكي العلوي */}
      <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          padding: '15px', 
          borderBottom: '2px solid #d4af37',
          background: '#0a0a0a'
      }}>
        <button onClick={() => setCurrentPage('HOME')} style={navButtonStyle}>الرئيسية</button>
        <button onClick={() => setCurrentPage('SECTIONS')} style={navButtonStyle}>الأقسام</button>
        <button onClick={() => setCurrentPage('ABOUT')} style={navButtonStyle}>عن أناقة CHIC</button>
      </nav>

      {/* منطقة عرض الصفحات (المحتوى المتغير) */}
      <main style={{ paddingBottom: '50px' }}>
        {currentPage === 'HOME' && <Home />}
        {currentPage === 'SECTIONS' && <Sections />}
        {currentPage === 'ABOUT' && <About />}
      </main>
      
      {/* تذييل ثابت للموقع */}
      <footer style={{ textAlign: 'center', padding: '10px', fontSize: '0.8rem', borderTop: '1px solid #333' }}>
        أناقة CHIC - بروفيسور فهد بن حمود بن فهد الشمري © 2026
      </footer>
    </div>
  );
}
