import { Github, Linkedin, Twitter, Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#0F172A] rounded flex items-center justify-center text-white font-bold text-[10px]">
                WA
              </div>
              <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                Waseem <span className="text-blue-600">Akram</span>
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left leading-relaxed">
              High-stakes digital execution. Building the next generation of scalable infrastructure.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">
              © {new Date().getFullYear()} Waseem Akram. All units secured.
            </p>
          </div>

          <div className="hidden lg:block">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider text-right">
              Availability
            </h4>
            <div className="flex items-center gap-2 text-sm text-emerald-500 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Taking New Clients
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
