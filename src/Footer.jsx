import React from 'react';
import { siteConfig } from './data/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white">

      {/* HRERA Highlight Banner — Top */}
      <div className="bg-gradient-to-r from-[#0066B2] via-[#0052A3] to-[#0066B2] py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#0066B2] font-black text-xs">✓</span>
            </div>
            <div className="text-left">
              <p className="text-xs text-blue-200 uppercase tracking-widest font-medium">
                Government Approved
              </p>
              <p className="text-white font-bold text-lg leading-tight">
                HRERA APPROVED PROJECT
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-blue-400 mx-4" />
          <div className="text-left">
            <p className="text-xs text-blue-200 uppercase tracking-widest font-medium">
              Registration No.
            </p>
            <p className="text-white font-bold text-lg leading-tight tracking-wide">
              HRERA-PKL-JJR-463-2023
            </p>
          </div>
          <div className="hidden md:block w-px h-10 bg-blue-400 mx-4" />
          <div className="text-left">
            <p className="text-xs text-blue-200 uppercase tracking-widest font-medium">
              Presented By
            </p>
            <p className="text-white font-bold text-lg leading-tight">
              DEE Divine Propinfra
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto">

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

            {/* Column 1 — Project Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                {siteConfig.siteName}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A premium residential plotted township under Deen Dayal Jan
                Awas Yojna 2016 — Government of Haryana.
              </p>
            </div>

            {/* Column 2 — Address */}
            <div className="text-center">
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">
                Site Address
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {siteConfig.officeAddress}
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-block mt-2 text-[#4FA3D1] hover:text-white transition-colors text-sm font-medium"
              >
                {siteConfig.phone}
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block mt-1 text-[#4FA3D1] hover:text-white transition-colors text-sm break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Column 3 — Quick Links */}
            <div className="text-center md:text-right">
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="https://www.deendayaljanawasyojanajhajjar.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://www.deendayaljanawasyojanajhajjar.com/refund-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cancellation & Refund
                </a>
                <a
                  href="https://www.deendayaljanawasyojanajhajjar.com/disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Disclaimer
                </a>
                <a
                  href="https://www.deendayaljanawasyojanajhajjar.com/assets/broucher.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center">
              <p className="text-sm text-gray-400">
                © Copyright 2026 | All Rights Reserved |{' '}
                <span className="text-white font-medium">{siteConfig.siteName}</span>
              </p>
              <p className="text-xs text-gray-500 max-w-md">
                All visual assets and data are for representation purposes only
                according to HRERA guidelines. This is not an official government website.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
