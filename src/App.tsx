import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import OwnerRoom from './OwnerRoom';
import RoyalTimer from './components/RoyalTimer'; // استيراد الميقاتي الملكي

export default function App() {
  return (
    <Router>
      <div dir="rtl" style={{ fontFamily: 'Cairo, sans-serif', background: '#000', minHeight: '100vh', color: '#fff' }}>
        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h1 style={{ color: '#d4af37', fontSize: '3rem' }}>أناقة CHIC</h1>
              <p>مرحباً بك في عالم الفخامة والتميز</p>
              {/* هنا يظهر الميقاتي الملكي */}
              <RoyalTimer />
            </div>
          } />
          
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
      </div>
    </Router>
  );
}
