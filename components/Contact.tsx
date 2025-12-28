import React, { useState } from 'react';
import { TranslationType } from '../translations';

const Contact: React.FC<{ t: TranslationType }> = ({ t }) => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    volume: '',
    enquiry: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-20 relative">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 font-heading text-center md:text-left tracking-tight text-white">
          {t.contact.headline}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              {t.contact.left.text}
            </p>

            <ul className="space-y-8">
              {t.contact.left.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-brand-primary/10 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xl text-slate-200 font-light group-hover:text-white transition-colors">{bullet}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                if (window.Calendly && typeof window.Calendly.showPopupWidget === 'function') {
                  window.Calendly.showPopupWidget('https://calendly.com/matthieu-spigarelli/30min');
                } else {
                  window.open('https://calendly.com/matthieu-spigarelli/30min', '_blank');
                }
              }}
              className="group relative inline-block w-full sm:w-auto px-12 py-5 rounded-full text-xl font-bold overflow-hidden transition-all shadow-2xl shadow-brand-primary/30 hover:-translate-y-1 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative text-white z-10">{t.contact.left.button}</span>
            </button>
          </div>

          {/* Right Column (Form) */}
          <div
            id="contact-form"
            className="bg-brand-card/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 text-slate-900 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[40px] pointer-events-none"></div>

            {submitted ? (
              <div className="py-20 text-center space-y-6">
                <div className="w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce border border-emerald-500/30">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white">Message sent!</h3>
                <p className="text-slate-400 text-lg">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);

                  const formData = new FormData();
                  formData.append('name', formState.name);
                  formData.append('company', formState.company);
                  formData.append('email', formState.email);
                  formData.append('volume', formState.volume);
                  formData.append('enquiry', formState.enquiry);

                  try {
                    const res = await fetch('https://formspree.io/f/meeqlpyg', {
                      method: 'POST',
                      headers: { Accept: 'application/json' },
                      body: formData,
                    });

                    if (res.ok) {
                      setSubmitted(true);
                      setFormState({
                        name: '',
                        company: '',
                        email: '',
                        volume: '',
                        enquiry: '',
                      });
                    } else {
                      setError('Something went wrong. Please try again.');
                    }
                  } catch {
                    setError('Network error. Please try again.');
                  }
                }}
                className="space-y-6 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {t.contact.form.name}
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="w-full px-5 py-4 bg-brand-dark/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 outline-none transition-all text-white placeholder-slate-600"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      {t.contact.form.company}
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={(e) => setFormState(s => ({ ...s, company: e.target.value }))}
                      className="w-full px-5 py-4 bg-brand-dark/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 outline-none transition-all text-white placeholder-slate-600"
                      placeholder="Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {t.contact.form.email}
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-5 py-4 bg-brand-dark/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 outline-none transition-all text-white placeholder-slate-600"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {t.contact.form.volume}
                  </label>
                  <select
                    required
                    name="volume"
                    value={formState.volume}
                    onChange={(e) => setFormState(s => ({ ...s, volume: e.target.value }))}
                    className="w-full px-5 py-4 bg-brand-dark/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 outline-none transition-all appearance-none cursor-pointer text-white"
                  >
                    <option value="" disabled className="text-slate-500">Select a range...</option>
                    <option value="0-10" className="text-slate-900">0 - 10 enquiries / week</option>
                    <option value="11-50" className="text-slate-900">11 - 50 enquiries / week</option>
                    <option value="51-100" className="text-slate-900">51 - 100 enquiries / week</option>
                    <option value="101+" className="text-slate-900">101+ enquiries / week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    {t.contact.form.enquiry}
                  </label>
                  <textarea
                    required
                    rows={3}
                    name="enquiry"
                    value={formState.enquiry}
                    onChange={(e) => setFormState(s => ({ ...s, enquiry: e.target.value }))}
                    className="w-full px-5 py-4 bg-brand-dark/50 border border-white/5 rounded-2xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 outline-none transition-all resize-none text-white placeholder-slate-600"
                    placeholder="E.g. Website forms, Zillow, direct emails..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-neon w-full text-white py-6 rounded-2xl text-xl font-bold shadow-xl active:scale-95 hover:shadow-brand-primary/30"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
