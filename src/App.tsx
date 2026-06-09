import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import OwnerRoom from './OwnerRoom';

export default function App() {
  const isLoggedIn = false; // ستتحكم بهذا لاحقاً عبر نظام تسجيل الدخول

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* المسارات المحمية */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/owner-room" element={<OwnerRoom />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
