
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative bg-cover bg-center h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('/adi-fauzanto-Uez7kjWTOfw-unsplash.jpg')" }}
    >
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4" style={{ fontSize: '42px' }}>
          Your Trusted Partner for Total Home Comfort
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8" style={{ fontSize: '18px' }}>
          Reliable HVAC services to keep you comfortable all year round. Expert installation, repair, and maintenance.
        </p>
        <a 
          href="tel:+13053066270" 
          className="bg-accent text-white px-8 py-4 rounded-md text-xl font-bold hover:bg-orange-600 transition-colors shadow-lg"
          style={{ fontSize: '20px' }}
        >
          Book Service Today
        </a>
      </div>
    </section>
  );
};

export default HeroSection;