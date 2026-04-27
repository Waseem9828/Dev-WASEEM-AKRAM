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
    <nav className="h-16 px-4 md:px-8 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-950 shrink-0 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#0F172A] rounded flex items-center justify-center font-bold">🥩</div>
            <span className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-white">
              WASEEM <span className="text-[#3B82F6]">AKRAM</span>
            </span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing</a>
            {user && (
              <Link to="/admin" className="text-amber-600 hover:text-amber-500 font-bold flex items-center gap-1">
                <ShieldCheck size={14} /> Admin
              </Link>
            )}
          </div>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-emerald-500/10 text-green-700 dark:text-emerald-400 rounded-full border border-green-200 dark:border-emerald-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Available</span>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white text-sm font-semibold rounded transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
