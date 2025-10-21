import React from 'react';
import { MapPin } from 'lucide-react';
import Card from './Card';

const MapSection = ({ showAddress = true, className = '' }) => {
  return (
    <section className={`bg-white ${className}`}>
      <div className="container-custom py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
            <MapPin size={20} />
            <span>Find Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-sky-600 to-solar-green-600">Office</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Come visit us at our office in Nanded. We're here to answer your questions and help you start your solar journey.
          </p>
        </div>

        {showAddress && (
          <div className="mb-8">
            <div className="flex items-center gap-4 bg-gradient-to-r from-solar-sky-50 to-solar-green-50 px-8 py-6 rounded-2xl w-full">
              <MapPin className="text-solar-sky-600 flex-shrink-0" size={32} />
              <div className="flex-1">
                <p className="text-base text-gray-600 font-medium mb-1">Our Office Location</p>
                <p className="text-gray-900 font-semibold text-lg">
                  Studio 4, Nandi Building, Beside Mangnani Function Hall, Venkatesh Nagar, Hingoli Gate, Nanded – 431602, Maharashtra
                </p>
              </div>
            </div>
          </div>
        )}
        <Card variant="glass" hover={false}>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4845!2d77.317181!3d19.1594484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d700606a59fd%3A0xa777cb8656f212fd!2sSolarise%20Corp.!5e0!3m2!1sen!2sin!4v1729430000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location - Solarise Corp., Nanded"
              className="absolute inset-0"
            ></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;
