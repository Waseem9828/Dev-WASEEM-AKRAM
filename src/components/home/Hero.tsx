import { motion } from 'motion/react';
import { ArrowRight, Code2, Globe, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-full flex flex-col gap-12 py-4">
      {/* Floating Identity Sphere */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="relative group cursor-pointer"
        >
          {/* Main Profile Bubble */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-purple-500 to-amber-500 animate-spin-slow group-hover:pause">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Waseem Akram" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Orbiting Coding Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute -top-4 left-1/2 -ml-8 bg-[#0F172A] text-white px-3 py-1 rounded-full text-[10px] font-mono shadow-xl border border-slate-700">
              TypeScript
            </div>
            <div className="absolute top-1/2 -right-12 -mt-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-mono shadow-xl">
              React
            </div>
            <div className="absolute -bottom-4 left-1/2 -ml-8 bg-amber-500 text-black px-3 py-1 rounded-full text-[10px] font-mono shadow-xl font-bold">
              FullStack
            </div>
            <div className="absolute top-1/2 -left-12 -mt-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-mono shadow-xl">
              Node.js
            </div>
          </motion.div>

          {/* Floating Message Bubbles */}
          <motion.div
            animate={{ 
              x: [0, 10, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-8 glass-card p-4 rounded-2xl shadow-2xl z-20 border-blue-500/30"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</span>
            </div>
            <p className="text-xs font-bold text-blue-500">{"{ coding: 'intense' }"}</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-6 text-center lg:text-left">
        <div className="space-y-2">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">Architect & Engineer</h2>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0F172A] dark:text-white leading-[0.85] tracking-tighter">
            WASEEM <br/>AKRAM.
          </h1>
        </div>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
          I don't just write code. I execute vision. Building high-stakes digital infrastructure with <span className="text-[#3B82F6] font-bold italic underline decoration-amber-500 underline-offset-4">Zero Fluff.</span>
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 justify-center lg:justify-start">
          <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> 12+ MVPs Shipped</span>
          <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> 100% Execution Rate</span>
        </div>
        
        <a
          href="#portfolio"
          className="w-full py-5 bg-[#0F172A] dark:bg-blue-600 hover:scale-[1.02] active:scale-95 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 group"
        >
          Check My Catalogue
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </div>

      <div className="mt-auto hidden lg:block overflow-hidden rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 p-4">
        <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">
          <span>Current Session</span>
          <span className="text-blue-500">Live</span>
        </div>
        <div className="font-mono text-xs text-slate-500 space-y-1">
          <p><span className="text-blue-600">$</span> brew install success</p>
          <p><span className="text-blue-600">$</span> waseem --optimize --full-speed</p>
          <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2 }}
              className="h-full bg-blue-600 rounded-full transition-all"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
