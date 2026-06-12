import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Sections from './Sections';
import Haraj from './Haraj';
import About from './About';
import './components/App.css'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('LOGIN');

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="main-container">
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
            {currentPage === 'HOME' && <Home onNavigate={navigate as any} />}
            {currentPage === 'SECTIONS' && <Sections onNavigate={navigate as any} />}
            {currentPage === 'HARAJ' && <Haraj />}
            {currentPage === 'ABOUT' && <About />}
          </main>
        </>
      )}
    </div>
  );
}
