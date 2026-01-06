import React from 'react';
import { Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="text-gold-500" size={24} />
              <span className="font-serif text-xl font-bold tracking-tight">R&Y ASSOCIATES</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Providing clear, ethical, and result-oriented legal counsel to Kanchipuram and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-slate-200">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About Founder</a></li>
              <li><a href="#team" className="hover:text-gold-500 transition-colors">Our Team</a></li>
              <li><a href="#practice" className="hover:text-gold-500 transition-colors">Practice Areas</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-slate-200">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Civil Litigation</li>
              <li>Criminal Defense</li>
              <li>Family & Divorce</li>
              <li>Property Registration</li>
              <li>Documentation</li>
            </ul>
          </div>

          {/* Contact - Brief */}
          <div>
             <h4 className="font-serif text-lg font-bold mb-6 text-slate-200">Contact</h4>
             <p className="text-slate-400 text-sm mb-2">Ottakoothar St, Mamallan Nagar</p>
             <p className="text-slate-400 text-sm mb-4">Kanchipuram – 631502</p>
             <p className="text-gold-500 font-bold text-lg">98943 13930</p>
          </div>

        </div>

        <div className="border-t border-navy-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} R&Y ASSOCIATES. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Bar Council Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
};