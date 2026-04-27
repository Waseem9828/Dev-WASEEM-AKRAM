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
      className="flex flex-col w-full"
    >
      <Hero />
      <PortfolioGrid />
      <Pricing />
      <Contact />
    </motion.div>
  );
}
