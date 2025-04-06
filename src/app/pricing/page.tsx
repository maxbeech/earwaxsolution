'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

// Price Card Component
const PriceCard = ({ 
  title, 
  price,
  description,
  features,
  popular = false,
  buttonText = "Book Now",
  buttonLink = "/contact",
  index
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText?: string;
  buttonLink?: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${popular ? 'lg:-mt-8 z-10 relative lg:scale-105' : ''}`}
    >
      <div className={`bg-white rounded-xl overflow-hidden shadow-lg border ${popular ? 'border-blue-500' : 'border-gray-200'} h-full flex flex-col`}>
        {popular && (
          <div className="bg-blue-600 text-white text-center py-2 font-medium text-sm">
            Most Popular
          </div>
        )}
        <div className="p-6 lg:p-8 flex-grow">
          <h3 className="text-2xl font-medium text-gray-900 mb-2">{title}</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-gray-900">{price}</span>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <FaCheck className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Link 
              href={buttonLink}
              className={`inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md ${
                popular 
                  ? 'text-white bg-blue-600 hover:bg-blue-700' 
                  : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
              } transition-colors duration-300`}
            >
              {buttonText}
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PricingPage() {
  const standardPricing = [
    {
      title: "Standard Consultation",
      price: "£70",
      description: "Standard ear wax removal for one or both ears, including consultation and examination.",
      features: [
        "Professional ear examination",
        "Microsuction ear wax removal",
        "Aftercare advice",
        "Same-day appointments often available",
        "Appointment duration: 30 minutes"
      ],
      popular: true
    },
    {
      title: "Home Visit",
      price: "£110",
      description: "Convenient ear wax removal service in the comfort of your own home.",
      features: [
        "Travel to your location (within service area)",
        "Professional ear examination",
        "Microsuction ear wax removal",
        "Aftercare advice",
        "Flexible scheduling options"
      ]
    },
    {
      title: "Children's Service",
      price: "£80",
      description: "Specialized ear wax removal for children under 16 years old.",
      features: [
        "Child-friendly approach",
        "Extra time allocated for comfort",
        "Professional ear examination",
        "Gentle microsuction technique",
        "Parental guidance and aftercare advice"
      ]
    }
  ];

  const specializedPricing = [
    {
      title: "Severe Impaction",
      price: "£85",
      description: "Treatment for severely impacted ear wax requiring extended care.",
      features: [
        "Extended appointment time (45 minutes)",
        "Specialized tools for difficult cases",
        "Multiple technique approach if needed",
        "Free follow-up assessment",
        "Comprehensive aftercare plan"
      ]
    },
    {
      title: "Urgent Appointment",
      price: "£90",
      description: "Priority booking for urgent cases requiring immediate attention.",
      features: [
        "Same-day or next-day appointment",
        "Priority booking",
        "Professional ear examination",
        "Microsuction ear wax removal",
        "Extended hours availability"
      ]
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 3.jpg" 
            alt="Ear Wax Solution clinic"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Our Pricing"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Transparent pricing for our professional ear wax removal services
            </p>
          </div>
        </div>
      </section>

      {/* Standard Pricing */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Standard Services</h2>
              <p className="text-lg text-gray-700">
                Our core ear wax removal services for various needs and preferences. All services include a professional consultation, ear examination, and microsuction treatment.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {standardPricing.map((plan, index) => (
              <PriceCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Specialized Services</h2>
              <p className="text-lg text-gray-700">
                Additional services for specific needs or circumstances that require specialized care or urgent attention.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specializedPricing.map((plan, index) => (
              <PriceCard
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">Payment Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Accepted Payment Methods</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <FaCheck className="text-blue-600 mr-2 flex-shrink-0" />
                        Credit and Debit Cards
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-600 mr-2 flex-shrink-0" />
                        Cash
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-600 mr-2 flex-shrink-0" />
                        Bank Transfer
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Cancellation Policy</h3>
                    <p className="text-gray-600">
                      We understand that plans can change. We request 24 hours notice for cancellations. Late cancellations (less than 24 hours) or no-shows may incur a fee of £25.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <FaCheck className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Prices are inclusive of all services (consultation, examination, and treatment).</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>The same price applies whether one or both ears require treatment.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>Payment is due at the time of service.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span>For home visits, additional travel charges may apply for locations outside our standard service area. Please inquire when booking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Health Insurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Health Insurance</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Some private health insurance plans may cover ear wax removal services. We recommend checking with your insurance provider before your appointment to understand your coverage.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We can provide you with a detailed receipt for your treatment that you can submit to your insurance company for reimbursement.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="bg-blue-50 rounded-xl p-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Need More Information?</h3>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about our pricing or would like to discuss your specific needs, please don't hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                    <a 
                      href="tel:01293365124" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 transition-all duration-300"
                    >
                      Call: 01293 365124
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Ready to Book Your Appointment?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your ear wax removal appointment today and experience the difference of professional care.
            </p>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Book Now
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 