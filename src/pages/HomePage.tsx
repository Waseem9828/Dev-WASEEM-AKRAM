import { motion } from 'motion/react';
import Hero from '../components/home/Hero';
import Clients from '../components/home/Clients';
import Resume from '../components/home/Resume';
import Catalogue from '../components/home/Catalogue';
import Skills from '../components/home/Skills';
import Pricing from '../components/home/Pricing';
import Contact from '../components/home/Contact';
import { usePortfolio } from '../hooks/usePortfolio';

export default function HomePage() {
  const { projects, loading } = usePortfolio();

  if (loading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-slate-50 dark:bg-[#0A0A0A] bg-grid-pattern selection:bg-blue-500 selection:text-white overflow-x-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 relative z-10">
        {/* Floating Layout */}
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
          <div className="w-full lg:w-[480px] lg:sticky lg:top-32 shrink-0 z-20">
            <Hero />
          </div>

          <div className="w-full flex-1 space-y-32 z-10">
            <Skills />
            <Resume />
            <Clients />
            <Catalogue projects={projects} />
            <Pricing />
            <Contact />
          </div>
        </div>
      </div>

      {/* Decorative Floating Orbs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden mix-blend-screen dark:mix-blend-color-dodge opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-500/20 dark:bg-purple-900/30 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-pink-500/10 dark:bg-pink-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
    </motion.div>
  );
}
