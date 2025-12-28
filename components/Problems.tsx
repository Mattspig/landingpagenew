
import React from 'react';
import { TranslationType } from '../translations';

const Problems: React.FC<{ t: TranslationType }> = ({ t }) => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-heading tracking-tight text-white/90">
          {t.problems.headline}
        </h2>

        <div className="space-y-6 mb-16">
          {t.problems.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-6 p-8 bg-red-500/5 rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all duration-300 hover:bg-red-500/10 group">
              <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 group-hover:scale-110 transition-all">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-xl text-slate-300 font-light group-hover:text-red-200 transition-colors">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-brand-primary blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <p className="relative px-8 py-4 bg-brand-card/80 backdrop-blur-md text-brand-secondary font-bold rounded-full text-base border border-brand-secondary/30">
              {t.problems.metricLine}
            </p>
          </div>
        </div>

        <div className="relative p-12 rounded-3xl text-center overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-brand-card/60 backdrop-blur-xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px] group-hover:bg-brand-accent/30 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] group-hover:bg-brand-primary/30 transition-all duration-700" />

          <p className="text-2xl md:text-3xl relative z-10 leading-relaxed max-w-3xl mx-auto font-light text-white/90">
            {t.problems.subtext}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;
