import React, { useState, useEffect } from 'react';
import { projectFeatures, projectEdges, locationEdges } from './data/mockData';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

// Tab images array — lightbox ke liye
const tabImages = ['/site.jpeg'];

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState('site-plan');
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotate, setRotate] = useState(0);

  const openLightbox = () => { setLightbox(true); setZoom(1); setRotate(0); };
  const closeLightbox = () => { setLightbox(false); setZoom(1); setRotate(0); };
  const zoomIn  = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const rotateImg = () => setRotate((r) => r + 90);

  // Keyboard support
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === '+')      zoomIn();
      if (e.key === '-')      zoomOut();
      if (e.key === 'r')      rotateImg();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const tabs = [
    { id: 'site-plan',      label: 'Site Plan' },
    { id: 'project-edge',   label: 'The Project Edge' },
    { id: 'location-edge',  label: 'Location Edge' },
  ];

  const renderList = (items) => (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-gray-700">
          <span className="text-[#2E7D32] mr-2 font-bold">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'border-b-4 border-[#0066B2] text-[#0066B2]'
                  : 'text-gray-600 hover:text-[#0066B2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Image — same for all tabs, click to open lightbox */}
          <div
            onClick={openLightbox}
            className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="/site.jpeg"
              alt="Shree Krishna Heritage Site Plan"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                <ZoomIn size={44} className="drop-shadow-lg" />
                <span className="text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                  Click to View
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            {activeTab === 'site-plan' && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Plan</h3>
                <p className="text-gray-700 mb-4">
                  Shree Krishna Heritage, Sector 9A, Jhajjar features
                  meticulously engineered plotted layouts with perfectly aligned
                  plots demarcated with precision. Wide boulevard roads with
                  modern drainage and rapid connectivity ensure an elite gated
                  community experience.
                </p>
                {renderList(projectFeatures)}
              </>
            )}

            {activeTab === 'project-edge' && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Project Edge — Shree Krishna Heritage, Sector 9A, Jhajjar
                </h3>
                {renderList(projectEdges)}
              </>
            )}

            {activeTab === 'location-edge' && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Location Edge — Shree Krishna Heritage, Sector 9A, Jhajjar
                </h3>
                {renderList(locationEdges)}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/60">
            <span className="text-white text-sm font-semibold">Site Plan — Shree Krishna Heritage</span>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Zoom Out */}
              <button
                onClick={zoomOut}
                disabled={zoom <= 0.5}
                className="text-white hover:text-yellow-400 transition-colors disabled:opacity-30"
                title="Zoom Out ( - )"
              >
                <ZoomOut size={22} />
              </button>

              {/* Zoom % */}
              <span className="text-white text-sm w-12 text-center">
                {Math.round(zoom * 100)}%
              </span>

              {/* Zoom In */}
              <button
                onClick={zoomIn}
                disabled={zoom >= 3}
                className="text-white hover:text-yellow-400 transition-colors disabled:opacity-30"
                title="Zoom In ( + )"
              >
                <ZoomIn size={22} />
              </button>

              {/* Rotate */}
              <button
                onClick={rotateImg}
                className="text-white hover:text-blue-400 transition-colors text-xl"
                title="Rotate ( R )"
              >
                🔄
              </button>

              {/* Reset */}
              <button
                onClick={() => { setZoom(1); setRotate(0); }}
                className="text-white hover:text-green-400 transition-colors text-xs border border-white/30 px-2 py-1 rounded"
                title="Reset"
              >
                Reset
              </button>
            </div>

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="text-white hover:text-red-400 transition-colors"
              title="Close (Esc)"
            >
              <X size={26} />
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center overflow-auto p-4">
            <img
              src="/site.jpeg"
              alt="Site Plan"
              style={{
                transform: `scale(${zoom}) rotate(${rotate}deg)`,
                transition: 'transform 0.3s ease',
                transformOrigin: 'center center',
                maxHeight: '80vh',
                maxWidth: '100%',
                objectFit: 'contain',
                cursor: zoom > 1 ? 'grab' : 'default',
              }}
            />
          </div>

          {/* Bottom hint */}
          <div className="text-center py-2 bg-black/60 text-gray-400 text-xs">
            Keyboard: <span className="text-white">+</span> Zoom In &nbsp;|&nbsp;
            <span className="text-white">-</span> Zoom Out &nbsp;|&nbsp;
            <span className="text-white">R</span> Rotate &nbsp;|&nbsp;
            <span className="text-white">Esc</span> Close
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectTabs;
