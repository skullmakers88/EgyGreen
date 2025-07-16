import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white pt-6 pb-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT SECTION: Logo + Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company Info */}
            <div>
              <Link to="/" className="flex items-center mb-3">
                <img src="/images/Logo.png" alt="Gramax Logo" className="h-16 w-auto" />
              </Link>
              <p className="text-gray-400 text-sm mb-3">
              Providing premium quality fresh produce through trusted supplier partnerships. Our fruits and vegetables are sourced from carefully selected growers and harvested at the peak of freshness—guided by Gramax experts with over 20 years of experience in quality and supply excellence.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links + Products */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-1">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link to="/products" className="text-gray-400 hover:text-white">Our Products</Link></li>
                  <li><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Products</h4>
                <ul className="space-y-1">
                  <li><Link to="/products#vegetables" className="text-gray-400 hover:text-white">Vegetables</Link></li>
                  <li><Link to="/products#fruits" className="text-gray-400 hover:text-white">Fruits</Link></li>
                  <li><Link to="/products#herbs" className="text-gray-400 hover:text-white">Legumes</Link></li>
                  <li><Link to="/products#organic" className="text-gray-400 hover:text-white">Organic Produce</Link></li>
                </ul>
              </div>
              
            </div>
            {/* Update the map container and iframe to be much larger and more visible */}
            <div className="w-full md:w-1/2 lg:w-2/5 mt-10 mb-8 flex justify-start">
              <div className="rounded overflow-hidden shadow-lg w-full" style={{ minWidth: '528px', maxWidth: '900px', minHeight: '350px' }}>
                <iframe
                  title="Gramax Headquarters Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=31.462861%2C30.045361%2C31.482861%2C30.065361&amp;layer=mapnik&amp;marker=30.055361%2C31.472861"
                  style={{ width: '100%', height: '350px', border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
          </div>
          
          

          {/* RIGHT SECTION: Contact */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Contact Form */}
            <div className="flex-1">
              <h4 className="text-base font-semibold mb-3 text-center">Get In Touch</h4>
              <FooterContactForm />
            </div>

            {/* Contact Info + Map */}
            <div className="flex-1">
              <div className="bg-primary-700 text-white rounded-lg shadow-lg p-3 flex flex-col gap-4" style={{ minHeight: '335px' }}>
                <h5 className="text-base font-bold mb-2">Contact Information</h5>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 mt-1 mr-2" />
                    <div><span className="font-medium">Phone: </span><a href="tel:+201144145670" className="text-white/80 hover:text-white">(+20) 1144145670</a></div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 mt-1 mr-2" />
                    <div><span className="font-medium">Email: </span><a href="mailto:Omar.ghanem@gramaxexp.com" className="text-white/80 hover:text-white">Omar.ghanem@gramaxexp.com</a></div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mt-1 mr-2" />
                    <div><span className="font-medium">Address: </span><span className="text-white/80">El BANAFSEG 5, ZAKRIA AHMED ST, CAIRO, EGYPT</span></div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-4 w-4 mt-1 mr-2" />
                    <div><span className="font-medium">Business Hours: </span><span className="text-white/80">Sun-Thu: 8:00 AM - 5:00 PM, Fri & Sat: Closed</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} GRAMAX. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
        {/* Standalone Map at the bottom left */}
       
      </div>
    </footer>
  );
};

const FooterContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = form;
    const toEmail = 'Omar.ghanem@gramaxexp.com';
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name*"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2.5 rounded bg-gray-800 text-white text-sm placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address*"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2.5 rounded bg-gray-800 text-white text-sm placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full px-4 py-2.5 rounded bg-gray-800 text-white text-sm placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <textarea
        name="message"
        placeholder="Your Message*"
        rows={3}
        required
        value={form.message}
        onChange={handleChange}
        className="w-full px-4 py-2.5 rounded bg-gray-800 text-white text-sm placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 text-white rounded px-4 py-2.5 text-sm font-semibold transition-colors"
      >
        Send
      </button>
    </form>
  );
};

export default Footer;
