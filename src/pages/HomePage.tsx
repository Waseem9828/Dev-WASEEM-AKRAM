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
      className="min-h-screen bg-slate-50 dark:bg-[#030305] bg-grid-pattern selection:bg-[#9D00FF]/40 selection:text-[#00F5FF] overflow-x-hidden relative"
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-24 md:py-32 relative z-10 flex flex-col gap-24">
        
        {/* Full-width Channel Hero */}
        <div className="w-full z-20">
          <Hero />
        </div>

        {/* Content Sections */}
        <div className="w-full max-w-5xl mx-auto space-y-32 z-10">
          <Skills />
          <Resume />
          <Clients />
          <Catalogue projects={projects} />
          <Pricing />
          <Contact />
        </div>

      </div>

      {/* Decorative Floating Orbs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden mix-blend-screen dark:mix-blend-color-dodge opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0047FF]/20 dark:bg-[#0047FF]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#9D00FF]/20 dark:bg-[#9D00FF]/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-[#00F5FF]/10 dark:bg-[#00F5FF]/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
    </motion.div>
  );
}
