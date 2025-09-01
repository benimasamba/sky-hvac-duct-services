import React, { useState, useEffect } from 'react';
import { SnowflakeIcon } from './icons/SnowflakeIcon';
import { Bars3Icon } from './icons/Bars3Icon';
import { XMarkIcon } from './icons/XMarkIcon';

const navLinks = [
  { title: 'About', id: 'about' },
  { title: 'Services', id: 'services' },
  
  { title: 'Testimonials', id: 'testimonials' },
  { title: 'Contact', id: 'contact' },
];

{/*{ title: 'Our Work', id: 'our-work' },*/}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Height of the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 text-primary hover:opacity-80 transition">
              {/*<SnowflakeIcon className="h-8 w-8" />*/}
              <span className="text-xl font-extrabold">Sky HVAC & Duct Services</span>
            </a>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <a 
                  key={item.title} 
                  href={`#${item.id}`} 
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-md font-medium transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
          <div className="hidden lg:block">
            <a 
              href="tel:+13053066270" 
              className="bg-primary text-white px-4 py-2 rounded-md text-md font-semibold hover:bg-blue-800 transition-colors"
            >
              Book Now
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-lg`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.title}
            </a>
          ))}
           <a 
              href="tel:+13053066270"
              className="bg-primary text-white block w-full text-center mt-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            >
              Book Now
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;