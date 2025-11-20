import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.18),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Modern Insurance for a Fast‑Moving Mongolia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-xl"
          >
            Digital-first protection for individuals and businesses. Transparent pricing, instant claims, backed by bank‑grade security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
              Get Started
            </a>
            <a href="#products" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-blue-100/90 hover:border-white/30 transition">
              Explore Products
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[['1.2M+', 'Policies managed'], ['4.9/5', 'Customer rating'], ['24/7', 'Support']].map(([k,v]) => (
              <motion.div key={k} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">{k}</div>
                <div className="text-sm text-blue-200/80">{v}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative aspect-[4/3] w-full"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
