import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import OwnerRoom from './OwnerRoom';

export default function App() {
  // متغير التحكم بحالة الدخول - سيتم ربطه لاحقاً بنظام المصادقة
  const isLoggedIn = false; 

  return (
    <Router>
      <Routes>
        {/* صفحة تسجيل الدخول */}
        <Route path="/login" element={<Login />} />
        
        {/* المسارات الرئيسية المحمية */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
        />
        
        {/* صفحة التعريف والتواصل */}
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        
        {/* غرفة العمليات الخاصة بالمالك */}
        <Route path="/owner-room" element={isLoggedIn ? <OwnerRoom /> : <Navigate to="/login" />} />
        
        {/* توجيه أي مسار غير معروف إلى الصفحة الرئيسية */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
