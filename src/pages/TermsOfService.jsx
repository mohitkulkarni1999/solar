import React from 'react';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

const TermsOfService = () => {
  const terms = [
    {
      icon: FileText,
      title: 'Service Agreement',
      content: [
        'These terms govern your use of Solarise Corp services',
        'By engaging our services, you accept these terms',
        'Services include consultation, installation, and maintenance',
        'All work will be performed by certified professionals',
        'Warranties are provided as per industry standards'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Customer Obligations',
      content: [
        'Provide accurate property and energy consumption information',
        'Ensure site accessibility for installation team',
        'Obtain necessary permissions from property owners',
        'Make timely payments as per agreed schedule',
        'Maintain the system as per our guidelines'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Limitations of Liability',
      content: [
        'We are not liable for damages beyond our control',
        'Weather-related delays are not our responsibility',
        'Third-party equipment warranties apply separately',
        'Force majeure events exclude liability',
        'Maximum liability limited to service contract value'
      ]
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'All designs and documentation remain our property',
        'System designs are customized for your property',
        'You may not reproduce our proprietary materials',
        'Trademarks and logos are protected',
        'Patents and trade secrets are confidential'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-solar-green-600 to-solar-sky-600 section-padding text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              Legal Agreement
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Please read these terms carefully before using our services.
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
            <Card variant="green">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Welcome to Solarise Corp. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of such changes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Terms */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {terms.map((term, index) => (
              <Card key={index} variant="glass">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-solar-green-400 to-solar-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <term.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{term.title}</h3>
                    <ul className="space-y-3">
                      {term.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-solar-sky-500 rounded-full mt-2 flex-shrink-0"></div>
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

      {/* Additional Sections */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment schedules will be outlined in your service contract. We offer various payment options including upfront payment, installment plans, and financing. Late payments may incur additional charges as specified in your agreement.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Guarantees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Solar panels come with comprehensive performance coverage. Installation workmanship is guaranteed for 10 years. Inverters and other equipment have manufacturer coverage. All coverage is subject to terms and conditions outlined in your service agreement.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and Refunds</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cancellation policies vary based on project stage. Deposits may be non-refundable after design work begins. Full refund policies will be outlined in your service contract. We strive to work with customers to find satisfactory solutions.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these Terms or our services will be resolved through mediation or arbitration in Maharashtra, India. Both parties agree to act in good faith to resolve disputes amicably.
              </p>
            </Card>

            <Card variant="glass">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms are governed by the laws of India and the State of Maharashtra. Any legal proceedings will be conducted in the courts of Nanded, Maharashtra.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-solar-green-50 to-solar-sky-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  If you have any questions about these Terms of Service, please reach out to us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">Email: <a href="mailto:info@solarise.in" className="text-solar-green-600 hover:underline">info@solarise.in</a></p>
                  <p className="font-semibold">Phone: <a href="tel:+917972574730" className="text-solar-green-600 hover:underline">+91-7972574730</a></p>
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

export default TermsOfService;
