import React from 'react';
import { Award, Briefcase, Landmark } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Profile Image */}
          <div className="lg:w-5/12 w-full">
            <Reveal width="100%">
              <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-gold-600 rounded-sm z-0 translate-x-2 translate-y-2"></div>
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl relative z-10 bg-slate-200">
                   {/* Placeholder for Adv. Riswan Sheriff */}
                  <img 
                    src="https://picsum.photos/seed/lawyer/600/800" 
                    alt="Adv. Riswan Sheriff" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-navy-900 to-transparent p-6 pt-20">
                     <span className="text-white/80 text-sm font-medium tracking-wider uppercase">Lead Counsel</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Content */}
          <div className="lg:w-7/12 w-full">
            <Reveal delay={200}>
              <h2 className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-3">About The Founder</h2>
              <h3 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold mb-2">
                Adv. Riswan Sheriff, <span className="text-2xl font-normal text-slate-500">B.A., LL.B.</span>
              </h3>
              <p className="text-lg font-medium text-navy-800 mb-6">
                Advocate & Standing Counsel, City Corporation, Kanchipuram
              </p>
              
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  With a distinguished career marked by ethical practice and unwavering dedication, Adv. Riswan Sheriff leads R&Y ASSOCIATES with a vision to provide accessible, high-quality legal representation.
                </p>
                <p>
                  Specializing in complex civil litigations and administrative law, his role as Standing Counsel for the Kanchipuram City Corporation underscores his expertise in municipal and regulatory matters. He believes in a client-first approach, ensuring that every legal strategy is tailored to the specific needs and goals of those he represents.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="flex flex-col items-start p-4 bg-slate-50 rounded border border-slate-100">
                  <Landmark className="text-gold-600 mb-3" size={28} />
                  <span className="font-bold text-navy-900 text-lg">Standing Counsel</span>
                  <span className="text-sm text-slate-500">City Corporation</span>
                </div>
                <div className="flex flex-col items-start p-4 bg-slate-50 rounded border border-slate-100">
                  <Award className="text-gold-600 mb-3" size={28} />
                  <span className="font-bold text-navy-900 text-lg">Results Driven</span>
                  <span className="text-sm text-slate-500">Proven Track Record</span>
                </div>
                <div className="flex flex-col items-start p-4 bg-slate-50 rounded border border-slate-100">
                  <Briefcase className="text-gold-600 mb-3" size={28} />
                  <span className="font-bold text-navy-900 text-lg">Integrity</span>
                  <span className="text-sm text-slate-500">Ethical Practice</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};