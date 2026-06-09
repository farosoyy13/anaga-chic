import React, { useState, useEffect } from 'react';

export default function RoyalTimer() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div style={{ 
      border: '2px solid #d4af37', 
      padding: '20px', 
      borderRadius: '20px', 
      textAlign: 'center',
      background: 'rgba(0, 0, 0, 0.8)',
      margin: '20px auto',
      maxWidth: '350px',
      boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)',
      animation: 'pulse 2s infinite'
    }}>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 25px rgba(212, 175, 55, 0.7); }
          100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.3); }
        }
      `}</style>
      <h3 style={{ color: '#d4af37', margin: 0, fontSize: '1.5rem' }}>
        {timeLeft > 0 ? `ينتهي العرض الملكي بعد: ${timeLeft} ثانية` : "انتهت الفرصة الملكية!"}
      </h3>
    </div>
  );
}
