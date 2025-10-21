import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logo from '../../assets/logo/footerlogo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'Residential Solar', path: '/services/residential' },
    { name: 'Commercial Solar', path: '/services/commercial' },
    { name: 'Solar Maintenance', path: '/services/maintenance' },
    { name: 'Energy Storage', path: '/services/storage' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+91-7972574730', href: 'tel:+917972574730' },
    { icon: Mail, text: 'info@solarise.in', href: 'mailto:info@solarise.in' },
    { icon: MapPin, text: 'Studio 4, Nandi Building, Beside Mangnani Function Hall, Venkatesh Nagar, Hingoli Gate, Nanded – 431602, Maharashtra' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-solar-sky-500 to-solar-sky-600 text-white p-4 rounded-full shadow-2xl hover:shadow-solar-sky-500/50 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:animate-bounce" />
      </button>

      <div className="container-custom pt-20 pb-8">
        {/* Logo and Company Description - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 mb-12 items-start">
          {/* Left: Logo */}
          <div>
            <Link to="/" className="inline-block group">
              <img 
                src={logo} 
                alt="Solarise Corp" 
                className="h-16 w-auto md:h-20 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Right: Description */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-4">Solarise Corp</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              We believe the future belongs to those who create it — sustainably. Making every rooftop a source of power, pride, and progress. Engineering independence, empowering savings, and lighting up lives, one ray at a time.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-solar-sky-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="hover:text-solar-green-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <item.icon size={20} className="text-solar-sky-400 mt-1 flex-shrink-0" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-solar-sky-400 transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-solar-sky-900/30 to-solar-green-900/30 rounded-2xl p-6 md:p-8 mb-12 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h3 className="text-white font-bold text-lg md:text-xl mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Get the latest updates on solar technology and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-solar-sky-500 transition-colors w-full sm:flex-1 md:w-80"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-solar-green-500 to-solar-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-solar-green-500/50 transition-all duration-300 whitespace-nowrap w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            {/* Left: Copyright */}
            <p className="order-2 md:order-1">
              © {new Date().getFullYear()} Solarise Corp. All rights reserved.
            </p>
            
            {/* Center: Social Media Icons */}
            <div className="flex gap-3 order-1 md:order-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 bg-gray-800 hover:bg-solar-sky-600 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            {/* Right: Policy Links */}
            <div className="flex gap-6 order-3">
              <Link to="/privacy-policy" className="hover:text-solar-sky-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-solar-sky-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-solar-sky-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-solar-sky-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-solar-green-600/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
