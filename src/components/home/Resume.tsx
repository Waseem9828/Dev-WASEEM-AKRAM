import React from 'react';
import { motion } from 'motion/react';
import { FileText, Briefcase, GraduationCap, Award, Calendar, ChevronRight } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'Nexus Tech Solutions',
    period: '2022 - Present',
    description: 'Leading the development of scalable microservices and high-performance React applications. Orchestrating cloud infrastructure on AWS for enterprise clients.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Quantum Systems',
    period: '2020 - 2022',
    description: 'Developed DeFi protocols and institutional-grade trading dashboards. Optimized database queries reducing latency by 40% using advanced Redis caching.',
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2018 - 2020',
    description: 'Built and maintained responsive web applications using React and Node.js. Collaborated on multiple successful MVP launches with a 100% success rate.',
  }
];

const EDUCATION = [
  {
    degree: 'Master of Computer Science',
    school: 'Global Technical University',
    period: '2016 - 2018',
  },
  {
    degree: 'Bachelor of Software Engineering',
    school: 'Tech Institute of Excellence',
    period: '2012 - 2016',
  }
];

export default function Resume() {
  return (
    <section id="resume" className="w-full py-16 relative">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <FileText size={14} />
              <span>Career Path</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase flex items-center gap-3">
              RESUME<span className="text-blue-500">.SYS</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-mono mt-3">Verified professional experience and academic execution log.</p>
          </div>
          
          <button className="group relative px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_20px_rgba(255,255,255,0.1)] overflow-hidden flex items-center gap-2">
            <span className="relative z-10">Export PDF_v2.4</span>
            <ChevronRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-white"></div>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          {/* Experience Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl text-blue-500 border border-blue-500/20 shadow-inner">
                <Briefcase size={24} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Experience</h3>
            </div>

            <div className="space-y-10 border-l-2 border-slate-200 dark:border-slate-800 ml-5 pl-10 relative">
              {EXPERIENCE.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="relative group cursor-default"
                >
                  {/* Glowing Node */}
                  <div className="absolute -left-[49px] top-1 w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:bg-[#0A0A0A] group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300"></div>
                  
                  <div className="glass-card p-6 rounded-3xl border-slate-200 dark:border-white/5 group-hover:border-blue-500/30 transition-colors shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-blue-500 transition-colors">{item.role}</h4>
                      <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-500/20 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                      {item.company}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certs Column */}
          <div className="space-y-14">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl text-amber-500 border border-amber-500/20 shadow-inner">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-6 pl-2">
                {EDUCATION.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="glass-card p-6 rounded-3xl border-slate-200 dark:border-white/5 hover:border-amber-500/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider group-hover:text-amber-500 transition-colors">{item.degree}</h4>
                      <Calendar size={16} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-4">{item.school}</p>
                    <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-100 dark:border-amber-500/20">
                      {item.period}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl text-purple-500 border border-purple-500/20 shadow-inner">
                  <Award size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Achievements</h3>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 glass-card rounded-[2rem] border-purple-500/20 bg-gradient-to-br from-purple-500/[0.02] to-pink-500/[0.02] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-colors"></div>
                <ul className="space-y-5 relative z-10">
                  {[
                    'Oracle Certified Professional Java SE 11',
                    'AWS Certified Solutions Architect – Associate',
                    'Winner of HackCity 2021 (FinTech Track)'
                  ].map((award, i) => (
                    <li key={i} className="flex gap-4 items-start text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span className="text-purple-500 font-black mt-0.5">/</span> 
                      <span className="leading-relaxed">{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
