import React, { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import Sections from './Sections';
import Haraj from './Haraj';
import About from './About';
import AdminDashboard from './AdminDashboard'; // غرفة الملك
import ProductiveFamilies from './ProductiveFamilies'; // الأسر المنتجة (أضف الملف عندك)
import './App.css';
import { auth } from './firebaseconfig';

// ربط المستخدم الحالي ومتابعة دخوله
function useAuthState() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(setUser);
    return () => unsub();
  }, []);

  return user;
}

// وضع زر غرفة الملك (يظهر فقط لصاحب الموقع)
const isOwner = (user: any) => user && user.email === "kal6667222@gmail.com";

// المكون الرئيسي
export default function App() {
  const user = useAuthState();
  const [currentPage, setCurrentPage] = useState('LOGIN');

  // عند تسجيل دخول ناجح، ينقل المستخدم للصفحة الرئيسية
  const handleLoginSuccess = () => setCurrentPage('HOME');

  // حماية: لا أحد يشاهد غير صفحة الدخول إلا المسجّل
  useEffect(() => {
    if (!user) setCurrentPage('LOGIN');
  }, [user]);

  // التنقل بين الصفحات
  const navigate = (page: string) => setCurrentPage(page);

  return (
    <div className="main-container">

      {/* إن لم يسجل الدخول */}
      {(!user || currentPage === 'LOGIN') && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}

      {/* بعد تسجيل الدخول */}
      {user && currentPage !== 'LOGIN' && (
        <>
          <nav className="nav-bar">
            <button onClick={() => navigate('HOME')}>الرئيسية</button>
            <button onClick={() => navigate('SECTIONS')}>الأقسام</button>
            <button onClick={() => navigate('HARAJ')}>منصة الإعلانات</button>
            <button onClick={() => navigate('PRODUCTIVE_FAMILIES')}>الأسر المنتجة</button>
            <button onClick={() => navigate('ABOUT')}>عن أناقة CHIC</button>

            {/* زر غرفة الملك (فقط لصاحب الموقع) */}
            {isOwner(user) && (
              <button
                style={{
                  background: "#d4af37",
                  color: "#23210b",
                  fontWeight: 900,
                  borderRadius: 7,
                  border: "none",
                  margin: "0 0 0 8px"
                }}
                onClick={() => navigate('OWNER_ROOM')}
              >
                غرفة صاحب الموقع
              </button>
            )}

            <button
              style={{
                background: "#b91c1c",
                color: "#fff",
                borderRadius: 7,
                border: "none",
                fontWeight: 700,
                marginRight: 8
              }}
              onClick={() => { auth.signOut(); }}
            >
              تسجيل الخروج
            </button>
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
            {currentPage === 'PRODUCTIVE_FAMILIES' && <ProductiveFamilies />}
            {currentPage === 'OWNER_ROOM' && isOwner(user) && <AdminDashboard />}
          </main>
        </>
      )}
    </div>
  );
}