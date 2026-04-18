import React, { useState, useEffect } from 'react';
import { galleryImages } from './data/mockData';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // current index
  const [zoom, setZoom] = useState(1);

  const openLightbox = (index) => {
    setLightbox(index);
    setZoom(1);
  };

  const closeLightbox = () => {
    setLightbox(null);
    setZoom(1);
  };

  const prev = () => {
    setZoom(1);
    setLightbox((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const next = () => {
    setZoom(1);
    setLightbox((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const zoomIn  = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));

  // Keyboard support
  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === '+')          zoomIn();
      if (e.key === '-')          zoomOut();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Gallery
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  size={40}
                />
              </div>
              {/* Image number */}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {index + 1} / {galleryImages.length}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/60">
            <span className="text-white text-sm font-medium">
              {lightbox + 1} / {galleryImages.length}
            </span>
            {/* Zoom Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={zoomOut}
                disabled={zoom <= 0.5}
                className="text-white hover:text-yellow-400 transition-colors disabled:opacity-30"
                title="Zoom Out ( - )"
              >
                <ZoomOut size={22} />
              </button>
              <span className="text-white text-sm w-12 text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={zoom >= 3}
                className="text-white hover:text-yellow-400 transition-colors disabled:opacity-30"
                title="Zoom In ( + )"
              >
                <ZoomIn size={22} />
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

          {/* Image Area */}
          <div className="flex-1 flex items-center justify-center overflow-hidden relative px-16">

            {/* Prev Button */}
            <button
              onClick={prev}
              className="absolute left-3 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors z-10"
              title="Previous (←)"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <div className="overflow-auto max-h-full max-w-full flex items-center justify-center">
              <img
                src={galleryImages[lightbox]}
                alt={`Gallery ${lightbox + 1}`}
                style={{
                  transform: `scale(${zoom})`,
                  transition: 'transform 0.2s ease',
                  transformOrigin: 'center center',
                  maxHeight: '75vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              className="absolute right-3 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors z-10"
              title="Next (→)"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Thumbnails Strip */}
          <div className="flex gap-2 px-4 py-3 bg-black/60 overflow-x-auto justify-center">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumb ${i + 1}`}
                onClick={() => { setLightbox(i); setZoom(1); }}
                className={`h-14 w-20 object-cover rounded cursor-pointer flex-shrink-0 transition-all duration-200 ${
                  i === lightbox
                    ? 'ring-2 ring-yellow-400 opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
              />
            ))}
          </div>

        </div>
      )}
    </section>
  );
};

export default Gallery;
