import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ZoomIn, Eye } from 'lucide-react';
import { getProjects } from '../../services/firestore';
import { type Project } from '../../types';

export default function PortfolioGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getProjects();
      if (data) setProjects(data as Project[]);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section id="portfolio" className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white tracking-tight">Portfolio Highlights</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Case studies in full-stack execution.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-500/30 transition-all flex flex-col"
            >
              <div className="aspect-[16/9] bg-slate-50 dark:bg-slate-950 rounded-lg mb-4 overflow-hidden relative border border-slate-100 dark:border-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold rounded uppercase tracking-wider">
                  Live Preview
                </div>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 bg-white text-slate-900 rounded-lg font-bold text-xs"
                  >
                    View Details
                  </button>
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    className="p-2.5 bg-[#3B82F6] text-white rounded-lg font-bold text-xs"
                  >
                    Open Demo
                  </a>
                </div>
              </div>
              
              <h4 className="font-bold text-[#0F172A] dark:text-white group-hover:text-blue-600 transition-colors">{project.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 z-10"
              >
                <ZoomIn size={24} className="rotate-45" />
              </button>
              
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 aspect-video bg-slate-100 dark:bg-slate-800">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:w-1/3 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 mb-8">
                       {selectedProject.description}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={selectedProject.previewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-center font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
