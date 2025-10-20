import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  to, 
  href, 
  onClick, 
  className = '',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0';
  
  const variants = {
    primary: 'bg-gradient-to-r from-solar-sky-500 to-solar-sky-600 text-white shadow-lg hover:shadow-xl hover:shadow-solar-sky-500/50',
    secondary: 'bg-gradient-to-r from-solar-green-500 to-solar-green-600 text-white shadow-lg hover:shadow-xl hover:shadow-solar-green-500/50',
    outline: 'border-2 border-solar-sky-500 text-solar-sky-600 hover:bg-solar-sky-50',
    ghost: 'text-solar-sky-600 hover:bg-solar-sky-50',
    white: 'bg-white text-gray-900 shadow-lg hover:shadow-xl',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-lg pointer-events-none' : '';
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabledStyles} ${className}`;
  
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={20} />}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
