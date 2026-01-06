import React from 'react';
import { Gavel, Users, Home, Building2, Scale, Briefcase, FileText, ShieldAlert } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { PracticeArea } from '../types';

const areas: PracticeArea[] = [
  { title: "Civil Litigation", description: "Comprehensive representation in civil disputes and settlements.", icon: Scale },
  { title: "Criminal Defense", description: "Protecting rights in criminal proceedings with strategic defense.", icon: ShieldAlert },
  { title: "Family Law", description: "Compassionate counsel for divorce, custody, and family matters.", icon: Users },
  { title: "Property Law", description: "Expertise in real estate disputes, registration, and documentation.", icon: Home },
  { title: "Corporate Law", description: "Advisory for businesses, contracts, and compliance.", icon: Building2 },
  { title: "Arbitration", description: "Alternative dispute resolution services for efficient outcomes.", icon: Gavel },
  { title: "Documentation", description: "Drafting wills, deeds, agreements, and legal notices.", icon: FileText },
  { title: "Labor & Employment", description: "Handling workplace disputes and employment regulations.", icon: Briefcase },
];

export const Practice: React.FC = () => {
  return (
    <section id="practice" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <Reveal>
            <h2 className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-3">Our Expertise</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-bold text-white">Areas of Practice</h3>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-300 max-w-md">
              We offer a wide spectrum of legal services tailored to individual and corporate needs across Kanchipuram and Tamil Nadu.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 50}>
              <div className="group p-6 rounded bg-navy-800 border border-navy-700 hover:border-gold-600 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-navy-900 rounded flex items-center justify-center mb-4 group-hover:bg-gold-600 transition-colors duration-300 shadow-lg">
                  <area.icon size={24} className="text-gold-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-serif font-semibold mb-2 text-slate-100 group-hover:text-gold-500 transition-colors">{area.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {area.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-gold-500 uppercase tracking-wider flex items-center">
                  Learn More &rarr;
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};