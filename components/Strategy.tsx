
import React from 'react';
import { TranslationType } from '../translations';

const Strategy: React.FC<{ t: TranslationType }> = ({ t }) => {
return (
  <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="reveal opacity-0">
          <span className="inline-block py-1 px-3 bg-brand-primary/10 text-brand-primary font-bold tracking-widest text-[10px] uppercase mb-6 rounded-full border border-brand-primary/20">
            Premium Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-heading text-white">
            {t.strategy.headline}
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light">
            {t.strategy.paragraph}
          </p>

          <ul className="space-y-8">
            {t.strategy.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 text-brand-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="pt-1">
                  <p className="text-xl font-bold text-slate-200 leading-none mb-1 group-hover:text-white transition-colors">{bullet.split(' instead of ')[0]}</p>
                  <p className="text-sm text-slate-500 line-through group-hover:text-slate-400 transition-colors">{bullet.split(' instead of ')[1]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative reveal opacity-0 delay-200">
          <div className="absolute inset-0 bg-brand-primary/20 blur-[120px] -z-10 animate-pulse" />

          {/* High Fidelity Dashboard Container - Dark Mode */}
          <div className="bg-[#0f111a] rounded-[2rem] p-4 md:p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-slate-700/50 text-slate-100 font-sans scale-90 md:scale-100 origin-right backdrop-blur-sm relative z-10">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">Overview</h3>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-400 w-48 hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <span className="text-xs">Search anything...</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 relative hover:text-white cursor-pointer transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-accent rounded-full border border-[#0f111a]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary border border-white/10" />
                </div>
              </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {/* Card 1 */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Total Emails</span>
                  <div className="p-1.5 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 text-white">41</div>
                <div className="flex items-center gap-1">
                  <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded">+2 this hour</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Auto-handled</span>
                  <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 text-emerald-400">61%</div>
                <div className="flex items-center gap-1">
                  <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded">+5% vs last week</span>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Avg Response</span>
                  <div className="p-1.5 bg-purple-500/10 text-purple-400 rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 text-white">45s</div>
                <div className="flex items-center gap-1">
                  <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded">-10s improvement</span>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-300">Routed to Other</span>
                  <div className="p-1.5 bg-white/5 text-slate-400 rounded-lg group-hover:bg-white/10 group-hover:text-slate-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2 text-white">16</div>
                <div className="flex items-center gap-1">
                  <span className="bg-white/5 text-slate-400 text-[9px] font-bold px-1.5 py-0.5 rounded">—</span>
                </div>
              </div>
            </div>

            {/* Bottom Row Charts */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-white">Intent Distribution</h4>
                    <p className="text-[10px] text-slate-400">Incoming email categories</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div className="flex items-center justify-between">
                  <div className="relative w-32 h-32">
                    {/* Abstract Donut Chart with SVG - Neon Colors */}
                    <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                      <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#1e293b" strokeWidth="4"></circle>
                      <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="29 71" strokeDashoffset="0"></circle>
                      <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#a855f7" strokeWidth="4" strokeDasharray="29 71" strokeDashoffset="-29"></circle>
                      <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#06b6d4" strokeWidth="4" strokeDasharray="2 98" strokeDashoffset="-58"></circle>
                      <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#475569" strokeWidth="4" strokeDasharray="39 61" strokeDashoffset="-60"></circle>
                    </svg>
                  </div>
                  <div className="space-y-2 text-[11px] font-medium text-slate-400">
                    <div className="flex items-center justify-between w-32">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" />Buyer</div>
                      <span className="font-bold text-white">29%</span>
                    </div>
                    <div className="flex items-center justify-between w-32">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-500" />Seller</div>
                      <span className="font-bold text-white">29%</span>
                    </div>
                    <div className="flex items-center justify-between w-32">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-500" />Renter</div>
                      <span className="font-bold text-white">2%</span>
                    </div>
                    <div className="flex items-center justify-between w-32">
                      <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-600" />Other</div>
                      <span className="font-bold text-white">39%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 shadow-sm text-center">
                <h4 className="text-sm font-bold mb-1 text-white">Average AI Confidence</h4>
                <p className="text-[10px] text-slate-400 mb-6">Iris confidence on handled emails</p>

                <div className="relative inline-block mb-4">
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">60%</div>
                  <p className="text-[9px] text-slate-400 mt-2">High confidence for 25% of traffic</p>
                </div>

                <div>
                  <span className="inline-block bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold border border-orange-500/20">
                    Medium confidence
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Save Indicator */}
          <div className="absolute -bottom-6 -left-6 bg-brand-card/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 hidden md:block animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-200">Operational Efficiency</p>
                <p className="text-[10px] text-emerald-400 font-bold">+24% this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
