import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Practice } from './components/Practice';
import { Clients } from './components/Clients';
import { Careers } from './components/Careers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-navy-900 bg-white selection:bg-gold-200 selection:text-navy-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Practice />
        <Clients />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;