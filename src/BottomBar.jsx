import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { siteConfig } from './data/mockData';
import EnquiryForm from './EnquiryForm';

const BottomBar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Enquiry Popup Form — slides up when triggered */}
      {showForm && (
        <div className="fixed bottom-[56px] left-0 w-1/2 z-50 bg-white border border-gray-200 rounded-tr-xl shadow-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-900 text-sm">Quick Enquiry</h3>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-900"
            >
              <X size={18} />
            </button>
          </div>
          <EnquiryForm />
        </div>
      )}

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-14 shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
        {/* Left — Enquiry */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-1/2 bg-[#0066B2] text-white flex items-center justify-center gap-2 font-bold text-sm hover:bg-[#004D8C] transition-colors"
        >
          <MessageSquare size={18} />
          ENQUIRE NOW
        </button>

        {/* Right — Call */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="w-1/2 bg-[#D32F2F] text-white flex items-center justify-center gap-2 font-bold text-sm hover:bg-[#B71C1C] transition-colors animate-pulse"
        >
          <Phone size={18} />
          CALL NOW
        </a>
      </div>
    </>
  );
};

export default BottomBar;
