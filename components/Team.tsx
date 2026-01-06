import React from 'react';
import { Reveal } from './ui/Reveal';
import { Lawyer } from '../types';
import { ChevronRight } from 'lucide-react';

const lawyers: Lawyer[] = [
  { name: "S. Yogeshwaran", qualification: "B.A., B.L.", focus: "Civil & Family Law" },
  { name: "S. A. Yasar Arafath", qualification: "M.B.A., LL.B.", focus: "Corporate & Commercial" },
  { name: "R. Chanma", qualification: "B.Com., LL.B.", focus: "Criminal Defense & Property" },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold mb-4">Our Dedicated Associates</h2>
            <p className="text-slate-600">A team of skilled professionals committed to delivering justice and legal clarity.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers.map((lawyer, index) => (
            <Reveal key={lawyer.name} delay={index * 100} className="h-full">
              <div className="group bg-white p-8 rounded shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-transparent hover:border-gold-600 h-full flex flex-col">
                <div className="mb-6 w-16 h-1 bg-slate-200 group-hover:bg-gold-600 transition-colors"></div>
                
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {lawyer.name}
                </h3>
                <p className="text-sm font-semibold text-slate-400 mb-4 tracking-wider uppercase">{lawyer.qualification}</p>
                
                <p className="text-slate-600 mb-6 flex-grow">
                  Specializing in {lawyer.focus}, providing detailed attention to every case file and client interaction.
                </p>

                <a href="#contact" className="inline-flex items-center text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  View Profile <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};