import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Briefcase, Car, Home, HeartPulse, Globe2, ChartLine, Users, Sparkles, Rocket, Building2, HelpCircle, FileCheck, PhoneCall, Leaf, BadgeCheck } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-16 sm:py-24">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.12),transparent_55%)]" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-blue-200/80 max-w-2xl">{subtitle}</p>}
      </motion.div>
      <div className="mt-10">
        {children}
      </div>
    </div>
  </section>
);

export default function Sections() {
  return (
    <div>
      {/* 1. Products Overview */}
      <Section id="products" title="Products" subtitle="Comprehensive coverage built for life and business in Mongolia.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Car />, title: 'Auto' },
            { icon: <Home />, title: 'Home' },
            { icon: <HeartPulse />, title: 'Health' },
            { icon: <Briefcase />, title: 'Business' },
            { icon: <CreditCard />, title: 'Travel' },
            { icon: <Shield />, title: 'Life' },
            { icon: <Building2 />, title: 'Property' },
            { icon: <Globe2 />, title: 'Liability' },
          ].map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-3 text-blue-100">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/80 to-cyan-400/80 text-white">{p.icon}</div>
                <div className="font-semibold text-white">{p.title}</div>
              </div>
              <p className="mt-3 text-sm text-blue-200/80">Flexible plans tailored to your needs with instant approval.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 2. Coverage Highlights */}
      <Section id="coverage" title="Coverage Highlights" subtitle="Smart, transparent, and flexible protection.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <BadgeCheck />, h: 'Bank‑grade security' },
            { icon: <Sparkles />, h: 'AI‑assisted claims' },
            { icon: <ChartLine />, h: 'Usage‑based pricing' },
            { icon: <Users />, h: 'Family & team bundles' },
            { icon: <Leaf />, h: 'Eco incentives' },
            { icon: <FileCheck />, h: 'Instant policy docs' },
          ].map((i) => (
            <motion.div key={i.h} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="text-white flex items-center gap-3">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-blue-500/20 text-blue-300">{i.icon}</div>
                <div className="font-semibold">{i.h}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Pricing */}
      <Section id="pricing" title="Simple, transparent pricing" subtitle="Only pay for what you need. Upgrade or cancel anytime.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {name:'Essential', price:'₮19,900/mo'},
            {name:'Plus', price:'₮39,900/mo'},
            {name:'Pro', price:'₮69,900/mo'},
          ].map((t, idx) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx*0.05 }} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-white text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-3xl font-bold text-white">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-blue-200/80">
                <li>• Comprehensive coverage</li>
                <li>• Online support</li>
                <li>• Instant documents</li>
              </ul>
              <a href="#quote" className="mt-6 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-4 py-2 text-white font-semibold">Choose</a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. Claims Flow */}
      <Section id="claims" title="Claims in minutes" subtitle="File, track, and settle claims right from your phone.">
        <div className="grid sm:grid-cols-3 gap-6">
          {['Report', 'Review', 'Payout'].map((step, idx) => (
            <motion.div key={step} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-blue-200/80">Step {idx+1}</div>
              <div className="text-white font-semibold mt-1">{step}</div>
              <p className="text-sm text-blue-200/80 mt-2">Guided flow with secure uploads and real‑time status.</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Stats Band */}
      <Section id="stats" title="By the numbers" subtitle="Built for Mongolia’s pace.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[['98%','Claims approved'],['<24h','Avg. payout'],['1M+','Active users'],['130+','Partners']].map(([k,v]) => (
            <motion.div key={k} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-3xl font-bold text-white">{k}</div>
              <div className="text-sm text-blue-200/80">{v}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. Partners */}
      <Section id="partners" title="Trusted by leading institutions" subtitle="Banks, airlines, and tech leaders across Mongolia.">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 opacity-80">
          {['Golomt','Khan Bank','MIAT','Unitel','TDB','Mobicom'].map((b) => (
            <motion.div key={b} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-blue-100">{b}</motion.div>
          ))}
        </div>
      </Section>

      {/* 7. Why Us */}
      <Section id="why" title="Why choose us" subtitle="Designed like a fintech, regulated like an insurer.">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white font-semibold">Digital by default</div>
            <p className="text-blue-200/80 mt-2">From onboarding to claims, everything happens online with biometric security.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-white font-semibold">Built for Mongolia</div>
            <p className="text-blue-200/80 mt-2">Localization, compliance, and pricing tailored for local needs.</p>
          </motion.div>
        </div>
      </Section>

      {/* 8. Features Grid */}
      <Section id="features" title="Smart features" subtitle="All the tools you expect from a modern finance app.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Instant onboarding','Secure vault','Smart renewals','Family sharing','Tele‑health','Roadside assist','IoT discounts','Fraud detection'
          ].map((f) => (
            <motion.div key={f} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-xl border border-white/10 bg-white/5 p-5 text-blue-100">{f}</motion.div>
          ))}
        </div>
      </Section>

      {/* 9. Testimonials */}
      <Section id="testimonials" title="What customers say" subtitle="Real stories across Ulaanbaatar and beyond.">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-blue-100/90">“Claims paid out in hours. The app experience is world‑class.”</p>
              <div className="mt-4 text-sm text-blue-200/70">— Enkhtuya, Ulaanbaatar</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 10. Insights */}
      <Section id="insights" title="Insights & resources" subtitle="Learn how coverage fits your lifestyle.">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.a href="#" key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="block rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 hover:bg-white/10">
              <div className="text-white font-semibold">Guide to choosing coverage</div>
              <p className="text-blue-200/80 mt-2 text-sm">Tips for families, drivers, and travelers in Mongolia.</p>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* 11. FAQ */}
      <Section id="faq" title="Frequently asked questions" subtitle="Everything you need to know, in one place.">
        <div className="space-y-4">
          {[
            'How fast are claims?','Can I switch anytime?','Is my data secure?','Do you offer family plans?'
          ].map((q) => (
            <motion.details key={q} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none text-white font-medium flex items-center justify-between">
                {q}
                <HelpCircle className="h-5 w-5 opacity-60" />
              </summary>
              <p className="mt-2 text-sm text-blue-200/80">We settle most simple claims within 24 hours. Data is protected with end‑to‑end encryption.</p>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* 12. CTA */}
      <Section id="cta" title="Ready to protect what matters?" subtitle="Get a personalized quote in under 60 seconds.">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form className="grid grid-cols-2 gap-4">
              <input className="col-span-2 md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-blue-100 placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Full name" />
              <input className="col-span-2 md:col-span-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-blue-100 placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Email" />
              <select className="col-span-2 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                <option>Choose product</option>
                <option>Auto</option>
                <option>Home</option>
                <option>Health</option>
              </select>
              <button id="quote" className="col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 font-semibold text-white">Get quote</button>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-blue-200/85">
            <div className="text-3xl font-semibold text-white">Insurance, re‑imagined</div>
            <p className="mt-3">Fast onboarding, fair pricing, and proactive protection powered by data.</p>
            <div className="mt-5 flex gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">No long forms</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">Cancel anytime</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">24/7 support</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 13. Contact */}
      <Section id="contact" title="Contact" subtitle="We’re here to help—anytime.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {h:'Ulaanbaatar HQ', s:'Sukhbaatar District'},
            {h:'Phone', s:'+976 7000 0000'},
            {h:'Email', s:'support@tenger.mn'},
          ].map((c) => (
            <motion.div key={c.h} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-semibold">{c.h}</div>
              <div className="text-blue-200/80 mt-1">{c.s}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 14. Footer */}
      <footer className="relative mt-8 border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Tenger Insurance LLC. All rights reserved.</div>
          <div className="flex gap-4 text-blue-200/70 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
