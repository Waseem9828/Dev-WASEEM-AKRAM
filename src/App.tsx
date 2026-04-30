/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion, useScroll } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import CustomCursor from './components/ui/CustomCursor';
import CodeBackground from './components/ui/CodeBackground';
import { useAuthState } from './hooks/useAuthState';

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[1000]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default function App() {
  const { user, loading } = useAuthState();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 cursor-none relative overflow-hidden">
        <CodeBackground />
        <CustomCursor />
        <ScrollProgressBar />
        <Toaster position="top-right" />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
