
import React, { useState } from 'react';
import { TranslationType } from '../translations';

const Hero: React.FC<{ t: TranslationType }> = ({ t }) => {
  const [bookingLoading, setBookingLoading] = useState(false);
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 font-heading animate-fade-in opacity-0">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">
            {t.hero.headline.split(',')[0]}
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-primary to-brand-accent animate-glow">
            {t.hero.headline.split(',')[1] || "automatically."}
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0 delay-100 font-light">
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in opacity-0 delay-200">
          {/* Primary CTA: Calendly popup */}
          <button
            onClick={() => {
              setBookingLoading(true);
              if (window.Calendly && typeof window.Calendly.showPopupWidget === 'function') {
                window.Calendly.showPopupWidget('https://calendly.com/matthieu-spigarelli/30min');
                setTimeout(() => setBookingLoading(false), 6000);
              } else {
                window.open('https://calendly.com/matthieu-spigarelli/30min', '_blank');
                setBookingLoading(false);
              }
            }}
            disabled={bookingLoading}
            className={`group relative px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/50 overflow-hidden ${bookingLoading ? 'cursor-wait opacity-80' : 'hover:-translate-y-1 active:scale-95'
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative text-white flex items-center gap-2">
              {bookingLoading ? 'Loading...' : t.hero.primaryCTA}
              {!bookingLoading && (
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              )}
            </span>
          </button>

          {/* Secondary CTA: scroll to contact form */}
          <a
            href="#contact"
            className="px-10 py-5 rounded-full text-lg font-bold text-slate-300 border border-white/10 hover:border-brand-primary/50 hover:bg-white/5 hover:text-white transition-all active:scale-95"
          >
            {t.hero.secondaryCTA}
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 animate-fade-in opacity-0 delay-300">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-slate-700" />
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-[0.2em]">
            {t.hero.trustLine}
          </p>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-slate-700" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
