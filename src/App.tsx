import React, { useState, useEffect } from 'react';
import { auth } from './firebaseconfig';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Home';
import About from './About';
import Sections from './Sections';
import Login from './Login';

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

  if (loading) return <div style={{ background: '#000', color: '#d4af37', textAlign: 'center', marginTop: '50px' }}>جاري التحقق من الهوية الملكية...</div>;

  if (!user) return <Login />;

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#d4af37', fontFamily: 'Cairo, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '15px', borderBottom: '2px solid #d4af37', background: '#0a0a0a' }}>
        <button onClick={() => setCurrentPage('HOME')} style={navButtonStyle}>الرئيسية</button>
        <button onClick={() => setCurrentPage('SECTIONS')} style={navButtonStyle}>الأقسام</button>
        <button onClick={() => setCurrentPage('ABOUT')} style={navButtonStyle}>عن أناقة CHIC</button>
      </nav>

      <main style={{ paddingBottom: '50px' }}>
        {currentPage === 'HOME' && <Home />}
        {currentPage === 'SECTIONS' && <Sections />}
        {currentPage === 'ABOUT' && <About />}
      </main>
    </div>
  );
}

const navButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: '#d4af37',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold'
};
