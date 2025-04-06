'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaHeadphones, FaCalendarAlt, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function ExaminationPage() {
  const [benefitsRef, benefitsInView] = useInView({
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

  const examBenefits = [
    {
      icon: <FaSearch className="h-10 w-10 text-blue-600" />,
      title: "Early Problem Detection",
      description: "Identify potential ear issues before they become serious problems, potentially preventing hearing loss or other complications."
    },
    {
      icon: <FaHeadphones className="h-10 w-10 text-blue-600" />,
      title: "Improved Hearing",
      description: "Regular ear examinations ensure any ear wax buildup or other blockages are identified and addressed promptly."
    },
    {
      icon: <FaCheckCircle className="h-10 w-10 text-blue-600" />,
      title: "Peace of Mind",
      description: "Knowing that your ears are healthy and that any potential issues are being monitored by professionals."
    },
    {
      icon: <FaQuestionCircle className="h-10 w-10 text-blue-600" />,
      title: "Expert Advice",
      description: "Receive personalized recommendations for ear care and maintenance based on your specific ear health needs."
    }
  ];

  const faqs = [
    {
      question: "How often should I have an ear examination?",
      answer: "Most people should have an ear examination once a year, but those with recurring ear wax buildup, hearing aid users, or people with a history of ear problems may benefit from more frequent check-ups, such as every 6 months."
    },
    {
      question: "What does an ear examination involve?",
      answer: "Our comprehensive ear examination involves a visual inspection of your outer ear, examination of your ear canal and eardrum using an otoscope or microscope, and assessment of any symptoms you may be experiencing. We may also perform basic hearing tests if needed."
    },
    {
      question: "Will the ear examination hurt?",
      answer: "No, an ear examination should not cause any pain. Our specialists use gentle techniques and specialized equipment to ensure your comfort throughout the process."
    },
    {
      question: "How long does an ear examination take?",
      answer: "A standard ear examination typically takes about 15-20 minutes, but the appointment may last longer if treatment for ear wax removal is needed following the examination."
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 4.jpg" 
            alt="Ear examination procedure"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Ear Examination"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Comprehensive ear health assessment by experienced specialists
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
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Professional Ear Examination</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we offer thorough ear examinations to assess your ear health and identify any issues that may be affecting your hearing or comfort. Our specialists use advanced equipment to provide detailed insights into your ear condition.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Regular ear examinations are essential for maintaining good ear health and can help detect potential problems before they develop into more serious conditions. Whether you're experiencing symptoms or simply want to ensure your ears are in good health, our expert examinations provide valuable information and peace of mind.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our ear examinations can be performed as standalone appointments or as part of our ear wax removal services, ensuring you receive comprehensive care tailored to your needs.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Ear wax operation close up 2.jpg"
                  alt="Ear examination with specialized equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Examination Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">The Examination Process</h2>
              <p className="text-lg text-gray-700">
                Our ear examination process is designed to be thorough, comfortable, and informative, providing you with a clear understanding of your ear health.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Consultation</h3>
                <p className="text-gray-700">
                  We'll begin by discussing your ear health history, any symptoms you're experiencing, and your concerns or questions. This helps us tailor the examination to your specific needs and provides valuable context for our assessment.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Visual Examination</h3>
                <p className="text-gray-700">
                  Using an otoscope or microscope, our specialist will carefully examine your ear canal and eardrum. This allows us to check for ear wax buildup, infections, inflammation, or other issues that may be affecting your ear health. The examination is gentle and shouldn't cause any discomfort.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Assessment & Recommendations</h3>
                <p className="text-gray-700">
                  After the examination, we'll discuss our findings with you, explaining any issues we've identified and answering your questions. We'll then provide personalized recommendations, which may include ear wax removal, referral to another specialist if needed, or advice on ear care and maintenance.
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
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Benefits of Regular Ear Examinations</h2>
              <p className="text-lg text-gray-700">
                Regular ear examinations are an important part of your overall health maintenance and can provide numerous benefits.
              </p>
            </FadeIn>
          </div>
          
          <div 
            ref={benefitsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {examBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={benefitsInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-700 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Get an Examination */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">When to Get an Ear Examination</h2>
              <p className="text-lg text-gray-700 mb-6">
                While we recommend regular ear check-ups for everyone, there are certain situations when an ear examination is particularly important:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Hearing difficulties</span> - If you're experiencing muffled hearing or difficulty understanding conversations
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Ear discomfort</span> - Including fullness, pressure, itching, or pain in the ear
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Tinnitus</span> - Ringing, buzzing, or other noises in your ears
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Recurring ear wax buildup</span> - If you've had issues with excess ear wax in the past
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Hearing aid users</span> - Regular check-ups ensure your hearing aids function optimally
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Preventative care</span> - Even without symptoms, annual check-ups help maintain ear health
                  </span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 3.jpg"
                  alt="Specialist consulting with patient"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Common questions about ear examinations
              </p>
            </FadeIn>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="mb-6 bg-white rounded-lg p-6 shadow-md">
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
            <h2 className="text-3xl text-white mb-6">Book Your Ear Examination Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step toward better ear health with a professional examination
            </p>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Book an Appointment
              <FaCalendarAlt className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 