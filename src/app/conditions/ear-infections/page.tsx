'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function EarInfectionsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Doctor examining ear 1.jpg" 
            alt="Doctor examining ear infection"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Ear Infections"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Understanding the connection between ear wax and infections
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Ear Infections and Ear Wax</h2>
              <p className="text-lg text-gray-700 mb-4">
                Ear infections are a common health issue affecting people of all ages, though they're particularly prevalent in children. While most ear infections are caused by bacteria or viruses, many people don't realize that ear wax plays an important role in ear health and can influence the development of infections.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Ear wax (cerumen) is naturally produced by the body to protect the ear canal from dust, bacteria, and other foreign particles. It also helps maintain the ear canal's acidity level, which inhibits bacterial growth. However, when ear wax becomes impacted or excessive, it can sometimes contribute to ear infections.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we specialize in the safe removal of ear wax to help maintain ear health and potentially reduce the risk of certain types of ear infections.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Types of Ear Infections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Types of Ear Infections</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  There are three main types of ear infections, each affecting different parts of the ear:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Outer Ear Infections</h3>
                  <p className="text-gray-700 mb-4">
                    Also known as Otitis Externa or "swimmer's ear," these infections affect the ear canal from the eardrum to the outside of the ear.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Ear wax connection:</span> Excessive ear wax or improper cleaning can damage the skin lining the ear canal, making it more susceptible to infection.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Middle Ear Infections</h3>
                  <p className="text-gray-700 mb-4">
                    Known as Otitis Media, these infections occur behind the eardrum in the middle ear space and are most common in children.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Ear wax connection:</span> While not directly caused by ear wax, impacted wax can sometimes make it harder to diagnose these infections or complicate treatment.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Inner Ear Infections</h3>
                  <p className="text-gray-700 mb-4">
                    Also called Labyrinthitis, these infections affect the innermost part of the ear where balance and hearing are processed.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Ear wax connection:</span> Inner ear infections are not typically related to ear wax issues, as wax does not reach this area of the ear.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Ear Wax and Outer Ear Infections */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Outer ear infection 1.jpg"
                  alt="Outer ear infection diagram"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">How Ear Wax Relates to Outer Ear Infections</h2>
              <p className="text-lg text-gray-700 mb-4">
                The relationship between ear wax and outer ear infections (otitis externa) is complex. While ear wax itself is protective, issues with ear wax can contribute to infections in several ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Damaged Ear Canal</h3>
                    <p className="text-gray-600">Attempts to remove ear wax with cotton buds or other objects can scratch the ear canal, creating an entry point for bacteria.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Water Trapping</h3>
                    <p className="text-gray-600">Impacted ear wax can trap water in the ear canal after swimming or showering, creating a moist environment where bacteria thrive.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Compromised Defense</h3>
                    <p className="text-gray-600">If excessive ear wax removal strips away too much wax, the ear loses its natural protective barrier against infection.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Recognizing Ear Infection Symptoms</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  It's important to recognize the symptoms of ear infections, particularly those that might be related to ear wax issues:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Outer Ear Infection Symptoms</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Ear pain that worsens when touching or pulling the ear</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Itchiness in the ear canal</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Redness and swelling of the ear canal</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Drainage or discharge from the ear</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Temporary hearing loss or muffled hearing</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">When to Seek Medical Help</h3>
                  <p className="text-gray-700 mb-4">
                    You should consult a healthcare professional if you experience:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Severe ear pain</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Pain that persists for more than a day</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Fever along with ear symptoms</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Discharge from the ear, especially if bloody or pus-filled</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Sudden hearing loss</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention and Care */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Preventing Ear Infections</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Proper ear care can help prevent infections, particularly those related to ear wax issues:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Do's</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Clean only the outer part of your ears with a washcloth</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Dry your ears thoroughly after swimming or showering</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Consider using ear plugs when swimming</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Seek professional ear wax removal if you suspect impaction</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Maintain good overall ear hygiene</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Don'ts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Don't insert cotton buds, hairpins, or other objects into your ear canal</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Don't attempt to remove ear wax yourself if you suspect impaction</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Don't swim in polluted water</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Don't use ear candles or other unproven ear cleaning methods</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Don't ignore persistent ear pain or discomfort</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Approach to Ear Health</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Ear Wax Solution, we focus on preventive care and safe ear wax removal to help maintain ear health and reduce infection risk.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our comprehensive approach includes:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Thorough ear examination to assess ear wax and identify potential issues</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Safe and gentle microsuction for ear wax removal</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Expert advice on maintaining optimal ear hygiene</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Referrals to medical specialists when necessary for infection treatment</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-blue-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-medium mb-4">Important Note</h3>
                  <p className="mb-6 opacity-90">
                    While we specialize in ear wax removal and ear health, we do not directly treat active ear infections. If you're experiencing symptoms of an ear infection, it's important to:
                  </p>
                  <ul className="space-y-3 opacity-90">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>See your GP or an ENT specialist for proper diagnosis and treatment</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Complete any prescribed antibiotic course fully</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Wait until the infection has cleared before seeking ear wax removal</span>
                    </li>
                  </ul>
                  <div className="border-t border-white/30 pt-6 mt-6">
                    <h4 className="text-xl font-medium mb-3">Preventive Ear Care</h4>
                    <p className="mb-6 opacity-90">
                      After your infection has resolved, we can help you maintain ear health with professional ear wax management to potentially reduce future infection risk.
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
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Related Conditions</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Ear infections can be related to other ear conditions. Learn more about these connected issues:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Link href="/conditions/blocked-ears" className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Blocked Ears</h3>
                      <p className="text-gray-600 mb-4">
                        How ear wax buildup can lead to blocked ears and potentially contribute to infection risk.
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
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Tinnitus</h3>
                      <p className="text-gray-600 mb-4">
                        The relationship between ear infections, ear wax, and ringing in the ears (tinnitus).
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
                <Link href="/conditions/hearing-loss" className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Hearing Loss</h3>
                      <p className="text-gray-600 mb-4">
                        How infections and ear wax can contribute to temporary hearing loss and what can be done.
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
            <h2 className="text-3xl text-white mb-6">Keep Your Ears Healthy</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Prevention is the best approach. Professional ear wax removal and maintenance can help maintain ear health and potentially reduce infection risk.
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