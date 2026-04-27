import React from 'react';
import { motion } from 'motion/react';
import { FileText, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'Nexus Tech Solutions',
    period: '2022 - Present',
    description: 'Leading the development of scalable microservices and high-performance React applications. Orchestrating cloud infrastructure on AWS.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Quantum Systems',
    period: '2020 - 2022',
    description: 'Developed DeFi protocols and institutional-grade trading dashboards. Optimized database queries reducing latency by 40%.',
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2018 - 2020',
    description: 'Built and maintained responsive web applications using React and Node.js. Collaborated on multiple successful MVP launches.',
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
    <section id="resume" className="w-full py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-black text-[#0F172A] dark:text-white tracking-tighter uppercase flex items-center gap-3">
              <FileText className="text-blue-600" /> RESUME.SYS
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-mono mt-2">Professional experience and academic record.</p>
          </div>
          
          <button className="px-6 py-2 bg-[#0F172A] dark:bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg shadow-blue-500/20">
            Export PDF v2.4
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 dark:bg-blue-600/10 rounded-lg text-blue-600">
                <Briefcase size={20} />
              </div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#0F172A] dark:text-white">Experience</h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-100 dark:border-white/5 ml-4 pl-8">
              {EXPERIENCE.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:bg-[#020617]"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg font-black text-[#0F172A] dark:text-white uppercase tracking-tight">{item.role}</h4>
                      <span className="text-[10px] font-mono text-blue-500 font-bold bg-blue-50 dark:bg-blue-600/10 px-2 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.company}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certs Column */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 dark:bg-amber-600/10 rounded-lg text-amber-600">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#0F172A] dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-8">
                {EDUCATION.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="glass-card p-6 rounded-3xl border-slate-200 dark:border-white/5"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm font-black text-[#0F172A] dark:text-white uppercase tracking-wider">{item.degree}</h4>
                      <Calendar size={14} className="text-slate-400" />
                    </div>
                    <p className="text-xs font-bold text-slate-400 mb-2">{item.school}</p>
                    <span className="text-[10px] font-mono text-blue-500 font-bold">{item.period}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-50 dark:bg-purple-600/10 rounded-lg text-purple-600">
                  <Award size={20} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#0F172A] dark:text-white">Achievements</h3>
              </div>
              
              <div className="p-6 glass-card rounded-3xl border-blue-500/20 bg-blue-500/[0.02]">
                <ul className="space-y-4">
                  {[
                    'Oracle Certified Professional Java SE 11',
                    'AWS Certified Solutions Architect – Associate',
                    'Winner of HackCity 2021 (FinTech Track)'
                  ].map((award, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <span className="text-blue-500 font-black">/</span> {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
