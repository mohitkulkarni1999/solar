import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import MapSection from '../components/common/MapSection';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '7972574730',
      link: 'tel:7972574730',
      color: 'sky'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info.solarisecorp@gmail.com',
      link: 'mailto:info.solarisecorp@gmail.com',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Studio 4, Nandi Building, Beside Mangnani Function Hall, Venkatesh Nagar, Hingoli Gate, Nanded – 431602, Maharashtra',
      link: '#',
      color: 'sky'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sat: 8:00 AM - 6:00 PM',
      link: '#',
      color: 'green'
    }
  ];

  const faqs = [
    {
      question: 'How long does installation take?',
      answer: 'Most residential installations are completed within 2-3 days. Commercial projects vary based on size.'
    },
    {
      question: 'What financing options are available?',
      answer: 'We offer 0% APR financing, solar loans, lease options, and Power Purchase Agreements (PPA).'
    },
    {
      question: 'Do you handle permits and paperwork?',
      answer: 'Yes! We handle all permits, inspections, and utility interconnection paperwork for you.'
    },
    {
      question: 'What warranty do you offer?',
      answer: '25-year panel warranty, 10-year inverter warranty, and 10-year workmanship guarantee.'
    }
  ];

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
        // Get your free access key: https://web3forms.com
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
            from_name: 'Solarise Corp Contact Form',
            subject: `New Contact Form Submission - ${formData.propertyType}`
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Split Design with Contact Cards */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Solid Color */}
          <div className="bg-gradient-to-br from-solar-sky-600 to-solar-sky-700"></div>
          {/* Right Side - Pattern */}
          <div className="bg-white relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, #0ea5e9 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                <Phone size={16} />
                Let's Connect
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Get In
                <br />
                <span className="text-solar-sky-200">Touch</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                Ready to start your solar journey? Contact us for a free consultation and personalized quote.
              </p>
              
              {/* Quick Contact Bubbles */}
              <div className="flex flex-wrap gap-4">
                <a href="tel:7972574730" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-4 rounded-2xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Call Us</div>
                    <div className="font-semibold">7972574730</div>
                  </div>
                </a>
                
                <a href="mailto:info.solarisecorp@gmail.com" className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-4 rounded-2xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Email Us</div>
                    <div className="font-semibold">info.solarisecorp@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Right Side - Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-solar-sky-500 to-solar-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Visit Our Office</h3>
                    <p className="text-gray-600">Studio 4, Nandi Building, Beside Mangnani Function Hall, Venkatesh Nagar, Hingoli Gate, Nanded – 431602, Maharashtra</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-solar-green-500 to-solar-green-600 rounded-3xl p-8 shadow-2xl text-white hover:shadow-3xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="text-white/90">Mon - Sat: 8:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl text-white hover:shadow-3xl transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">24/7 Emergency</h3>
                    <p className="text-gray-300 text-sm">Support available</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-solar-sky-500 to-solar-green-500 rounded-2xl flex items-center justify-center">
                    <Send className="text-white" size={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} variant={info.color === 'sky' ? 'sky' : 'green'} hover={false}>
                <div className="text-center">
                  <div className={`w-14 h-14 mx-auto mb-4 ${info.color === 'sky' ? 'bg-solar-sky-500' : 'bg-solar-green-500'} rounded-xl flex items-center justify-center`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.link !== '#' ? (
                    <a href={info.link} className="text-gray-600 hover:text-solar-sky-600 transition-colors">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.details}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
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
                    <h3 className="heading-md text-gray-900 mb-4">Thank You!</h3>
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
                        placeholder="7972574730"
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

            {/* FAQs & Additional Info */}
            <div>
              <SectionTitle 
                subtitle="Frequently Asked"
                title="Common Questions"
                description="Quick answers to questions you may have"
                centered={false}
              />

              <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} variant="white" hover={false}>
                    <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </Card>
                ))}
              </div>

              <Card variant="glass" className="mt-8">
                <h3 className="heading-sm text-gray-900 mb-4">Schedule a Visit</h3>
                <p className="text-gray-600 mb-6">
                  Prefer to discuss in person? Visit our office during business hours or schedule an appointment.
                </p>
                <Button variant="primary" icon={Phone} href="tel:7972574730" fullWidth>
                  Call to Schedule
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection showAddress={true} />

      {/* CTA */}
      <section className="bg-gradient-to-r from-solar-sky-600 to-solar-green-600 section-padding text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Have an Urgent Question?</h2>
          <p className="text-xl mb-8 text-solar-sky-50 max-w-2xl mx-auto">
            Call us now and speak directly with our solar experts.
          </p>
          <Button variant="white" icon={Phone} href="tel:7972574730" size="lg">
            Call: 7972574730
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
