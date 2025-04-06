'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeadphones, FaRegLightbulb, FaLeaf, FaCalendarAlt, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function HearingHealthPage() {
  const [tipsRef, tipsInView] = useInView({
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

  const healthTips = [
    {
      icon: <FaShieldAlt className="h-10 w-10 text-blue-600" />,
      title: "Protection",
      description: "Use ear protection when exposed to loud noises. Noise-induced hearing loss is preventable with proper protection like earplugs or ear defenders."
    },
    {
      icon: <FaRegLightbulb className="h-10 w-10 text-blue-600" />,
      title: "Awareness",
      description: "Be mindful of warning signs of hearing problems, such as difficulty understanding conversations or needing to turn up the volume on devices."
    },
    {
      icon: <FaLeaf className="h-10 w-10 text-blue-600" />,
      title: "Natural Care",
      description: "Avoid using cotton buds or other objects to clean your ears, as these can push wax deeper and potentially damage your ear canal or eardrum."
    },
    {
      icon: <FaHeadphones className="h-10 w-10 text-blue-600" />,
      title: "Volume Control",
      description: "Follow the 60/60 rule when using headphones: listen at no more than 60% of maximum volume for no more than 60 minutes at a time."
    }
  ];

  const faqs = [
    {
      question: "How can I tell if I have hearing loss?",
      answer: "Common signs of hearing loss include frequently asking people to repeat themselves, difficulty following conversations in noisy environments, turning up the volume on devices higher than others prefer, and feeling that people are mumbling. If you experience these symptoms, we recommend booking a hearing assessment."
    },
    {
      question: "Can ear wax cause hearing loss?",
      answer: "Yes, a buildup of ear wax can block sound from reaching your eardrum, causing temporary hearing loss. This type of hearing loss, called conductive hearing loss, can usually be resolved by having the wax professionally removed."
    },
    {
      question: "How often should I have my hearing checked?",
      answer: "Adults should have their hearing checked at least once every 10 years until age 50, and then every 3 years after that. However, if you work in a noisy environment, have a family history of hearing loss, or notice changes in your hearing, more frequent checks are recommended."
    },
    {
      question: "What lifestyle factors can affect my hearing health?",
      answer: "Several factors can impact hearing health, including exposure to loud noises (at work or during recreation), smoking, certain medications, unmanaged diabetes or high blood pressure, and a diet high in saturated fats. Making positive lifestyle changes can help protect your hearing."
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 5.jpg" 
            alt="Hearing health consultation"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Hearing Health Advice"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Expert guidance for maintaining and improving your hearing wellbeing
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
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Preserving Your Hearing Health</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we believe that good hearing health is an essential component of overall wellbeing. Beyond our ear wax removal services, we're committed to providing you with comprehensive advice and support to help you maintain healthy ears and optimal hearing.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our hearing health service encompasses personalized advice, preventative care recommendations, and guidance on recognizing and addressing potential hearing issues. Our specialists are trained to identify early signs of hearing problems and can provide appropriate referrals when necessary.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're concerned about protecting your hearing, managing existing conditions, or simply want to maintain good ear health, our team is here to help you navigate your hearing health journey.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 3.jpg"
                  alt="Hearing health consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Hearing Health Approach</h2>
              <p className="text-lg text-gray-700">
                We take a holistic, patient-centered approach to hearing health, focusing on education, prevention, and personalized care.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <FaHeadphones className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-700">
                  Our specialists conduct thorough ear examinations to assess your ear health and identify any issues that may affect your hearing. We take the time to understand your lifestyle, occupation, medical history, and any concerns you may have.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <FaRegLightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Education</h3>
                <p className="text-gray-700">
                  We believe that understanding your ear health is key to maintaining it. Our specialists provide clear, jargon-free explanations about how your ears work, what affects your hearing, and how to recognize potential issues early.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <FaShieldAlt className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Personalized Guidance</h3>
                <p className="text-gray-700">
                  Based on your assessment, we provide tailored advice on protecting and maintaining your hearing health. This may include recommendations for ear protection, lifestyle modifications, ear cleaning practices, or referrals to audiologists or ENT specialists if needed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hearing Health Tips */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Essential Hearing Health Tips</h2>
              <p className="text-lg text-gray-700">
                Simple steps you can take to protect and maintain your hearing health for years to come.
              </p>
            </FadeIn>
          </div>
          
          <div 
            ref={tipsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {healthTips.map((tip, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={tipsInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="flex justify-center mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 text-center">{tip.title}</h3>
                <p className="text-gray-700 text-center">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognizing Hearing Issues */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Recognizing Hearing Issues</h2>
              <p className="text-lg text-gray-700 mb-6">
                Being aware of the signs of hearing problems can help you seek appropriate care early. Watch for these common indicators:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaQuestionCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Difficulty following conversations</span>, especially in noisy environments or group settings
                  </span>
                </li>
                <li className="flex items-start">
                  <FaQuestionCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Frequently asking others to repeat</span> themselves or speak more slowly
                  </span>
                </li>
                <li className="flex items-start">
                  <FaQuestionCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Turning up the volume</span> on devices higher than others prefer
                  </span>
                </li>
                <li className="flex items-start">
                  <FaQuestionCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Ringing, buzzing, or humming</span> in your ears (tinnitus)
                  </span>
                </li>
                <li className="flex items-start">
                  <FaQuestionCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Feeling dizzy or experiencing balance issues</span>, which could be related to inner ear problems
                  </span>
                </li>
                <li className="flex items-start">
                  <FaQuestionCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Feeling that your ears are blocked</span> or that sounds are muffled
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mt-6">
                If you experience any of these symptoms, we recommend booking an appointment for an ear examination. Early intervention is key to addressing many hearing issues effectively.
              </p>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 1.jpg"
                  alt="Patient consultation for hearing health"
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
                Common questions about hearing health and ear care
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
            <h2 className="text-3xl text-white mb-6">Take Control of Your Hearing Health</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a consultation with our specialists for personalized hearing health advice
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Book a Consultation
                <FaCalendarAlt className="ml-2" />
              </Link>
              <Link 
                href="/services/examination" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-white/10 inline-flex items-center justify-center"
              >
                Learn About Ear Examinations
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