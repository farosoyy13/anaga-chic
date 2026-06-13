import React from 'react';

interface RoyalButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function RoyalButton({ onClick, children, style }: RoyalButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'linear-gradient(135deg, #d4af37, #b8860b)',
        color: '#000',
        padding: '15px 30px',
        borderRadius: '50px',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
        transition: 'transform 0.3s',
        ...style
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {children}
    </button>
  );
}