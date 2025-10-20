import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  description,
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-solar-sky-100 to-solar-green-100 text-solar-sky-700 rounded-full text-sm font-semibold mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="heading-lg text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-body max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
