import React from 'react';

import { MapPin, Phone, Mail } from 'lucide-react';
import EnquiryForm from './EnquiryForm';
import { siteConfig } from './data/mockData';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg">
            <EnquiryForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#0066B2] text-white p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <MapPin size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Site Address</h3>
                  <p>{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2E7D32] text-white p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Phone size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <a href={`tel:${siteConfig.phone}`} className="hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#FFC107] text-gray-900 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Mail size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
