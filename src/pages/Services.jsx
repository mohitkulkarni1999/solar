import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Wrench, Battery, CheckCircle, ArrowRight, Zap, Shield, Clock, DollarSign } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import servicesBg from '../assets/Gemini_Generated_Image_dwe65udwe65udwe6.png';

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete solar panel systems designed for homes of all sizes. Maximize your energy independence and reduce monthly bills.',
      features: [
        'Custom system design',
        'Premium panel installation',
        'Net metering setup',
        'Roof inspection included',
        '25-year warranty'
      ],
      color: 'sky',
      route: '/services/residential'
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Large-scale solar solutions for businesses, warehouses, and industrial facilities. Boost your bottom line and sustainability.',
      features: [
        'High-capacity systems',
        'Tax incentive assistance',
        'Minimal business disruption',
        'Performance monitoring',
        'Fleet vehicle charging'
      ],
      color: 'green',
      route: '/services/commercial'
    },
    {
      icon: Wrench,
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance and repair services to keep your solar system performing at peak efficiency year-round.',
      features: [
        'Regular inspections',
        'Panel cleaning service',
        'Performance optimization',
        'Issue diagnostics',
        'Emergency repairs'
      ],
      color: 'sky',
      route: '/services/maintenance'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Advanced battery storage solutions for energy independence. Store excess energy and use it when you need it most.',
      features: [
        'Tesla Powerwall certified',
        'Backup power systems',
        'Smart energy management',
        'Grid independence option',
        'Storm protection'
      ],
      color: 'green',
      route: '/services/storage'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'We assess your property, energy needs, and discuss your goals.',
      icon: CheckCircle
    },
    {
      step: '02',
      title: 'Custom Design',
      description: 'Our experts create a tailored solar solution for maximum efficiency.',
      icon: Zap
    },
    {
      step: '03',
      title: 'Professional Installation',
      description: 'Certified technicians handle everything from permits to activation.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Comprehensive maintenance and monitoring to ensure peak performance.',
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Best value with flexible financing options and 0% APR available'
    },
    {
      icon: Shield,
      title: 'Industry-Leading Warranty',
      description: '25-year panel warranty and 10-year installation workmanship guarantee'
    },
    {
      icon: Clock,
      title: 'Fast Installation',
      description: 'Most residential installations completed within 2-3 days'
    },
    {
      icon: Zap,
      title: 'Maximum Efficiency',
      description: 'Premium Tier-1 panels with up to 22% efficiency ratings'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Image Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl bg-white/80 backdrop-blur-md rounded-[3rem] p-8 lg:p-12 shadow-2xl">
            {/* Top Badge */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                <Zap size={18} />
                Complete Solar Solutions
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight">
              <span className="text-gray-900">Our </span>
              <span className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">
                Solar Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-2xl mb-12 leading-relaxed">
              Comprehensive solar energy solutions tailored to your needs. From residential to commercial installations, we've got you covered.
            </p>
            
            {/* Service Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Residential */}
              <Link to="/services/residential" className="group bg-white/90 backdrop-blur-sm border-2 border-solar-sky-200 rounded-3xl p-6 hover:bg-white hover:border-solar-sky-400 hover:shadow-2xl hover:shadow-solar-sky-200/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-solar-sky-400 to-solar-sky-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Home className="text-white" size={28} />
                </div>
                <div className="text-gray-900 font-bold text-base mb-1">Residential</div>
                <div className="text-solar-sky-600 text-sm font-medium">Solar Systems</div>
              </Link>
              
              {/* Commercial */}
              <Link to="/services/commercial" className="group bg-white/90 backdrop-blur-sm border-2 border-solar-green-200 rounded-3xl p-6 hover:bg-white hover:border-solar-green-400 hover:shadow-2xl hover:shadow-solar-green-200/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-solar-green-400 to-solar-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Building2 className="text-white" size={28} />
                </div>
                <div className="text-gray-900 font-bold text-base mb-1">Commercial</div>
                <div className="text-solar-green-600 text-sm font-medium">Solutions</div>
              </Link>
              
              {/* Maintenance */}
              <Link to="/services/maintenance" className="group bg-white/90 backdrop-blur-sm border-2 border-solar-sky-200 rounded-3xl p-6 hover:bg-white hover:border-solar-sky-400 hover:shadow-2xl hover:shadow-solar-sky-200/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-solar-sky-400 to-solar-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Wrench className="text-white" size={28} />
                </div>
                <div className="text-gray-900 font-bold text-base mb-1">Maintenance</div>
                <div className="text-solar-sky-600 text-sm font-medium">& Support</div>
              </Link>
              
              {/* Energy Storage */}
              <Link to="/services/storage" className="group bg-white/90 backdrop-blur-sm border-2 border-solar-green-200 rounded-3xl p-6 hover:bg-white hover:border-solar-green-400 hover:shadow-2xl hover:shadow-solar-green-200/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-solar-green-400 to-solar-sky-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Battery className="text-white" size={28} />
                </div>
                <div className="text-gray-900 font-bold text-base mb-1">Energy</div>
                <div className="text-solar-green-600 text-sm font-medium">Storage</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - Compact Accordion Style */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-solar-sky-100 to-solar-green-100 text-solar-sky-700 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Solar Solutions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {mainServices.map((service, index) => (
              <div key={index} className={`group relative bg-gradient-to-br ${service.color === 'sky' ? 'from-solar-sky-50 to-white' : 'from-solar-green-50 to-white'} rounded-3xl p-6 border-2 ${service.color === 'sky' ? 'border-solar-sky-200 hover:border-solar-sky-400' : 'border-solar-green-200 hover:border-solar-green-400'} hover:shadow-2xl transition-all duration-300`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.color === 'sky' ? 'bg-gradient-to-br from-solar-sky-500 to-solar-sky-600' : 'bg-gradient-to-br from-solar-green-500 to-solar-green-600'} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className={service.color === 'sky' ? 'text-solar-sky-500' : 'text-solar-green-500'} size={16} />
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={service.color === 'sky' ? 'primary' : 'secondary'} 
                  icon={ArrowRight}
                  to={service.route}
                  size="sm"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Timeline Style */}
      <section className="bg-gradient-to-br from-solar-sky-50 via-white to-solar-green-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-white border-2 border-solar-sky-300 text-solar-sky-700 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">How It Works</h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-solar-sky-300 via-solar-green-300 to-solar-sky-300"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${index % 2 === 0 ? 'bg-gradient-to-br from-solar-sky-500 to-solar-sky-600' : 'bg-gradient-to-br from-solar-green-500 to-solar-green-600'} shadow-lg`}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <div className="text-center">
                      <div className={`text-5xl font-bold mb-2 ${index % 2 === 0 ? 'text-solar-sky-100' : 'text-solar-green-100'}`}>
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Financing Combined */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-solar-sky-100 text-solar-sky-700 rounded-full text-sm font-semibold mb-3">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Solarise Corp Advantage</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-100 hover:border-solar-sky-300 hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${index % 2 === 0 ? 'bg-solar-sky-100' : 'bg-solar-green-100'}`}>
                      <benefit.icon className={index % 2 === 0 ? 'text-solar-sky-600' : 'text-solar-green-600'} size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-base">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Financing - 1/3 width */}
            <div>
              <div className="bg-gradient-to-br from-solar-green-500 to-solar-green-600 rounded-3xl p-6 text-white shadow-2xl sticky top-24">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                    Financing Options
                  </span>
                  <h2 className="text-2xl font-bold mb-2">Affordable Solar</h2>
                  <p className="text-white/90 text-sm">Multiple ways to go solar</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign size={18} />
                      <h4 className="font-bold text-sm">0% APR Financing</h4>
                    </div>
                    <p className="text-white/80 text-xs">Flexible payment terms</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign size={18} />
                      <h4 className="font-bold text-sm">Solar Loans</h4>
                    </div>
                    <p className="text-white/80 text-xs">Up to 20-year terms</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign size={18} />
                      <h4 className="font-bold text-sm">Tax Incentives</h4>
                    </div>
                    <p className="text-white/80 text-xs">Up to 30% tax credit</p>
                  </div>
                </div>
                
                <Button variant="white" icon={ArrowRight} to="/contact" fullWidth size="sm">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 py-12 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Our solar experts are ready to help you find the perfect solution.
          </p>
          <Button variant="white" icon={ArrowRight} to="/contact">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
