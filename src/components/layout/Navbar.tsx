import { Link } from 'react-router-dom';
import { type User } from 'firebase/auth';
import { Menu, X, Rocket, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl">
      <div className="glass-card rounded-2xl border-white/20 dark:border-white/5 py-3 px-6 shadow-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#0F172A] dark:bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">WA</div>
            <span className="text-lg font-black tracking-tighter text-[#0F172A] dark:text-white uppercase">
              Waseem <span className="text-blue-600 dark:text-blue-400">Akram</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <a href="#resume" className="hover:text-blue-500 transition-colors">Resume</a>
            <a href="#portfolio" className="hover:text-blue-500 transition-colors">Catalogue</a>
            <a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a>
            {user && (
              <Link to="/admin" className="text-amber-600 hover:text-amber-500 flex items-center gap-1">
                <ShieldCheck size={12} /> Admin
              </Link>
            )}
          </div>
          
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

          <a
            href="#contact"
            className="px-5 py-2 bg-[#0F172A] dark:bg-blue-600 hover:scale-105 active:scale-95 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-500/20"
          >
            Hire
          </a>
        </div>
      </div>
    </nav>
  );
}
