import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import ProtectedRoute from './components/ProtectedRoute';

// استيراد المكونات (سيتم إنشاؤها لاحقاً)
const Home = () => (
  <div style={{ textAlign: 'center', padding: '100px', background: '#000', minHeight: '100vh', color: '#fff' }}>
    <h1 style={{ color: '#d4af37' }}>أناقة CHIC</h1>
    <p>أهلاً بك في منصة الفخامة</p>
  </div>
);

export default function App() {
  const [user, setUser] = useState<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // منطق تشغيل الصوت الملكي عند أول تفاعل
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => console.log("بانتظار تفاعل المستخدم"));
      }
    };
    window.addEventListener('click', playAudio);
    return () => window.removeEventListener('click', playAudio);
  }, []);

  // مراقبة حالة تسجيل الدخول
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#000', minHeight: '100vh' }}>
        {/* موسيقى خلفية ملكية */}
        <audio ref={audioRef} loop>
          <source src="https://assets.mixkit.co/active_storage/sfx/2122/2122-preview.mp3" type="audio/mpeg" />
        </audio>

        <Routes>
          {/* الواجهة الرئيسية */}
          <Route path="/" element={<Home />} />
          
          {/* مسار غرفة العمليات المحمي */}
          <Route 
            path="/owner-room" 
            element={
              <ProtectedRoute>
                <div style={{ padding: '40px', color: '#fff' }}>
                  <h2 style={{ color: '#d4af37', textAlign: 'center' }}>مرحباً بك في غرفة العمليات الملكية</h2>
                  {/* هنا سيتم عرض محتوى لوحة التحكم */}
                </div>
              </ProtectedRoute>
            } 
          />
          
          {/* تحويل أي مسار خاطئ للرئيسية */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
