import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, User, CheckCircle2, Github, Linkedin, TerminalSquare } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { submitContactForm } from '../../services/firestore';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      setIsSuccess(true);
      toast.success('Message sent! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 relative">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <TerminalSquare size={14} />
                <span>Initialize Connection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                 Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Channel</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm font-medium leading-relaxed">
                 Ready to execute? Send a briefing or schedule a technical review to discuss your architecture.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <a href="mailto:waseem.akram@steakportfolio.dev" className="group flex items-center gap-6 p-6 glass-card rounded-[2rem] border-slate-200 dark:border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-inner border border-blue-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-1.5">Electronic Mail</p>
                  <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">waseem.akram@dev</p>
                </div>
              </a>

              <a href="https://github.com/waseemakram" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-6 glass-card rounded-[2rem] border-slate-200 dark:border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-inner border border-purple-500/20">
                  <Github size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-1.5">Source Control</p>
                  <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-500 transition-colors">github.com/waseemakram</p>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 glass-card rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle animated border top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-600/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.2)] border border-green-500/20 relative">
                    <CheckCircle2 size={48} />
                    <div className="absolute inset-0 rounded-full border border-green-400 animate-ping opacity-20"></div>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">Mission Accepted</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-10 font-medium">
                    Briefing received. Stand by for initial contact within 24h.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  >
                    Send Another Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 ml-2 group-focus-within:text-blue-500 transition-colors">Request Identification</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name (or Agency)"
                      className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium text-slate-900 dark:text-white backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 ml-2 group-focus-within:text-purple-500 transition-colors">Return Path</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium text-slate-900 dark:text-white backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 ml-2 group-focus-within:text-pink-500 transition-colors">Mission Briefing</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project goals..."
                      className="w-full px-6 py-4 bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium resize-none text-slate-900 dark:text-white backdrop-blur-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(168,85,247,0.3)] disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Launch Briefing <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
