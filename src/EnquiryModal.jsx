import React from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <X size={22} />
          </button>

          {/* Header */}
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900">ENQUIRE NOW</h2>
            <p className="text-gray-500 text-sm mt-1">
              Shree Krishna Heritage — Sector 9A, Jhajjar
            </p>
          </div>

          {/* Form */}
          <EnquiryForm onSuccess={onClose} />
        </div>
      </div>
    </>
  );
};

export default EnquiryModal;
