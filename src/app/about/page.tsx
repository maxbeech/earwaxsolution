'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaUserMd, FaClinicMedical, FaAward } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function AboutPage() {
  const [valueRef, valueInView] = useInView({
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

  const valueItems = [
    {
      icon: <FaUserMd className="h-10 w-10 text-blue-600" />,
      title: 'Expert Specialists',
      description: 'Our team of experienced professionals is dedicated to providing the highest standard of ear care with personalized attention.'
    },
    {
      icon: <FaClinicMedical className="h-10 w-10 text-blue-600" />,
      title: 'Advanced Technology',
      description: 'We use the latest equipment and techniques for safe, effective, and comfortable ear wax removal procedures.'
    },
    {
      icon: <FaCheckCircle className="h-10 w-10 text-blue-600" />,
      title: 'Patient-Centered Care',
      description: 'Your comfort and well-being are our top priorities. We tailor our services to meet your individual needs and concerns.'
    },
    {
      icon: <FaAward className="h-10 w-10 text-blue-600" />,
      title: 'Trusted Service',
      description: 'With years of experience and countless satisfied patients, we have built a reputation for excellence in ear wax removal.'
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 3.jpg" 
            alt="Ear Wax Solution specialist with patient"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="About Ear Wax Solution"
              className="text-5xl font-medium text-white max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Welcome to Ear Wax Solution</h2>
              <p className="text-lg text-gray-700 mb-4">
                Ear Wax Solution is the leading clinic for ear wax microsuction treatment in Surrey and London. Our team of experienced professionals is dedicated to providing a personal and friendly approach to ear care.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From ear check-ups to expert advice, we tailor our services to meet your individual needs. Our knowledgeable and highly trained staff can offer advice on all aspects of ear health and will provide a safe and comfortable experience for all our patients.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in microsuction ear wax removal in and around Horley, Crawley, Reigate, East Grinstead, and various London areas, offering both in-clinic and home visit services.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                  Get in Touch
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Ear wax operation close up 1.jpg"
                  alt="Ear Wax Solution Procedure"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Ear Wax Solution, we're dedicated to providing personalized ear wax removal treatment with a focus on customer care and advanced techniques.
              </p>
            </FadeIn>
          </div>
          
          <div 
            ref={valueRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valueItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={valueInView ? "visible" : "hidden"}
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

      {/* How We Can Help You */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 1.jpg"
                  alt="Ear care specialist with patient"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">How We Can Help You</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our team is passionate about helping those who are facing hearing loss feel more comfortable and confident in their everyday lives. We understand that each patient is different, which is why we take the time to work with you to develop a customized treatment plan that addresses your unique needs.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With our safe and gentle microsuction technique, you can expect a comfortable and effective ear wax removal experience. This method is the same technique used by Ear, Nose and Throat specialists and is superior to other methods of wax removal such as water syringing (irrigation) and ear candling.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you've been referred by a specialist or are self-referring, we are here to help you with your ear wax removal needs.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experts have been carefully selected for their extensive experience and commitment to patient satisfaction.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/Ear Wax Removal Specialist - Hamed Qadiri.jpg"
                    alt="Hamed Qadiri - Ear Wax Removal Specialist"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Hamed Qadiri</h3>
                  <p className="text-blue-600 font-medium mb-4">Ear Wax Removal Specialist</p>
                  <p className="text-gray-700">
                    Mr Hamed Qadiri and his team of professionals at Ear Wax Solution use specialized techniques like microsuction to remove earwax safely and efficiently. Our team understands that each client has unique earwax problems and requires customized care.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/Administrator - Horley - Miss Holly Prior-Howe.jpg"
                    alt="Holly Prior-Howe - Administrator"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Holly Prior-Howe</h3>
                  <p className="text-blue-600 font-medium mb-4">Administrator - Horley</p>
                  <p className="text-gray-700">
                    We pride ourselves on providing personalised care to each and every one of our patients. Our administrator based at Horley clinic has years of experience and is dedicated to ensuring that patients are comfortable during their visit.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Ready to Experience Better Hearing?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the Ear Wax Solution difference!
            </p>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Book Now
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 