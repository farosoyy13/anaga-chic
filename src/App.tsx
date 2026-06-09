import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import OwnerRoom from './OwnerRoom'; // استيراد الغرفة الجديدة

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 style={{color: '#d4af37', textAlign: 'center'}}>مرحباً بك في أناقة CHIC</h1>} />
        
        {/* الآن الغرفة محمية وتستدعي الملف الجديد */}
        <Route 
          path="/owner-room" 
          element={
            <ProtectedRoute>
              <OwnerRoom />
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
