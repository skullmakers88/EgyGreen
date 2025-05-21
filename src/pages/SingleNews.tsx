import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getNewsById, newsItems } from '../data/news';
import { NewsItem } from '../types';

const SingleNews: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [nextPost, setNextPost] = useState<NewsItem | null>(null);
  const [prevPost, setPrevPost] = useState<NewsItem | null>(null);

  useEffect(() => {
    if (id) {
      const currentNews = getNewsById(id);
      
      if (currentNews) {
        setNewsItem(currentNews);
        
        // Find index of current post
        const currentIndex = newsItems.findIndex(item => item.id === id);
        
        // Set previous and next posts
        if (currentIndex > 0) {
          setPrevPost(newsItems[currentIndex - 1]);
        } else {
          setPrevPost(null);
        }
        
        if (currentIndex < newsItems.length - 1) {
          setNextPost(newsItems[currentIndex + 1]);
        } else {
          setNextPost(null);
        }
      } else {
        // If no news item found with that ID, navigate to the news list
        navigate('/news');
      }
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="container-custom py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/news" className="btn btn-primary">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: `url('${newsItem.image}')`,
            opacity: 0.3
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="mb-4">{newsItem.title}</h1>
            <div className="flex items-center text-gray-300 mb-0">
              <div className="flex items-center mr-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{newsItem.date}</span>
              </div>
              <div className="flex items-center mr-6">
                <User className="h-5 w-5 mr-2" />
                <span>{newsItem.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                <span>{newsItem.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: newsItem.content }}
                  />
                </div>
              </div>

              {/* Post Navigation */}
              <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0">
                {prevPost ? (
                  <Link 
                    to={`/news/${prevPost.id}`}
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    <span>Previous: {prevPost.title}</span>
                  </Link>
                ) : <div></div>}
                
                {nextPost ? (
                  <Link 
                    to={`/news/${nextPost.id}`}
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <span>Next: {nextPost.title}</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                ) : <div></div>}
              </div>
            </motion.div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
                <h3 className="text-xl font-semibold mb-4">Related Content</h3>
                <div className="space-y-4">
                  {newsItems
                    .filter(item => item.id !== id && item.category === newsItem.category)
                    .slice(0, 2)
                    .map(item => (
                      <div key={item.id} className="flex space-x-3">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            <Link to={`/news/${item.id}`} className="hover:text-primary-600 transition-colors">
                              {item.title}
                            </Link>
                          </h4>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                      </div>
                    ))}
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Sustainability (1)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Certification (1)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Seasonal (1)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Community (1)
                    </Link>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Share</h3>
                <div className="flex space-x-3">
                  <a 
                    href="#"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12.061C22 6.505 17.523 2 12.001 2 6.477 2 2 6.505 2 12.061c0 4.993 3.656 9.132 8.437 9.879v-6.99H7.9v-2.89h2.538V9.86c0-2.523 1.495-3.915 3.78-3.915 1.096 0 2.24.197 2.24.197v2.477h-1.264c-1.24 0-1.628.776-1.628 1.572v1.89h2.771l-.443 2.89h-2.328V21.94C18.344 21.192 22 17.053 22 12.061z"/>
                    </svg>
                  </a>
                  <a 
                    href="#"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.429 19.667c7.714 0 11.932-6.392 11.932-11.932 0-.182 0-.363-.012-.543a8.522 8.522 0 0 0 2.09-2.173 8.394 8.394 0 0 1-2.403.658 4.195 4.195 0 0 0 1.84-2.314 8.44 8.44 0 0 1-2.656 1.015 4.18 4.18 0 0 0-7.23 2.859c0 .328.032.647.108.952-3.474-.173-6.555-1.838-8.625-4.371a4.175 4.175 0 0 0 1.29 5.584 4.113 4.113 0 0 1-1.897-.522v.052a4.186 4.186 0 0 0 3.356 4.102 4.21 4.21 0 0 1-1.89.07 4.185 4.185 0 0 0 3.908 2.906 8.394 8.394 0 0 1-5.192 1.79c-.336 0-.672-.02-1.001-.058a11.814 11.814 0 0 0 6.42 1.884"/>
                    </svg>
                  </a>
                  <a 
                    href="#"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="Share by Email"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleNews;