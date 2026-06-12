import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Sections from './Sections';
import Haraj from './Haraj';
import About from './About';
import './components/App.css'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('LOGIN');

  // نظام التنقل الملكي الثابت
  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="main-container">
      {/* عرض الصفحة بناءً على الحالة الحالية بدون إعادة تحميل */}
      {currentPage === 'LOGIN' && <Login onLoginSuccess={() => navigate('HOME')} />}
      
      {currentPage !== 'LOGIN' && (
        <>
          <nav className="nav-bar">
            <button onClick={() => navigate('HOME')}>الرئيسية</button>
            <button onClick={() => navigate('SECTIONS')}>الأقسام</button>
            <button onClick={() => navigate('HARAJ')}>منصة الإعلانات</button>
            <button onClick={() => navigate('ABOUT')}>عن أناقة CHIC</button>
          </nav>

          <main className="content-area">
            {currentPage === 'HOME' && <Home onNavigate={navigate} />}
            {currentPage === 'SECTIONS' && <Sections onNavigate={navigate} />}
            {currentPage === 'HARAJ' && <Haraj />}
            {currentPage === 'ABOUT' && <About />}
          </main>
        </>
      )}
    </div>
  );
}
