
import React from 'react';
import { TranslationType } from '../translations';

interface HeaderProps {
  lang: 'en' | 'fr';
  toggleLang: () => void;
  t: TranslationType;
}

const Header: React.FC<HeaderProps> = ({ lang, toggleLang, t }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-xl border-b border-white/5"></div>

      <div className="relative max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-brand-primary/40 blur-lg rounded-full animate-pulse group-hover:bg-brand-primary/60"></div>
            <img
              src="/logo-flowify.png"
              alt="Flowify Logo"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight font-heading text-white group-hover:text-brand-glow transition-colors duration-300">
            FLOWIFY
          </span>
        </div>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['howItWorks', 'about'].map((key) => (
            <a
              key={key}
              href={`#${key === 'howItWorks' ? 'how-it-works' : key}`}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors group"
            >
              {t.nav[key as keyof typeof t.nav]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button
            onClick={toggleLang}
            className="px-4 py-1.5 border border-white/10 rounded-full text-xs font-bold text-slate-400 hover:text-white hover:border-brand-primary/50 hover:bg-white/5 transition-all"
          >
            {t.nav.lang}
          </button>

          <a
            href="#contact"
            className="btn-neon px-8 py-3 rounded-full text-white text-sm font-bold shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 active:scale-95"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Mobile menu toggle (simple version) */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLang} className="text-xs font-bold text-slate-400 hover:text-white uppercase transition-colors">
            {t.nav.lang}
          </button>
          <a href="#contact" className="text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors">
            {t.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
