import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Code2, Layers, CpuIcon, Database, Zap } from 'lucide-react';

const SKILLS = [
  {
    category: 'Core Kernel',
    icon: <Cpu className="text-blue-500" size={20} />,
    items: ['TypeScript', 'React 19', 'Next.js', 'Node.js']
  },
  {
    category: 'Data & Scale',
    icon: <Database className="text-amber-500" size={20} />,
    items: ['PostgreSQL', 'Redis', 'Firebase', 'GraphQL']
  },
  {
    category: 'Execution',
    icon: <Zap className="text-purple-500" size={20} />,
    items: ['AWS', 'Docker', 'CI/CD', 'Vercel']
  }
];

export default function Skills() {
  return (
    <section className="w-full py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-[#0F172A] dark:text-white tracking-tighter uppercase flex items-center gap-3">
            <Layers className="text-blue-600" /> TECH_STACK.LOG
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-mono mt-2">Verified system dependencies and libraries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl border-slate-200 dark:border-white/5 animate-float-delayed"
              style={{ animationDelay: `${idx * 0.7}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-inner border border-slate-100 dark:border-white/5">
                  {skill.icon}
                </div>
                <h3 className="font-black text-xs uppercase tracking-[0.2em] text-[#0F172A] dark:text-white">
                  {skill.category}
                </h3>
              </div>

              <div className="space-y-3">
                {skill.items.map((item) => (
                  <div key={item} className="flex justify-between items-center group">
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                      {item}
                    </span>
                    <div className="w-12 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: '100%' }}
                         transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                         className="h-full bg-blue-500"
                       />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-dashed border-slate-200 dark:border-white/5">
                 <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase">
                    <span>Performance</span>
                    <span className="text-green-500 font-bold">100%</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
