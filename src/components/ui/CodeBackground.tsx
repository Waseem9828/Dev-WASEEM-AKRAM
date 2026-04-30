import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const SYMBOLS = ['</>', '{ }', '[ ]', '()', '=>', '&&', '||', '!=', '===', '++', '--', '/**/', '01', '10', ';;'];

interface FloatingSymbol {
  id: number;
  symbol: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  scale: number;
}

export default function CodeBackground() {
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);

  useEffect(() => {
    // Generate random symbols on mount
    const generatedSymbols = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      x: Math.random() * 100, // random start X %
      y: Math.random() * 100, // random start Y %
      duration: 15 + Math.random() * 20, // random duration 15-35s
      delay: Math.random() * -20, // random negative delay to start already moving
      scale: 0.5 + Math.random() * 1.5, // random size
    }));
    setSymbols(generatedSymbols);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen dark:mix-blend-color-dodge opacity-[0.15] dark:opacity-[0.05]">
      {symbols.map((sym) => (
        <motion.div
          key={sym.id}
          initial={{ 
            opacity: 0, 
            x: `${sym.x}vw`, 
            y: `${sym.y}vh`,
            rotate: 0 
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [`${sym.y}vh`, `${sym.y - 30}vh`],
            rotate: [0, 360],
          }}
          transition={{
            duration: sym.duration,
            repeat: Infinity,
            delay: sym.delay,
            ease: "linear"
          }}
          className="absolute font-mono font-black text-blue-500 dark:text-cyan-400 select-none"
          style={{ 
            scale: sym.scale,
            textShadow: '0 0 10px currentColor'
          }}
        >
          {sym.symbol}
        </motion.div>
      ))}
    </div>
  );
}
