import React, { useState, useEffect } from 'react';
import { auth } from './firebaseconfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Home from './Home';
import About from './About';
import Sections from './Sections';
import Login from './Login';
import MainDashboard from './MainDashboard';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('HOME');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // دالة الوداع الملكية الإيمانية
  const handleLogout = async () => {
    const message = "فمان الله وحافظك الله ولا تنسى صلاتك وأذكارك، زورنا مرة أخرى ولا تقاطعنا ❤️";
    const confirmLogout = window.confirm(message);
    if (confirmLogout) {
      try {
        await signOut(auth);
        window.location.reload();
      } catch (error) {
        console.error("خطأ في تسجيل الخروج:", error);
      }
    }
  };

  if (loading) return (
    <div style={{ background: '#000', color: '#d4af37', textAlign: 'center', marginTop: '50px', fontSize: '1.2rem', fontWeight: 'bold' }}>
      جاري التحقق من الهوية الملكية...
    </div>
  );

  if (!user) return <Login />;

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#d4af37', fontFamily: 'Cairo, sans-serif' }}>
      {/* شريط التنقل الملكي المتطور */}
      <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', padding: '15px', borderBottom: '2px solid #d4af37', background: '#0a0a0a' }}>
        <button onClick={() => setCurrentPage('HOME')} style={navButtonStyle}>الرئيسية</button>
        <button onClick={() => setCurrentPage('SECTIONS')} style={navButtonStyle}>الأقسام</button>
        <button onClick={() => setCurrentPage('DASHBOARD')} style={navButtonStyle}>لوحة التحكم</button>
        <button onClick={() => setCurrentPage('ABOUT')} style={navButtonStyle}>عن أناقة CHIC</button>
        <button onClick={handleLogout} style={{ ...navButtonStyle, borderColor: '#ef4444', color: '#ef4444' }}>تسجيل الخروج</button>
      </nav>

      <main>
        {currentPage === 'HOME' && <Home />}
        {currentPage === 'SECTIONS' && <Sections />}
        {currentPage === 'DASHBOARD' && <MainDashboard />}
        {currentPage === 'ABOUT' && <About />}
      </main>
    </div>
  );
}

const navButtonStyle = {
  background: 'transparent',
  border: '1px solid #d4af37',
  color: '#d4af37',
  cursor: 'pointer',
  padding: '8px 16px',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  margin: '5px'
};
