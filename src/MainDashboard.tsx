import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Send, Lock, Users, Eye, CloudRain, Zap, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

// الإعدادات الملكية
const OWNER_ID = "CHIC_MASTER_999"; 

export default function MainDashboard() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('public');
  const [publicMessages, setPublicMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  // اختراع: النبض الذهبي الكوني (Golden Pulse)
  const triggerGoldenPulse = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      colors: ['#FFD700', '#DAA520', '#FFF'],
      origin: { y: 0.7 }
    });
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [publicMessages]);

  const sendPublicMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const msg = { id: Date.now(), senderName: "أنت (العميل الملكي)", text: inputText, timestamp: "الآن" };
    setPublicMessages(prev => [...prev, msg]);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* 1. الستارة الملكية (تأثير البوابة) */}
      <AnimatePresence>
        {!isCurtainOpen && (
          <motion.div className="fixed inset-0 z-50 flex" exit={{ opacity: 0 }}>
            <motion.div className="w-1/2 bg-gradient-to-l from-amber-900 to-black" exit={{ x: '-100%' }} transition={{ duration: 0.8 }} />
            <motion.div className="w-1/2 bg-gradient-to-r from-amber-900 to-black" exit={{ x: '100%' }} transition={{ duration: 0.8 }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                onClick={() => { setIsCurtainOpen(true); triggerGoldenPulse(); }}
                className="bg-amber-500 text-black px-12 py-4 rounded-full font-black shadow-[0_0_50px_rgba(217,119,6,0.5)]"
              >
                دخول عالم أناقة CHIC
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* المحتوى الرئيسي */}
      <header className="p-6 flex justify-between items-center border-b border-amber-900/30">
        <div className="flex items-center gap-2">
          <Sparkles className="text-amber-500 animate-spin-slow" />
          <h1 className="text-2xl font-black text-amber-500">أناقة CHIC</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('public')} className="p-2 bg-slate-900 rounded-lg"><Users size={20}/></button>
          <button onClick={triggerGoldenPulse} className="p-2 bg-amber-900/20 text-amber-500 rounded-lg"><Zap size={20}/></button>
        </div>
      </header>

      <main className="p-4">
        {/* ساحة العرض */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-amber-500/20 backdrop-blur-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Gift className="text-amber-500" /> المجلس العام للملكيات
            </h2>
            <div className="h-64 overflow-y-auto space-y-3">
              {publicMessages.map(msg => (
                <div key={msg.id} className="bg-black/40 p-3 rounded-xl text-sm border border-slate-800">
                  <span className="text-amber-400 font-bold">{msg.senderName}: </span>{msg.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <form onSubmit={sendPublicMessage} className="mt-4 flex gap-2">
              <input 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-black p-3 rounded-xl border border-slate-700 focus:border-amber-500 outline-none"
                placeholder="اكتب رسالتك للملكات..."
              />
              <button className="bg-amber-500 text-black px-6 rounded-xl font-bold"><Send size={18} /></button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
