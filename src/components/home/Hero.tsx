import { motion } from 'motion/react';
import { ArrowRight, Code2, Globe, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-full flex flex-col gap-8">
      {/* Profile Card with Animated Elements */}
      <div className="relative mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto lg:mx-0"
        >
          {/* Main Image */}
          <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" 
              alt="Waseem Akram" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Status Badge */}
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-lg shadow-lg z-20 border-2 border-white dark:border-slate-900">
             <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Animated Coding Elements */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg shadow-md z-0 hidden md:block"
          >
            <code className="text-[10px] font-mono text-blue-500 font-bold">const dev = true;</code>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-12 -left-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-lg shadow-md z-0 hidden md:block"
          >
            <code className="text-[10px] font-mono text-amber-500 font-bold">{"{ status: 'executing' }"}</code>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-4 bg-[#0F172A] text-white px-3 py-1 rounded-lg text-[10px] font-mono shadow-xl z-20"
          >
            ./deploy.sh --prod
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-6">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0F172A] dark:text-white leading-[0.9] tracking-tighter text-center lg:text-left">
          WASEEM AKRAM. <br/><span className="text-slate-400 italic">No Fluff.</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
          Building architecture that scales. Delivering robust MVP products with <span className="text-[#0F172A] dark:text-white font-bold underline decoration-[#F59E0B]">Precision Code</span> in record time.
        </p>
      </div>

      <div className="space-y-6 pt-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Core Philosophy</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-[#3B82F6] flex items-center justify-center shrink-0 mt-1">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#0F172A] dark:text-white">Discovery First</p>
              <p className="text-slate-500 dark:text-slate-400">Architecture + Schema mapping.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 mt-1">
               <div className="w-2 h-2 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            </div>
            <div className="text-sm">
              <p className="font-bold text-[#0F172A] dark:text-white">Rapid Execution</p>
              <p className="text-slate-500 dark:text-slate-400">Next.js + Tailwind UI components.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-5 h-5 rounded-full border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 mt-1"></div>
            <div className="text-sm text-slate-400">
              <p className="font-bold">Scale Ready</p>
              <p>PostgreSQL + Vercel Deployment.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
        <p className="text-xs font-mono text-slate-500 mb-3"># build_your_vision.sh</p>
        <div className="flex items-center gap-4">
          <span className="text-[10px] px-2 py-0.5 bg-[#0F172A] text-white rounded font-bold">STABLE</span>
          <span className="text-[10px] text-slate-400 font-medium">Last release: today</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="#portfolio"
          className="w-full py-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 group transition-all"
        >
          View Case Studies
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
