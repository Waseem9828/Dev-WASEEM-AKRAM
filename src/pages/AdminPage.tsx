import { useState, useEffect } from 'react';
import { type User } from 'firebase/auth';
import { loginWithGoogle, logout } from '../lib/firebase';
import { ShieldAlert, LogOut, LayoutDashboard, Briefcase, DollarSign, Inbox, LogIn } from 'lucide-react';
import { motion } from 'motion/react';
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
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl text-center max-w-md w-full"
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <LayoutDashboard size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Admin Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Access restricted to authorized personnel only. Please sign in to continue.
          </p>
          <button
            onClick={loginWithGoogle}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all"
          >
            <LogIn size={20} />
            Sign in with Google
          </button>
        </motion.div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert size={40} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Access Denied</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto">
            Your account ({user.email}) does not have administrative privileges.
          </p>
          <button
            onClick={logout}
            className="px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'contacts', label: 'Inquiries', icon: Inbox },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">Welcome back, {user.displayName}</p>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-500 hover:text-red-500 transition-colors"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-md'
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm min-h-[400px]"
      >
        {activeTab === 'projects' && <ProjectManager />}
        {activeTab === 'pricing' && <PricingManager />}
        {activeTab === 'contacts' && <ContactList />}
      </motion.div>
    </div>
  );
}
