
import React from 'react';
import { TranslationType } from '../translations';

const WhoWeHelp: React.FC<{ t: TranslationType }> = ({ t }) => {
  const icons = [
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 font-heading tracking-tight text-white">
          {t.who.headline}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t.who.bullets.map((bullet, idx) => (
            <div key={idx} className="bg-brand-card/30 backdrop-blur-sm p-10 rounded-2xl border border-white/5 hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary/20 blur-[50px] group-hover:bg-brand-primary/30 transition-all"></div>

              <div className="relative w-16 h-16 bg-brand-card/50 text-brand-primary rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:text-brand-accent transition-all duration-300 shadow-lg shadow-black/20">
                {icons[idx]}
              </div>
              <p className="relative text-xl font-bold text-slate-200 leading-tight group-hover:text-white transition-colors">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-slate-500 font-medium tracking-wide first-letter:uppercase">
          {t.who.footer}
        </p>
      </div>
    </section>
  );
};

export default WhoWeHelp;
