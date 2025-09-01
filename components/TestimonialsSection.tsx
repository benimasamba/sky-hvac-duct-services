
import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from './icons/StarIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const testimonials: Testimonial[] = [
  {
    image: '/mike-hindle-Js5Qi_X1qzo-unsplash.jpg',
    name: 'Sarah L.',
    rating: 5,
    quote: "Sky HVAC & Duct Services was fantastic. Their technician was professional, courteous, and fixed our AC unit in no time. Highly recommend their services!"
  },
  {
    image: '/mike-hindle-Js5Qi_X1qzo-unsplash.jpg',
    name: 'Michael B.',
    rating: 5,
    quote: "The team installed a new furnace for us, and the entire process was seamless. Great communication and top-quality work."
  },
  {
    image: '/mike-hindle-Js5Qi_X1qzo-unsplash.jpg',
    name: 'Jessica P.',
    rating: 4,
    quote: "Their maintenance plan is a lifesaver. It's affordable and gives me peace of mind knowing my system is in good hands."
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-primary/90 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What Our Customers Say</h2>
        </div>
        
        <div className="relative h-80 md:h-64 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-20 h-20 rounded-full mb-4" 
                loading="lazy"
                width="100"
                height="100"
              />
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} />
                ))}
              </div>
              <p className="text-lg italic text-gray-200 mb-4 max-w-2xl">"{testimonial.quote}"</p>
              <p className="font-bold text-lg">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;