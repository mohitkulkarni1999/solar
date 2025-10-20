import React from 'react';
import { Target, Eye, Award, Users, Briefcase, Shield, TrendingUp, Heart } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';

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
      name: 'John Anderson',
      role: 'CEO & Founder',
      description: '15+ years in renewable energy industry',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Chief Technology Officer',
      description: 'Solar engineering expert with 20+ patents',
      image: '👩‍💻'
    },
    {
      name: 'David Chen',
      role: 'Operations Director',
      description: 'Managed 1000+ successful installations',
      image: '👨‍🔧'
    },
    {
      name: 'Emily Thompson',
      role: 'Customer Relations Manager',
      description: 'Dedicated to client satisfaction excellence',
      image: '👩‍💼'
    }
  ];

  const timeline = [
    { year: '2010', event: 'Company Founded', description: 'Started with a vision to make solar energy accessible' },
    { year: '2013', event: '1000th Installation', description: 'Reached milestone of 1000 solar installations' },
    { year: '2016', event: 'National Expansion', description: 'Expanded operations to serve nationwide' },
    { year: '2019', event: 'Industry Awards', description: 'Received multiple excellence awards' },
    { year: '2023', event: '5000+ Customers', description: 'Celebrated serving over 5000 satisfied customers' }
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
                EST. 2010
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
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Leading the solar revolution since 2010. We're passionate about creating a sustainable future through innovative solar energy solutions.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">13+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">5000+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Awards Won</div>
                </div>
              </div>
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
                To empower homes and businesses with clean, affordable solar energy solutions that reduce environmental impact while maximizing financial savings. We're committed to making renewable energy accessible to everyone.
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
                To become the nation's most trusted solar energy provider, pioneering sustainable solutions that transform communities and create a cleaner, brighter future for generations to come.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Impact"
            title="Numbers That Speak"
            description="Over a decade of excellence in solar energy solutions"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <StatCard icon={Users} value="5000" suffix="+" label="Satisfied Customers" color="sky" />
            <StatCard icon={Briefcase} value="13" suffix=" Years" label="Industry Experience" color="green" />
            <StatCard icon={Award} value="50" suffix="+" label="Awards & Recognition" color="sky" />
            <StatCard icon={TrendingUp} value="15" suffix=" MW" label="Total Energy Generated" color="green" />
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

      {/* Timeline */}
      <section className="bg-gradient-to-br from-solar-sky-50 to-solar-green-50 section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Journey"
            title="Milestones & Achievements"
            description="A decade of innovation and growth in solar energy"
          />
          
          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-solar-sky-300 to-solar-green-300 hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card variant="glass">
                      <h3 className="heading-sm text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-solar-sky-500 to-solar-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Meet The Team"
            title="Leadership & Expertise"
            description="Experienced professionals dedicated to your solar success"
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
          <h2 className="heading-lg mb-6">Join Our Solar Family</h2>
          <p className="text-xl mb-8 text-solar-sky-50 max-w-2xl mx-auto">
            Become part of thousands of satisfied customers who've made the switch to clean energy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
