import React from 'react';
import { Helmet } from 'react-helmet-async';
import { heroImages, projectInfo } from './data/mockData';

const HeroSection = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Shree Krishna Heritage Jhajjar | DDJAY Plots Sector 9A | ₹52,000/Sq.Yd</title>
        <meta name="title" content="Shree Krishna Heritage Jhajjar | DDJAY Plots Sector 9A | ₹52,000/Sq.Yd" />
        <meta
          name="description"
          content="Book premium residential plots at Shree Krishna Heritage, Sector 9A, Jhajjar under Deen Dayal Jan Awas Yojna. Stilt+4 floors approved. Starting ₹52,000/sq.yd. HRERA approved. Near KMP Expressway, AIIMS & Reliance MET City. Registration closing 27 April 2026."
        />
        <meta
          name="keywords"
          content="Shree Krishna Heritage Jhajjar, DDJAY plots Jhajjar, Deen Dayal Jan Awas Yojna Jhajjar, residential plots Jhajjar, plots near KMP expressway, affordable plots Haryana, HRERA approved plots, Sector 9A Jhajjar plots, plots near AIIMS Jhajjar, plots near MET City"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.deendayaljanawasyojanajhajjar.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deendayaljanawasyojanajhajjar.com" />
        <meta property="og:title" content="Shree Krishna Heritage Jhajjar | DDJAY Plots Sector 9A" />
        <meta
          property="og:description"
          content="Premium residential plots at Shree Krishna Heritage, Sector 9A, Jhajjar. Stilt+4 floors approved. Starting ₹52,000/sq.yd. HRERA-PKL-JJR-463-2023. Registration closing 27 April 2026."
        />
        <meta property="og:image" content="https://www.deendayaljanawasyojanajhajjar.com/logo.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Shree Krishna Heritage Jhajjar" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.deendayaljanawasyojanajhajjar.com" />
        <meta name="twitter:title" content="Shree Krishna Heritage Jhajjar | DDJAY Plots Sector 9A" />
        <meta
          name="twitter:description"
          content="Premium residential plots at Shree Krishna Heritage, Sector 9A, Jhajjar. Stilt+4 floors approved. Starting ₹52,000/sq.yd. Registration closing 27 April 2026."
        />
        <meta name="twitter:image" content="https://www.deendayaljanawasyojanajhajjar.com/logo.png" />

        {/* Schema.org — Real Estate Listing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            "name": "Shree Krishna Heritage",
            "description": "Premium residential plots under Deen Dayal Jan Awas Yojna at Sector 9A, Jhajjar, Haryana",
            "url": "https://www.deendayaljanawasyojanajhajjar.com",
            "image": "https://www.deendayaljanawasyojanajhajjar.com/logo.png",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "6865992",
              "availability": "https://schema.org/InStock"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 9A",
              "addressLocality": "Jhajjar",
              "addressRegion": "Haryana",
              "postalCode": "124103",
              "addressCountry": "IN"
            },
            "telephone": "+91-9211496111",
            "email": "info@deendayaljanawasyojanajhajjar.com"
          })}
        </script>
      </Helmet>

      {/* Hero Section — same as before */}
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

            <h1 className="text-white text-2xl md:text-4xl font-bold text-center mb-4">
              SHREE KRISHNA HERITAGE — DEEN DAYAL JAN AWAS YOJNA
            </h1>
          </div>

          {/* Application Banner */}
          <div className="bg-[#FFC107] py-6 px-4 rounded-lg mb-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Application for Allotment of Plots at Shree Krishna Heritage, Sector 9A, Jhajjar
            </h2>
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
    </>
  );
};

export default HeroSection;
