import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, LayoutGrid, List, Eye, ExternalLink, X } from 'lucide-react';
import { Project } from '../../types';

interface CatalogueProps {
  projects: Project[];
}

export default function Catalogue({ projects }: CatalogueProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.flatMap(p => p.techStack))].slice(0, 5);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.techStack.includes(filter));

  return (
    <div id="portfolio" className="w-full space-y-12 py-12 px-4 sm:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-[#0F172A] dark:text-white tracking-tighter">EXHIBITION.EXE</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-mono tracking-tight">Browse the verified catalogue of shipped MVPs.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                filter === cat 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-blue-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative animate-float transition-all h-[400px]"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {/* Holographic Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[2rem] -rotate-1 group-hover:rotate-0 transition-transform blur-xl"></div>
            
            <div className="relative h-full glass-card rounded-[2rem] border border-blue-500/20 overflow-hidden flex flex-col p-6 shadow-2xl group-hover:border-blue-500/50 transition-colors">
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.07] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                 <div className="w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent absolute top-0 left-0 right-0 animate-scanline"></div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                  </div>
                  <div className="text-[10px] font-mono text-blue-500/70 uppercase">#{(index + 1).toString().padStart(2, '0')}</div>
                </div>

                <div className="flex-1 overflow-hidden rounded-xl mb-6 border border-white/10 relative group/img">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#0F172A] dark:text-white group-hover:text-blue-500 transition-colors tracking-tight uppercase">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 items-center">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 bg-[#0F172A] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye size={12} /> Inspect
                    </button>
                    <a 
                      href={project.previewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-[#0F172A] dark:text-white hover:border-blue-500 transition-all flex items-center justify-center"
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal - Preview Panel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-white/40 dark:bg-slate-950/40 backdrop-blur-3xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-5xl glass-card rounded-[3rem] border-2 border-blue-500/30 overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.15)] flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[850px]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Viewport Side */}
              <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 h-8 bg-white dark:bg-slate-800 rounded-lg flex items-center px-4 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] font-mono text-slate-400 italic flex items-center gap-2 truncate">
                      <LayoutGrid size={10} /> https://{selectedProject.title.toLowerCase().replace(/\s/g, '-')}.dev/preview
                    </span>
                  </div>
                </div>

                <div className="flex-1 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 relative group">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                     <p className="text-white text-sm font-medium">Click to interact with the live environment.</p>
                  </div>
                </div>
              </div>

              {/* Metadata Side */}
              <div className="w-full md:w-[380px] p-8 md:p-12 border-l border-slate-200 dark:border-slate-800 flex flex-col gap-8">
                <div>
                  <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 mb-2">Project Node</h2>
                  <h3 className="text-4xl font-black text-[#0F172A] dark:text-white tracking-tighter leading-none">{selectedProject.title}</h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Objectives</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Kernel Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-600/10 text-blue-600 border border-blue-100 dark:border-blue-700/30 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800">
                  <a 
                    href={selectedProject.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 bg-[#0F172A] text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:bg-blue-600 transition-colors"
                  >
                    Open Live Deployment <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
