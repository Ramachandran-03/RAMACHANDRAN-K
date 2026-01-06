import React from 'react';
import { ArrowRight, Scale } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 md:pt-0 flex items-center bg-slate-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 hidden lg:block skew-x-12 origin-top transform translate-x-32"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-50 border border-navy-100 rounded-full text-navy-800 text-xs font-semibold tracking-wider uppercase mb-6">
                <Scale size={14} className="text-gold-600" />
                <span>Premier Legal Counsel</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.2] mb-6">
                Trusted Legal Counsel in <span className="text-gold-600 italic">Kanchipuram</span>
              </h1>
              
              <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Led by <strong className="text-navy-900">Adv. Riswan Sheriff</strong>, Standing Counsel for the City Corporation. We provide clear, result-oriented legal solutions for complex matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-navy-900/10">
                    Book a Consultation
                  </Button>
                </a>
                <a href="tel:+919894313930">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Call: 98943 13930
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-8 lg:mt-0">
             <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Legal Scales of Justice" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm p-6 lg:p-8 max-w-xs shadow-lg m-4 lg:m-8 border-l-4 border-gold-600">
                  <p className="font-serif text-xl text-navy-900 italic mb-2">"Justice denied anywhere is a threat to justice everywhere."</p>
                  <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">- Martin Luther King Jr.</p>
                </div>
             </div>
             
             {/* Floating decorative elements */}
             <div className="absolute -z-10 top-[-20px] right-[-20px] w-64 h-64 bg-gold-400/20 rounded-full blur-3xl"></div>
             <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-64 h-64 bg-navy-900/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};