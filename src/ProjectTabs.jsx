import React, { useState } from 'react';
import { projectFeatures, projectEdges, locationEdges } from './data/mockData';

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('site-plan');

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('site-plan')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'site-plan'
                ? 'border-b-4 border-[#0066B2] text-[#0066B2]'
                : 'text-gray-600 hover:text-[#0066B2]'
            }`}
          >
            Site Plan
          </button>
          <button
            onClick={() => setActiveTab('project-edge')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'project-edge'
                ? 'border-b-4 border-[#0066B2] text-[#0066B2]'
                : 'text-gray-600 hover:text-[#0066B2]'
            }`}
          >
            The Project Edge
          </button>
          <button
            onClick={() => setActiveTab('location-edge')}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === 'location-edge'
                ? 'border-b-4 border-[#0066B2] text-[#0066B2]'
                : 'text-gray-600 hover:text-[#0066B2]'
            }`}
          >
            Location Edge
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Site Plan */}
          {activeTab === 'site-plan' && (
            <>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/site.jpeg"
                  alt="Shree Krishna Heritage Site Plan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Plan</h3>
                <p className="text-gray-700 mb-4">
                  Shree Krishna Heritage, Sector 9A, Jhajjar features
                  meticulously engineered plotted layouts with perfectly aligned
                  plots demarcated with precision. Wide boulevard roads with
                  modern drainage and rapid connectivity ensure an elite gated
                  community experience. Key features of our project:
                </p>
                <ul className="space-y-2">
                  {projectFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-[#2E7D32] mr-2 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Project Edge */}
          {activeTab === 'project-edge' && (
            <>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/site.jpeg"
                  alt="Shree Krishna Heritage Project Edge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Project Edge — Shree Krishna Heritage, Sector 9A, Jhajjar
                </h3>
                <ul className="space-y-2">
                  {projectEdges.map((edge, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-[#2E7D32] mr-2 font-bold">✓</span>
                      <span>{edge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Location Edge */}
          {activeTab === 'location-edge' && (
            <>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/site.jpeg"
                  alt="Shree Krishna Heritage Location"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Location Edge — Shree Krishna Heritage, Sector 9A, Jhajjar
                </h3>
                <ul className="space-y-2">
                  {locationEdges.map((edge, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-[#2E7D32] mr-2 font-bold">✓</span>
                      <span>{edge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProjectTabs;
