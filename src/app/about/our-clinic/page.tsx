'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClinicMedical, FaMapMarkerAlt, FaCalendarAlt, FaWheelchair, FaParking } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function OurClinicPage() {
  const [featuresRef, featuresInView] = useInView({
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

  const clinicFeatures = [
    {
      icon: <FaClinicMedical className="h-10 w-10 text-blue-600" />,
      title: 'State-of-the-Art Equipment',
      description: 'Our clinic is equipped with the latest technology for precise ear wax removal and ear health assessments.'
    },
    {
      icon: <FaWheelchair className="h-10 w-10 text-blue-600" />,
      title: 'Accessibility',
      description: 'Our facility is designed to be accessible for all patients, with wheelchair access and accommodations for those with special needs.'
    },
    {
      icon: <FaParking className="h-10 w-10 text-blue-600" />,
      title: 'Convenient Parking',
      description: 'We offer ample parking space for our patients, making your visit stress-free and convenient.'
    },
    {
      icon: <FaMapMarkerAlt className="h-10 w-10 text-blue-600" />,
      title: 'Central Location',
      description: 'Our clinic is conveniently located with easy access from public transportation routes.'
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative hero-section overflow-hidden">
        {/* Background Image - z-index 1 */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <ParallaxImage 
            src="/images/Specialist smiling with patient 2.jpg" 
            alt="Ear Wax Solution Clinic"
            speed={-5} /* Reduced speed */
          />
        </div>
        {/* Overlay - z-index 2 */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }}></div>
        {/* Content - z-index 3 */}
        <div className="absolute inset-0 flex items-center" style={{ zIndex: 3 }}>
          <div className="container mx-auto px-4 hero-content">
            <HeroHeading
              title="Our Clinic"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                A comfortable environment for exceptional ear care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Welcome to Our Clinic</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we've designed our clinic with your comfort and care in mind. Our modern facilities provide a warm, welcoming environment where you can receive the highest standard of ear care.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We understand that ear problems can be uncomfortable and sometimes distressing, which is why we've created a calm, relaxing space where you can feel at ease during your treatment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our clinic in Horley, Surrey is equipped with state-of-the-art technology, ensuring that our specialists can provide the most effective and comfortable ear wax removal procedures available.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 5.jpg"
                  alt="Ear Wax Solution Clinic Reception"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Clinic Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've designed our clinic with your needs in mind, providing a comfortable and professional environment for your ear care treatment.
              </p>
            </FadeIn>
          </div>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {clinicFeatures.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-neutral-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Rooms */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Treatment Rooms</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Designed for your comfort and equipped with advanced technology for the best possible care.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/Ear wax operation close up 2.jpg"
                    alt="Treatment Room - Microsuction Procedure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Microsuction Room</h3>
                  <p className="text-gray-700">
                    Our specialized microsuction treatment rooms are equipped with advanced microscopes and suction equipment, allowing our specialists to perform precise and comfortable ear wax removal procedures.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/Specialist smiling with patient 4.jpg"
                    alt="Ear Examination Room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Consultation Room</h3>
                  <p className="text-gray-700">
                    Our comfortable consultation rooms provide a private space for thorough ear examinations and discussions about your ear health, ensuring you receive personalized care and attention.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 1.jpg"
                  alt="Ear care specialist with patient"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Planning Your Visit</h2>
              <p className="text-lg text-gray-700 mb-4">
                We're committed to making your visit to our clinic as smooth and comfortable as possible. Here's what you can expect when you visit Ear Wax Solution:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Warm welcome from our friendly reception staff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Brief wait in our comfortable reception area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Thorough consultation with one of our ear care specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Gentle and effective treatment using the latest techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Aftercare advice and follow-up arrangements if needed</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                  Book an Appointment
                  <FaCalendarAlt className="ml-2" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Ready to Visit Our Clinic?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience our state-of-the-art facilities and expert care. Book your appointment today!
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
                href="/locations" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-medium transition-all hover:bg-white/10 inline-flex items-center justify-center"
              >
                Find Our Clinic
                <FaMapMarkerAlt className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 