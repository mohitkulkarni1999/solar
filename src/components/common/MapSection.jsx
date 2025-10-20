import React from 'react';
import { MapPin } from 'lucide-react';
import Card from './Card';

const MapSection = ({ showAddress = true, className = '' }) => {
  return (
    <section className={`bg-white ${className}`}>
      <div className="container-custom py-12">
        {showAddress && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-solar-sky-50 to-solar-green-50 px-6 py-4 rounded-2xl">
              <MapPin className="text-solar-sky-600" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600 font-medium">Our Office Location</p>
                <p className="text-gray-900 font-semibold">
                  Studio 4, Nandi Building, Beside Mangnani Function Hall, Venkatesh Nagar, Hingoli Gate, Nanded – 431602, Maharashtra
                </p>
              </div>
            </div>
          </div>
        )}
        <Card variant="glass" hover={false}>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.494!2d77.315945!3d19.159552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d644999261a9%3A0x821ffa3dea3de43b!2sHingoli%20Gate%2C%20Nanded%2C%20Maharashtra%20431601!5e0!3m2!1sen!2sin!4v1729430000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location - Hingoli Gate, Nanded"
              className="absolute inset-0"
            ></iframe>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;
