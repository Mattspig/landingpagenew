import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import { translations } from './translations';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const t = translations.en;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
            Revenue Automation for Modern Teams
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
            <span className="block text-white">Turn Enquiries Into Revenue</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              While You Sleep
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Capture, qualify, and respond to every lead in minutes—not hours. Free your team from manual follow-ups and never miss an opportunity again.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
  onClick={() => {
    if (window.Calendly && typeof window.Calendly.showPopupWidget === 'function') {
      window.Calendly.showPopupWidget('https://calendly.com/matthieu-spigarelli/30min');
    } else {
      window.open('https://calendly.com/matthieu-spigarelli/30min', '_blank');
    }
  }}
  className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all hover:scale-105 flex items-center gap-2"
>
  Book Your Strategy Call
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto p-8 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/5">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">45s</div>
              <div className="text-sm text-slate-400 font-medium">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">61%</div>
              <div className="text-sm text-slate-400 font-medium">Auto-Handled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">24%</div>
              <div className="text-sm text-slate-400 font-medium">Revenue Increase</div>
            </div>
          </div>

          <p className="mt-12 text-sm text-slate-500 uppercase tracking-widest font-semibold">
            Trusted by teams managing 500+ enquiries monthly
          </p>
        </div>
      </section>

      {/* Who We Help */}
      <section id="who" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Built for Teams Who Value Every Lead</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">If you're drowning in enquiries and losing opportunities to slow follow-ups, Flowify is your solution.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Scattered Channels</h3>
              <p className="text-slate-400 leading-relaxed">Leads arrive via forms, email, portals—everywhere and nowhere at once.</p>
            </div>
            <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Manual Bottlenecks</h3>
              <p className="text-slate-400 leading-relaxed">Your team wastes hours qualifying, routing, and scheduling instead of closing.</p>
            </div>
            <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Revenue Gaps</h3>
              <p className="text-slate-400 leading-relaxed">You're ready to scale but can't justify hiring just to handle admin.</p>
            </div>
          </div>

          <p className="text-center text-slate-500 italic">Perfect for real estate, agencies, recruitment, and professional services.</p>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">The Hidden Cost of Manual Follow-Up</h2>
            <p className="text-xl text-slate-400">Every delayed response is lost revenue. Here's what's really happening:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center hover:bg-red-500/10 transition-all">
              <div className="text-5xl font-black text-red-400 mb-4">73%</div>
              <div className="text-lg font-semibold mb-2">of leads expect response within an hour</div>
              <div className="text-sm text-slate-500">Yours wait hours or days</div>
            </div>
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center hover:bg-red-500/10 transition-all">
              <div className="text-5xl font-black text-red-400 mb-4">40hrs</div>
              <div className="text-lg font-semibold mb-2">wasted monthly on email triage</div>
              <div className="text-sm text-slate-500">Senior staff doing junior work</div>
            </div>
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center hover:bg-red-500/10 transition-all">
              <div className="text-5xl font-black text-red-400 mb-4">0</div>
              <div className="text-lg font-semibold mb-2">visibility into lead status</div>
              <div className="text-sm text-slate-500">No dashboard, just chaos</div>
            </div>
          </div>

          <div className="text-center p-8 bg-violet-500/10 border border-violet-500/20 rounded-2xl">
            <p className="text-lg font-semibold text-violet-300">Even fixing one of these recovers 10+ hours weekly for a small team.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Three Steps to Revenue Recovery</h2>
            <p className="text-xl text-slate-400">No complex implementation. No disruption. Just results.</p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-bold mb-6">
                  Step 1
                </div>
                <h3 className="text-3xl font-black mb-4">Revenue Leak Analysis</h3>
                <p className="text-lg text-slate-400 mb-6">In 30 minutes, we map exactly where time and money are slipping through the cracks.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Current workflow audit
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Bottleneck identification
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ROI projection
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
                  <div className="text-slate-600 text-6xl font-black">1</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-bold mb-6">
                  Step 2
                </div>
                <h3 className="text-3xl font-black mb-4">Opportunity Capture System</h3>
                <p className="text-lg text-slate-400 mb-6">We centralize all enquiries, auto-classify by intent, and route to the right person instantly.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Multi-channel integration
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Smart classification
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instant routing
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
                  <div className="text-slate-600 text-6xl font-black">2</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-bold mb-6">
                  Step 3
                </div>
                <h3 className="text-3xl font-black mb-4">Smart Follow-Up Assistant</h3>
                <p className="text-lg text-slate-400 mb-6">Your prospects get personalized, timely responses without your team typing a word.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Context-aware replies
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Meeting scheduling
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    CRM sync
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
                  <div className="text-slate-600 text-6xl font-black">3</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-violet-500/20">
            <p className="text-lg font-semibold">Everything appears in a real-time dashboard. One source of truth for your entire team.</p>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-bold mb-6">
                The Flowify Advantage
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Done-For-You Revenue Improvement</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">Flowify isn't software—it's a complete Revenue Improvement Strategy. We build custom automation workflows that integrate with your existing tools, capturing more opportunities while freeing your team to focus on high-value work.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Centralized Intelligence</div>
                    <div className="text-sm text-slate-500 line-through">Scattered inboxes</div>
                    <div className="text-sm text-violet-400">→ Single command center</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Priority Scoring</div>
                    <div className="text-sm text-slate-500 line-through">Guesswork and gut feel</div>
                    <div className="text-sm text-violet-400">→ Data-driven decisions</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Consistent Follow-Up</div>
                    <div className="text-sm text-slate-500 line-through">Forgotten messages</div>
                    <div className="text-sm text-violet-400">→ Zero opportunity loss</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
              <div className="text-center mb-8">
                <div className="text-sm font-bold text-violet-300 mb-2">Money-Back Guarantee</div>
                <p className="text-lg">If we don't recover 10+ hours weekly in the first month, we'll work for free until we do.</p>
              </div>
              <a href="#contact" className="block w-full py-4 text-center bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl font-bold hover:shadow-xl hover:shadow-violet-500/50 transition-all">
                Claim Your Free Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16">Built by Operators, For Operators</h2>
          
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl" />
              <div className="text-center mt-4">
                <div className="font-bold text-lg">Matthieu Spigarelli</div>
                <div className="text-sm text-slate-500">Founder</div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>After a decade in sales and operations, I watched teams repeatedly drown in manual coordination. The pattern was everywhere: talented people buried in administrative tasks that automation should handle.</p>
              <p>Flowify brings enterprise-grade automation to small teams. We're starting with service businesses in Luxembourg, proving that you don't need a big company budget to operate like one.</p>
              <div className="p-6 bg-violet-500/10 border-l-4 border-violet-500 rounded-r-xl">
                <p className="font-semibold text-white italic">"Every team should have the tools to maximize revenue without burning out."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - YOUR COMPONENT */}
      <Contact t={t} />

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
