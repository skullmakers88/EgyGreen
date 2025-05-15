import React, { useState } from 'react';
import { Award, Shield, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const imageList = [
  { src: "src/images/1.png", alt: "ISO Certification" },
  { src: "src/images/2.png", alt: "Global GAP Certification" },
  { src: "src/images/5.png", alt: "HACCP Certification" },
  { src: "src/images/4.png", alt: "Global GAP Certification" },
  { src: "src/images/3.png", alt: "HACCP Certification" },
];

const Quality: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeModal = () => setActiveIndex(null);
  const showPrev = () => setActiveIndex((prev) => (prev! > 0 ? prev! - 1 : imageList.length - 1));
  const showNext = () => setActiveIndex((prev) => (prev! < imageList.length - 1 ? prev! + 1 : 0));

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Quality Standards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality and food safety through rigorous certification 
              processes and continuous monitoring.
            </p>
          </div>


          {/* Image Gallery Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {imageList.map((img, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl shadow-md overflow-hidden group cursor-pointer"
                  onClick={() => setActiveIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="rounded-md w-full h-23rem object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-5 text-white text-3xl"
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={imageList[activeIndex].src}
            alt={imageList[activeIndex].alt}
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg object-contain"
          />

          <button
            onClick={showNext}
            className="absolute right-5 text-white text-3xl"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Quality;
