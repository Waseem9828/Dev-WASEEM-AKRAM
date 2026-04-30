import { Link } from 'react-router-dom';
import { type User } from 'firebase/auth';
import { Menu, X, Rocket, ShieldCheck, TerminalSquare } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl"
    >
      <div className="glass-card rounded-[2rem] border-white/20 dark:border-white/10 py-3 px-4 md:px-6 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center justify-between backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-inner shadow-white/20 group-hover:scale-105 transition-transform">
              <TerminalSquare size={20} />
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase">
              Waseem<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">.Dev</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <a href="#resume" className="hover:text-blue-500 transition-colors">Resume</a>
            <a href="#portfolio" className="hover:text-purple-500 transition-colors">Catalogue</a>
            <a href="#pricing" className="hover:text-pink-500 transition-colors">Pricing</a>
            {user && (
              <Link to="/admin" className="text-amber-500 hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                <ShieldCheck size={14} /> Admin_Node
              </Link>
            )}
          </div>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

          <a
            href="#contact"
            className="group relative px-6 py-2.5 bg-slate-900 dark:bg-white hover:scale-105 active:scale-95 text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.15)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Deploy Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
               Deploy Work
            </span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
