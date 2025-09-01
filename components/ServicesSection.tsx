import React from 'react';
import type { Service } from '../types';
import { SnowflakeIcon } from './icons/SnowflakeIcon';
import { FireIcon } from './icons/FireIcon';
import { WrenchScrewdriverIcon } from './icons/WrenchScrewdriverIcon';

const services: Service[] = [
  {
    icon: SnowflakeIcon,
    title: 'Air Conditioning',
    description: 'Expert installation and repair services to keep you cool during the hottest months.',
    image: '/air-conditioning.jpg'
  },
  {
    icon: FireIcon,
    title: 'Heating Systems',
    description: 'Reliable furnace and heat pump solutions to ensure your space stays warm and cozy.',
    image: '/maintence.jpg'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Preventive Maintenance',
    description: 'Customized maintenance plans to extend the life of your HVAC system and prevent costly breakdowns.',
    image: '/everett-pachmann-JsPkVrHMQoo-unsplash.jpg'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
    <img 
      src={service.image} 
      alt={service.title} 
      className="w-full h-48 object-cover" 
      loading="lazy"
      width="400"
      height="300"
    />
    <div className="p-8 flex flex-col flex-grow">
      <div className="bg-accent/10 text-accent rounded-full p-3 w-16 h-16 mb-6 flex items-center justify-center">
        <service.icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow" style={{ fontSize: '17px' }}>{service.description}</p>
      <a href="tel:+13053066270" className="text-primary font-semibold hover:underline mt-auto">Call Now &rarr;</a>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-accent font-semibold tracking-wider uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Comprehensive HVAC Solutions
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We offer a full range of services to meet all your heating and cooling needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;