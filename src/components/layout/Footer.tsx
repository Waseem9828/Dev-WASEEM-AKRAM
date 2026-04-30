import { Github, Linkedin, Twitter, TerminalSquare, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/50 dark:bg-black/50 border-t border-slate-200 dark:border-white/10 py-16 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-inner shadow-white/20">
                <TerminalSquare size={16} />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                Waseem<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">.Dev</span>
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm text-center md:text-left leading-relaxed">
              High-stakes digital execution. Building the next generation of scalable infrastructure and beautiful user experiences.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://github.com/waseemakram" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all hover:-translate-y-1">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all hover:-translate-y-1">
                <Twitter size={18} />
              </a>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-500 font-mono flex items-center gap-1 uppercase tracking-widest">
              © {new Date().getFullYear()} Waseem Akram. All units secured.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-3">
            <h4 className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] text-right">
              System Status
            </h4>
            <div className="glass-card px-4 py-2 rounded-xl flex items-center gap-3 text-xs text-green-500 font-bold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Taking New Clients
            </div>
            <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-2">
              Made with <Heart size={10} className="text-red-500" /> globally.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
