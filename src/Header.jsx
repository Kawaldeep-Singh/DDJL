import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { siteConfig } from './data/mockData';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDateTime = (date) => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    };
    const dateStr = date.toLocaleDateString('en-US', options);
    const timeStr = date.toLocaleTimeString('en-US', { hour12: true });
    return `${dateStr}-${timeStr}`;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#0066B2] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span>{formatDateTime(currentTime)}</span>
            <span className="hidden sm:inline">|</span>
            <span>Helpline No. {siteConfig.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>For any Issue please email To:-</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:underline">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2E7D32] rounded flex items-center justify-center">
                <div className="text-white font-bold text-xs text-center leading-tight">
                  SHREE
                  <br />
                  KRISHNA
                </div>
              </div>
              <div>
                <h1 className="text-[#2E7D32] font-bold text-lg leading-tight">
                  SHREE KRISHNA HERITAGE
                </h1>
                <p className="text-gray-600 text-sm">SECTOR 9A, JHAJJAR</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-[#0066B2] transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-[#0066B2] transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className="text-gray-700 hover:text-[#0066B2] transition-colors font-medium"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('payment-plan')}
                className="text-gray-700 hover:text-[#0066B2] transition-colors font-medium"
              >
                Payment Plan
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#0066B2] transition-colors font-medium"
              >
                Contact Us
              </button>
              <button className="bg-[#D32F2F] text-white px-6 py-2 rounded hover:bg-[#B71C1C] transition-colors font-medium animate-pulse">
                Registration Open
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-[#0066B2] transition-colors font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-[#0066B2] transition-colors font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className="block w-full text-left text-gray-700 hover:text-[#0066B2] transition-colors font-medium py-2"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('payment-plan')}
                className="block w-full text-left text-gray-700 hover:text-[#0066B2] transition-colors font-medium py-2"
              >
                Payment Plan
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-[#0066B2] transition-colors font-medium py-2"
              >
                Contact Us
              </button>
              <button className="w-full bg-[#D32F2F] text-white px-6 py-2 rounded hover:bg-[#B71C1C] transition-colors font-medium animate-pulse">
                Registration Open
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
