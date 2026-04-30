import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, LayoutGrid, List, Eye, ExternalLink, X, Compass } from 'lucide-react';
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
    <div id="portfolio" className="w-full space-y-12 py-16 px-4 sm:px-0 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-pink-500/20 text-pink-500 dark:text-pink-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Compass size={14} />
            <span>Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase flex items-center gap-3">
             EXHIBITION<span className="text-pink-500">.EXE</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-mono mt-3 max-w-md">Browse the curated catalogue of high-performance architectural deployments.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border backdrop-blur-sm ${
                filter === cat 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] scale-105' 
                : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-blue-500/50 hover:text-blue-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative h-[420px] rounded-[2rem] p-1 overflow-hidden"
            >
              {/* Holographic Border Wrap */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 group-hover:animate-[gradient-x_3s_ease_infinite] transition-opacity duration-500 rounded-[2rem]"></div>
              
              <div className="relative h-full bg-white dark:bg-[#0A0A0A] rounded-[1.8rem] overflow-hidden flex flex-col p-6 transition-colors shadow-2xl">
                {/* Subtle Grid background */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></span>
                      <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></span>
                    </div>
                    <div className="px-3 py-1 glass-card rounded-full text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                      Node_{(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden rounded-2xl mb-6 relative group/img shadow-inner border border-slate-100 dark:border-white/5 bg-slate-100 dark:bg-slate-900">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-6">
                       <button 
                         onClick={() => setSelectedProject(project)}
                         className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 mx-auto"
                       >
                         <Eye size={14} /> View Details
                       </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
                        {project.title}
                      </h3>
                      <a 
                        href={project.previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-slate-500 hover:text-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 items-center">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal - Preview Panel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-white dark:bg-[#0A0A0A] rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[850px]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md dark:bg-black/20 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 hover:text-red-500 hover:border-red-500 hover:rotate-90 transition-all duration-300"
              >
                <X size={20} />
              </button>

              {/* Viewport Side */}
              <div className="flex-1 bg-slate-50 dark:bg-[#111] p-6 md:p-10 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-inner"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-inner"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-inner"></div>
                  </div>
                  <div className="flex-1 h-10 bg-white dark:bg-black/50 rounded-xl flex items-center px-4 border border-slate-200 dark:border-white/10 shadow-sm">
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-2 truncate">
                      <LayoutGrid size={12} className="text-blue-500" /> 
                      <span className="opacity-50">https://</span>{selectedProject.title.toLowerCase().replace(/\s/g, '-')}.dev<span className="opacity-50">/preview</span>
                    </span>
                  </div>
                </div>

                <div className="flex-1 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-black relative group">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                     <p className="text-white text-sm font-medium flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                       Live environment active
                     </p>
                  </div>
                </div>
              </div>

              {/* Metadata Side */}
              <div className="w-full md:w-[420px] p-8 md:p-10 flex flex-col gap-8 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    <LayoutGrid size={12} />
                    <span>Project Details</span>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-4">{selectedProject.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Architecture Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 glass-card border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded-lg text-[11px] font-bold tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-200 dark:border-white/10">
                  <a 
                    href={selectedProject.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all"
                  >
                    Launch Live Demo <ExternalLink size={16} />
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
