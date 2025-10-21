import React from 'react';
import { Home, CheckCircle, Sun, Zap, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const ResidentialSolar = () => {
  const benefits = [
    'Reduce electricity bills by up to 75%',
    'Increase home value by 4.1% on average',
    'Federal tax credit up to 30%',
    'State and local incentives available',
    'Protection against rising energy costs',
    '25-year performance warranty'
  ];

  const process = [
    { title: 'Free Home Assessment', desc: 'Evaluate your roof and energy needs' },
    { title: 'Custom System Design', desc: 'Tailored solution for maximum savings' },
    { title: 'Permit & Approvals', desc: 'We handle all paperwork and permits' },
    { title: 'Professional Installation', desc: '2-3 days typical installation time' },
    { title: 'Activation & Monitoring', desc: 'System connected and optimized' }
  ];

  const packages = [
    {
      name: 'Starter',
      size: '5 kW',
      price: '₹3,50,000',
      features: ['15-20 solar panels', 'Covers 60% energy needs', 'Basic monitoring', 'Standard warranty']
    },
    {
      name: 'Complete',
      size: '8 kW',
      price: '₹5,60,000',
      popular: true,
      features: ['25-32 solar panels', 'Covers 90% energy needs', 'Smart monitoring', 'Extended warranty', 'Battery ready']
    },
    {
      name: 'Premium',
      size: '12 kW',
      price: '₹8,40,000',
      features: ['38-48 solar panels', '100% energy independence', 'Advanced monitoring', 'Premium warranty', 'Battery included']
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-solar-sky-600 to-solar-sky-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-solar-green-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                <Home size={18} />
                Residential Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Solar Power for Your Home</h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your home with clean, renewable energy. Save money while helping the planet.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="white" icon={ArrowRight} to="/contact">
                  Get Free Quote
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Calculate Savings
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-solar-sky-300 to-solar-green-300 rounded-2xl flex items-center justify-center text-8xl">
                  🏡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Go Solar at Home?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of homeowners saving money and energy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gradient-to-br from-solar-sky-50 to-white rounded-2xl p-5 border border-solar-sky-100 hover:border-solar-sky-300 hover:shadow-lg transition-all">
                <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your System</h2>
            <p className="text-xl text-gray-600">Flexible packages for every home size and budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} variant={pkg.popular ? 'glass' : 'default'} className={pkg.popular ? 'ring-2 ring-solar-sky-500 relative' : ''}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-sm text-solar-sky-600 font-semibold mb-4">{pkg.size} System</div>
                  <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
                  <div className="text-sm text-gray-600 mt-1">After incentives</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-solar-green-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? 'secondary' : 'primary'} 
                  to="/contact" 
                  fullWidth
                  icon={ArrowRight}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Installation Process</h2>
            <p className="text-xl text-gray-600">From consultation to activation in just weeks</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-solar-sky-500 to-solar-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1 bg-gradient-to-br from-solar-sky-50 to-white rounded-2xl p-6 border border-solar-sky-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Power Your Home with Solar?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a personalized quote and see how much you can save
          </p>
          <Button variant="white" icon={ArrowRight} to="/contact" size="lg">
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ResidentialSolar;
