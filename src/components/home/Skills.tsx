import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Layers, Database, Zap, Sparkles } from 'lucide-react';

const SKILLS = [
  {
    category: 'Core Kernel',
    icon: <Cpu className="text-blue-500" size={24} />,
    color: 'from-blue-500 to-cyan-400',
    borderColor: 'group-hover:border-blue-500/50',
    items: [
      { name: 'TypeScript', level: '95%' },
      { name: 'React 19', level: '90%' },
      { name: 'Next.js', level: '85%' },
      { name: 'Node.js', level: '88%' }
    ]
  },
  {
    category: 'Data & Scale',
    icon: <Database className="text-amber-500" size={24} />,
    color: 'from-amber-500 to-orange-400',
    borderColor: 'group-hover:border-amber-500/50',
    items: [
      { name: 'PostgreSQL', level: '82%' },
      { name: 'Redis', level: '75%' },
      { name: 'Firebase', level: '90%' },
      { name: 'GraphQL', level: '80%' }
    ]
  },
  {
    category: 'Execution',
    icon: <Zap className="text-purple-500" size={24} />,
    color: 'from-purple-500 to-pink-500',
    borderColor: 'group-hover:border-purple-500/50',
    items: [
      { name: 'AWS', level: '78%' },
      { name: 'Docker', level: '85%' },
      { name: 'CI/CD', level: '90%' },
      { name: 'Vercel', level: '95%' }
    ]
  }
];

export default function Skills() {
  return (
    <section className="w-full py-16 relative" id="skills">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles size={14} />
            <span>Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase flex items-center gap-3">
             TECH_STACK<span className="text-blue-500">.LOG</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-mono mt-4 max-w-lg">
             Verified system dependencies, libraries, and architectural frameworks optimized for high-performance execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`glass-card p-8 rounded-[2rem] transition-all duration-500 group relative overflow-hidden ${skill.borderColor} hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Dynamic background glow on hover */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-full blur-[40px] transition-all duration-700`}></div>

              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-white/50 dark:bg-slate-900/50 rounded-2xl shadow-inner border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="font-black text-sm uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>

              <div className="space-y-5 relative z-10">
                {skill.items.map((item, itemIdx) => (
                  <div key={item.name} className="group/item">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity">
                        {item.level}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: item.level }}
                         viewport={{ once: true }}
                         transition={{ duration: 1.5, delay: 0.3 + (itemIdx * 0.1), ease: "easeOut" }}
                         className={`h-full bg-gradient-to-r ${skill.color} relative`}
                       >
                         {/* Animated highlight */}
                         <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 skew-x-[-20deg] animate-[shimmer_2s_infinite]"></div>
                       </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-5 border-t border-dashed border-slate-200 dark:border-white/10">
                 <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase">
                    <span className="flex items-center gap-1.5"><Layers size={10} /> Integration</span>
                    <span className="text-green-500 font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Seamless
                    </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
