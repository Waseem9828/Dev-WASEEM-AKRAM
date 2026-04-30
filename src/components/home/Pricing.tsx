import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Sparkles } from 'lucide-react';
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
    <section id="pricing" className="w-full py-16 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <Zap size={14} />
              <span>Investment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Pricing</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-mono mt-3 max-w-sm">Value-packed architectural tiers for every scale of operation.</p>
          </div>
          
          <div className="glass-card p-1 rounded-xl border border-slate-200 dark:border-white/10 flex text-[10px] font-bold uppercase tracking-widest shadow-sm">
            <div className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg shadow-sm">Standard</div>
            <div className="px-5 py-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Enterprise</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-8 rounded-[2rem] flex flex-col h-full transition-all duration-500 group",
                tier.isPopular 
                  ? "bg-slate-900 dark:bg-black border border-blue-500/30 text-white shadow-[0_20px_50px_rgba(37,99,235,0.2)] md:-mt-4 md:mb-4 z-10" 
                  : "glass-card border-slate-200 dark:border-white/10 hover:border-blue-500/30 hover:shadow-2xl"
              )}
            >
              {tier.isPopular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-[2rem] pointer-events-none"></div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles size={12} /> Recommended
                  </div>
                </>
              )}

              <div className="mb-8 relative z-10">
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] mb-4 block",
                  tier.isPopular ? "text-cyan-400" : "text-blue-600 dark:text-blue-400"
                )}>
                  {tier.name}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "text-5xl font-black tracking-tighter",
                    tier.isPopular ? "text-white" : "text-slate-900 dark:text-white"
                  )}>
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className={tier.isPopular ? "text-slate-400 text-xs font-mono font-bold" : "text-slate-500 text-xs font-mono font-bold"}>
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                {tier.features.map((feature) => (
                  <li key={feature} className={cn(
                    "flex gap-3 text-xs font-medium leading-relaxed",
                    tier.isPopular ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
                  )}>
                    <div className={cn(
                      "mt-0.5 rounded-full p-0.5 shrink-0 h-fit",
                      tier.isPopular ? "bg-cyan-500/20 text-cyan-400" : "bg-blue-500/10 text-blue-500"
                    )}>
                      <Check size={10} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "block w-full py-4 rounded-xl text-[11px] font-black text-center transition-all uppercase tracking-[0.2em] relative z-10",
                  tier.isPopular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "glass-card border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                )}
              >
                Deploy {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
