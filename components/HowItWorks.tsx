
import React from 'react';
import { TranslationType } from '../translations';

const HowItWorks: React.FC<{ t: TranslationType }> = ({ t }) => {
  const steps = [t.how.step1, t.how.step2, t.how.step3];

  return (
    <section id="how-it-works" className="py-32 px-6 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight text-white">{t.how.headline}</h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-brand-secondary to-brand-primary mx-auto rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
        </div>

        <div className="grid lg:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-1 bg-gradient-to-r from-brand-card via-brand-primary/50 to-brand-card -z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className={`relative z-10 flex flex-col items-center text-center group animate-fade-in delay-${(idx + 1) * 100} fill-mode-backwards`}>
              <div className="relative w-20 h-20 mb-10 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-brand-primary rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 bg-brand-card border border-brand-primary/50 text-brand-primary rounded-3xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-brand-primary/20 bg-clip-padding backdrop-filter backdrop-blur-sm z-10 group-hover:text-white group-hover:bg-brand-primary transition-colors">
                  {idx + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 px-4 text-white group-hover:text-brand-glow transition-colors">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-light max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-10 bg-brand-card/30 backdrop-blur-md border border-white/10 rounded-[2rem] text-center shadow-soft max-w-4xl mx-auto animate-fade-in delay-300 fill-mode-backwards">
          <p className="text-2xl font-semibold text-white mb-2">
            {t.how.footer.split(' dashboard ')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary"> dashboard </span>
            {t.how.footer.split(' dashboard ')[1]}
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-400 font-medium">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-emerald-400/80">100% Fully Managed Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
