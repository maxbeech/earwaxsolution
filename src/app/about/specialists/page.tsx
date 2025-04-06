'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserMd, FaCalendarAlt, FaPhoneAlt, FaCertificate, FaStethoscope } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function SpecialistsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialists = [
    {
      name: 'Hamed Qadiri',
      role: 'Ear Wax Removal Specialist',
      image: '/images/Ear Wax Removal Specialist - Hamed Qadiri.jpg',
      bio: 'Mr Hamed Qadiri is a highly experienced ear wax removal specialist with extensive training in microsuction and other advanced techniques. With years of dedicated practice, he has helped thousands of patients overcome hearing difficulties caused by ear wax buildup. His gentle approach and expert precision ensure comfortable and effective treatments for all patients.',
      qualifications: [
        'Certified Audiologist',
        'Specialist in Microsuction Ear Wax Removal',
        'Advanced Training in Ear Care'
      ]
    },
    {
      name: 'Holly Prior-Howe',
      role: 'Administrator - Horley',
      image: '/images/Administrator - Horley - Miss Holly Prior-Howe.jpg',
      bio: 'Miss Holly Prior-Howe is our dedicated administrator at the Horley clinic. With her warm personality and excellent organizational skills, Holly ensures that our clinic runs smoothly and efficiently. She is often the first point of contact for our patients, providing a friendly welcome and addressing any queries or concerns.',
      qualifications: [
        'Healthcare Administration',
        'Patient Care Coordination',
        'Medical Reception'
      ]
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
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
            alt="Ear Wax Solution Specialists"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Our Specialists"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Meet our team of experienced ear care professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Meet Our Expert Team</h2>
              <p className="text-lg text-gray-700">
                At Ear Wax Solution, our team consists of highly skilled professionals dedicated to providing exceptional ear care. With years of experience and specialized training, our specialists are committed to improving your hearing health through safe and effective ear wax removal techniques.
              </p>
            </FadeIn>
          </div>

          <div ref={ref} className="space-y-16">
            {specialists.map((specialist, index) => (
              <motion.div
                key={specialist.name}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-[400px] lg:h-auto">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-8">
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">{specialist.name}</h3>
                    <p className="text-blue-600 font-medium mb-6">{specialist.role}</p>
                    <p className="text-gray-700 mb-6">{specialist.bio}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Qualifications & Expertise</h4>
                      <ul className="space-y-2">
                        {specialist.qualifications.map((qualification, i) => (
                          <li key={i} className="flex items-start">
                            <FaCertificate className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{qualification}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Approach to Care</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our specialists are driven by a commitment to providing personalized, patient-centered care. We understand that each person's ear health is unique, which is why we take the time to:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <FaStethoscope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Listen carefully</span> to your concerns and symptoms to understand your specific needs
                  </span>
                </li>
                <li className="flex items-start">
                  <FaUserMd className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Conduct thorough examinations</span> using state-of-the-art equipment to accurately assess your condition
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Apply advanced techniques</span> such as microsuction to safely and effectively remove ear wax
                  </span>
                </li>
                <li className="flex items-start">
                  <FaPhoneAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    <span className="font-medium text-gray-900">Provide ongoing support</span> and advice to help you maintain optimal ear health
                  </span>
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 3.jpg"
                  alt="Ear wax specialist with patient"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Ongoing Professional Development</h2>
              <p className="text-lg text-gray-700">
                At Ear Wax Solution, we are committed to continuous learning and development. Our specialists regularly attend professional training courses and stay updated with the latest advancements in ear health and wax removal techniques to ensure we provide the best possible care to our patients.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Meet Our Specialists in Person</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book an appointment today and experience our expert care firsthand
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