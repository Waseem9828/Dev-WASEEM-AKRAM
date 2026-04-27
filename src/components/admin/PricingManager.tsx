import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, X, List } from 'lucide-react';
import { getPricingTiers, addPricingTier } from '../../services/firestore';
import { type PricingTier } from '../../types';
import { toast } from 'react-hot-toast';

export default function PricingManager() {
  const [tiers, setTiers] = useState<PricingTier[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    period: 'month',
    features: '',
    isPopular: false,
    order: 0
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const data = await getPricingTiers();
    if (data) setTiers(data as PricingTier[]);
    setLoading(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      features: formData.features.split('\n').map(s => s.trim()).filter(Boolean)
    };

    try {
      await addPricingTier(payload);
      toast.success('Pricing tier added');
      setFormData({ name: '', price: 0, period: 'month', features: '', isPopular: false, order: 0 });
      setIsAdding(false);
      load();
    } catch (error) {
      toast.error('Operation failed');
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Service Packages</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
        >
          {isAdding ? <X size={20} /> : <Plus size={20} />}
          {isAdding ? 'Cancel' : 'Add Package'}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-12 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Package Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Price ($)</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Period</label>
                  <select
                    value={formData.period}
                    onChange={(e) => setFormData({...formData, period: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none"
                  >
                    <option value="month">Per Month</option>
                    <option value="project">Per Project</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Display Order</label>
                <input
                  type="number"
                  required
                  value={formData.order}
                  onChange={(e) => setFormData({...formData, order: Number(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="popular"
                  checked={formData.isPopular}
                  onChange={(e) => setFormData({...formData, isPopular: e.target.checked})}
                />
                <label htmlFor="popular" className="text-sm font-bold text-slate-600 dark:text-slate-400">Popular / Featured Tag</label>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Features (One per line)</label>
              <textarea
                required
                rows={8}
                value={formData.features}
                onChange={(e) => setFormData({...formData, features: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 outline-none resize-none"
                placeholder="5 Pages&#10;Contact Form&#10;SEO Optimization"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 flex items-center gap-2"
            >
              <Check size={20} />
              Save Package
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map(tier => (
            <div key={tier.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{tier.name}</h4>
                  <p className="text-sm text-slate-500">${tier.price}/{tier.period}</p>
                </div>
                {tier.isPopular && <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">POPULAR</span>}
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <List size={12} className="text-blue-500" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button className="flex-1 py-2 text-xs font-bold text-slate-400 hover:text-blue-500 transition-colors uppercase tracking-widest">Edit</button>
                <button className="flex-1 py-2 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
