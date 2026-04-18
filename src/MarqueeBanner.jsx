import React from 'react';
import { marqueeText } from './data/mockData';

const MarqueeBanner = () => {
  return (
    <div className="bg-white border-y-2 border-red-500 py-2 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 5s linear infinite',
        }}
      >
        <span className="text-red-600 font-semibold text-sm md:text-base mx-8 shrink-0">
          {marqueeText}
        </span>
        <span className="text-red-600 font-semibold text-sm md:text-base mx-8 shrink-0">
          {marqueeText}
        </span>
        <span className="text-red-600 font-semibold text-sm md:text-base mx-8 shrink-0">
          {marqueeText}
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBanner;
