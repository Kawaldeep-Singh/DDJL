import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from './data/mockData';


const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <a
          href={`tel:${siteConfig.phone}`}
          className="fixed bottom-6 right-6 z-50 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2 font-bold animate-pulse"
        >
          <Phone size={20} />
          Call now
        </a>
      )}
    </>
  );
};

export default FloatingCallButton;
