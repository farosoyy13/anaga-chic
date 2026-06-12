import React, { useState, useEffect } from 'react';
import { auth } from './firebaseconfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Home from './Home';
import About from './About';
import Sections from './Sections';
import Login from './Login';
import MainDashboard from './MainDashboard';
import OwnerRoom from './OwnerRoom';
import './App.css';

export default function App() {
  const [user, setUser] = useState < any > (null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('HOME');
  const [showOwnerRoom, setShowOwnerRoom] = useState(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const handleLogout = async () => {
    if (window.confirm("فمان الله وحافظك الله ولا تنسى صلاتك وأذكارك، زورنا مرة أخرى ولا تقاطعنا ❤️")) {
      try { await signOut(auth);
        window.location.reload(); } catch (error) { console.error(error); }
    }
  };
  
  if (loading) return <div className="loading-screen">جاري التحقق من الهوية الملكية...</div>;
  if (!user) return <Login />;
  if (showOwnerRoom) return <OwnerRoom onClose={() => setShowOwnerRoom(false)} />;
  
  return (
    <div className="main-container">
      <nav className="nav-bar">
        <button className="nav-btn" onClick={() => setCurrentPage('HOME')}>الرئيسية</button>
        <button className="nav-btn" onClick={() => setCurrentPage('SECTIONS')}>الأقسام</button>
        <button className="nav-btn" onClick={() => setCurrentPage('DASHBOARD')}>لوحة التحكم</button>
        <button className="nav-btn" onClick={() => setCurrentPage('ABOUT')}>عن أناقة CHIC</button>
        <button className="nav-btn owner-btn" onClick={() => setShowOwnerRoom(true)}>الغرفة الخاصة</button>
        <button className="nav-btn logout-btn" onClick={handleLogout}>تسجيل الخروج</button>
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