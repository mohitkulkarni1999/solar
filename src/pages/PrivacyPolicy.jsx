import React from 'react';
import { Shield, Lock, Eye, Mail } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Property details and energy consumption data',
        'Installation preferences and system requirements',
        'Payment and billing information',
        'Communication records and correspondence'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our solar installation services',
        'To process your quotes and consultations',
        'To communicate with you about your solar project',
        'To improve our services and customer experience',
        'To comply with legal obligations and regulations'
      ]
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information',
        'Information may be shared with trusted partners for installation services',
        'Government agencies for subsidy processing and permits',
        'Legal authorities when required by law',
        'Service providers who assist in our operations'
      ]
    },
    {
      icon: Mail,
      title: 'Your Rights',
      content: [
        'Access your personal data at any time',
        'Request correction of inaccurate information',
        'Request deletion of your data',
        'Opt-out of marketing communications',
        'Lodge a complaint with regulatory authorities'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-solar-sky-600 to-solar-green-600 section-padding text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              Legal Information
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-white/70 mt-4">
              Last Updated: October 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card variant="sky">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At Solarise Corp, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card key={index} variant="glass">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-solar-sky-400 to-solar-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-solar-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
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
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Questions About Our Privacy Policy?</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
