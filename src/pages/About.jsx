import React from 'react';
import { Target, Eye, Award, Users, Briefcase, Shield, TrendingUp, Heart, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';
import Button from '../components/common/Button';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality & Reliability',
      description: 'We use only premium materials and proven technology to ensure lasting performance.',
      color: 'sky'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide personalized service every step of the way.',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Staying ahead with the latest solar technology and installation techniques.',
      color: 'sky'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results that exceed industry standards.',
      color: 'green'
    }
  ];

  const team = [
    {
      name: 'Leadership Team',
      role: 'Strategic Direction',
      description: 'Expert guidance in renewable energy',
      image: '👨‍💼'
    },
    {
      name: 'Technical Team',
      role: 'Solar Engineering',
      description: 'Cutting-edge solar technology expertise',
      image: '👩‍💻'
    },
    {
      name: 'Installation Team',
      role: 'Field Operations',
      description: 'Professional installation excellence',
      image: '👨‍🔧'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated to your satisfaction',
      image: '👩‍💼'
    }
  ];


  return (
    <div className="overflow-hidden">
      {/* Hero Section - Unique Timeline Design */}
      <section className="relative bg-white section-padding overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-solar-sky-200 rounded-full blur-3xl animate-float opacity-60"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-solar-green-200 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-solar-sky-300 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="animate-fade-in">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                NEW VISION, BRIGHT FUTURE
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                About{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">
                    Solarise Corp
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M0 8C50 4 150 4 200 8" stroke="url(#gradient)" strokeWidth="3"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="text-2xl">🏢</span>
                <span>About Us</span>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                At Solarise Corp, we believe the future belongs to those who create it — sustainably.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our vision is to make every rooftop a source of power, pride, and progress — helping individuals and businesses achieve energy independence while contributing to a cleaner, greener planet.
              </p>
              
            </div>
            
            {/* Right Side - Visual Element */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-solar-sky-100 to-solar-green-100 rounded-[3rem] p-8 lg:p-12 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl transform -rotate-3">
                  <div className="space-y-6">
                    {/* Icon Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="aspect-square bg-gradient-to-br from-solar-sky-400 to-solar-sky-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <Shield className="text-white" size={32} />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-solar-green-400 to-solar-green-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <Award className="text-white" size={32} />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-solar-sky-400 to-solar-green-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <Heart className="text-white" size={32} />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-solar-green-400 to-solar-sky-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <TrendingUp className="text-white" size={32} />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-solar-sky-500 to-solar-green-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <Users className="text-white" size={32} />
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-solar-green-500 to-solar-sky-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <Target className="text-white" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <Card variant="sky" hover={false}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-solar-sky-500 rounded-xl flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="heading-md text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                As a trusted Solar EPC (Engineering, Procurement & Construction) company, Solarise Corp offers complete end-to-end solar solutions — making clean energy simple, reliable, and rewarding for everyone.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                From site inspection, system design, and panel selection to installation, subsidy assistance, and regulatory permits, our team ensures a smooth and transparent experience. We also provide financing and loan assistance, helping customers switch to solar with ease and confidence.
              </p>
            </Card>

            <Card variant="green" hover={false}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-solar-green-500 rounded-xl flex items-center justify-center">
                  <Eye className="text-white" size={32} />
                </div>
                <h2 className="heading-md text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our services go beyond installation — we deliver long-term maintenance, performance monitoring, and surveillance support to keep every system running efficiently for decades.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                At Solarise, we merge innovation with integrity — turning rooftops into self-sustaining assets and homes into long-term sources of savings. Because we don't just install solar panels — we engineer independence, empower savings, and light up lives, one ray at a time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Commitment"
            title="What We Offer"
            description="Quality solar solutions with comprehensive support and service"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <StatCard icon={Users} value="100" suffix="%" label="Customer Satisfaction Goal" color="sky" />
            <StatCard icon={Briefcase} value="100" suffix="%" label="Quality Assurance" color="green" />
            <StatCard icon={Award} value="0" suffix="%" label="Down Payment Options" color="sky" />
            <StatCard icon={TrendingUp} value="70" suffix="%" label="Potential Bill Savings" color="green" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide everything we do"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <Card key={index} variant={value.color === 'sky' ? 'sky' : 'green'}>
                <div className={`w-14 h-14 rounded-xl ${value.color === 'sky' ? 'bg-solar-sky-500' : 'bg-solar-green-500'} flex items-center justify-center mb-4`}>
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="heading-sm text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section - Modern Card Grid */}
      <section className="bg-gradient-to-br from-solar-sky-50 to-solar-green-50 section-padding relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-solar-sky-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-solar-green-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container-custom relative z-10">
          <SectionTitle 
            subtitle="Our Approach"
            title="Your Path to Solar Success"
            description="A comprehensive journey from consultation to clean energy independence"
          />
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solar-sky-100 to-solar-sky-200 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-sky-400 to-solar-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white text-2xl font-bold shadow-lg">
                  01
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  We analyze your property, energy needs, and goals to design the perfect solar solution tailored for you.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solar-green-100 to-solar-green-200 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-green-400 to-solar-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white text-2xl font-bold shadow-lg">
                  02
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">System Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our experts create a custom solar system design optimized for maximum efficiency and savings.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solar-sky-100 to-solar-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-sky-400 to-solar-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white text-2xl font-bold shadow-lg">
                  03
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Permits & Approvals</h3>
                <p className="text-gray-600 leading-relaxed">
                  We handle all paperwork, permits, subsidies, and regulatory approvals - completely hassle-free for you.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solar-green-100 to-solar-sky-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-green-400 to-solar-sky-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white text-2xl font-bold shadow-lg">
                  04
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our certified team installs your system with precision, safety, and minimal disruption to your routine.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solar-sky-100 to-solar-sky-200 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-sky-500 to-solar-sky-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white text-2xl font-bold shadow-lg">
                  05
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Activation & Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  System activation, grid connection, and ongoing 24/7 monitoring to ensure peak performance.
                </p>
              </div>
            </div>

            {/* Card 6 - Featured */}
            <div className="group relative bg-gradient-to-br from-solar-sky-600 to-solar-green-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 text-white">
              <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white text-3xl font-bold shadow-lg">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold mb-3">Enjoy Clean Energy</h3>
                <p className="text-white/90 leading-relaxed">
                  Start saving immediately while contributing to a sustainable future. Welcome to energy independence!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Team"
            title="Expert Departments"
            description="Dedicated professionals across all areas to ensure your solar success"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {team.map((member, index) => (
              <Card key={index} variant="default">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-solar-sky-100 to-solar-green-100 rounded-full flex items-center justify-center text-5xl">
                    {member.image}
                  </div>
                  <h3 className="heading-sm text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-solar-sky-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 section-padding text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Start Your Solar Journey</h2>
          <p className="text-xl mb-8 text-solar-sky-50 max-w-2xl mx-auto">
            Be among the first to experience our commitment to excellence in solar energy solutions.
          </p>
          <Button variant="white" icon={ArrowRight} to="/contact" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
