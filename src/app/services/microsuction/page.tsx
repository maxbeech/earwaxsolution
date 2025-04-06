'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaTimes, FaQuestionCircle, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function MicrosuctionPage() {
  const [ref, inView] = useInView({
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

  const advantages = [
    "No water used, making it suitable for those with perforated eardrums",
    "Minimal discomfort during the procedure",
    "Clear view of the ear canal for the specialist, ensuring safety",
    "Quick procedure, typically lasting 15-30 minutes",
    "Immediate relief from blockage symptoms",
    "Less messy than irrigation methods"
  ];

  const faqs = [
    {
      question: "Is microsuction ear wax removal painful?",
      answer: "Most patients find microsuction comfortable with minimal discomfort. You may hear some loud sounds as the suction device operates close to your eardrum, but the procedure itself should not be painful."
    },
    {
      question: "How long does a microsuction treatment take?",
      answer: "A typical microsuction appointment lasts between 30-45 minutes, with the actual procedure taking 15-30 minutes depending on the amount of ear wax present."
    },
    {
      question: "Is microsuction suitable for everyone?",
      answer: "Microsuction is safe for most people, including those with perforated eardrums or who have had previous ear surgery. However, your specialist will assess your ear health before proceeding to ensure it's the right method for you."
    },
    {
      question: "Do I need to use ear drops before my appointment?",
      answer: "While not always necessary, using olive oil or sodium bicarbonate ear drops for 3-5 days before your appointment can help soften the wax, potentially making the procedure quicker and more comfortable."
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Ear wax operation close up 1.jpg" 
            alt="Microsuction ear wax removal procedure"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Microsuction Ear Wax Removal"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                The gold standard in ear wax removal - safe, effective, and comfortable
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
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">What is Microsuction?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Microsuction is a precise, gentle ear wax removal technique that uses a microscope to provide a clear view of the ear canal and a fine, low-pressure suction device to remove ear wax. This method is widely considered the gold standard for ear wax removal.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Unlike traditional methods like syringing or irrigation, microsuction doesn't use water, making it safer and more comfortable for patients. It's particularly suitable for those with perforated eardrums, ear infections, or a history of ear surgery.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At Ear Wax Solution, our specialists are highly trained in microsuction techniques, ensuring you receive the safest and most effective treatment for ear wax removal.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Ear wax operation close up 2.jpg"
                  alt="Microsuction procedure closeup"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">The Microsuction Process</h2>
              <p className="text-lg text-gray-700">
                Our microsuction procedure is designed to be quick, comfortable, and effective. Here's what to expect during your appointment.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Initial Assessment</h3>
                <p className="text-gray-700">
                  Your specialist will first examine your ears using an otoscope to assess the amount of wax and determine if microsuction is appropriate. They'll explain the procedure and address any questions or concerns.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">The Procedure</h3>
                <p className="text-gray-700">
                  Using a microscope or specialized loupes for a clear view, the specialist will gently insert a small suction device into your ear canal. This precisely removes wax without touching the delicate ear canal or eardrum. You'll hear the suction sound and may feel a slight sensation, but it shouldn't be painful.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Final Check & Advice</h3>
                <p className="text-gray-700">
                  After removing the wax, your specialist will re-examine your ears to ensure all blockages are cleared. They'll provide aftercare advice and recommendations for preventing future buildup, potentially including ear drops or regular maintenance appointments.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 3.jpg"
                  alt="Patient after microsuction procedure"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Advantages of Microsuction</h2>
              <p className="text-lg text-gray-700 mb-6">
                Microsuction offers numerous benefits over traditional ear wax removal methods, making it our preferred technique at Ear Wax Solution:
              </p>
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Microsuction vs. Other Methods</h2>
              <p className="text-lg text-gray-700">
                Understanding the differences between ear wax removal methods can help you make an informed choice about your treatment.
              </p>
            </FadeIn>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse" ref={ref}>
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left text-gray-900 font-medium border">Feature</th>
                  <th className="p-4 text-left text-gray-900 font-medium border">Microsuction</th>
                  <th className="p-4 text-left text-gray-900 font-medium border">Water Irrigation</th>
                  <th className="p-4 text-left text-gray-900 font-medium border">Ear Candling</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr
                  custom={0}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                >
                  <td className="p-4 border text-gray-900 font-medium">Safety</td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      Very safe, direct visualization
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaQuestionCircle className="text-yellow-500 mr-2" />
                      Generally safe but risk of ear drum damage
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaTimes className="text-red-500 mr-2" />
                      Not recommended by medical professionals
                    </div>
                  </td>
                </motion.tr>
                <motion.tr
                  custom={1}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  className="bg-gray-50"
                >
                  <td className="p-4 border text-gray-900 font-medium">Comfort</td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      Minimal discomfort
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaQuestionCircle className="text-yellow-500 mr-2" />
                      Can be uncomfortable
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaQuestionCircle className="text-yellow-500 mr-2" />
                      Comfortable but ineffective
                    </div>
                  </td>
                </motion.tr>
                <motion.tr
                  custom={2}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                >
                  <td className="p-4 border text-gray-900 font-medium">Effectiveness</td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      Highly effective for all types of wax
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      Effective for soft wax
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaTimes className="text-red-500 mr-2" />
                      No scientific evidence of effectiveness
                    </div>
                  </td>
                </motion.tr>
                <motion.tr
                  custom={3}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  className="bg-gray-50"
                >
                  <td className="p-4 border text-gray-900 font-medium">Suitable for perforated eardrums</td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      Yes
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaTimes className="text-red-500 mr-2" />
                      No
                    </div>
                  </td>
                  <td className="p-4 border text-gray-700">
                    <div className="flex items-center">
                      <FaTimes className="text-red-500 mr-2" />
                      No
                    </div>
                  </td>
                </motion.tr>
              </tbody>
            </table>
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
                Get answers to common questions about microsuction ear wax removal
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
            <h2 className="text-3xl text-white mb-6">Ready to Experience the Benefits of Microsuction?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today for safe, effective ear wax removal using the gold standard microsuction technique
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