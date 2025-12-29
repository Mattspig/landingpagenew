import React, { useState, useEffect } from 'react';
import Contact from './Contact';           // ← YOUR CALENDLY + FORMSPREE
import { translations } from './translations';  // ← YOUR BILINGUAL

const translations = {
  en: {
    nav: {
      howItWorks: "How it works",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Revenue Automation for Modern Teams",
      headline: "Turn Enquiries Into Revenue",
      subheadline: "While You Sleep",
      description: "Capture, qualify, and respond to every lead in minutes—not hours. Free your team from manual follow-ups and never miss an opportunity again.",
      primaryCTA: "Book Your Strategy Call",
      secondaryCTA: "See How It Works",
      trustLine: "Trusted by teams managing 500+ enquiries monthly",
      stats: [
        { value: "45s", label: "Avg Response Time" },
        { value: "61%", label: "Auto-Handled" },
        { value: "24%", label: "Revenue Increase" }
      ]
    },
    who: {
      headline: "Built for Teams Who Value Every Lead",
      subtitle: "If you're drowning in enquiries and losing opportunities to slow follow-ups, Flowify is your solution.",
      cards: [
        {
          title: "Scattered Channels",
          desc: "Leads arrive via forms, email, portals—everywhere and nowhere at once."
        },
        {
          title: "Manual Bottlenecks",
          desc: "Your team wastes hours qualifying, routing, and scheduling instead of closing."
        },
        {
          title: "Revenue Gaps",
          desc: "You're ready to scale but can't justify hiring just to handle admin."
        }
      ],
      footer: "Perfect for real estate, agencies, recruitment, and professional services."
    },
    problems: {
      headline: "The Hidden Cost of Manual Follow-Up",
      subtitle: "Every delayed response is lost revenue. Here's what's really happening:",
      items: [
        {
          stat: "73%",
          text: "of leads expect response within an hour",
          subtext: "Yours wait hours or days"
        },
        {
          stat: "40hrs",
          text: "wasted monthly on email triage",
          subtext: "Senior staff doing junior work"
        },
        {
          stat: "0",
          text: "visibility into lead status",
          subtext: "No dashboard, just chaos"
        }
      ],
      cta: "Even fixing one of these recovers 10+ hours weekly for a small team."
    },
    how: {
      headline: "Three Steps to Revenue Recovery",
      subtitle: "No complex implementation. No disruption. Just results.",
      steps: [
        {
          title: "Revenue Leak Analysis",
          desc: "In 30 minutes, we map exactly where time and money are slipping through the cracks.",
          features: ["Current workflow audit", "Bottleneck identification", "ROI projection"]
        },
        {
          title: "Opportunity Capture System",
          desc: "We centralize all enquiries, auto-classify by intent, and route to the right person instantly.",
          features: ["Multi-channel integration", "Smart classification", "Instant routing"]
        },
        {
          title: "Smart Follow-Up Assistant",
          desc: "Your prospects get personalized, timely responses without your team typing a word.",
          features: ["Context-aware replies", "Meeting scheduling", "CRM sync"]
        }
      ],
      footer: "Everything appears in a real-time dashboard. One source of truth for your entire team."
    },
    strategy: {
      eyebrow: "The Flowify Advantage",
      headline: "Done-For-You Revenue Improvement",
      paragraph: "Flowify isn't software—it's a complete Revenue Improvement Strategy. We build custom automation workflows that integrate with your existing tools, capturing more opportunities while freeing your team to focus on high-value work.",
      benefits: [
        {
          label: "Centralized Intelligence",
          before: "Scattered inboxes",
          after: "Single command center"
        },
        {
          label: "Priority Scoring",
          before: "Guesswork and gut feel",
          after: "Data-driven decisions"
        },
        {
          label: "Consistent Follow-Up",
          before: "Forgotten messages",
          after: "Zero opportunity loss"
        }
      ],
      guarantee: "If we don't recover 10+ hours weekly in the first month, we'll work for free until we do."
    },
    about: {
      headline: "Built by Operators, For Operators",
      founder: "Matthieu Spigarelli",
      story: "After a decade in sales and operations, I watched teams repeatedly drown in manual coordination. The pattern was everywhere: talented people buried in administrative tasks that automation should handle.",
      mission: "Flowify brings enterprise-grade automation to small teams. We're starting with service businesses in Luxembourg, proving that you don't need a big company budget to operate like one.",
      vision: "Every team should have the tools to maximize revenue without burning out."
    },
 contact: {
   headline: "Let's Map Your Revenue Opportunity",
   subtitle: "30 minutes to understand if automation makes sense for your business",
   benefits: [
     "See exactly where you're losing time and money",
     "Rough estimate of weekly hours we can recover",
     "Clear roadmap if you decide to move forward"
   ]
 }  
};  // ← Keep this semicolon


const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const t = translations.en;  // Use your translations.ts later

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
  {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-lg transform group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/50">
              F
            </div>
            <span className="text-xl font-bold tracking-tight">FLOWIFY</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['how-it-works', 'about', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {section.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all hover:scale-105">
              Get Started
            </a>
          </div>
        </div>
      </nav>

     {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-semibold mb-8 backdrop-blur-sm">
            {t.hero.eyebrow}
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
            <span className="block text-white">{t.hero.headline}</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.hero.subheadline}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all hover:scale-105 flex items-center gap-2">
              {t.hero.primaryCTA}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a href="#how-it-works" className="px-8 py-4 border-2 border-slate-700 rounded-full font-semibold text-lg hover:border-violet-500 hover:bg-slate-800/50 transition-all">
              {t.hero.secondaryCTA}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto p-8 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/5">
            {t.hero.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-slate-500 uppercase tracking-widest font-semibold">
            {t.hero.trustLine}
          </p>
        </div>
      </section>

   {/* Who We Help */}
      <section id="who" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">{t.who.headline}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">{t.who.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {t.who.cards.map((card, i) => (
              <div key={i} className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 italic">{t.who.footer}</p>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">{t.problems.headline}</h2>
            <p className="text-xl text-slate-400">{t.problems.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {t.problems.items.map((item, i) => (
              <div key={i} className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center hover:bg-red-500/10 transition-all">
                <div className="text-5xl font-black text-red-400 mb-4">{item.stat}</div>
                <div className="text-lg font-semibold mb-2">{item.text}</div>
                <div className="text-sm text-slate-500">{item.subtext}</div>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-violet-500/10 border border-violet-500/20 rounded-2xl">
            <p className="text-lg font-semibold text-violet-300">{t.problems.cta}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">{t.how.headline}</h2>
            <p className="text-xl text-slate-400">{t.how.subtitle}</p>
          </div>

          <div className="space-y-16">
            {t.how.steps.map((step, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-bold mb-6">
                    Step {i + 1}
                  </div>
                  <h3 className="text-3xl font-black mb-4">{step.title}</h3>
                  <p className="text-lg text-slate-400 mb-6">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-300">
                        <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
                    <div className="text-slate-600 text-6xl font-black">{i + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-violet-500/20">
            <p className="text-lg font-semibold">{t.how.footer}</p>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-bold mb-6">
                {t.strategy.eyebrow}
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">{t.strategy.headline}</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">{t.strategy.paragraph}</p>
              
              <div className="space-y-6">
                {t.strategy.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold mb-1">{benefit.label}</div>
                      <div className="text-sm text-slate-500 line-through">{benefit.before}</div>
                      <div className="text-sm text-violet-400">→ {benefit.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
              <div className="text-center mb-8">
                <div className="text-sm font-bold text-violet-300 mb-2">Money-Back Guarantee</div>
                <p className="text-lg">{t.strategy.guarantee}</p>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold hover:shadow-xl hover:shadow-violet-500/50 transition-all">
                Claim Your Free Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">{t.about.headline}</h2>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl" />
              <div className="text-center mt-4">
                <div className="font-bold text-lg">{t.about.founder}</div>
                <div className="text-sm text-slate-500">Founder</div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{t.about.story}</p>
              <p>{t.about.mission}</p>
              <div className="p-6 bg-violet-500/10 border-l-4 border-violet-500 rounded-r-xl">
                <p className="font-semibold text-white italic">"{t.about.vision}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* === YOUR PERFECT CONTACT (Calendly + Formspree) === */}
<section id="contact" className="py-24 px-6 bg-slate-950/50">
  <div className="max-w-6xl mx-auto">
    <Contact t={translations.en} />  {/* Pass translations to your component */}
  </div>
</section>

{/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center font-bold">
              F
            </div>
            <span className="text-xl font-bold">FLOWIFY</span>
          </div>
          <div className="text-sm text-slate-500">
            © 2024 Flowify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
