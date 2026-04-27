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
      className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] selection:bg-blue-500 selection:text-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 relative z-10">
        {/* Floating Layout */}
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
          <div className="w-full lg:w-[450px] lg:sticky lg:top-32 shrink-0">
            <Hero />
          </div>

          <div className="w-full flex-1 space-y-32">
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
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 dark:bg-amber-600/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute top-[60%] left-[40%] w-[300px] h-[300px] bg-emerald-500/5 dark:bg-emerald-600/5 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </div>
    </motion.div>
  );
}
