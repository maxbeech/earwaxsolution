'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function TinnitusPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Person with hand on ear 1.jpg" 
            alt="Person experiencing tinnitus"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Tinnitus & Ear Wax"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Understanding the connection between ear wax and ringing in your ears
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">What is Tinnitus?</h2>
              <p className="text-lg text-gray-700 mb-4">
                Tinnitus is the perception of noise or ringing in the ears when no external sound is present. It's a common problem affecting about 15-20% of people and is especially common in older adults.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                While tinnitus isn't a condition itself, it's a symptom of an underlying condition, such as age-related hearing loss, ear injury, or a circulatory system disorder. One often overlooked cause of tinnitus is excessive ear wax buildup.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                At Ear Wax Solution, we specialize in addressing one of the treatable causes of tinnitus – ear wax impaction. By safely removing excessive ear wax, we may be able to help reduce or eliminate tinnitus symptoms for many patients.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How Ear Wax Causes Tinnitus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Ear anatomy 1.jpg"
                  alt="Ear anatomy showing wax blockage"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">How Ear Wax Can Cause Tinnitus</h2>
              <p className="text-lg text-gray-700 mb-4">
                When ear wax builds up and becomes impacted, it can cause tinnitus in several ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Pressure on the Eardrum</h3>
                    <p className="text-gray-600">When ear wax pushes against the eardrum, it can create pressure that affects how sound is perceived, potentially resulting in tinnitus.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Auditory Canal Irritation</h3>
                    <p className="text-gray-600">Impacted wax can irritate the sensitive lining of the ear canal, which may trigger tinnitus as a response to this irritation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Changes in Sound Perception</h3>
                    <p className="text-gray-600">When the ear canal is partially blocked, it alters how sound waves travel to the inner ear, potentially creating abnormal sound perception that manifests as tinnitus.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Symptoms of Tinnitus */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Common Tinnitus Symptoms</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Tinnitus can manifest in different ways, and symptoms can vary greatly from person to person. Here are the most common manifestations:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Types of Sounds</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Ringing - A high-pitched, continuous tone</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Buzzing - A lower-pitched humming noise</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Hissing - Similar to air escaping or white noise</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Clicking - Rhythmic or mechanical-sounding noises</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Roaring - A low, rumbling sound</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Characteristics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Can affect one or both ears</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">May be constant or intermittent</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Volume can fluctuate throughout the day</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Often more noticeable in quiet environments</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Can be accompanied by hearing loss or ear fullness</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="mt-10 bg-white p-8 rounded-xl shadow-md">
              <FadeIn delay={0.3}>
                <h3 className="text-xl font-medium text-gray-900 mb-4">When Tinnitus is Caused by Ear Wax</h3>
                <p className="text-gray-700 mb-4">
                  When tinnitus is caused by ear wax, it often has these specific characteristics:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Usually affects only one ear (the ear with wax buildup)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Often accompanied by a sensation of fullness or pressure</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">May develop gradually as wax accumulates</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Typically resolves quickly after proper ear wax removal</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Treatment Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">How We Treat Tinnitus Related to Ear Wax</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  If your tinnitus is related to ear wax buildup, we offer effective treatment options to provide relief.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">1. Comprehensive Ear Examination</h3>
                  <p className="text-gray-700">
                    We begin with a thorough examination of your ears using specialized equipment to determine if ear wax is present and potentially causing your tinnitus. This allows us to develop an appropriate treatment plan tailored to your specific situation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">2. Microsuction Ear Wax Removal</h3>
                  <p className="text-gray-700">
                    Our primary method for removing ear wax is microsuction, a gentle and precise technique that uses a small vacuum to safely remove wax without pushing it further into the ear canal. This method is particularly effective for cases where tinnitus is caused by impacted ear wax.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">3. Manual Techniques When Necessary</h3>
                  <p className="text-gray-700">
                    For certain types of wax or specific ear anatomies, we may use specialized instruments for manual removal. Our practitioners are expertly trained in these techniques to ensure your comfort and safety throughout the procedure.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">4. Post-Treatment Assessment</h3>
                  <p className="text-gray-700">
                    After removing the ear wax, we'll assess whether your tinnitus symptoms have improved. Many patients experience immediate relief when ear wax is the cause. If your tinnitus persists after wax removal, we may recommend consulting with an audiologist or ENT specialist for further evaluation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-neutral-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">5. Preventive Care and Education</h3>
                  <p className="text-gray-700">
                    We'll provide advice on how to maintain ear health and prevent future wax buildup that could lead to tinnitus. This includes proper ear cleaning techniques and, when appropriate, recommendations for ear drops or other products that may help manage ear wax production.
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
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">When to Seek Professional Help for Tinnitus</h2>
                <p className="text-lg text-gray-700 mb-6">
                  While not all tinnitus is caused by ear wax, it's an important factor to rule out because it's one of the most easily treatable causes. You should consult a professional if:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Your tinnitus developed suddenly or recently</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You're experiencing tinnitus in only one ear</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You also have symptoms of ear fullness or pressure</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Your hearing seems muffled or reduced</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>You've noticed ear wax in your outer ear</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-blue-600 text-white rounded-xl p-8">
                  <h3 className="text-2xl font-medium mb-4">Important to Know</h3>
                  <p className="mb-6 opacity-90">
                    While ear wax removal can resolve tinnitus in many cases, it's important to understand that tinnitus can have many other causes, including:
                  </p>
                  <ul className="space-y-3 opacity-90">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Age-related hearing loss</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Exposure to loud noises</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Ear and sinus infections</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white mt-1 mr-2 flex-shrink-0" />
                      <span>Certain medications</span>
                    </li>
                  </ul>
                  <div className="border-t border-white/30 pt-6 mt-6">
                    <h4 className="text-xl font-medium mb-3">Is Ear Wax Causing Your Tinnitus?</h4>
                    <p className="mb-6 opacity-90">
                      Our professional ear wax removal services can help determine if ear wax is contributing to your tinnitus and provide relief if it is.
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
                  Tinnitus often occurs alongside other ear conditions. Learn more about these related issues:
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <Link href="/conditions/hearing-loss" className="group">
                  <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Hearing Loss</h3>
                      <p className="text-gray-600 mb-4">
                        The relationship between tinnitus and hearing loss, and how they can affect each other.
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
                <Link href="/conditions/blocked-ears" className="group">
                  <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Blocked Ears</h3>
                      <p className="text-gray-600 mb-4">
                        How blocked ears and tinnitus are connected, and treatment options for both conditions.
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
                <Link href="/services" className="group">
                  <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Our Services</h3>
                      <p className="text-gray-600 mb-4">
                        Learn about our range of ear care services that can help with tinnitus and other ear-related conditions.
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

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Frequently Asked Questions About Tinnitus</h2>
                <p className="text-lg text-gray-700">
                  Here are answers to some common questions about tinnitus and its relationship to ear wax.
                </p>
              </FadeIn>
            </div>

            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Can ear wax removal cure all types of tinnitus?</h3>
                  <p className="text-gray-700">
                    No, ear wax removal can only help with tinnitus that's specifically caused by ear wax buildup. If your tinnitus has other causes, such as noise-induced hearing loss or medication side effects, ear wax removal alone won't resolve it. However, it's often a good first step to rule out this common and treatable cause.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">How quickly will tinnitus improve after ear wax removal?</h3>
                  <p className="text-gray-700">
                    If your tinnitus is caused by ear wax, you may notice immediate improvement after the wax is removed. Some patients report that their tinnitus disappears completely as soon as the blockage is cleared, while others may experience a gradual reduction in symptoms over a few days.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Is tinnitus a sign of something serious?</h3>
                  <p className="text-gray-700">
                    Most cases of tinnitus aren't serious, especially those related to ear wax or noise exposure. However, in rare cases, tinnitus can be a symptom of a more serious condition. It's always best to have it evaluated by a healthcare professional, particularly if it's accompanied by other symptoms like sudden hearing loss, dizziness, or pain.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Can I prevent tinnitus caused by ear wax?</h3>
                  <p className="text-gray-700">
                    Yes, maintaining good ear hygiene can help prevent wax-related tinnitus. This doesn't mean cleaning inside your ears with cotton buds (which can actually push wax deeper), but rather getting regular professional cleanings if you're prone to wax buildup and avoiding inserting anything into your ear canal.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="mt-12 text-center">
              <FadeIn>
                <p className="text-lg text-gray-700 mb-6">
                  Have more questions about tinnitus or our ear wax removal services?
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

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Find Relief from Tinnitus</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              If you're experiencing ringing or buzzing in your ears, our professional ear wax removal services may help provide the relief you're seeking.
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