
import React, { useState, useEffect } from 'react';
import { translations, TranslationType } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeHelp from './components/WhoWeHelp';
import Problems from './components/Problems';
import HowItWorks from './components/HowItWorks';
import Strategy from './components/Strategy';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const t: TranslationType = translations[lang];

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="flex flex-col selection:bg-brand-primary selection:text-white">
      <Header lang={lang} toggleLang={toggleLang} t={t} />
      
      <main className="flex-grow relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6">
        <Hero t={t} />
        <WhoWeHelp t={t} />
        <Problems t={t} />
        <HowItWorks t={t} />
        <Strategy t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
