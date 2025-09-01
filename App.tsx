
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PastWorkSection from './components/PastWorkSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBubbleIcon from './components/icons/ChatBubbleIcon';

const App: React.FC = () => {
  return (
    <div className="bg-secondary font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
       {/* <PastWorkSection />*/}
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Live Chat Bubble */}
      {/*<button className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-50">
        <ChatBubbleIcon className="h-8 w-8" />
      </button>*/}
    </div>
  );
};

export default App;
