'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function BlockedEarsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Ear examination 1.jpg" 
            alt="Blocked ear examination"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Blocked Ears"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Understanding the causes, symptoms, and effective treatments for blocked ears
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">What Causes Blocked Ears?</h2>
              <p className="text-lg text-gray-700 mb-4">
                The sensation of blocked ears is a common complaint that can affect people of all ages. This feeling of fullness, pressure, or muffled hearing can be caused by various factors, with ear wax buildup being one of the most common and treatable causes.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                While the body naturally produces ear wax (cerumen) to protect and clean the ear canal, sometimes this wax can accumulate and become impacted, leading to blockage. This is particularly common in people who produce excess ear wax, have narrow ear canals, or use cotton buds which can push wax deeper into the ear canal.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we specialize in the safe and effective removal of ear wax to alleviate the discomfort of blocked ears and restore your hearing to its optimal level.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Symptoms and Signs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Common Symptoms of Blocked Ears</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  If you're experiencing blocked ears due to ear wax buildup, you may notice some of the following symptoms:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Muffled Hearing</h3>
                  <p className="text-gray-600">
                    Sounds may seem distant or unclear, as if you're underwater or wearing earplugs. This is often the first sign of ear wax blockage.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Sensation of Fullness</h3>
                  <p className="text-gray-600">
                    A feeling that your ear is full or plugged, often accompanied by pressure or discomfort in the affected ear.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Tinnitus</h3>
                  <p className="text-gray-600">
                    Ringing, buzzing, or humming sounds in the ear that may become more noticeable in quiet environments.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Earache</h3>
                  <p className="text-gray-600">
                    Pain in the ear that can range from mild discomfort to sharp pain, particularly if the wax is pressing against the eardrum.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Itchiness</h3>
                  <p className="text-gray-600">
                    Persistent itching in the ear canal, which may lead to scratching and potential infection if the skin becomes damaged.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="bg-neutral-50 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Dizziness</h3>
                  <p className="text-gray-600">
                    In some cases, severe blockage can affect your balance, leading to dizziness or a feeling of being off-balance.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Causes of Blocked Ears */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Earwax closeup 1.jpg"
                  alt="Ear wax causing blocked ears"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Common Causes of Ear Wax Blockage</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Excessive Wax Production</h3>
                    <p className="text-gray-600">Some people naturally produce more ear wax than others, leading to more frequent buildup and potential blockage.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Narrow or Hairy Ear Canals</h3>
                    <p className="text-gray-600">Anatomical differences such as narrow or particularly hairy ear canals can make it more difficult for wax to naturally exit the ear.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Improper Cleaning Methods</h3>
                    <p className="text-gray-600">Using cotton buds, hairpins, or other objects to clean ears can push wax deeper into the canal, causing impaction.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Hearing Aids and Earbuds</h3>
                    <p className="text-gray-600">Regular use of hearing aids, earbuds, or earplugs can prevent the natural migration of wax out of the ear and stimulate increased production.</p>
                  </div>
                </li>
              </ul>
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
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">How We Treat Blocked Ears</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  At Ear Wax Solution, we offer safe, effective methods to remove ear wax and relieve the symptoms of blocked ears.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">1. Initial Assessment</h3>
                  <p className="text-gray-700 mb-4">
                    We begin with a thorough examination of your ears using an otoscope to assess the extent of wax buildup and determine the most appropriate removal method.
                  </p>
                  <p className="text-gray-700">
                    This examination allows us to identify any other issues that may be causing your symptoms and ensure that ear wax removal is the appropriate treatment.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">2. Microsuction</h3>
                  <p className="text-gray-700 mb-4">
                    Our primary method for removing ear wax is microsuction, a safe and gentle technique that uses a small vacuum to precisely remove wax without pushing it further into the ear canal.
                  </p>
                  <p className="text-gray-700">
                    Microsuction is performed under direct visualization with a microscope or loupe, allowing our specialists to see exactly what they're removing, minimizing risks and maximizing effectiveness.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">3. Manual Removal</h3>
                  <p className="text-gray-700 mb-4">
                    In some cases, particularly with very hard or impacted wax, we may use specialized instruments for manual removal, always working with the utmost care and precision.
                  </p>
                  <p className="text-gray-700">
                    Our practitioners are expertly trained in these techniques to ensure your comfort and safety throughout the procedure.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">4. Post-Treatment Care and Advice</h3>
                  <p className="text-gray-700 mb-4">
                    After removing the wax, we'll provide personalized advice on how to maintain ear health and prevent future blockages, including proper cleaning techniques and products that may help manage ear wax production.
                  </p>
                  <p className="text-gray-700">
                    We may also recommend follow-up appointments for those who are prone to frequent wax buildup.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Preventing Blocked Ears</h2>
                <p className="text-lg text-gray-700 mb-6">
                  While ear wax is a natural and important part of ear health, there are steps you can take to prevent excessive buildup and blockage:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Avoid inserting anything into your ear canal, including cotton buds, which can push wax deeper into the ear.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Clean only the outer part of your ear with a washcloth, allowing the ear's natural cleaning mechanism to work.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Consider using over-the-counter ear drops designed to soften wax if you're prone to buildup (consult with us first).</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>If you use hearing aids or earbuds regularly, clean them according to manufacturer instructions and give your ears regular breaks.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Schedule regular check-ups if you're prone to wax buildup or have experienced blockages in the past.</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-blue-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-medium mb-4">Warning Signs</h3>
                  <p className="mb-6 opacity-90">
                    While blocked ears are often due to ear wax and can be easily treated, certain symptoms warrant immediate medical attention:
                  </p>
                  <ul className="space-y-3 opacity-90">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Severe ear pain or sudden hearing loss</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Discharge from the ear, especially if bloody or pus-like</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Fever along with ear symptoms</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Severe dizziness or loss of balance</span>
                    </li>
                  </ul>
                  <div className="border-t border-white/30 pt-6 mt-6">
                    <h4 className="text-xl font-medium mb-3">Need Help with Blocked Ears?</h4>
                    <p className="mb-6 opacity-90">
                      Don't suffer with the discomfort of blocked ears. Our professional ear wax removal services can provide quick, effective relief.
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-700">
                  Here are some common questions about blocked ears and ear wax removal.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Is ear wax removal painful?</h3>
                  <p className="text-gray-700">
                    No, when performed by a trained professional, ear wax removal should not be painful. You may feel a slight sensation during the procedure, but most patients find it comfortable or even relieving as the blockage is removed.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">How long does the treatment take?</h3>
                  <p className="text-gray-700">
                    A typical ear wax removal appointment lasts about 30 minutes, though this can vary depending on the extent of the blockage and whether both ears need treatment. The actual removal process often takes just 15-20 minutes.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">How quickly will I notice an improvement?</h3>
                  <p className="text-gray-700">
                    Most patients experience immediate relief and improved hearing once the wax is removed. Occasionally, the ear canal may feel slightly sensitive for a day or two after the procedure.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Are home remedies effective for removing ear wax?</h3>
                  <p className="text-gray-700">
                    While some over-the-counter drops can help soften wax, we don't recommend attempting to remove ear wax at home, especially with objects like cotton buds. Professional removal is safer and more effective, particularly for significant blockages.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">How often should I have my ears checked for wax buildup?</h3>
                  <p className="text-gray-700">
                    This varies by individual. Some people may need professional cleaning every few months, while others may only require it once a year or less. We can recommend a schedule based on your specific situation after your first appointment.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="mt-12 text-center">
              <FadeIn>
                <p className="text-lg text-gray-700 mb-6">
                  Have more questions about blocked ears or our ear wax removal services?
                </p>
                <Link 
                  href="/resources/faqs" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all hover:shadow-lg"
                >
                  View All FAQs
                  <FaArrowRight className="ml-2" />
                </Link>
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
                  Blocked ears can be related to or contribute to other ear conditions. Learn more about these related issues:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Link href="/conditions/hearing-loss" className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Hearing Loss</h3>
                      <p className="text-gray-600 mb-4">
                        How blocked ears from ear wax buildup can lead to temporary hearing loss and what can be done about it.
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
                        The connection between blocked ears and tinnitus (ringing in the ears), and available treatment options.
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
                <Link href="/conditions/ear-infections" className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Ear Infections</h3>
                      <p className="text-gray-600 mb-4">
                        How blocked ears can sometimes lead to ear infections and what you should know about prevention and treatment.
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
            <h2 className="text-3xl text-white mb-6">Experience the Relief of Clear Ears</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let blocked ears affect your hearing and quality of life. Our professional ear wax removal services can help you hear clearly again.
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