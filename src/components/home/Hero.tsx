import { motion } from 'motion/react';
import { ArrowRight, Code2, Globe, Sparkles, Terminal, Rocket } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-col gap-10 py-4 px-4 sm:px-6 lg:px-0 max-w-lg mx-auto lg:max-w-none relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] bg-blue-500/20 dark:bg-blue-600/20 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>

      {/* Floating Identity Sphere */}
      <motion.div variants={itemVariants} className="relative h-72 md:h-80 flex items-center justify-center overflow-visible">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative group cursor-pointer"
        >
          {/* Main Profile Bubble with complex gradients */}
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-spin-slow group-hover:pause shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#0A0A0A] bg-slate-100 dark:bg-slate-900 relative z-10">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1VU47NGBw2nMdMZ1Hg_chkqbp9_IbDEbWldnbfqOyFU3DEiz5pjiDH-i2IBqDVpkfVpL2lEbGiHjemYZD5a_dQjBzXDDQGc5ssSsEr9yRVKCkvv_-uHfX6nXFkW-t6BmI_uF5l7_Ql9pMShyphenhyphengmbyyyrGPvtSSG8abKxDxJ5MjRQGfTmWeXku0Kb47fcya/s1195/98430.png" 
                alt="Waseem Akram" 
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Orbiting Tech Stack Badges */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none scale-95 sm:scale-105"
          >
            <div className="absolute -top-6 left-1/2 -ml-10 glass-card px-4 py-1.5 rounded-full text-xs font-mono shadow-xl border-blue-500/30 text-blue-500 dark:text-blue-400 whitespace-nowrap flex items-center gap-2">
              <Code2 size={12} /> TypeScript
            </div>
            <div className="absolute top-1/2 -right-12 -mt-4 glass-card px-4 py-1.5 rounded-full text-xs font-mono shadow-xl border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center gap-2">
              React <Sparkles size={12} />
            </div>
            <div className="absolute -bottom-6 left-1/2 -ml-8 glass-card bg-amber-500/10 border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-mono shadow-xl text-amber-600 dark:text-amber-400 font-bold flex items-center gap-2">
              <Rocket size={12} /> FullStack
            </div>
            <div className="absolute top-1/2 -left-12 -mt-4 glass-card px-4 py-1.5 rounded-full text-xs font-mono shadow-xl border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Globe size={12} /> Node.js
            </div>
          </motion.div>

          {/* Floating Availability Badge */}
          <motion.div
            animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-10 glass-card p-3 rounded-2xl shadow-2xl z-20 border-green-500/30"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Available</span>
            </div>
            <p className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">Open to work</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-6 text-center lg:text-left relative z-10">
        <div className="space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em]"
          >
            <Terminal size={14} />
            <span>Software Engineer</span>
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter">
            WASEEM <br/>
            <span className="text-gradient animate-gradient-x">AKRAM.</span>
          </h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mx-auto lg:mx-0 font-medium">
          I craft digital experiences with precision. Building high-performance web applications with a focus on <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4">flawless execution</span> and scalable architecture.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-6 mt-2 relative z-10">
        {/* Real-time Stats Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto lg:mx-0">
          <div className="p-5 glass-card rounded-2xl border-blue-500/10 text-center lg:text-left hover:-translate-y-1 transition-transform duration-300">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Projects Shipped</p>
            <div className="flex items-baseline justify-center lg:justify-start gap-1.5">
              <span className="text-3xl font-black text-slate-900 dark:text-white">40+</span>
              <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Global</span>
            </div>
          </div>
          <div className="p-5 glass-card rounded-2xl border-purple-500/10 text-center lg:text-left hover:-translate-y-1 transition-transform duration-300">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Experience</p>
            <div className="flex items-baseline justify-center lg:justify-start gap-1.5">
              <span className="text-3xl font-black text-slate-900 dark:text-white">4+</span>
              <span className="text-[10px] text-purple-500 font-bold uppercase tracking-widest">Years</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto lg:mx-0 w-full">
          <a
            href="#portfolio"
            className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </a>
          <a
            href="#contact"
            className="flex-1 py-4 glass-card hover:bg-white/10 dark:hover:bg-slate-800/50 text-slate-900 dark:text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-auto hidden lg:block overflow-hidden rounded-2xl glass-card p-5 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
        <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-3">
          <span className="flex items-center gap-2"><Terminal size={12} /> System Status</span>
          <span className="text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
          </span>
        </div>
        <div className="font-mono text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
          <p className="flex items-center gap-2"><span className="text-blue-500">~</span> <span className="text-purple-500">waseem</span> init sequence</p>
          <p className="flex items-center gap-2"><span className="text-blue-500">~</span> loading dependencies...</p>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mt-3 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
