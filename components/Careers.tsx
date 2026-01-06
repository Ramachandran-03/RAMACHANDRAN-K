import React from 'react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';
import { Lock } from 'lucide-react';

export const Careers: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-slate-900 to-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <Reveal>
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider mb-4 border border-white/20">FOR LAWYERS</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Join a Legacy of Legal Excellence</h2>
              <p className="text-slate-300 mb-6 text-lg">
                At R&Y Associates, we believe in mentoring the next generation of legal minds. We provide structured guidance, exposure to diverse case files, and the opportunity to work alongside the Standing Counsel for the City Corporation.
              </p>
              <ul className="space-y-3 mb-8 text-slate-400">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>Structured Mentorship Program</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>Diverse Court Exposure</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>Ethical Practice Foundation</li>
              </ul>
              
              <Button variant="secondary" className="shadow-lg shadow-gold-600/20">
                View Opportunities
              </Button>
            </Reveal>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <Reveal delay={200} width="100%">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl max-w-md w-full ml-auto hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl font-bold">Associate Portal</h3>
                  <Lock size={20} className="text-gold-500" />
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Secure login for associates to access case files, internal resources, and schedules.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Associate ID" 
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="password" 
                      placeholder="Password" 
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <Button fullWidth className="bg-white text-navy-900 hover:bg-slate-200">
                    Login
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};