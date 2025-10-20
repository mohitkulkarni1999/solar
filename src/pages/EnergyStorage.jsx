import React from 'react';
import { Battery, Zap, Shield, Sun, Moon, ArrowRight, CheckCircle, TrendingUp, Home } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const EnergyStorage = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Energy Independence',
      desc: 'Store excess solar energy and use it when you need it most'
    },
    {
      icon: Shield,
      title: 'Backup Power',
      desc: 'Keep lights on during grid outages and emergencies'
    },
    {
      icon: TrendingUp,
      title: 'Maximize Savings',
      desc: 'Use stored energy during peak rate hours'
    },
    {
      icon: Sun,
      title: '24/7 Solar Power',
      desc: 'Harness the sun even at night'
    }
  ];

  const systems = [
    {
      name: 'Tesla Powerwall 2',
      capacity: '13.5 kWh',
      power: '5 kW continuous',
      price: '$11,500',
      features: ['Sleek design', 'Weather resistant', 'App monitoring', 'Scalable system', '10-year warranty'],
      icon: '⚡'
    },
    {
      name: 'LG RESU',
      capacity: '16 kWh',
      power: '7 kW continuous',
      price: '$13,900',
      popular: true,
      features: ['High capacity', 'Fast charging', 'Compact size', 'Quiet operation', '10-year warranty'],
      icon: '🔋'
    },
    {
      name: 'Enphase IQ',
      capacity: '10.1 kWh',
      power: '3.84 kW continuous',
      price: '$9,800',
      features: ['Modular design', 'Easy expansion', 'Integrated inverter', 'Smart management', '15-year warranty'],
      icon: '💡'
    }
  ];

  const useCases = [
    {
      time: 'Morning',
      icon: Sun,
      color: 'sky',
      activity: 'Solar Charging',
      desc: 'Excess solar energy charges your battery'
    },
    {
      time: 'Afternoon',
      icon: Zap,
      color: 'green',
      activity: 'Peak Hours',
      desc: 'Use stored energy instead of expensive grid power'
    },
    {
      time: 'Evening',
      icon: Home,
      color: 'sky',
      activity: 'Home Power',
      desc: 'Battery powers your home after sunset'
    },
    {
      time: 'Night',
      icon: Moon,
      color: 'green',
      activity: 'Backup Ready',
      desc: 'Full backup protection while you sleep'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-solar-sky-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-solar-green-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              <Battery size={18} />
              Energy Storage Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Power On Your{' '}
              <span className="bg-gradient-to-r from-solar-sky-400 to-solar-green-400 bg-clip-text text-transparent">
                Own Terms
              </span>
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Store solar energy, achieve independence, and never worry about power outages again.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="white" icon={ArrowRight} to="/contact" size="lg">
                Get Storage Quote
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                Compare Systems
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Energy Storage?</h2>
            <p className="text-xl text-gray-600">Take control of your energy future</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} variant={index % 2 === 0 ? 'sky' : 'green'}>
                <div className={`w-14 h-14 rounded-2xl ${index % 2 === 0 ? 'bg-solar-sky-500' : 'bg-solar-green-500'} flex items-center justify-center mb-4`}>
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="bg-gradient-to-br from-solar-sky-50 via-white to-solar-green-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">24-Hour Energy Cycle</h2>
            <p className="text-xl text-gray-600">See how battery storage works throughout the day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="relative">
                <Card variant={useCase.color === 'sky' ? 'sky' : 'green'} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${useCase.color === 'sky' ? 'bg-solar-sky-500' : 'bg-solar-green-500'} shadow-lg`}>
                    <useCase.icon className="text-white" size={32} />
                  </div>
                  <div className="text-sm text-gray-600 font-semibold mb-2">{useCase.time}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.activity}</h3>
                  <p className="text-gray-600 text-sm">{useCase.desc}</p>
                </Card>
                {index < useCases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className={useCase.color === 'sky' ? 'text-solar-sky-300' : 'text-solar-green-300'} size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Systems */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Battery System</h2>
            <p className="text-xl text-gray-600">Premium storage solutions from trusted brands</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systems.map((system, index) => (
              <Card key={index} variant={system.popular ? 'glass' : 'default'} className={system.popular ? 'ring-2 ring-solar-green-500 relative' : ''}>
                {system.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-solar-green-500 to-solar-sky-500 text-white rounded-full text-sm font-bold shadow-lg">
                      Best Seller
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{system.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{system.name}</h3>
                  <div className="space-y-1 mb-4">
                    <div className="text-sm text-gray-600">Capacity: <span className="font-semibold text-solar-sky-600">{system.capacity}</span></div>
                    <div className="text-sm text-gray-600">Power: <span className="font-semibold text-solar-green-600">{system.power}</span></div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900">{system.price}</div>
                  <div className="text-sm text-gray-600 mt-1">Installed</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-solar-green-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={system.popular ? 'secondary' : 'primary'} 
                  to="/contact" 
                  fullWidth
                  icon={ArrowRight}
                >
                  Get Quote
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gradient-to-br from-solar-green-500 to-solar-sky-500 py-16 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Smart Investment for Your Future</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Battery storage systems typically pay for themselves in 7-10 years through energy savings, increased solar usage, and backup power value.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">90%</div>
                  <div className="text-white/80">Solar Self-Consumption</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">$2K+</div>
                  <div className="text-white/80">Annual Savings</div>
                </div>
              </div>
            </div>
            
            <Card variant="white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical Savings Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-solar-sky-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Peak Rate Avoidance</span>
                  <span className="text-solar-sky-600 font-bold">$800/yr</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-solar-green-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Increased Solar Use</span>
                  <span className="text-solar-green-600 font-bold">$1,200/yr</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-solar-sky-50 rounded-xl">
                  <span className="text-gray-700 font-medium">Backup Power Value</span>
                  <span className="text-solar-sky-600 font-bold">$500/yr</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold text-lg">Total Annual Savings</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">$2,500</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready for Energy Independence?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how battery storage can transform your solar investment
          </p>
          <Button variant="secondary" icon={ArrowRight} to="/contact" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EnergyStorage;
