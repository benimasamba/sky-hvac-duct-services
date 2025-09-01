
import React, { useState } from 'react';
import { XMarkIcon } from './icons/XMarkIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const images = [
  { id: 1, src: 'https://picsum.photos/id/1015/800/600', alt: 'Residential AC Unit Installation' },
  { id: 2, src: 'https://picsum.photos/id/1043/800/600', alt: 'Commercial Rooftop HVAC System' },
  { id: 3, src: 'https://picsum.photos/id/21/800/600', alt: 'Furnace Repair in Basement' },
  { id: 4, src: 'https://picsum.photos/id/54/800/600', alt: 'Ductwork Cleaning' },
  { id: 5, src: 'https://picsum.photos/id/57/800/600', alt: 'Smart Thermostat Setup' },
  { id: 6, src: 'https://picsum.photos/id/60/800/600', alt: 'Heat Pump Maintenance' },
];

const PastWorkSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-accent font-semibold tracking-wider uppercase">Our Work</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Quality You Can See
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={image.id} className="group relative" onClick={() => openLightbox(index)}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg cursor-pointer"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 z-50" onClick={closeLightbox}>
            <XMarkIcon className="h-10 w-10" />
          </button>
          <button className="absolute left-4 sm:left-10 text-white hover:text-gray-300 p-2 bg-black/30 rounded-full z-50" onClick={showPrevImage}>
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <button className="absolute right-4 sm:right-10 text-white hover:text-gray-300 p-2 bg-black/30 rounded-full z-50" onClick={showNextImage}>
            <ChevronRightIcon className="h-8 w-8" />
          </button>
          
          <div className="relative max-w-4xl max-h-[90vh] w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt} 
              className="max-h-[90vh] w-auto h-auto mx-auto rounded-lg shadow-2xl" 
              width="800"
              height="600"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PastWorkSection;