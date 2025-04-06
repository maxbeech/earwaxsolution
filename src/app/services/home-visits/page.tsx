'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaUserFriends, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function HomeVisitsPage() {
  const [areasRef, areasInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  const serviceAreas = [
    {
      region: "Surrey",
      locations: ["Horley", "Reigate", "Redhill", "Crawley", "East Grinstead", "Epsom"]
    },
    {
      region: "London",
      locations: ["Central London", "South London", "Croydon", "Bromley"]
    },
    {
      region: "Kent",
      locations: ["Bromley", "Sevenoaks", "Gravesend"]
    }
  ];

  const benefits = [
    {
      icon: <FaHome className="h-10 w-10 text-blue-600" />,
      title: "Comfort and Convenience",
      description: "Receive professional ear wax removal in the comfort of your own home, eliminating travel stress and waiting rooms."
    },
    {
      icon: <FaUserFriends className="h-10 w-10 text-blue-600" />,
      title: "Ideal for Limited Mobility",
      description: "Perfect for elderly patients, those with disabilities, or anyone who finds it challenging to visit a clinic."
    },
    {
      icon: <FaClock className="h-10 w-10 text-blue-600" />,
      title: "Flexible Scheduling",
      description: "Appointments available at times that suit your schedule, including evenings and weekends in some locations."
    },
    {
      icon: <FaMapMarkerAlt className="h-10 w-10 text-blue-600" />,
      title: "Wide Coverage Area",
      description: "We serve locations across Surrey, London, and Kent, bringing our expertise directly to your doorstep."
    }
  ];

  const faqs = [
    {
      question: "What procedures can be performed during a home visit?",
      answer: "We offer the same high-quality ear wax removal procedures during home visits as we do in our clinics, including microsuction and manual removal. Our specialists bring portable professional equipment that allows us to provide safe and effective treatment in your home environment."
    },
    {
      question: "How much space do you need for a home visit?",
      answer: "We require minimal space – just a comfortable chair in a well-lit area, ideally near a window for natural light or with good overhead lighting. Our specialists bring all necessary equipment and will set up efficiently in your chosen space."
    },
    {
      question: "Is there an additional cost for home visits?",
      answer: "Yes, there is a small additional fee to cover travel expenses. The exact amount depends on your location and distance from our nearest clinic. We'll be happy to provide this information when you book your appointment."
    },
    {
      question: "How do I prepare for a home visit?",
      answer: "Prepare a quiet, well-lit space with a comfortable chair. If possible, use olive oil ear drops for 3-5 days before your appointment to soften the wax. Have a towel ready, and ensure pets are secured in another room during the procedure for safety and minimizing distractions."
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 1.jpg" 
            alt="Home visit ear wax removal service"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Home Visit Services"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Professional ear wax removal in the comfort of your own home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Ear Wax Removal at Home</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we understand that visiting a clinic isn't always convenient or possible for everyone. That's why we offer comprehensive home visit services, bringing our professional ear wax removal expertise directly to your doorstep.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mobile service provides the same high-quality care and uses the same advanced equipment as our clinic-based treatments. Our specialists are fully trained to perform safe, effective ear wax removal in a home environment, ensuring you receive the best possible care without having to leave your home.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Home visits are particularly beneficial for elderly patients, those with mobility issues, busy professionals, or anyone who prefers the comfort and convenience of receiving treatment at home.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 4.jpg"
                  alt="Specialist providing home ear wax removal"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">How Home Visits Work</h2>
              <p className="text-lg text-gray-700">
                We've designed our home visit service to be simple, efficient, and convenient for you.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Booking</h3>
                <p className="text-gray-700">
                  Contact us by phone or through our online booking form to schedule a home visit. Let us know your location, preferred date and time, and any specific requirements or concerns you have. We'll confirm the appointment and provide an estimated arrival time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">The Visit</h3>
                <p className="text-gray-700">
                  Our specialist will arrive at your home with all the necessary equipment for your ear wax removal procedure. They'll set up in a suitable space with good lighting, conduct an initial examination, and then perform the ear wax removal using the most appropriate method for your condition, typically microsuction.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Aftercare</h3>
                <p className="text-gray-700">
                  After the procedure, our specialist will provide personalized aftercare advice and answer any questions you may have. They'll also clean up thoroughly, leaving your home as they found it. If needed, we can schedule follow-up appointments or regular maintenance visits.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Benefits of Home Visits</h2>
              <p className="text-lg text-gray-700">
                Our home visit service offers numerous advantages for patients who prefer or require treatment at home.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-700 text-center">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white" ref={areasRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Areas We Cover</h2>
              <p className="text-lg text-gray-700">
                We provide home visit services across Surrey, London, and Kent areas. If your location isn't listed, please contact us as we may still be able to accommodate you.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={areasInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-neutral-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <FaMapMarkerAlt className="text-blue-600 mr-3 h-6 w-6" />
                  <h3 className="text-xl font-medium text-gray-900">{area.region}</h3>
                </div>
                <ul className="space-y-2">
                  {area.locations.map((location, i) => (
                    <li key={i} className="text-gray-700 flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      {location}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 italic">Don't see your area listed? Contact us to check if we can arrange a visit to your location.</p>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Professional Equipment</h2>
              <p className="text-lg text-gray-700 mb-4">
                When you choose our home visit service, you don't compromise on quality. Our specialists bring portable professional equipment that enables them to provide the same high standard of care you would receive in our clinics.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mobile kit includes:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Portable microsuction equipment for safe, effective ear wax removal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Professional lighting and magnification for clear visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Specialized instruments for manual removal when appropriate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Otoscopes for thorough ear examination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Hygienic, disposable supplies to ensure cleanliness and safety</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                Our equipment is regularly maintained and sterilized to ensure the highest standards of hygiene and safety.
              </p>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Ear wax operation close up 2.jpg"
                  alt="Professional ear wax removal equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Common questions about our home visit services
              </p>
            </FadeIn>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="mb-6 bg-neutral-50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-start">
                    <FaQuestionCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 ml-8">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Book Your Home Visit Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience professional ear wax removal in the comfort of your own home
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Book a Home Visit
                <FaCalendarAlt className="ml-2" />
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-white/10 inline-flex items-center justify-center"
              >
                Explore All Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 