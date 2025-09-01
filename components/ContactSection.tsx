import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { EnvelopeIcon } from './icons/EnvelopeIcon';
import { MapPinIcon } from './icons/MapPinIcon';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Ready for Ultimate Comfort?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
          Contact us today for a free estimate or to schedule a service. We're here to help!
        </p>
        <div className="mt-10 flex flex-col justify-center items-center gap-8">
          <div className="flex items-center text-lg text-gray-800">
            <PhoneIcon className="h-6 w-6 text-primary mr-3"/>
            <a href="tel:+13053066270" className="hover:underline">+1 305-306-6270</a>
          </div>
          <div className="flex items-center text-lg text-gray-800">
            <EnvelopeIcon className="h-6 w-6 text-primary mr-3"/>
            <a href="mailto:contact@skyhvac.com" className="hover:underline">contact@skyhvac.com</a>
          </div>
          <div className="flex items-start text-lg text-gray-800 text-left">
            <MapPinIcon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0"/>
            <span>Mirador 1000, 1000 West Ave Ph 14<br />Miami Beach, FL 33139, United States</span>
          </div>
        </div>
        <div className="mt-10">
          <a
            href="tel:+13053066270"
            className="bg-accent text-white px-10 py-4 rounded-md text-xl font-bold hover:bg-orange-600 transition-colors shadow-lg"
            style={{ fontSize: '20px' }}
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;