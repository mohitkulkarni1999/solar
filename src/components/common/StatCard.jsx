import React from 'react';

const StatCard = ({ icon: Icon, value, label, suffix = '', color = 'sky' }) => {
  const colors = {
    sky: {
      bg: 'bg-solar-sky-100',
      icon: 'text-solar-sky-600',
      text: 'text-solar-sky-600'
    },
    green: {
      bg: 'bg-solar-green-100',
      icon: 'text-solar-green-600',
      text: 'text-solar-green-600'
    }
  };
  
  const colorScheme = colors[color];
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className={`${colorScheme.bg} p-4 rounded-xl`}>
          <Icon className={colorScheme.icon} size={32} />
        </div>
        <div>
          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-bold ${colorScheme.text}`}>
              {value}
            </span>
            {suffix && (
              <span className={`text-2xl font-semibold ${colorScheme.text}`}>
                {suffix}
              </span>
            )}
          </div>
          <p className="text-gray-600 font-medium mt-1">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
