
import React from 'react';
import { TranslationType } from '../translations';

const About: React.FC<{ t: TranslationType }> = ({ t }) => {
  return (
    <section id="about" className="py-32 px-6 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-heading tracking-tight text-white">{t.about.headline}</h2>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="relative group w-64 h-64 flex-shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 bg-brand-primary rounded-[2rem] blur-xl opacity-50 group-hover:opacity-80 transition-opacity rotate-[-2deg]"></div>
            <div className="relative w-full h-full rounded-[2rem] bg-brand-card overflow-hidden border-2 border-white/10 group-hover:border-brand-primary/50 transition-colors shadow-2xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
              <img src="https://picsum.photos/seed/founder/400/400" alt="Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          <div className="space-y-8 text-center md:text-left">
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              {t.about.text1}
            </p>

            <div className="p-8 bg-brand-card/40 border-l-4 border-brand-primary rounded-r-2xl backdrop-blur-sm">
              <p className="text-lg font-bold text-white">
                "{t.about.mission}"
              </p>
            </div>

            <p className="text-lg text-slate-400 italic font-light leading-relaxed">
              {t.about.text2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
