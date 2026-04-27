import React from 'react';
import { motion } from 'motion/react';

const COMPANIES = [
  { name: 'Apple', color: 'dark:text-white text-slate-900' },
  { name: 'Microsoft', color: 'text-[#00a1f1]' },
  { name: 'Google', color: 'text-[#4285f4]' },
  { name: 'Amazon', color: 'text-[#ff9900]' },
  { name: 'Meta', color: 'text-[#0668E1]' },
];

export default function Clients() {
  return (
    <div className="w-full py-16 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 text-center mb-12">Trusted by Global Entities</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20">
          {COMPANIES.map((company) => (
            <div key={company.name} className="flex flex-col items-center gap-2 group transition-all duration-500">
              <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-all duration-300 ${company.color} opacity-40 group-hover:opacity-100 group-hover:scale-110`}>
                {company.name}
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
