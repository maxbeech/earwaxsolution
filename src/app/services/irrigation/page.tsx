'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWater, FaCheck, FaTimes, FaQuestionCircle, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function IrrigationPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "Is ear irrigation painful?",
      answer: "The irrigation procedure should not be painful. You might feel a sensation of fullness and hear water flowing, but our specialists ensure the water pressure is comfortable and the temperature is appropriate to avoid discomfort."
    },
    {
      question: "How long does the irrigation procedure take?",
      answer: "The actual irrigation procedure typically takes 15-30 minutes, depending on the amount and hardness of the ear wax. Your entire appointment will last approximately 30-45 minutes, including consultation and aftercare advice."
    },
    {
      question: "Is ear irrigation suitable for everyone?",
      answer: "Ear irrigation is not suitable for people with certain conditions, including perforated eardrums, ear infections, recent ear surgery, or a history of ear problems. Our specialists will assess your suitability during your initial consultation."
    },
    {
      question: "Do I need to prepare my ears before an irrigation appointment?",
      answer: "Yes, for best results, we recommend using olive oil or sodium bicarbonate ear drops for 3-7 days before your appointment to soften the wax. This makes the irrigation process more effective and comfortable."
    }
  ];

  const suitableFor = [
    "People with soft to medium-firm ear wax",
    "Those who have used ear drops to pre-soften the wax",
    "Patients with straight ear canals",
    "Those who prefer traditional methods",
    "Patients without contraindications (like perforated eardrums)"
  ];

  const notSuitableFor = [
    "People with perforated eardrums",
    "Patients who have had ear surgery in the last 12 months",
    "Those with ear infections or inflammation",
    "People with a history of ear problems",
    "Patients with very hard, impacted wax (microsuction may be more effective)"
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 2.jpg" 
            alt="Ear irrigation procedure"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Ear Irrigation"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Gentle and effective ear wax removal using controlled water flow
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
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">What is Ear Irrigation?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Ear irrigation is a traditional method of ear wax removal that uses a controlled flow of warm water to gently flush out ear wax. This technique has been refined over the years to ensure maximum safety and comfort for patients.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we use modern electronic ear irrigation systems that provide precise control over water temperature and pressure. This allows us to effectively remove ear wax while minimizing any discomfort or risk.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                While microsuction is often our preferred method, ear irrigation remains an effective option for certain types of ear wax and patient preferences, particularly when the wax has been pre-softened with ear drops.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 5.jpg"
                  alt="Ear irrigation procedure"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">The Irrigation Process</h2>
              <p className="text-lg text-gray-700">
                Our ear irrigation procedure is carried out with the utmost care and precision to ensure your comfort and safety.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Initial Assessment</h3>
                <p className="text-gray-700">
                  Your specialist will first examine your ears using an otoscope to check the ear canal and assess if irrigation is appropriate. They'll explain the procedure and ensure you have no contraindications for irrigation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">The Procedure</h3>
                <p className="text-gray-700">
                  We use an electronic irrigation device with a speculum that directs a controlled flow of body-temperature water into your ear canal. The water flows around the wax and gently flushes it out. We use a basin to collect the water and wax as it exits your ear. The process may be repeated until the ear is clear.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Final Check & Aftercare</h3>
                <p className="text-gray-700">
                  After irrigation, your specialist will re-examine your ears to ensure all wax has been removed and your ear canal and eardrum look healthy. They'll provide aftercare advice, including how to dry your ears properly and prevent future buildup.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Suitability */}
      <section className="py-20 bg-blue-50" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Is Ear Irrigation Right For You?</h2>
              <p className="text-lg text-gray-700">
                Ear irrigation is an effective method for many patients, but it's not suitable for everyone. Our specialists will help determine if this method is appropriate for your needs.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <FaCheck className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Suitable For</h3>
              </div>
              <ul className="space-y-3">
                {suitableFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <FaTimes className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Not Suitable For</h3>
              </div>
              <ul className="space-y-3">
                {notSuitableFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Preparing for Ear Irrigation</h2>
              <p className="text-lg text-gray-700 mb-4">
                For the most effective and comfortable irrigation experience, we recommend some preparation before your appointment:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <FaWater className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Soften the wax</span> by using ear drops (olive oil or sodium bicarbonate) for 3-7 days before your appointment
                  </span>
                </li>
                <li className="flex items-start">
                  <FaWater className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Follow instructions</span> for ear drop application - typically 2-3 drops, twice daily
                  </span>
                </li>
                <li className="flex items-start">
                  <FaWater className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Avoid inserting</span> anything into your ear canal (like cotton buds) which can push wax deeper
                  </span>
                </li>
                <li className="flex items-start">
                  <FaWater className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Inform our specialists</span> about any ear problems, surgeries, or symptoms you've experienced
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                Proper preparation can make the irrigation process more effective and comfortable, often requiring less water pressure to remove the wax.
              </p>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 1.jpg"
                  alt="Preparing for ear irrigation"
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
                Common questions about ear irrigation and ear wax removal
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
            <h2 className="text-3xl text-white mb-6">Ready to Book Your Ear Irrigation?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule an appointment or to discuss if ear irrigation is right for you
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Book an Appointment
                <FaCalendarAlt className="ml-2" />
              </Link>
              <Link 
                href="/services/microsuction" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-white/10 inline-flex items-center justify-center"
              >
                Learn About Microsuction
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