import { useState, useEffect } from 'react';
import { type User } from 'firebase/auth';
import { loginWithGoogle, logout } from '../lib/firebase';
import { ShieldAlert, LogOut, LayoutDashboard, Briefcase, DollarSign, Inbox, LogIn, TerminalSquare, Cpu, Database, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectManager from '../components/admin/ProjectManager';
import PricingManager from '../components/admin/PricingManager';
import ContactList from '../components/admin/ContactList';

interface AdminPageProps {
  user: User | null;
}

export default function AdminPage({ user }: AdminPageProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'pricing' | 'contacts'>('projects');
  
  // Check if admin (hardcoded email for bootstrap)
  const isAdmin = user && (user.email === 'khalilah64780@gmail.com');

  if (!user) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex items-center justify-center px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="glass-card p-12 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl text-center max-w-md w-full relative z-10"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner shadow-white/20">
            <LayoutDashboard size={36} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">Command Center</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed">
            Access restricted to authorized personnel. Secure authentication required to proceed.
          </p>
          <button
            onClick={loginWithGoogle}
            className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.15)] group"
          >
            <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
            Initialize Link
          </button>
        </motion.div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen pt-32 pb-12 flex items-center justify-center px-4 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="text-center glass-card p-12 rounded-[3rem] max-w-md border border-red-500/20 relative z-10">
          <div className="w-24 h-24 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <ShieldAlert size={48} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">Access Denied</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-sm mx-auto font-medium">
            Account identity <span className="text-slate-900 dark:text-white font-mono bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">{user.email}</span> lacks administrative clearance.
          </p>
          <button
            onClick={logout}
            className="px-8 py-4 bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-300 dark:hover:bg-white/20 transition-all"
          >
            Terminate Session
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'projects', label: 'Architecture', icon: Cpu, desc: 'Manage project deployments' },
    { id: 'pricing', label: 'Monetization', icon: Database, desc: 'Configure value tiers' },
    { id: 'contacts', label: 'Comms', icon: Network, desc: 'Incoming briefing logs' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto relative">
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="flex flex-col lg:flex-row gap-8 relative z-10 h-full">
        {/* Sidebar */}
        <div className="w-full lg:w-80 shrink-0 space-y-6">
          <div className="glass-card p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/10 sticky top-32">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white shadow-inner shadow-white/20">
                <TerminalSquare size={24} />
              </div>
              <div>
                <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">SYS_ADMIN</h1>
                <div className="flex items-center gap-2 text-[10px] font-mono text-green-500 uppercase tracking-widest mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left group ${
                    activeTab === tab.id
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl'
                      : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-colors ${activeTab === tab.id ? 'bg-white/20 dark:bg-black/10' : 'bg-slate-200 dark:bg-black/30 group-hover:text-blue-500'}`}>
                    <tab.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-wider">{tab.label}</div>
                    <div className={`text-[10px] font-medium mt-0.5 ${activeTab === tab.id ? 'text-white/70 dark:text-black/60' : 'text-slate-400 dark:text-slate-500'}`}>
                      {tab.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-white/10">
              <button
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 px-4 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all"
              >
                <LogOut size={16} />
                Disconnect Node
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
           <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card bg-white/50 dark:bg-[#0A0A0A]/50 border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl min-h-[700px] overflow-hidden"
          >
            {activeTab === 'projects' && <ProjectManager />}
            {activeTab === 'pricing' && <PricingManager />}
            {activeTab === 'contacts' && <ContactList />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
