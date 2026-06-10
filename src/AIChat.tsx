import React, { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

export default function AIChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: 'AI', text: 'أهلاً بك يا غالية في أناقة CHIC.. أنا مستشارتك الخاصة، كيف أقدر أساعدك اليوم في اختيار الفخامة؟' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { sender: 'User', text: input }]);
    // هنا يمكن إضافة منطق ربط الـ API لاحقاً
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'AI', text: 'اختيار ذوق! هذا القسم من "الجيل الذهبي" تم اختياره بعناية ليعكس الرقي الملكي.' }]);
    }, 1000);
    setInput('');
  };

  return (
    <div style={chatContainerStyle}>
      <div style={headerStyle}>
        <span><Sparkles size={20} /> مساعد أناقة الذكي</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#d4af37', cursor: 'pointer' }}><X /></button>
      </div>
      
      <div style={messagesAreaStyle}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === 'User' ? 'right' : 'left', margin: '10px' }}>
            <span style={bubbleStyle(m.sender)}>{m.text}</span>
          </div>
        ))}
      </div>

      <div style={inputAreaStyle}>
        <input value={input} onChange={(e) => setInput(e.target.value)} style={inputStyle} placeholder="اسألي المستشارة..." />
        <button onClick={handleSend} style={sendBtnStyle}><Send size={20} /></button>
      </div>
    </div>
  );
}

const chatContainerStyle = { position: 'fixed', bottom: '80px', right: '20px', width: '300px', height: '400px', background: '#0a0a0a', border: '2px solid #d4af37', borderRadius: '15px', display: 'flex', flexDirection: 'column', zIndex: 1000 };
const headerStyle = { padding: '15px', background: '#d4af37', color: '#000', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' };
const messagesAreaStyle = { flex: 1, padding: '10px', overflowY: 'auto' as 'auto', color: '#d4af37' };
const bubbleStyle = (sender: string) => ({ padding: '8px', borderRadius: '10px', background: sender === 'AI' ? '#1a1a1a' : '#d4af37', color: sender === 'AI' ? '#d4af37' : '#000', fontSize: '0.9rem' });
const inputAreaStyle = { padding: '10px', display: 'flex', gap: '5px', borderTop: '1px solid #d4af37' };
const inputStyle = { flex: 1, background: 'transparent', border: '1px solid #d4af37', color: '#d4af37', padding: '8px', borderRadius: '5px' };
const sendBtnStyle = { background: '#d4af37', border: 'none', borderRadius: '5px', cursor: 'pointer', color: '#000' };
