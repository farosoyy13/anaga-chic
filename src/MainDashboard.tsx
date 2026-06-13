import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Send, Users, Eye, CloudRain, Zap, Gift, MessageSquare, Target } from 'lucide-react';
import confetti from 'canvas-confetti';
import OwnerRoom from './OwnerRoom';

// تعريف واجهة الخصائص (Props)
interface MainDashboardProps {
  onClose?: () => void;
}

export default function MainDashboard({ onClose }: MainDashboardProps) {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [showOwnerRoom, setShowOwnerRoom] = useState(false);
  const [publicMessages, setPublicMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [publicMessages]);

  const triggerGoldenPulse = () => {
    confetti({ particleCount: 200, spread: 120, colors: ['#FFD700', '#DAA520', '#FFF'], origin: { y: 0.7 } });
  };

  const sendPublicMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const msg = { id: Date.now(), senderName: "أنت (العميل الملكي)", text: inputText, timestamp: "الآن" };
    setPublicMessages(prev => [...prev, msg]);
    setInputText("");
  };

  const ActionButton = ({ icon: Icon, title, desc, onClick }: any) => (
    <button onClick={onClick} className="group p-4 bg-slate-900 rounded-2xl border border-amber-900 hover:border-amber-500 transition-all flex flex-col items-center text-center">
      <Icon className="mb-2 text-amber-500 group-hover:scale-110 transition-transform" size={24} />
      <span className="font-bold text-sm text-amber-200">{title}</span>
      <span className="text-[10px] text-slate-500 mt-1 opacity-60 group-hover:opacity-100 transition-opacity italic">
        {desc}
      </span>
    </button>
  );

  // عرض الغرفة الخاصة إذا تم تفعيلها
  if (showOwnerRoom) return <OwnerRoom onClose={() => setShowOwnerRoom(false)} />;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
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

      <header className="p-6 border-b border-amber-900/30 flex justify-between items-center">
        <h1 className="text-2xl font-black text-amber-500 flex items-center gap-2"><Spark