tsx
import React, { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import Sections from './Sections';
import Haraj from './Haraj';
import About from './About';
import './App.css';
import { auth } from './firebaseconfig';

// دوال تعقب الحالة الحية لتسجيل الدخول (Firebase)
function useAuthState() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(setUser);
    return () => unsub();
  }, []);

  return user;
}

// المكون الرئيسي للموقع
export default function App() {
  const user = useAuthState();
  const [currentPage, setCurrentPage] = useState('LOGIN');

  // عند تسجيل دخول ناجح، ينقل المستخدم مباشرة للصفحة الرئيسية
  const handleLoginSuccess = () => {
    setCurrentPage('HOME');
  };

  // حماية: إذا خرج المستخدم أو لم يسجل دخول يرجع مباشرة لصفحة الدخول
  useEffect(() => {
    if (!user) {
      setCurrentPage('LOGIN');
    }
  }, [user]);

  // التحكم في التنقل
  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="main-container">
      {/* إذا لم يسجل الدخول */}
      {(!user || currentPage === 'LOGIN') && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}

      {/* إذا سجل الدخول */}
      {user && currentPage !== 'LOGIN' && (
        <>
          <nav className="nav-bar">
            <button onClick={() => navigate('HOME')}>الرئيسية</button>
            <button onClick={() => navigate('SECTIONS')}>الأقسام</button>
            <button onClick={() => navigate('HARAJ')}>منصة الإعلانات</button>
            <button onClick={() => navigate('ABOUT')}>عن أناقة CHIC</button>
            <button onClick={() => { auth.signOut(); }}>تسجيل الخروج</button>
          </nav>

          <main className="content-area">
            {currentPage === 'HOME' && (
              <Home onNavigate={navigate as any} />
            )}
            {currentPage === 'SECTIONS' && (
              <Sections onNavigate={navigate as any} />
            )}
            {currentPage === 'HARAJ' && <Haraj />}
            {currentPage === 'ABOUT' && <About />}
          </main>
        </>
      )}
    </div>
  );
}