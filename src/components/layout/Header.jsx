import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo/Gemini_Generated_Image_nd51cxnd51cxnd51-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-solar-sky-600 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="mailto:info.solarisecorp@gmail.com" className="flex items-center gap-2 hover:text-solar-sky-100 transition">
                <Mail size={16} />
                <span>info.solarisecorp@gmail.com</span>
              </a>
              <a href="tel:7972574730" className="flex items-center gap-2 hover:text-solar-sky-100 transition">
                <Phone size={16} />
                <span>7972574730</span>
              </a>
            </div>
            <div className="text-solar-sky-100">
              Available Monday - Saturday, 8:00 AM - 6:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Solarise Corp" 
                className="h-12 w-auto md:h-14 lg:h-16 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-base font-medium transition-colors duration-300 py-2 ${
                    isActive(link.path)
                      ? 'text-solar-sky-600'
                      : 'text-gray-700 hover:text-solar-sky-600'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-solar-green-500 to-solar-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={28} className="text-gray-900" />
              ) : (
                <Menu size={28} className="text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-slide-up">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-solar-sky-50 text-solar-sky-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 bg-gradient-to-r from-solar-green-500 to-solar-green-600 text-white font-semibold rounded-lg text-center shadow-md"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
