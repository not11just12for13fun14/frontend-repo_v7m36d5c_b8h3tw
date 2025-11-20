import React from 'react';
import { Menu, ShieldCheck, Phone, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Products' },
  { label: 'Coverage' },
  { label: 'Pricing' },
  { label: 'Claims' },
  { label: 'Insights' },
  { label: 'FAQ' },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md px-4 py-3 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-white font-semibold tracking-tight">Tenger Insurance</div>
              <div className="text-[11px] text-blue-200/70">Mongolia • Since 2006</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button key={item.label} className="text-sm text-blue-100/80 hover:text-white transition-colors inline-flex items-center gap-1">
                {item.label}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-blue-100/90 hover:border-white/20 transition-colors">
              <Globe className="h-4 w-4" /> EN / MN
            </button>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
              <Phone className="h-4 w-4" /> Get a Quote
            </a>
            <button className="md:hidden grid place-items-center h-10 w-10 rounded-xl border border-white/10 text-blue-100/90">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
