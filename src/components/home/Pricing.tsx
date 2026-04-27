import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';
import { getPricingTiers } from '../../services/firestore';
import { type PricingTier } from '../../types';
import { cn } from '../../lib/utils';

export default function Pricing() {
  const [tiers, setTiers] = useState<PricingTier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getPricingTiers();
      if (data) setTiers(data as PricingTier[]);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return null;

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Investment <span className="text-blue-600">Model</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Transparent pricing for businesses that value high-end development and precision logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-8 rounded-3xl border bg-white dark:bg-slate-950 flex flex-col h-full transition-all duration-300",
                tier.isPopular 
                  ? "border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10" 
                  : "border-slate-200 dark:border-slate-800 opacity-90 hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700"
              )}
            >
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center gap-1 uppercase tracking-widest shadow-xl">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">/{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "block w-full py-4 rounded-xl font-bold text-center transition-all",
                  tier.isPopular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                )}
              >
                Select {tier.name}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm italic">
            * All packages include weekly status reports and a private staging URL.
          </p>
        </div>
      </div>
    </section>
  );
}
