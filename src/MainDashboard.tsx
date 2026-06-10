import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Send, Lock, Users, Eye, CloudRain, Zap, Gift, MessageSquare, Target } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MainDashboard() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('public');
  const [publicMessages, setPublicMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [publicMessages]);

  // اختراع النبض الذهبي الكوني
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

  // المكون الشارح الذكي (الاختراع المبدع)
  const ActionButton = ({ icon: Icon, title, desc, onClick }: any) => (
    <button onClick={onClick} className="group p-4 bg-slate-900 rounded-2xl border border-amber-900 hover:border-amber-500 transition-all flex flex-col items-center text-center">
      <Icon className="mb-2 text-amber-500 group-hover:scale-110 transition-transform" size={24} />
      <span className="font-bold text-sm text-amber-200">{title}</span>
      <span className="text-[10px] text-slate-500 mt-1 opacity-60 group-hover:opacity-100 transition-opacity italic">
        {desc}
      </span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* 1. الستارة الملكية */}
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
        <h1 className="text-2xl font-black text-amber-500 flex items-center gap-2"><Sparkles /> أناقة CHIC</h1>
      </header>

      <main className="p-4 max-w-4xl mx-auto space-y-8">
        
        {/* لوحة التحكم والاختراعات */}
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-amber-500/20">
          <h2 className="text-xl font-bold mb-6 text-amber-400">لوحة التحكم الملكية</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ActionButton icon={Zap} title="النبض الذهبي" desc="تفعيل توهج النبضات الملكية للمنتجات" onClick={triggerGoldenPulse} />
            <ActionButton icon={CloudRain} title="رادار الطقس" desc="قراءة طقس مدينتك وتلوين المتجر ذكياً" />
            <ActionButton icon={Gift} title="كشط الخصم" desc="كشط الشاشة الرقمية لإظهار هديتك" />
            <ActionButton icon={Shield} title="رادار المالك" desc="كشف إحصائيات المتجر الخفية والمحمية" />
            <ActionButton icon={MessageSquare} title="كبسولة السوالف" desc="تفعيل المحادثات التفاعلية لزيادة الحيوية" />
            <ActionButton icon={Target} title="محدد الأناقة" desc="تحديد اتجاهات الموضة العالمية في موقعك" />
            <ActionButton icon={Eye} title="الوضع الخفي" desc="إخفاء لوحة التحكم عن الزوار العاديين" />
            <ActionButton icon={Sparkles} title="الجاذبية" desc="جعل صور المنتجات تطفو بلمسة ملكية" />
          </div>
        </div>

        {/* المجلس العام */}
        <div className="bg-slate-900/50 p-6 rounded-3xl border border-amber-500/20 backdrop-blur-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Users className="text-amber-500" /> المجلس العام للملكيات</h2>
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
      </main>
    </div>
  );
}
