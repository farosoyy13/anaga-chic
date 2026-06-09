import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './AdminDashboard'; // استيراد لوحة التحكم التي أنشأناها

export default function App() {
  return (
    <Router>
      <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#000', minHeight: '100vh', color: '#fff' }}>
        <Routes>
          {/* الواجهة الرئيسية */}
          <Route path="/" element={
            <div style={{ textAlign: 'center', padding: '100px' }}>
              <h1 style={{ color: '#d4af37' }}>أناقة CHIC</h1>
              <p>نعمل على التحديثات الملكية..</p>
            </div>
          } />
          
          {/* مسار غرفة العمليات المحمي */}
          <Route 
            path="/owner-room" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
