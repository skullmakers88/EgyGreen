import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://cdn.pixabay.com/photo/2018/04/14/09/57/strawberry-field-3318639_1280.jpg',
    alt: 'Tomato harvest at Assen Produce',
    category: 'farm'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg',
    alt: 'Fresh leafy greens',
    category: 'produce'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg',
    alt: 'Farm fields at sunrise',
    category: 'farm'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg',
    alt: 'Assortment of colorful peppers',
    category: 'produce'
  },
  {
    id: '6',
    src: 'https://cdn.pixabay.com/photo/2017/04/06/01/08/carrot-2206895_1280.jpg',
    alt: 'Freshly harvested carrots',
    category: 'produce'
  },
  {
    id: '7',
    src: 'https://cdn.pixabay.com/photo/2020/06/01/14/23/strawberries-5246835_1280.jpg',
    alt: 'Tractor in the field',
    category: 'farm'
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg',
    alt: 'Colorful tomato varieties',
    category: 'produce'
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg',
    alt: 'Fresh seasonal berries',
    category: 'produce'
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg',
    alt: 'Sunset over the farm',
    category: 'farm'
  },


];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/96715/pexels-photo-96715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            opacity: 0.4
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="mb-[4rem] mt-[3rem]">Photo Gallery</h1>
            <p className="text-xl mb-0 text-gray-200">
              Take a visual journey through our farms, our produce, and the people who make it all possible.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Filter buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filter === 'all' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'farm' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
                }`}
                onClick={() => setFilter('farm')}
              >
                Farm
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filter === 'produce' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
                onClick={() => setFilter('produce')}
              >
                produce
              </button>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white">
                <p>{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;