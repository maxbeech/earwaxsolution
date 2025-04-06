'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInfoCircle, FaPoundSign, FaUserMd, FaFileAlt, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function PatientInfoPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const infoSections = [
    {
      title: "Before Your Appointment",
      description: "Learn how to prepare for your ear wax removal appointment to ensure the best possible results.",
      icon: <FaInfoCircle className="h-12 w-12 text-blue-600" />,
      link: "/patient-info/before-appointment"
    },
    {
      title: "Pricing",
      description: "Transparent information about our pricing structure for all our ear wax removal services.",
      icon: <FaPoundSign className="h-12 w-12 text-blue-600" />,
      link: "/patient-info/pricing"
    },
    {
      title: "Insurance & Referrals",
      description: "Information about working with insurance providers and obtaining referrals for treatment.",
      icon: <FaUserMd className="h-12 w-12 text-blue-600" />,
      link: "/patient-info/insurance"
    },
    {
      title: "Aftercare",
      description: "Important guidelines for caring for your ears after an ear wax removal procedure.",
      icon: <FaFileAlt className="h-12 w-12 text-blue-600" />,
      link: "/patient-info/aftercare"
    },
    {
      title: "Frequently Asked Questions",
      description: "Answers to common questions about ear wax, our procedures, and what to expect.",
      icon: <FaQuestionCircle className="h-12 w-12 text-blue-600" />,
      link: "/patient-info/faqs"
    }
  ];

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

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 4.jpg" 
            alt="Patient information"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Patient Information"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Important information to help you get the most from our services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Your Guide to Ear Wax Solution</h2>
              <p className="text-lg text-gray-700 mb-6">
                We believe that well-informed patients get the best results from their treatment. On this page, you'll find everything you need to know about our services, from preparing for your appointment to aftercare and pricing information.
              </p>
              <p className="text-lg text-gray-700">
                If you have any questions that aren't answered here, please don't hesitate to <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">contact us</Link>.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoSections.map((section, index) => (
              <motion.div
                key={section.title}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 text-center">{section.title}</h3>
                  <p className="text-gray-700 mb-6 text-center">{section.description}</p>
                  <div className="text-center">
                    <Link 
                      href={section.link}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                    >
                      Learn more
                      <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Your Patient Experience</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we're committed to providing a positive, comfortable experience for all our patients. From the moment you book your appointment to your aftercare, we prioritize your well-being and satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our specialists take the time to understand your specific needs and concerns, explaining each step of the process clearly and answering any questions you may have. We use the most advanced, gentle techniques to ensure your comfort throughout your treatment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our clinics are designed to provide a relaxing, professional environment, and our home visit service brings the same level of care directly to you if you prefer treatment in your own space.
              </p>
              <Link 
                href="/about/testimonials" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
              >
                Read patient testimonials
                <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 3.jpg"
                  alt="Positive patient experience"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Commitment to Care */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 5.jpg"
                  alt="Professional ear care"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Commitment to Your Care</h2>
              <p className="text-lg text-gray-700 mb-4">
                We understand that ear issues can be uncomfortable and sometimes distressing. That's why we're dedicated to providing prompt, effective solutions with the highest standards of care.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our specialists are continuously trained in the latest techniques and technologies in ear wax removal to ensure we offer the most effective, comfortable procedures available.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We take the time to provide comprehensive advice on ear health and prevention of future issues, helping you maintain optimal ear health long after your treatment.
              </p>
              <Link 
                href="/services" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
              >
                Explore our services
                <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Ready to Book Your Appointment?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience professional ear wax removal with our expert specialists
            </p>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Book an Appointment
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 