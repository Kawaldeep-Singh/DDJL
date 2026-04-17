import React from 'react';
import { heroImages, projectInfo } from './data/mockData';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Images Grid */}
        <div className="bg-[#0066B2] p-6 rounded-lg mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {heroImages.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white py-2 text-center">
                  <span className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-4">
            SHREE KRISHNA HERITAGE — DEEN DAYAL JAN AWAS YOJNA
          </h2>
        </div>

        {/* Application Banner */}
        <div className="bg-[#FFC107] py-6 px-4 rounded-lg mb-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Application for Allotment of Plots at Shree Krishna Heritage, Sector 9A, Jhajjar
          </h3>
          <p className="text-lg md:text-xl text-gray-800 font-medium">
            Under Deen Dayal Jan Awas Yojna 2016 — Government of Haryana
          </p>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[#FFC107] py-4 px-6 rounded-lg text-center">
            <p className="text-lg md:text-xl font-bold text-gray-900">
              Starting Price {projectInfo.startingPrice}
            </p>
          </div>
          <div className="bg-[#FFC107] py-4 px-6 rounded-lg text-center">
            <p className="text-lg md:text-xl font-bold text-gray-900">
              Allotment Date — {projectInfo.allocationDate}
            </p>
          </div>
          <div className="bg-[#FFC107] py-4 px-6 rounded-lg text-center">
            <p className="text-lg md:text-xl font-bold text-gray-900">
              Registration Amount — {projectInfo.registrationAmount}
            </p>
          </div>
        </div>

        {/* Reservation Notice */}
        <div className="bg-[#0066B2] py-4 px-6 rounded-lg text-center">
          <p className="text-white text-lg md:text-xl font-semibold">
            Registration Closing Date: {projectInfo.registrationCloseDate} | Allotment Date: {projectInfo.allocationDate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
