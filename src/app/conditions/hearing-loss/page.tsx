'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function HearingLossPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 1.jpg" 
            alt="Ear Wax Solution specialist treating hearing loss"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Hearing Loss & Ear Wax"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Understanding how ear wax affects your hearing and what we can do to help
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Hearing Loss and Ear Wax</h2>
              <p className="text-lg text-gray-700 mb-4">
                Hearing loss affects millions of people worldwide and can significantly impact quality of life. While many causes of hearing loss are permanent, some are temporary and easily treatable. One of the most common causes of temporary hearing loss is ear wax buildup.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Ear wax, or cerumen, is a natural substance produced by glands in the ear canal that helps protect and lubricate the ear. However, when too much wax accumulates or becomes impacted, it can block the ear canal and cause hearing difficulties.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we specialize in the safe and effective removal of ear wax to help restore your hearing and improve your comfort. Our professional ear wax removal services can provide immediate relief from temporary hearing loss caused by wax buildup.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Symptoms and Signs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Ear wax operation close up 1.jpg"
                  alt="Ear wax impaction causing hearing loss"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Signs that Ear Wax is Affecting Your Hearing</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Muffled or Dulled Hearing</h3>
                    <p className="text-gray-600">Sounds seem distant or unclear, as if you're wearing earplugs or hearing underwater.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Gradual Hearing Reduction</h3>
                    <p className="text-gray-600">A slow decline in hearing ability over days or weeks, often more noticeable in one ear.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Feeling of Fullness</h3>
                    <p className="text-gray-600">A sensation that your ear is plugged or full, often accompanied by pressure.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Tinnitus</h3>
                    <p className="text-gray-600">Ringing, buzzing, or humming sounds in the ear that weren't there before.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How Ear Wax Causes Hearing Loss */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 text-center">How Ear Wax Causes Hearing Loss</h2>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-lg text-gray-700 mb-6">
                  Ear wax can cause hearing loss in several ways:
                </p>
                <ol className="space-y-4 list-decimal pl-6 text-gray-700">
                  <li>
                    <span className="font-medium text-gray-900">Physical Blockage:</span> When ear wax accumulates, it can partially or completely block the ear canal, preventing sound waves from reaching the eardrum. This creates a physical barrier to sound transmission, resulting in conductive hearing loss.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Eardrum Pressure:</span> Impacted ear wax can press against the eardrum, reducing its ability to vibrate freely in response to sound. This dampens the transmission of sound vibrations to the middle and inner ear.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Changes in Ear Canal Resonance:</span> The ear canal naturally amplifies certain sound frequencies. When wax alters the shape or volume of the ear canal, it changes these resonant properties, affecting how sounds are perceived.
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Secondary Effects:</span> In some cases, impacted ear wax can lead to inflammation or infection, which can cause additional hearing problems beyond the physical blockage.
                  </li>
                </ol>
                <p className="text-lg text-gray-700 mt-6">
                  The good news is that hearing loss caused by ear wax buildup is usually temporary and can be fully resolved with proper removal of the wax. This type of hearing loss is called conductive hearing loss, which means that sound cannot efficiently travel through the outer or middle ear to reach the inner ear.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Treatment Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Treatment Approach</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  At Ear Wax Solution, we use safe, effective methods to remove ear wax and restore your hearing. Our approach includes:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Professional Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    We begin with a thorough examination of your ears using specialized equipment to determine the extent of the wax buildup and the best removal method.
                  </p>
                  <p className="text-gray-700">
                    Our specialists can differentiate between hearing loss caused by ear wax and other conditions, ensuring you receive the appropriate care.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Microsuction</h3>
                  <p className="text-gray-700 mb-4">
                    Our primary method for removing ear wax is microsuction, a safe and gentle technique that uses a small vacuum to precisely remove wax without pushing it further into the ear canal.
                  </p>
                  <p className="text-gray-700">
                    Microsuction is performed under direct visualization, allowing our specialists to see exactly what they're removing, minimizing risks and maximizing effectiveness.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Manual Removal</h3>
                  <p className="text-gray-700 mb-4">
                    For certain types of wax or specific ear anatomies, we may use specialized instruments for manual removal, always working with the utmost care and precision.
                  </p>
                  <p className="text-gray-700">
                    This technique is particularly useful for removing very hard or impacted wax that may be difficult to remove with microsuction alone.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">Aftercare Guidance</h3>
                  <p className="text-gray-700 mb-4">
                    Following treatment, we provide advice on how to maintain ear health and prevent future buildup, including safe cleaning practices and preventive measures.
                  </p>
                  <p className="text-gray-700">
                    We can also recommend suitable ear drops or other products to help manage ear wax production if you're prone to excessive buildup.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Professional Help */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">When to Seek Professional Help</h2>
                <p className="text-lg text-gray-700 mb-4">
                  If you're experiencing hearing loss or other ear-related symptoms, it's important to seek professional help rather than attempting to remove ear wax yourself. At-home removal attempts can push wax deeper into the ear canal, potentially causing further problems.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  You should consult a professional for ear wax removal if:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You experience sudden or significant hearing loss</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You have recurrent ear wax buildup</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You feel pain, fullness, or pressure in your ear</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You notice discharge from your ear</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You have a history of ear problems or surgeries</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-blue-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-medium mb-4">Important to Know</h3>
                  <p className="mb-6 opacity-90">
                    While ear wax is a common cause of temporary hearing loss, there are many other conditions that can affect your hearing. If ear wax removal doesn't improve your hearing, or if you have other symptoms, we may recommend consulting an audiologist or ENT specialist for further evaluation.
                  </p>
                  <div className="border-t border-white/30 pt-6 mt-6">
                    <h4 className="text-xl font-medium mb-3">Ready to Improve Your Hearing?</h4>
                    <p className="mb-6 opacity-90">
                      Don't let ear wax affect your hearing and quality of life. Our professional ear wax removal services can help you hear clearly again.
                    </p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-all duration-300"
                    >
                      Book an Appointment
                      <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Related Conditions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Related Conditions</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Ear wax buildup can lead to or be associated with other ear conditions. Learn more about these related issues:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Link href="/conditions/blocked-ears" className="group">
                  <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Blocked Ears</h3>
                      <p className="text-gray-600 mb-4">
                        Understanding the causes and symptoms of blocked ears, and how they relate to hearing loss.
                      </p>
                      <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Learn more
                        <FaArrowRight className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Link href="/conditions/tinnitus" className="group">
                  <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Tinnitus</h3>
                      <p className="text-gray-600 mb-4">
                        How ear wax buildup can contribute to ringing, buzzing, or other noises in the ear, and treatment options.
                      </p>
                      <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Learn more
                        <FaArrowRight className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Link href="/conditions/eustachian-tube-dysfunction" className="group">
                  <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Eustachian Tube Dysfunction</h3>
                      <p className="text-gray-600 mb-4">
                        The relationship between ear pressure, ear wax, and how they can affect your hearing.
                      </p>
                      <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                        Learn more
                        <FaArrowRight className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Don't Let Ear Wax Affect Your Hearing</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our professional ear wax removal services can help restore your hearing and improve your quality of life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Book an Appointment
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                href="/services" 
                className="bg-transparent hover:bg-blue-700 text-white border border-white px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 