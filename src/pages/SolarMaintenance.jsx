import React from 'react';
import { Wrench, CheckCircle, Shield, Clock, TrendingUp, AlertCircle, ArrowRight, Calendar } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const SolarMaintenance = () => {
  const services = [
    {
      title: 'Routine Inspection',
      icon: CheckCircle,
      desc: 'Comprehensive system health checks',
      frequency: 'Bi-Annual',
      includes: ['Panel condition assessment', 'Wiring and connection checks', 'Inverter performance test', 'Output monitoring', 'Safety inspection']
    },
    {
      title: 'Panel Cleaning',
      icon: Wrench,
      desc: 'Professional cleaning for maximum efficiency',
      frequency: 'Quarterly',
      includes: ['Dust and debris removal', 'Bird dropping cleanup', 'Algae and moss treatment', 'Water spot elimination', 'Frame cleaning']
    },
    {
      title: 'Performance Optimization',
      icon: TrendingUp,
      desc: 'Maximize your system output',
      frequency: 'Annual',
      includes: ['Energy output analysis', 'Angle optimization', 'Shade mitigation', 'Firmware updates', 'Efficiency report']
    },
    {
      title: 'Emergency Repairs',
      icon: AlertCircle,
      desc: '24/7 urgent support',
      frequency: 'As Needed',
      includes: ['Rapid response team', 'Component replacement', 'Storm damage repair', 'Electrical issues', 'System restoration']
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '$199',
      period: '/year',
      features: [
        '1 Annual inspection',
        'Basic cleaning (2x/year)',
        'Email support',
        'Performance report',
        '10% repair discount'
      ]
    },
    {
      name: 'Premium',
      price: '$399',
      period: '/year',
      popular: true,
      features: [
        '2 Annual inspections',
        'Quarterly cleaning',
        'Priority support 24/7',
        'Detailed analytics',
        '20% repair discount',
        'Emergency coverage'
      ]
    },
    {
      name: 'Ultimate',
      price: '$699',
      period: '/year',
      features: [
        'Unlimited inspections',
        'Monthly cleaning',
        'Dedicated technician',
        'Real-time monitoring',
        'Free repairs included',
        'Performance guarantee'
      ]
    }
  ];

  const whyMaintenance = [
    { stat: '25%', label: 'Efficiency loss without cleaning', color: 'red' },
    { stat: '98%', label: 'Uptime with regular maintenance', color: 'green' },
    { stat: '5-7 yrs', label: 'Extended system lifespan', color: 'sky' },
    { stat: '$500+', label: 'Average annual savings', color: 'green' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-solar-sky-100 text-solar-sky-700 rounded-full text-sm font-bold mb-6">
                <Wrench size={18} />
                Maintenance & Care
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Keep Your Solar System{' '}
                <span className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">
                  Running Perfect
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional maintenance services to ensure peak performance and maximum energy production year-round.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon={ArrowRight} to="/contact">
                  Schedule Service
                </Button>
                <Button variant="outline">
                  View Plans
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-solar-sky-500 to-solar-sky-600 rounded-3xl p-6 text-white">
                <Shield size={40} className="mb-4" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-white/90">Years Protected</div>
              </div>
              <div className="bg-gradient-to-br from-solar-green-500 to-solar-green-600 rounded-3xl p-6 text-white">
                <TrendingUp size={40} className="mb-4" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/90">Performance</div>
              </div>
              <div className="col-span-2 bg-white rounded-3xl p-6 border-2 border-solar-sky-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Response Time</div>
                    <div className="text-3xl font-bold text-gray-900">{'< 24hrs'}</div>
                  </div>
                  <Clock size={48} className="text-solar-sky-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Regular Maintenance Matters</h2>
            <p className="text-xl text-gray-600">Don't let performance slip - maintain peak efficiency</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyMaintenance.map((item, index) => (
              <div key={index} className={`text-center bg-gradient-to-br ${item.color === 'green' ? 'from-solar-green-50 to-white border-solar-green-200' : item.color === 'sky' ? 'from-solar-sky-50 to-white border-solar-sky-200' : 'from-red-50 to-white border-red-200'} rounded-3xl p-6 border-2`}>
                <div className={`text-5xl font-bold mb-2 ${item.color === 'green' ? 'text-solar-green-600' : item.color === 'sky' ? 'text-solar-sky-600' : 'text-red-600'}`}>
                  {item.stat}
                </div>
                <div className="text-gray-600 font-medium text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-br from-solar-sky-50 via-white to-solar-green-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Maintenance Services</h2>
            <p className="text-xl text-gray-600">Comprehensive care for your solar investment</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} variant="glass" className="border-2 border-solar-sky-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-solar-sky-500 to-solar-sky-600' : 'bg-gradient-to-br from-solar-green-500 to-solar-green-600'}`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <span className="px-3 py-1 bg-solar-sky-100 text-solar-sky-700 rounded-full text-xs font-semibold">
                        {service.frequency}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-solar-green-500 flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Maintenance Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} variant={plan.popular ? 'glass' : 'default'} className={plan.popular ? 'ring-2 ring-solar-green-500 relative' : ''}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-solar-green-500 to-solar-sky-500 text-white rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? 'secondary' : 'primary'} 
                  to="/contact" 
                  fullWidth
                  icon={Calendar}
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Protect Your Solar Investment</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule your maintenance service today and ensure optimal performance
          </p>
          <Button variant="white" icon={Calendar} to="/contact" size="lg">
            Book Maintenance Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolarMaintenance;
