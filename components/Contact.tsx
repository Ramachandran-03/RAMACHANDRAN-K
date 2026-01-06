import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
             <Reveal>
              <h2 className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-3">Get in Touch</h2>
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">Let's Discuss Your Legal Matter</h3>
              <p className="text-slate-600 mb-10 text-lg">
                Visit our office in Kanchipuram or schedule a consultation via phone or email. We are here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-gold-600 flex-shrink-0 mr-5 border border-slate-100">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                    <a href="tel:9894313930" className="block text-xl font-serif text-navy-900 font-bold hover:text-gold-600 transition-colors">+91 98943 13930</a>
                    <a href="tel:8838778238" className="block text-xl font-serif text-navy-900 font-bold hover:text-gold-600 transition-colors">+91 88387 78238</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-gold-600 flex-shrink-0 mr-5 border border-slate-100">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:rishvana.sheriff@gmail.com" className="text-lg text-navy-900 hover:text-gold-600 transition-colors">rishvana.sheriff@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center text-gold-600 flex-shrink-0 mr-5 border border-slate-100">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Office</p>
                    <p className="text-lg text-navy-900 leading-relaxed">
                      No.13-A, Ottakoothar St,<br />
                      Mamallan Nagar, Kanchipuram – 631502,<br />
                      Tamil Nadu, India.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Map Preview */}
            <div className="mt-10 h-64 w-full bg-slate-200 rounded overflow-hidden shadow-inner relative group">
                {/* Simulated Map Image */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <MapPin size={48} className="text-navy-900 mb-2" />
                    <span className="sr-only">Kanchipuram Map</span>
                </div>
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded shadow-xl border-t-4 border-gold-600 h-fit">
            <Reveal delay={200}>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">Request Consultation</h3>
              
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">Request Sent!</h4>
                  <p className="text-slate-600">Thank you. We will review your details and contact you shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-6 text-sm font-bold text-gold-600 underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="+91..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Legal Matter Type</label>
                    <select className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all bg-white">
                      <option>Civil Litigation</option>
                      <option>Criminal Defense</option>
                      <option>Family Law</option>
                      <option>Property Dispute</option>
                      <option>Corporate Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded border border-slate-300 focus:border-navy-900 focus:ring-1 focus:ring-navy-900 outline-none transition-all" placeholder="Briefly describe your situation..."></textarea>
                  </div>

                  <Button 
                    fullWidth 
                    size="lg" 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </Button>
                </form>
              )}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};