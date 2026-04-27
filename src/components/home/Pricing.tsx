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
    <section id="pricing" className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white tracking-tight">Transparent Pricing</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Value-packed tiers for every scale.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 flex text-[10px] font-bold uppercase tracking-wider shadow-sm">
            <div className="px-3 py-1.5 bg-[#0F172A] text-white rounded shadow-sm">Standard</div>
            <div className="px-3 py-1.5 text-slate-400">Custom</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-6 rounded-xl border flex flex-col h-full transition-all group",
                tier.isPopular 
                  ? "bg-[#0F172A] border-[#0F172A] text-white shadow-xl scale-[1.02] z-10" 
                  : "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-2.5 right-4 px-2 py-1 bg-[#F59E0B] text-black text-[9px] font-black rounded uppercase tracking-widest shadow-lg">
                  Popular
                </div>
              )}

              <div className="mb-6">
                <span className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em]",
                  tier.isPopular ? "text-blue-400" : "text-blue-600"
                )}>
                  {tier.name}
                </span>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className={cn(
                    "text-3xl font-black",
                    tier.isPopular ? "text-white" : "text-slate-900 dark:text-white"
                  )}>
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className={tier.isPopular ? "text-slate-400 text-xs" : "text-slate-500 text-xs"}>
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className={cn(
                    "flex gap-3 text-[11px] font-medium leading-relaxed",
                    tier.isPopular ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
                  )}>
                    <Check size={12} className={tier.isPopular ? "text-blue-400 mt-0.5 shrink-0" : "text-blue-600 mt-0.5 shrink-0"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "block w-full py-2.5 rounded-lg text-xs font-black text-center transition-all uppercase tracking-widest",
                  tier.isPopular
                    ? "bg-[#3B82F6] hover:bg-blue-600 text-white"
                    : "border border-[#0F172A] dark:border-slate-800 text-[#0F172A] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                )}
              >
                Choose {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
