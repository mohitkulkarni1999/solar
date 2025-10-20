import React from 'react';
import { Building2, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Users, DollarSign } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const CommercialSolar = () => {
  const industries = [
    { name: 'Warehouses', icon: '🏭', desc: 'Large roof space = maximum savings' },
    { name: 'Retail', icon: '🏬', desc: 'Reduce operating costs significantly' },
    { name: 'Manufacturing', icon: '🏗️', desc: 'High energy use? Solar helps' },
    { name: 'Offices', icon: '🏢', desc: 'Show environmental commitment' },
    { name: 'Agriculture', icon: '🌾', desc: 'Farm and facility power' },
    { name: 'Healthcare', icon: '🏥', desc: 'Reliable backup power' }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Reduce Operating Costs',
      desc: 'Cut energy expenses by 50-75% and improve bottom line'
    },
    {
      icon: TrendingUp,
      title: 'Tax Benefits',
      desc: '30% federal tax credit plus accelerated depreciation'
    },
    {
      icon: Shield,
      title: 'Energy Security',
      desc: 'Protection from rising utility rates and grid outages'
    },
    {
      icon: Users,
      title: 'Sustainability Goals',
      desc: 'Meet ESG targets and attract eco-conscious customers'
    }
  ];

  const roi = [
    { metric: 'Average ROI', value: '18-22%', color: 'sky' },
    { metric: 'Payback Period', value: '4-7 years', color: 'green' },
    { metric: 'System Lifespan', value: '25+ years', color: 'sky' },
    { metric: 'Maintenance', value: 'Minimal', color: 'green' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-solar-green-50 via-white to-solar-sky-50"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-solar-green-500 to-solar-green-600 text-white rounded-full text-sm font-bold mb-6">
              <Building2 size={18} />
              Commercial Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Solar Power for <span className="bg-gradient-to-r from-solar-green-600 to-solar-sky-600 bg-clip-text text-transparent">Your Business</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Reduce costs, boost sustainability, and future-proof your business with commercial solar energy.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="secondary" icon={ArrowRight} to="/contact" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Business Case
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {roi.map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color === 'sky' ? 'from-solar-sky-100 to-white border-solar-sky-200' : 'from-solar-green-100 to-white border-solar-green-200'} rounded-2xl p-4 border-2`}>
                  <div className={`text-3xl font-bold ${item.color === 'sky' ? 'text-solar-sky-600' : 'text-solar-green-600'} mb-1`}>
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{item.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Industries</h2>
            <p className="text-xl text-gray-600">We power businesses of all sizes across diverse sectors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} variant="default" className="text-center group cursor-pointer">
                <div className="text-5xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{industry.name}</h3>
                <p className="text-xs text-gray-600">{industry.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-solar-green-50 to-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-xl text-gray-600">Smart investment for your company's future</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-6 bg-white rounded-3xl p-8 border-2 border-solar-green-200 hover:border-solar-green-400 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-green-500 to-solar-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-solar-green-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  Success Story
                </span>
                <h2 className="text-4xl font-bold mb-6">Manufacturing Plant Saves $125K Annually</h2>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  A 250 kW solar installation helped this manufacturing facility reduce energy costs by 68%, with full ROI achieved in just 5.2 years.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-solar-green-400 mb-2">68%</div>
                    <div className="text-white/80">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-solar-sky-400 mb-2">5.2 yrs</div>
                    <div className="text-white/80">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-solar-green-400 mb-2">250 kW</div>
                    <div className="text-white/80">System Size</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-solar-sky-400 mb-2">$125K</div>
                    <div className="text-white/80">Annual Savings</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-solar-green-400 to-solar-sky-400 rounded-2xl flex items-center justify-center text-9xl">
                  🏭
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-br from-solar-sky-50 to-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Services</h2>
            <p className="text-xl text-gray-600">End-to-end solutions for commercial solar</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card variant="sky">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Site Assessment</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-sky-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Roof structural analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-sky-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Energy consumption study</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-sky-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">ROI projections</span>
                </li>
              </ul>
            </Card>
            
            <Card variant="green">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Minimal business disruption</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Certified professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Safety compliance</span>
                </li>
              </ul>
            </Card>
            
            <Card variant="sky">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Monitoring</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-sky-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Real-time performance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-sky-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Predictive maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-solar-sky-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700 text-sm">Energy reporting</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-solar-green-600 to-solar-sky-600 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Power Your Business Forward</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Schedule a free consultation and discover your solar potential
          </p>
          <Button variant="white" icon={ArrowRight} to="/contact" size="lg">
            Talk to Commercial Expert
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CommercialSolar;
