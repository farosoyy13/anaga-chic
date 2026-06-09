import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import OwnerRoom from './OwnerRoom';

export default function App() {
  // مؤقتاً: false تعني أن الزائر سيُحول لصفحة Login إجبارياً
  const isLoggedIn = false; 

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* حماية الموقع: لا يمكن الدخول لأي صفحة إلا بعد تسجيل الدخول */}
        <Route 
          path="/*" 
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
        />
        
        <Route path="/owner-room" element={<OwnerRoom />} />
      </Routes>
    </Router>
  );
}
