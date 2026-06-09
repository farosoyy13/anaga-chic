import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// المكونات التي سنقوم بإنشائها لاحقاً
const Login = () => <div style={{textAlign: 'center', marginTop: '100px'}}>بوابة الدخول الملكية (3 مربعات)</div>;
const Home = () => <div style={{textAlign: 'center', marginTop: '100px'}}>الواجهة الرئيسية الملكية</div>;
const OwnerRoom = () => <div style={{textAlign: 'center', marginTop: '100px'}}>غرفة العمليات</div>;

export default function App() {
  // متغير وهمي للتحقق، سيتم ربطه لاحقاً بنظام تسجيل الدخول
  const isLoggedIn = false; 

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* حماية الموقع: إذا لم يسجل الدخول، يُحول لصفحة Login */}
        <Route 
          path="/*" 
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
        />
        
        <Route path="/owner-room" element={<OwnerRoom />} />
      </Routes>
    </Router>
  );
}
