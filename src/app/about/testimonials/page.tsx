'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar, FaCalendarAlt } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Horley',
      rating: 5,
      quote: 'I was suffering from blocked ears for weeks until I visited Ear Wax Solution. The microsuction treatment was quick, painless, and incredibly effective. I could hear perfectly again immediately after the procedure. The specialist was professional and made me feel at ease throughout. Highly recommended!',
      service: 'Microsuction Ear Wax Removal'
    },
    {
      name: 'James Wilson',
      location: 'Crawley',
      rating: 5,
      quote: 'After years of struggling with ear wax build-up, I finally found Ear Wax Solution. Their specialist took the time to explain the procedure and answer all my questions. The microsuction process was much more comfortable than the syringing I had experienced elsewhere, and the results were fantastic. I\'ll definitely be returning for my annual check-up.',
      service: 'Microsuction Ear Wax Removal'
    },
    {
      name: 'Emma Thompson',
      location: 'Reigate',
      rating: 5,
      quote: 'The team at Ear Wax Solution provided exceptional service from start to finish. The clinic was clean and modern, and the staff were friendly and knowledgeable. My ear wax removal procedure was quick, painless, and completely restored my hearing. I wouldn\'t hesitate to recommend them to anyone experiencing ear wax issues.',
      service: 'Ear Wax Removal'
    },
    {
      name: 'David Brown',
      location: 'East Grinstead',
      rating: 5,
      quote: 'I had been experiencing muffled hearing for months when my GP suggested I might have ear wax buildup. The team at Ear Wax Solution were able to see me quickly, and the treatment was remarkable. In just 20 minutes, my hearing was completely restored. The specialist was professional and made the whole experience very comfortable.',
      service: 'Ear Examination and Wax Removal'
    },
    {
      name: 'Patricia Clark',
      location: 'London',
      rating: 5,
      quote: 'As someone who has always had issues with ear wax, I\'ve tried many different removal methods. The microsuction technique used by Ear Wax Solution is by far the most comfortable and effective I\'ve experienced. The staff were friendly and professional, making what could be an uncomfortable procedure actually quite pleasant.',
      service: 'Microsuction Treatment'
    },
    {
      name: 'Robert Phillips',
      location: 'Horley',
      rating: 5,
      quote: 'I was nervous about having my ears cleaned professionally, but the team at Ear Wax Solution put me at ease immediately. They clearly explained the procedure, and the specialist was gentle and reassuring throughout. I was amazed at how quickly and painlessly they removed the wax that had been causing me problems for weeks.',
      service: 'Ear Wax Removal'
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative hero-section overflow-hidden">
        {/* Background Image - z-index 1 */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <ParallaxImage 
            src="/images/Specialist smiling with patient 1.jpg" 
            alt="Happy Patient Testimonial"
            speed={-5} /* Reduced speed */
          />
        </div>
        {/* Overlay - z-index 2 */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }}></div>
        {/* Content - z-index 3 */}
        <div className="absolute inset-0 flex items-center" style={{ zIndex: 3 }}>
          <div className="container mx-auto px-4 hero-content">
            <HeroHeading
              title="Patient Testimonials"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Read what our satisfied patients have to say about their experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">What Our Patients Say</h2>
              <p className="text-lg text-gray-700">
                At Ear Wax Solution, patient satisfaction is our priority. We're proud to share the experiences of those who have benefited from our services. These testimonials reflect our commitment to providing exceptional care and effective treatments for ear wax removal.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div
                  ref={ref}
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeInUpVariants}
                  className="bg-neutral-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <FaQuoteLeft className="text-blue-600/20 text-4xl" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 h-5 w-5" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <p className="text-blue-600 text-sm mt-2">{testimonial.service}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Patient Success Stories</h2>
              <p className="text-lg text-gray-700">
                Our patients experience life-changing results with our ear wax removal services. Many report immediate improvement in hearing and relief from discomfort.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Patient Success Rates</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Patient Satisfaction</span>
                      <span className="text-blue-600 font-medium">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Successful Treatments</span>
                      <span className="text-blue-600 font-medium">99%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "99%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Would Recommend Us</span>
                      <span className="text-blue-600 font-medium">97%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "97%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="relative h-[350px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 5.jpg"
                  alt="Happy patient after treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Share Your Experience</h2>
              <p className="text-lg text-gray-700 mb-8">
                We value your feedback! If you've recently visited Ear Wax Solution, we'd love to hear about your experience. Your testimonial helps us continue to improve our services and helps others who may be looking for ear wax removal solutions.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Submit Your Testimonial
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Experience Our Care for Yourself</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our many satisfied patients and book your appointment today
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