import React, { useState } from 'react';
import { MapPin, Calendar, Zap, TrendingUp, Home, Building2, Factory, Award } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'residential',
      location: 'Los Angeles, CA',
      date: 'March 2024',
      systemSize: '8.5 kW',
      savings: '72%',
      image: '🏡',
      description: 'Complete rooftop solar installation with battery backup system for a 3,200 sq ft home.',
      features: ['Tesla Powerwall', 'Smart monitoring', 'Net metering']
    },
    {
      id: 2,
      title: 'Corporate Office Building',
      category: 'commercial',
      location: 'San Francisco, CA',
      date: 'February 2024',
      systemSize: '125 kW',
      savings: '68%',
      image: '🏢',
      description: 'Large-scale commercial installation reducing operational costs for a tech company headquarters.',
      features: ['High-efficiency panels', 'EV charging stations', 'Remote monitoring']
    },
    {
      id: 3,
      title: 'Suburban Residence',
      category: 'residential',
      location: 'Austin, TX',
      date: 'January 2024',
      systemSize: '6.8 kW',
      savings: '65%',
      image: '🏠',
      description: 'Energy-efficient solar solution with modern aesthetics for a growing family.',
      features: ['Premium panels', 'App control', '25-year warranty']
    },
    {
      id: 4,
      title: 'Manufacturing Facility',
      category: 'industrial',
      location: 'Phoenix, AZ',
      date: 'December 2023',
      systemSize: '350 kW',
      savings: '70%',
      image: '🏭',
      description: 'Industrial-scale solar array powering manufacturing operations with significant cost savings.',
      features: ['High-capacity system', 'Industrial monitoring', 'Peak demand reduction']
    },
    {
      id: 5,
      title: 'Luxury Estate',
      category: 'residential',
      location: 'Miami, FL',
      date: 'November 2023',
      systemSize: '12.5 kW',
      savings: '75%',
      image: '🏰',
      description: 'Premium solar installation with multiple arrays and comprehensive energy storage.',
      features: ['Dual battery system', 'Pool heating integration', 'Smart home compatible']
    },
    {
      id: 6,
      title: 'Shopping Center',
      category: 'commercial',
      location: 'Seattle, WA',
      date: 'October 2023',
      systemSize: '200 kW',
      savings: '66%',
      image: '🏬',
      description: 'Rooftop and carport solar installation providing power and shade for retail complex.',
      features: ['Carport integration', 'Tenant billing', 'Weather monitoring']
    },
    {
      id: 7,
      title: 'Warehouse Complex',
      category: 'industrial',
      location: 'Dallas, TX',
      date: 'September 2023',
      systemSize: '450 kW',
      savings: '73%',
      image: '🏗️',
      description: 'Massive solar installation across multiple warehouse rooftops for logistics company.',
      features: ['Fleet charging ready', 'Scalable design', 'Performance guarantees']
    },
    {
      id: 8,
      title: 'Community Center',
      category: 'commercial',
      location: 'Portland, OR',
      date: 'August 2023',
      systemSize: '85 kW',
      savings: '69%',
      image: '🏛️',
      description: 'Solar solution for public facility demonstrating commitment to sustainability.',
      features: ['Educational displays', 'Public accessibility', 'Grant funded']
    },
    {
      id: 9,
      title: 'Beach House',
      category: 'residential',
      location: 'San Diego, CA',
      date: 'July 2023',
      systemSize: '9.2 kW',
      savings: '71%',
      image: '🏖️',
      description: 'Coastal-grade solar system designed to withstand salt air and harsh conditions.',
      features: ['Corrosion resistant', 'Hurricane rated', 'Aesthetic integration']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = [
    { icon: Award, value: '150+', label: 'Completed Projects' },
    { icon: Zap, value: '25 MW', label: 'Total Capacity' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
    { icon: Home, value: '5000+', label: 'Happy Customers' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Bento Box Style */}
      <section className="relative bg-gradient-to-br from-solar-green-50 via-white to-solar-sky-50 section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Title Card */}
            <div className="lg:col-span-7 bg-gradient-to-br from-solar-sky-600 to-solar-green-600 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                  150+ Projects Completed
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Our Project
                  <br />
                  <span className="text-solar-sky-100">Portfolio</span>
                </h1>
                <p className="text-lg text-white/90 mb-8 max-w-lg">
                  Explore our successful solar installations across residential, commercial, and industrial sectors.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
                    <div className="text-3xl font-bold">25 MW</div>
                    <div className="text-sm text-white/80">Total Capacity</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm text-white/80">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Side Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              {/* Residential Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-solar-sky-400 to-solar-sky-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600 font-medium">Residential</div>
                <div className="text-xs text-gray-500 mt-1">Projects</div>
              </div>
              
              {/* Commercial Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-solar-green-400 to-solar-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">70+</div>
                <div className="text-sm text-gray-600 font-medium">Commercial</div>
                <div className="text-xs text-gray-500 mt-1">Solutions</div>
              </div>
              
              {/* Industrial Card */}
              <div className="col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">30+</div>
                    <div className="text-sm text-gray-300 font-medium">Industrial Projects</div>
                    <div className="text-xs text-gray-400 mt-1">Large-scale installations</div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-solar-sky-500 to-solar-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Factory className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} variant="glass" hover={false}>
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-solar-sky-100 to-solar-green-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="text-solar-sky-600" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Featured Work"
            title="Recent Installations"
            description="Successful solar projects delivering exceptional results"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} variant="glass">
                <div className="text-7xl mb-4 text-center">{project.image}</div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'residential' 
                      ? 'bg-solar-sky-100 text-solar-sky-700'
                      : project.category === 'commercial'
                      ? 'bg-solar-green-100 text-solar-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>

                <h3 className="heading-sm text-gray-900 mb-2">{project.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-solar-sky-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">System Size</div>
                    <div className="font-bold text-solar-sky-600">{project.systemSize}</div>
                  </div>
                  <div className="bg-solar-green-50 rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Energy Savings</div>
                    <div className="font-bold text-solar-green-600">{project.savings}</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="text-xs text-gray-600 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <Card variant="glass">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-2xl text-gray-700 italic mb-6">
                "Solarise Corp delivered beyond our expectations. From design to installation, everything was professional and seamless. Our energy bills have dropped by 70%!"
              </blockquote>
              <div className="text-gray-900 font-semibold">Jennifer Martinez</div>
              <div className="text-gray-600">Residential Customer, Los Angeles</div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 section-padding text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-solar-sky-50 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who've transformed their properties with solar energy.
          </p>
          <Button variant="white" to="/contact">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
