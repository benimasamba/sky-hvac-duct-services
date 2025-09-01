import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-base text-accent font-semibold tracking-wider uppercase">About Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              25+ Years of HVAC Excellence
            </p>
            <p className="mt-6 text-lg text-gray-600" style={{ fontSize: '18px' }}>
              Since our founding, Sky HVAC & Duct Services has been dedicated to providing top-tier heating, ventilation, and air conditioning services. Our certified technicians are committed to quality craftsmanship and exceptional customer service, ensuring your home or business stays comfortable no matter the season.
            </p>
            <div className="mt-8 flex space-x-4">
              <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-accent mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-accent mr-2" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
             <div className="p-8">
                <img 
                  src="/christina-hawkins-VDpYOvZm2Ok-unsplash.jpg" 
                  alt="Professional HVAC technician servicing a unit" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  loading="lazy"
                  width="600"
                  height="500"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;