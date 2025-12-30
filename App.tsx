import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import { translations } from './translations';
import { Unplug, EyeOff, Ban } from 'lucide-react';

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
         <img 
  src="/logo-flowify.png" 
  alt="Flowify" 
  className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform"
/>
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
            Workflow Automation for Busy Teams
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Friction Points</span><br className="hidden md:block" />
          Into Revenue While You<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Focus on Growth</span>
        </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Capture every opportunity in minutes, not hours. We identify where you lose time, build your custom workflow, and free your team from manual work.
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
  <a href="#how-it-works" className="px-8 py-4 border-2 border-slate-700 rounded-full font-semibold text-lg hover:border-violet-500 hover:bg-slate-800/50 transition-all">
    See How It Works
  </a>
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/10">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">10+</span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Hours Saved / Week</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">500+</span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Tasks Automated / Month</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-white mb-1">3x</span>
            <span className="text-sm text-gray-400 uppercase tracking-wider">ROI from day one</span>
          </div>
        </div>

          <p className="mt-12 text-sm text-slate-500 uppercase tracking-widest font-semibold">
            Built for Luxembourg businesses handling 100+ leads, inquiries, or tasks weekly
          </p>
        </div>
      </section>

      {/* Who We Help */}
      <section id="who" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Built for Leaders Who Want to Move Faster</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Your business is unique, but your bottlenecks aren't. We silence the noise and automate the friction that slows you down.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Unplug className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Systems That Don't Talk</h3>
              <p className="text-slate-400 leading-relaxed">Your CRM, email, and accounting tools live in isolation. You're paying humans to copy-paste data between tabs just to keep things moving.</p>
            </div>
            <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <EyeOff className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Invisible Inefficiencies</h3>
              <p className="text-slate-400 leading-relaxed">Processes stall because they rely on one person’s memory or inbox. When they're out, everything stops. You have no visibility into where things are stuck.</p>
            </div>
            <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-violet-500/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Ban className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Stalled Strategic Growth</h3>
              <p className="text-slate-400 leading-relaxed">Your best talent is buried in repetitive admin instead of high-value work. You can’t scale your operations without linearly increasing your payroll.</p>
            </div>
          </div>

          <p className="text-center text-slate-500 italic">Perfect for real estate, agencies, recruitment, and professional services.</p>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Why Your Team Is Busy But Your Business Isn't Scaling</h2>
            <p className="text-xl text-slate-400">You're hitting the "Complexity Ceiling." Adding more people won't fix it—automating the chaos will.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center hover:bg-red-500/10 transition-all">
              <div className="text-5xl font-black text-red-400 mb-4">54%</div>
              <div className="text-lg font-semibold mb-2">of Talent Wasted</div>
              <div className="text-sm text-slate-500">on repetitive admin instead of high-value strategy</div>
            </div>
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center hover:bg-red-500/10 transition-all">
              <div className="text-5xl font-black text-red-400 mb-4">60%</div>
              <div className="text-lg font-semibold mb-2">Idle Time</div>
              <div className="text-sm text-slate-500">work sitting in inboxes waiting for approval</div>
            </div>
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-2xl text-center hover:bg-red-500/10 transition-all">
              <div className="text-5xl font-black text-red-400 mb-4">85%</div>
              <div className="text-lg font-semibold mb-2">Capacity</div>
              <div className="text-sm text-slate-500">where most teams burn out and churn</div>
            </div>
          </div>

          <div className="text-center p-8 bg-violet-500/10 border border-violet-500/20 rounded-2xl">
            <p className="text-lg font-semibold text-violet-300">Flowify scales your output 10x without hiring a single new employee.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Three Steps to <br className="hidden md:block" /> Operational Excellence</h2>
            <p className="text-xl text-slate-400">No complex implementation. No disruption. Just results.</p>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm font-bold mb-6">
                  Step 1: The "Audit"
                </div>
                <h3 className="text-3xl font-black mb-4">The Bottleneck Blueprint</h3>
                <p className="text-lg text-slate-400 mb-6">In 30 minutes, we map exactly where your team is losing time. We don't just guess, we identify the specific manual tasks that are killing your margins.</p>
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
                    Friction point identification
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
                  Step 2: The "Build"
                </div>
                <h3 className="text-3xl font-black mb-4">The Custom Engine</h3>
                <p className="text-lg text-slate-400 mb-6">We build a tailored, automated workflow designed for your specific process. Whether it's CRM routing, finance syncing, or support triage, we automate it 100%.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tailored logic & integration
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Zero-downtime deployment
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Human-in-the-loop safeguards
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
                  Step 3: The "Handover"
                </div>
                <h3 className="text-3xl font-black mb-4">The Pilot's Seat</h3>
                <p className="text-lg text-slate-400 mb-6">You get the keys. We provide a live dashboard to track every hour saved and every dollar generated. You stay in control without doing the work.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Real-time performance metrics
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full flexibility to adjust
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Ongoing optimization support
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
            <p className="text-lg font-semibold">Everything lives in a real-time dashboard. One source of truth for your entire team.</p>
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
              <h2 className="text-4xl md:text-5xl font-black mb-6">Your Growth Infrastructure,<br className="hidden md:block" /> Built for You</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">Flowify isn't just a service—it's a complete operational upgrade. We build custom automation workflows layer that integrate with your existing tools and lets your business scale without breaking.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Unified Command Center</div>
                    <div className="text-sm text-slate-500 line-through">Scattered tools & data silos</div>
                    <div className="text-sm text-violet-400">→ Single Source of Truth</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Zero-Touch Execution</div>
                    <div className="text-sm text-slate-500 line-through">Manual busywork</div>
                    <div className="text-sm text-violet-400">→ Error-Free Automation</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Scalable Architecture</div>
                    <div className="text-sm text-slate-500 line-through">Hitting a growth ceiling</div>
                    <div className="text-sm text-violet-400">→ Built to Scale</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl border border-violet-500/20">
              <div className="text-center mb-8">
                <div className="text-sm font-bold text-violet-300 mb-2">Money-Back Guarantee</div>
                <p className="text-lg">If we don't recover 10+ hours of weekly capacity in the first month, we'll keep building for free until we do.</p>
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
              <p>After 10 years in operations, I got tired of seeing brilliant teams slowed down by bad processes. I watched talented people waste hours on copy-pasting data instead of closing deals.</p>
              <p>I built Flowify to fix that. We bring enterprise-grade automation to ambitious teams in Luxembourg—proving that you don’t need a massive budget to operate like a market leader.</p>
              <div className="p-6 bg-violet-500/10 border-l-4 border-violet-500 rounded-r-xl">
                <p className="font-semibold text-white italic">"You shouldn't have to hire more people just to handle more success. Your systems should scale with you."</p>
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
            <img 
  src="/logo-flowify.png" 
  alt="Flowify" 
  className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform"
/>
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
