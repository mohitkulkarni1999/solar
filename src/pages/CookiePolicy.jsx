import React from 'react';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for the website to function properly',
      examples: [
        'Session management and authentication',
        'Security and fraud prevention',
        'Load balancing and performance',
        'Form submission and data validation'
      ],
      canDisable: false
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      examples: [
        'Page views and navigation patterns',
        'Time spent on pages',
        'Device and browser information',
        'Traffic sources and referrals'
      ],
      canDisable: true
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: [
        'Language preferences',
        'Display settings',
        'Form auto-fill information',
        'User interface customizations'
      ],
      canDisable: true
    },
    {
      icon: Cookie,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      examples: [
        'Ad targeting and personalization',
        'Campaign effectiveness tracking',
        'Social media integration',
        'Third-party advertising services'
      ],
      canDisable: true
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-solar-sky-600 via-solar-green-500 to-solar-green-600 section-padding text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              Cookie Information
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-white/90">
              Learn about how we use cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-white/70 mt-4">
              Last Updated: October 2025
            </p>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card variant="sky">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-sky-400 to-solar-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Cookies are small text files that are placed on your device when you visit a website. They help websites remember your actions and preferences over time, improving your browsing experience.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    At Solarise Corp, we use cookies to enhance website functionality, analyze site traffic, and provide personalized content. This policy explains what cookies we use and why.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Cookie Categories"
            title="Types of Cookies We Use"
            description="Understanding the different cookies on our website"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {cookieTypes.map((type, index) => (
              <Card key={index} variant="glass">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    type.canDisable 
                      ? 'bg-gradient-to-br from-solar-green-400 to-solar-green-600'
                      : 'bg-gradient-to-br from-solar-sky-400 to-solar-sky-600'
                  }`}>
                    <type.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      type.canDisable 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {type.canDisable ? 'Can be disabled' : 'Required'}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-solar-sky-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Manage Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you disable essential cookies, some features of our website may not function properly.
              </p>
              <div className="bg-solar-sky-50 rounded-xl p-6 mt-4">
                <h4 className="font-bold text-gray-900 mb-3">Browser Settings:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-solar-sky-500 rounded-full"></div>
                    <span><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-solar-sky-500 rounded-full"></div>
                    <span><strong>Firefox:</strong> Options → Privacy & Security → Cookies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-solar-sky-500 rounded-full"></div>
                    <span><strong>Safari:</strong> Preferences → Privacy → Cookies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-solar-sky-500 rounded-full"></div>
                    <span><strong>Edge:</strong> Settings → Cookies and site permissions</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services like Google Analytics, social media plugins, and advertising networks. These services may place their own cookies on your device. We recommend reviewing their privacy policies to understand how they use cookies.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cookie Retention</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. We regularly review and update our cookie usage to ensure compliance with privacy regulations.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-solar-sky-50 to-solar-green-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Questions About Cookies?</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Email: <a href="mailto:info@solarise.in" className="text-solar-sky-600 hover:underline">info@solarise.in</a></p>
                  <p className="font-semibold">Phone: <a href="tel:+917972574730" className="text-solar-sky-600 hover:underline">+91-7972574730</a></p>
                  <p className="text-sm mt-4">Studio 4, Nandi Building, Beside Mangnani Function Hall,<br />Venkatesh Nagar, Hingoli Gate, Nanded – 431602, Maharashtra</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
