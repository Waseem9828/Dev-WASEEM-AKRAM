import Hero from '../components/home/Hero';
import PortfolioGrid from '../components/home/PortfolioGrid';
import Pricing from '../components/home/Pricing';
import Contact from '../components/home/Contact';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row min-h-screen bg-[#F8FAFC] dark:bg-slate-950"
    >
      {/* Sidebar / Left Panel */}
      <aside className="lg:w-[420px] lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 md:p-12 shrink-0 overflow-y-auto">
        <Hero />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden">
        <div className="p-4 md:p-12 space-y-24">
          <PortfolioGrid />
          <Pricing />
          <Contact />
        </div>
      </div>
    </motion.div>
  );
}
