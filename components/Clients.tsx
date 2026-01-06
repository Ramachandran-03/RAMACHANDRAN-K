import React from 'react';
import { MessageSquare, FileSearch, UserCheck, Activity } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Clients: React.FC = () => {
  const steps = [
    { icon: MessageSquare, title: "Submit Details", desc: "Contact us via form or phone with case overview." },
    { icon: FileSearch, title: "Initial Review", desc: "Our team analyzes the merits of your case." },
    { icon: UserCheck, title: "Consultation", desc: "Detailed discussion with Adv. Riswan Sheriff." },
    { icon: Activity, title: "Ongoing Action", desc: "Regular updates and strategic legal action." },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold mb-4">Client Process</h2>
            <p className="text-slate-600">Transparent, systematic, and client-focused from day one.</p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 150} className="relative z-10">
                <div className="bg-white p-4 text-center group">
                  <div className="w-24 h-24 mx-auto bg-white border-2 border-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:border-gold-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <step.icon size={32} className="text-navy-900 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">0{index + 1}. {step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 border-t border-slate-100 pt-16">
          <Reveal width="100%">
            <div className="bg-navy-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h4 className="font-serif text-2xl text-navy-900 mb-6">Why Clients Trust Us</h4>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <div className="bg-white px-6 py-3 rounded shadow-sm text-sm font-semibold text-navy-800 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Confidentiality Assured
                </div>
                <div className="bg-white px-6 py-3 rounded shadow-sm text-sm font-semibold text-navy-800 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Clear Fee Structure
                </div>
                <div className="bg-white px-6 py-3 rounded shadow-sm text-sm font-semibold text-navy-800 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Honest Counsel
                </div>
              </div>
              <div className="mt-8">
                <a href="#contact" className="text-gold-600 font-bold hover:text-gold-700 underline underline-offset-4">
                  Read Client FAQs
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};