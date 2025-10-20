import React, { useState } from 'react';
import { ArrowRight, Sun, Zap, Award, Users, TrendingUp, CheckCircle, Phone, Send, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';
import SectionTitle from '../components/common/SectionTitle';
import MapSection from '../components/common/MapSection';
import bannerImage from '../assets/Gemini_Generated_Image_3yjrdy3yjrdy3yjr.png';
import bgImage from '../assets/Gemini_Generated_Image_un29ilun29ilun29.png';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      try {
        // Web3Forms API endpoint - FREE form submission service (no backend needed!)
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: '78a7b63a-885a-4fbc-b077-7837c5595221',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            property_type: formData.propertyType,
            message: formData.message,
            from_name: 'Solarise Corp - Homepage Form',
            subject: `New Homepage Contact - ${formData.propertyType}`
          })
        });
        
        const result = await response.json();
        
        if (result.success) {
          setSubmitted(true);
          
          // Reset form after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              propertyType: 'residential',
              message: ''
            });
          }, 5000);
        } else {
          alert('Something went wrong. Please try again or call us directly.');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        alert('Failed to send message. Please try again or contact us by phone.');
      } finally {
        setLoading(false);
      }
    }
  };

  const features = [
    {
      icon: Sun,
      title: 'Premium Solar Panels',
      description: 'High-efficiency solar panels with 25-year warranty and maximum energy output.',
      color: 'sky'
    },
    {
      icon: Zap,
      title: 'Expert Installation',
      description: 'Certified professionals ensuring safe, efficient, and compliant installations.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Best-in-Class Service',
      description: 'Award-winning customer service and comprehensive maintenance support.',
      color: 'sky'
    },
    {
      icon: TrendingUp,
      title: 'Maximum Savings',
      description: 'Reduce your energy bills by up to 70% with our optimized solar solutions.',
      color: 'green'
    }
  ];

  const benefits = [
    'Significant reduction in electricity bills',
    'Increase property value by up to 4%',
    'Government tax incentives and rebates',
    'Zero carbon footprint and eco-friendly',
    '25-year performance warranty',
    'Professional maintenance and support'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Solarise Corp transformed our home! Our energy bills dropped by 65% in the first year. The installation was smooth and professional.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'Outstanding service from start to finish. The team was knowledgeable, efficient, and the results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'We installed solar panels on multiple properties. Solarise Corp delivered exceptional quality and ongoing support. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative section-padding min-h-screen flex items-center" style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <h1 className="heading-xl text-gray-900 mb-6">
                Harness the Power of{' '}
                <span className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">
                  Clean Energy
                </span>
              </h1>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Transform sunlight into savings with our premium solar solutions. Industry-leading technology, expert installation, and exceptional service for residential and commercial properties.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="primary" icon={ArrowRight} to="/contact">
                  Get Free Consultation
                </Button>
                <Button variant="outline" icon={Phone} to="/contact">
                  Call Us Today
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-solar-green-500" size={20} />
                  <span>25-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-solar-green-500" size={20} />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-solar-green-500" size={20} />
                  <span>0% Financing Available</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-solar-sky-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-solar-green-200 rounded-full blur-3xl opacity-50"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={bannerImage} 
                  alt="Solar Panel Installation" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white section-padding relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-solar-sky-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-solar-green-50 to-transparent opacity-50"></div>
        
        <div className="container-custom relative z-10">
          <SectionTitle 
            subtitle="Why Choose Us"
            title="Premium Solar Solutions"
            description="Industry-leading technology and expertise to maximize your solar investment"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Animated Gradient Background on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  feature.color === 'sky' 
                    ? 'bg-gradient-to-br from-solar-sky-50 via-white to-solar-sky-100' 
                    : 'bg-gradient-to-br from-solar-green-50 via-white to-solar-green-100'
                }`}></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon with Animation */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                    feature.color === 'sky' 
                      ? 'bg-gradient-to-br from-solar-sky-400 to-solar-sky-600 shadow-lg shadow-solar-sky-200' 
                      : 'bg-gradient-to-br from-solar-green-400 to-solar-green-600 shadow-lg shadow-solar-green-200'
                  }`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-solar-sky-600 group-hover:to-solar-green-600 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Corner Element */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                  feature.color === 'sky' ? 'bg-solar-sky-400' : 'bg-solar-green-400'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-solar-sky-500 to-solar-green-500 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="heading-md text-gray-900 mb-6">Solar Energy Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                subtitle="Investment Benefits"
                title="Why Switch to Solar Energy?"
                description="Solar energy is more than just an eco-friendly choice—it's a smart financial decision that pays dividends for years to come."
                centered={false}
              />
              <div className="mt-8">
                <Button variant="secondary" icon={ArrowRight} to="/services">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-solar-sky-50 to-solar-green-50 section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it—hear from satisfied customers who've made the switch"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="glass">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sun key={i} className="text-solar-sky-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 section-padding text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Start Saving?</h2>
          <p className="text-xl mb-8 text-solar-sky-50 max-w-2xl mx-auto">
            Get a free, no-obligation consultation and discover how much you can save with solar energy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="white" icon={ArrowRight} to="/contact">
              Request Free Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" icon={Phone} href="tel:+1234567890">
              Call: +1 (234) 567-890
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-sky-600 to-solar-green-600">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Ready to transform your energy future? Reach out to us today and let's discuss how solar can work for you
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form - Left Side */}
            <div>
              <SectionTitle 
                subtitle="Send Us a Message"
                title="Request Free Consultation"
                description="Fill out the form and we'll get back to you within 24 hours"
                centered={false}
              />

              {submitted ? (
                <Card variant="glass" className="mt-8">
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-solar-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-solar-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                    <p className="text-gray-600 text-lg">
                      We've received your message and will contact you shortly.
                    </p>
                  </div>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-solar-sky-500 transition-all`}
                      placeholder="John Smith"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-solar-sky-500 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-solar-sky-500 transition-all`}
                      placeholder="+1 (234) 567-890"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-solar-sky-500 transition-all"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-solar-sky-500 transition-all resize-none`}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  variant="secondary" 
                  icon={Send}
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              )}
            </div>

            {/* Map - Right Side */}
            <div>
              <div className="sticky top-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-solar-sky-50 to-solar-green-50 px-6 py-4 rounded-2xl w-full">
                    <MapPin className="text-solar-sky-600 flex-shrink-0" size={24} />
                    <div className="text-left">
                      <p className="text-sm text-gray-600 font-medium">Our Office Location</p>
                      <p className="text-gray-900 font-semibold text-sm">
                        Studio 4, Nandi Building, Beside Mangnani Function Hall, Venkatesh Nagar, Hingoli Gate, Nanded – 431602, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>
                
                <Card variant="glass" hover={false}>
                  <div className="relative w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.494!2d77.315945!3d19.159552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d644999261a9%3A0x821ffa3dea3de43b!2sHingoli%20Gate%2C%20Nanded%2C%20Maharashtra%20431601!5e0!3m2!1sen!2sin!4v1729430000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location - Hingoli Gate, Nanded"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
