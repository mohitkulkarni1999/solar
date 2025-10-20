import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true, 
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-white border border-gray-200',
    sky: 'bg-gradient-to-br from-solar-sky-50 to-white border border-solar-sky-100',
    green: 'bg-gradient-to-br from-solar-green-50 to-white border border-solar-green-100',
    glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl',
  };
  
  const hoverEffect = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
  
  return (
    <div 
      className={`rounded-2xl p-6 shadow-lg transition-all duration-300 ${variants[variant]} ${hoverEffect} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
