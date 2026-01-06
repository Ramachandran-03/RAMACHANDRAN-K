import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Clients', href: '#clients' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white py-5 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col group">
          <span className="font-serif text-2xl md:text-3xl font-bold text-navy-900 tracking-tight group-hover:text-gold-600 transition-colors">
            R&Y ASSOCIATES
          </span>
          <span className={`text-[10px] md:text-xs uppercase tracking-widest text-slate-500 group-hover:text-slate-700 transition-colors ${isScrolled ? 'hidden md:block' : 'block'}`}>
            Advocates & Legal Consultants
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-gold-600 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-gold-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="ml-4">
            <button className="flex items-center gap-2 bg-navy-900 text-white px-5 py-2 text-sm font-medium rounded hover:bg-navy-800 transition-colors">
              <Phone size={16} />
              <span>Book Consultation</span>
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-navy-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 lg:hidden pt-24 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-xl font-serif font-medium text-navy-900 hover:text-gold-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-8 border-t border-slate-100">
             <a 
               href="tel:+919894313930" 
               className="block text-lg font-medium text-gold-600 mb-2"
             >
               +91 98943 13930
             </a>
             <p className="text-slate-500 text-sm">Call for appointment</p>
          </div>
        </div>
      </div>
    </header>
  );
};