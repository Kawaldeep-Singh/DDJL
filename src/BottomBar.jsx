import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from './data/mockData';
import EnquiryModal from './EnquiryModal';

const BottomBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Fixed Bottom Bar — phone/tablet only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex h-14 shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
        {/* Left — Enquiry */}
        <button
          onClick={() => setShowModal(true)}
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

      {/* Enquiry Modal — center screen */}
      <EnquiryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default BottomBar;
