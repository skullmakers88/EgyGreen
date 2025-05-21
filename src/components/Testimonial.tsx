import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <div className="mb-4 text-accent-600">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.24-.573.13-.94.218-1.02.26-.53.125-1.07.35-1.63.67C3.25 14.13 2.5 14.603 2 15.22c-.36.442-.54.814-.54 1.116 0 .32.13.597.39.83.26.232.56.348.92.348.22 0 .45-.06.68-.18.38-.2.76-.5 1.15-.9.39-.4.7-.8.92-1.22.33.3.61.54.84.72.45.36.88.54 1.31.54.57 0 1.03-.2 1.38-.6.35-.4.53-.94.53-1.6v-.03zm8 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.08.24-.573.13-.94.218-1.02.26-.53.125-1.07.35-1.63.67-1.65.46-2.4.932-2.9 1.55-.36.442-.54.814-.54 1.116 0 .32.13.597.39.83.26.232.56.348.92.348.22 0 .45-.06.68-.18.38-.2.76-.5 1.15-.9.39-.4.7-.8.92-1.22.33.3.61.54.84.72.45.36.88.54 1.31.54.57 0 1.03-.2 1.38-.6.35-.4.53-.94.53-1.6v-.03z"/>
        </svg>
      </div>
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;