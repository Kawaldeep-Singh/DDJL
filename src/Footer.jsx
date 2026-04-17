import React from 'react';
import { siteConfig } from './data/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* HRERA Approved Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm">
            HRERA APPROVED
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">{siteConfig.siteName}</h3>
          <p className="text-gray-300 mb-4">
            Office Address: {siteConfig.officeAddress}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <a
              href="https://www.deendayaljanawasyojanajhajjar.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="https://www.deendayaljanawasyojanajhajjar.com/refund-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Cancellation and Refund
            </a>
            <span>|</span>
            <a
              href="https://www.deendayaljanawasyojanajhajjar.com/disclaimer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>

        {/* RERA Info */}
        <div className="text-center text-sm text-gray-400 mb-4">
          <p>RERA No. - HRERA-PKL-JJR-463-2023</p>
          <p className="mt-1">Presented By: DEE Divine Propinfra</p>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-600 pt-6">
          <p className="text-sm text-gray-400">
            © Copyright 2026 | All Rights Reserved | {siteConfig.siteName}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            By continuing to use this website, you acknowledge that all visual
            assets and data are for representation purposes only according to
            the HRERA guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
