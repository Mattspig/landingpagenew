import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
            <img
              src="/logo-flowify.png"
              alt="Flowify Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight font-heading text-slate-200">
            FLOWIFY
          </span>
        </div>

        <span className="text-sm text-slate-500">
          © {new Date().getFullYear()} Flowify. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
