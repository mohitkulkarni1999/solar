import React, { useState } from 'react';
import { ArrowRight, Sun, Zap, Award, Users, TrendingUp, CheckCircle, Phone, Send, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import StatCard from '../components/common/StatCard';
import SectionTitle from '../components/common/SectionTitle';
import MapSection from '../components/common/MapSection';
import { WEB3FORMS_CONFIG } from '../config/forms';
import bannerImage from '../assets/Gemini_Generated_Image_3yjrdy3yjrdy3yjr.png';
import bgImage from '../assets/Gemini_Generated_Image_un29ilun29ilun29.png';
import premiumPanelsImg from '../assets/premium_solar_panels.png';
import expertInstallImg from '../assets/expert_installation.png';
import bestServiceImg from '../assets/best_in_class_service.png';
import maxSavingsImg from '../assets/maximum_savings.png';

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
        // Use FormData to avoid CORS preflight
        const formDataPayload = new FormData();
        formDataPayload.append('access_key', WEB3FORMS_CONFIG.accessKey);
        formDataPayload.append('name', formData.name);
        formDataPayload.append('email', formData.email);
        formDataPayload.append('phone', formData.phone);
        formDataPayload.append('property_type', formData.propertyType);
        formDataPayload.append('message', formData.message);
        formDataPayload.append('from_name', 'Solarise Corp - Homepage Form');
        formDataPayload.append('subject', `New Homepage Contact - ${formData.propertyType}`);
        formDataPayload.append('botcheck', ''); // Anti-spam field

        const response = await fetch(WEB3FORMS_CONFIG.endpoint, {
          method: 'POST',
          body: formDataPayload
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

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

        // Fallback to mailto if Web3Forms fails
        const mailtoLink = `mailto:info.solarisecorp@gmail.com?subject=Homepage Contact - ${formData.propertyType}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AProperty Type: ${formData.propertyType}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        if (confirm('Unable to submit form automatically. Would you like to send via your email client instead?')) {
          window.location.href = mailtoLink;
        } else {
          alert('Please call us at +91-7972574730 or email info.solarisecorp@gmail.com directly.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const features = [
    {
      icon: Sun,
      title: 'Premium Solar Panels',
      description: 'High-efficiency solar panels with maximum energy output and superior performance.',
      color: 'sky',
      image: premiumPanelsImg
    },
    {
      icon: Zap,
      title: 'Expert Installation',
      description: 'Certified professionals ensuring safe, efficient, and compliant installations.',
      color: 'green',
      image: expertInstallImg
    },
    {
      icon: Award,
      title: 'Best-in-Class Service',
      description: 'Award-winning customer service and comprehensive maintenance support.',
      color: 'sky',
      image: bestServiceImg
    },
    {
      icon: TrendingUp,
      title: 'Maximum Savings',
      description: 'Reduce your energy bills by up to 70% with our optimized solar solutions.',
      color: 'green',
      image: maxSavingsImg
    }
  ];

  const benefits = [
    'Significant reduction in electricity bills',
    'Increase property value by up to 4%',
    'Government tax incentives and rebates',
    'Zero carbon footprint and eco-friendly',
    'Comprehensive performance monitoring',
    'Professional maintenance and support'
  ];

  const whyChooseUs = [
    {
      title: 'End-to-End Solar Solutions',
      content: 'From initial consultation to installation and maintenance, we handle everything. Complete EPC services including permits, subsidies, and financing assistance.',
      icon: '🔧'
    },
    {
      title: 'Premium Quality Panels',
      content: 'Industry-leading solar panels with maximum efficiency, durability, and performance guaranteed for decades.',
      icon: '⚡'
    },
    {
      title: 'Expert Team & Support',
      content: 'Certified professionals with deep expertise in solar technology. 24/7 monitoring and maintenance support to keep your system running perfectly.',
      icon: '👥'
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
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl">🌞</span>
                <h2 className="text-2xl font-bold text-gray-900">Solarise Corp</h2>
              </div>
              <h1 className="heading-xl text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">
                  Shaping Tomorrow, One Ray at a Time.
                </span>
              </h1>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Transform your rooftop into a lifetime of savings, sustainability, and self-power.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="primary" icon={ArrowRight} to="/contact">
                  Get Free Consultation
                </Button>
                <Button variant="outline" icon={Phone} to="/contact">
                  Call Us Today
                </Button>
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

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-default transition-all duration-500 hover:shadow-2xl"
              >
                {/* Background Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg ${feature.color === 'sky'
                      ? 'bg-solar-sky-500/90 text-white'
                      : 'bg-solar-green-500/90 text-white'
                      }`}>
                      <feature.icon size={32} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Border on Hover */}
                <div className={`absolute inset-0 border-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${feature.color === 'sky' ? 'border-solar-sky-400/50' : 'border-solar-green-400/50'
                  }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Smarter Way to Save Section */}
      <section className="bg-gradient-to-br from-solar-sky-50 via-white to-solar-green-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white rounded-full text-sm font-bold mb-8 shadow-lg">
              <span className="text-2xl">💡</span>
              <span>The Smarter Way to Save</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every sunrise brings a chance to{' '}
              <span className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 bg-clip-text text-transparent">
                save smart
              </span>
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Yet every month without solar is money quietly leaving your pocket.
            </p>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It's not an expense — <span className="font-bold text-solar-sky-600">it's the smartest investment you can make</span> for your home, your wallet, and the planet.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Tax-Free Returns</p>
                      <p className="text-gray-600">Better than traditional investments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Outperforms FDs, Shares & Gold</p>
                      <p className="text-gray-600">Guaranteed long-term savings</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Pays for Itself</p>
                      <p className="text-gray-600">Unlike any other appliance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-solar-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">100 Trees Per Panel</p>
                      <p className="text-gray-600">Carbon offset equivalent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 italic">
              Each panel offsets as much carbon as planting 100 trees, making every unit of energy <span className="font-bold">clean, personal, and profitable</span>.
            </p>
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

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-solar-sky-50 to-solar-green-50 section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Your Trusted Solar Partner"
            description="Comprehensive solar solutions designed for your success"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {whyChooseUs.map((item, index) => (
              <Card key={index} variant="glass">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.content}
                </p>
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
            <Button variant="outline" className="border-white text-white hover:bg-white/10" icon={Phone} href="tel:+917972574730">
              Call: +91-7972574730
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-solar-sky-500 to-solar-green-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="text-2xl">📞</span>
              <span>Let's Build Your Solar Future</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to stop paying bills and start <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-sky-600 to-solar-green-600">owning power?</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Let our experts design a system tailored to your home, your goals, and your savings
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                        placeholder="+91-7972574730"
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
                <Card variant="glass" hover={false}>
                  <div className="relative w-full h-[480px] lg:h-[700px] rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4845!2d77.317181!3d19.1594484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d700606a59fd%3A0xa777cb8656f212fd!2sSolarise%20Corp.!5e0!3m2!1sen!2sin!4v1729430000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location - Solarise Corp., Nanded"
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
