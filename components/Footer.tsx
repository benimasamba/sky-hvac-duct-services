import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { SnowflakeIcon } from './icons/SnowflakeIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 ">
     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <a href="#" className="flex items-center space-x-2 text-white">
              {/*<SnowflakeIcon className="h-8 w-8" />*/}
              <span className="text-2xl font-extrabold">Sky HVAC</span>
            </a>
            <p className="text-gray-400 text-base">
              Your trusted partner for total home comfort since 1998.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/*<div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#services" className="text-base text-gray-400 hover:text-white">Cooling</a></li>
                  <li><a href="#services" className="text-base text-gray-400 hover:text-white">Heating</a></li>
                  <li><a href="#services" className="text-base text-gray-400 hover:text-white">Maintenance</a></li>
                </ul>
              </div>*/}
             {/* <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#about" className="text-base text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#our-work" className="text-base text-gray-400 hover:text-white">Our Work</a></li>
                  <li><a href="#testimonials" className="text-base text-gray-400 hover:text-white">Testimonials</a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Sky HVAC & Duct Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;