import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Shield, Send, User, Lock, Users, Zap, Trash2 } from 'lucide-react';

// --- قواميس لمحاكاة السوالف السعودية الوهمية ---
const saudiNames = [
  "نورة القحطاني", "سارة الشمري", "مها العتيبي", "خالد الدوسري", "ريما المطيري",
  "العنود العنزي", "فهد الحرْبي", "شوق البقمي", "الهنوف السبيعي", "عبدالمجيد الحربي"
];

const saudiChats = [
  "بنات فستان العيد من وين طلبتوه؟ يجنن التنسيق هنا",
  "العباية المخملية اللي شفتها بالرادار صدق جودتها قوية؟",
  "يا جماعة التوصيل للرياض كم يأخذ يوم؟ عندي مناسبة الويكند",
  "جربت كود الخصم الملكي وعطاني ٣٥٪؜ الحقوا عليه",
  "أحد جرب فستان الأوركيد؟ محتارة بين المقاس ميديم أو لارج",
  "يا ليت يوفّرون قطع زيادة من طقم الأناقة الماسية، طار في ثواني!",
  "الموقع هذا غريب وفخم، الستارة والأنيميشن يفتح النفس هههه",
  "توني كلمت وحدة خاص ونسقنا طقم العيد مع بعض، الفكرة بطلة"
];

interface Message {
  id: string;
  senderName: string;
  senderId: string;
  text: string;
  timestamp: string;
  isBot?: boolean;
}

interface PrivateChat {
  id: string;
  userA: string;
  userB: string;
  messages: Message[];
}

export default function MainDashboard() {
  // معرفك الشخصي كمالك للموقع (استبدله بالـ ID الحقيقي الخاص بك)
  const OWNER_ID = "YOUR_SECRET_OWNER_UID_123"; 
  
  // بيانات المستخدم الحالي الافتراضية
  const [currentUser] = useState({ id: "user_789", name: "أريج التميمي", role: "user" });

  // حالات القوائم والدردشات
  const [activeTab, setActiveTab] = useState<'public' | 'private' | 'owner'>('public');
  const [publicMessages, setPublicMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [selectedPrivateChat, setSelectedPrivateChat] = useState<string | null>(null);

  // قاعدة بيانات وهمية محلية للمحادثات الخاصة (سيتم ربطها بـ Firebase لاحقاً)
  const [privateChats, setPrivateChats] = useState<PrivateChat[]>([
    {
      id: "chat_p1",
      userA: "سارة الشمري",
      userB: "مها العتيبي",
      messages: [
        { id: "m1", senderId: "1", senderName: "سارة الشمري", text: "هلا مها، عجبني الفستان اللي عرضتيه بالعام، تبيعين القطعة؟", timestamp: "7:45 م" },
        { id: "m2", senderId: "2", senderName: "مها العتيبي", text: "ايه حبيبتي لبسته مرة واحدة بس، كلميني نتفق على السعر", timestamp: "7:46 م" }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // التمرير التلقائي لأسفل الشاشة عند وصول رسائل جديدة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [publicMessages, privateChats]);

  // --- محرك الذكاء الاصطناعي لضخ الرسائل السعودية الوهمية (كل 7 ثوانٍ) ---
  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = saudiNames[Math.floor(Math.random() * saudiNames.length)];
      const randomText = saudiChats[Math.floor(Math.random() * saudiChats.length)];
      const newBotMsg: Message = {
        id: "bot_" + Date.now(),
        senderName: randomName,
        senderId: "bot_" + Math.random().toString(36).substr(2, 5),
        text: randomText,
        timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isBot: true
      };
      setPublicMessages(prev => [...prev, newBotMsg].slice(-50)); // الاحتفاظ بآخر 50 رسالة لمنع البطء
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // إرسال رسالة في العام
  const handleSendPublic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: "user_" + Date.now(),
      senderName: currentUser.name,
      senderId: currentUser.id,
      text: inputText,
      timestamp: "الآن"
    };

    setPublicMessages(prev => [...prev, newMsg]);
    setInputText("");
  };

  // صلاحية الإشراف السري لحظر المستخدمين
  const handleKickUser = (userId: string, name: string) => {
    alert(`تم إصدار أمر ملكي خفي بطرد وحظر المستخدم: ${name} (${userId})`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans select-none" dir="rtl">
      
      {/* البار العلوي الفخم */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-4 flex justify-between items-center px-6">
        <div className="flex items-center gap-3">
          <Zap className="text-amber-400 animate-pulse" />
          <span className="text-xl font-black bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">منصة أناقة التفاعلية</span>
        </div>
        
        {/* التبديل بين الغرف */}
        <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button 
            onClick={() => setActiveTab('public')}
            className={`px-4 py-1.5 rounded-lg font-bold text-sm transition ${activeTab === 'public' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            <Users className="inline-block ml-1" size={16} /> المجلس العام
          </button>
          <button 
            onClick={() => setActiveTab('private')}
            className={`px-4 py-1.5 rounded-lg font-bold text-sm transition ${activeTab === 'private' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
          >
            <Lock className="inline-block ml-1" size={16} /> الخاص المشفر
          </button>
          
          {/* تبويب مخصص لك أنت فقط كمالك للموقع */}
          {currentUser.id === "user_789" && ( // هنا تضع شرط الـ Owner
            <button 
              onClick={() => setActiveTab('owner')}
              className={`px-4 py-1.5 rounded-lg font-bold text-sm transition ${activeTab === 'owner' ? 'bg-red-600 text-white animate-bounce' : 'text-red-400 hover:text-red-300'}`}
            >
              <Shield className="inline-block ml-1" size={16} /> رادار المالك السرّي 👁️
            </button>
          )}
        </div>
      </header>

      {/* الشاشة الأساسية للمحتوى */}
      <main className="flex-1 flex overflow-hidden h-[calc(100vh-73px)]">
        
        {/* الحسابات والتحكم الجانبي */}
        <div className="w-80 bg-slate-900/40 border-l border-slate-800 p-4 hidden md:flex flex-col gap-4">
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-500 block">هويتك الحالية في الموقع</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-bold text-amber-300">{currentUser.name}</span>
            </div>
          </div>
          
          <div className="flex-1 bg-slate-900/20 rounded-2xl border border-slate-800/60 p-3 overflow-y-auto">
            <h4 className="text-xs font-bold text-slate-400 mb-3 px-2">المتواجدون الآن بالموقع (حقيقي + محاكاة)</h4>
            <div className="space-y-2">
              {saudiNames.map((name, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/50 border border-slate-800 text-xs">
                  <span className="flex items-center gap-2"><User size={12} className="text-slate-500" /> {name}</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">يتصفح الآن</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* مساحة صندوق الدردشة الأساسية */}
        <div className="flex-1 flex flex-col bg-slate-950 relative">
          
          {/* 1. واجهة المجلس العام */}
          {activeTab === 'public' && (
            <div className="flex-1 flex flex-col h-full p-4">
              <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {publicMessages.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-slate-500 text-sm">بانتظار بدء السوالف... المتجر ينبض بالحياة الآن</div>
                ) : (
                  publicMessages.map((msg) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={msg.id} 
                      className={`p-3 rounded-2xl max-w-xl border ${msg.senderId === currentUser.id ? 'bg-amber-600/20 border-amber-500/40 mr-auto text-left' : 'bg-slate-900 border-slate-800 ml-auto'}`}
                    >
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <span className={`font-bold ${msg.isBot ? 'text-yellow-400' : 'text-amber-500'}`}>{msg.senderName}</span>
                        <span className="text-[10px] text-slate-500">{msg.timestamp}</span>
                        {msg.senderId !== currentUser.id && (
                          <button 
                            onClick={() => { setActiveTab('private'); setSelectedPrivateChat('chat_p1'); }}
                            className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md mr-2 hover:bg-emerald-500/20"
                          >
                            مراسلة خاص 💬
                          </button>
                        )}
                      </div>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </motion.div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendPublic} className="mt-4 flex gap-2">
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="شاركي البنات رأيك في التنسيقات والمقاسات هنا..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-right"
                />
