import { motion } from 'motion/react';
import { ArrowRight, Code2, Globe, Sparkles, Terminal, Rocket, BadgeCheck, MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-6 mx-auto relative"
    >
      {/* Cover Image Banner */}
      <motion.div variants={itemVariants} className="w-full h-48 md:h-72 lg:h-[350px] relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80" 
          alt="Cover" 
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-110"
        />
        {/* Cover floating badges */}
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <div className="glass-card px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 backdrop-blur-md bg-black/30 border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Online
          </div>
        </div>
      </motion.div>

      {/* Profile Section (Overlapping) */}
      <div className="px-4 md:px-8 relative -mt-20 md:-mt-28 z-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-end">
          
          {/* Profile Picture */}
          <motion.div variants={itemVariants} className="relative group shrink-0">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-[#030305] bg-slate-100 dark:bg-slate-900 relative">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1VU47NGBw2nMdMZ1Hg_chkqbp9_IbDEbWldnbfqOyFU3DEiz5pjiDH-i2IBqDVpkfVpL2lEbGiHjemYZD5a_dQjBzXDDQGc5ssSsEr9yRVKCkvv_-uHfX6nXFkW-t6BmI_uF5l7_Ql9pMShyphenhyphengmbyyyrGPvtSSG8abKxDxJ5MjRQGfTmWeXku0Kb47fcya/s1195/98430.png" 
                  alt="Waseem Akram" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status dot */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white dark:border-[#030305] rounded-full shadow-lg"></div>
          </motion.div>

          {/* Profile Info & Actions */}
          <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
                  Waseem Akram
                </h1>
                <BadgeCheck size={32} className="text-blue-500 fill-blue-500/20" />
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold">@waseem_dev</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> Global Remote</span>
                <span className="flex items-center gap-1"><LinkIcon size={14} /> waseemakram.dev</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> Joined 2020</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex gap-3 shrink-0">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-black text-xs uppercase tracking-[0.1em] shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Hire Me
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 glass-card hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-black text-xs uppercase tracking-[0.1em] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                View Work <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bio and Stats */}
        <motion.div variants={itemVariants} className="mt-8 space-y-8">
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl font-medium">
            I craft digital experiences with precision. Building high-performance web applications with a focus on <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500 underline-offset-4">flawless execution</span> and scalable architecture. Senior Full Stack Engineer.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
             <div className="flex items-center gap-2">
               <span className="text-xl font-black text-slate-900 dark:text-white">40+</span>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Projects Shipped</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
             <div className="flex items-center gap-2">
               <span className="text-xl font-black text-slate-900 dark:text-white">4+</span>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Exp.</span>
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
             <div className="flex items-center gap-2">
               <span className="text-xl font-black text-slate-900 dark:text-white">100%</span>
               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Success</span>
             </div>
          </div>
        </motion.div>
      </div>

    </motion.section>
  );
}
