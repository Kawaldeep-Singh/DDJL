import React from 'react';
import { marqueeText } from './data/mockData';

const MarqueeBanner = () => {
  return (
    <div className="bg-white border-y-2 border-red-500 py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="text-red-600 font-semibold text-sm md:text-base mx-4">
          {marqueeText}
        </span>
        <span className="text-red-600 font-semibold text-sm md:text-base mx-4">
          {marqueeText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
