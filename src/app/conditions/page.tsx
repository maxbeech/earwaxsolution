'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

// Condition card component
const ConditionCard = ({ 
  title, 
  description, 
  image, 
  alt, 
  link,
  delay = 0 
}: { 
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  delay?: number;
}) => (
  <FadeIn delay={delay}>
    <Link href={link} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full">
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
            Learn more
            <FaArrowRight className="ml-2" />
          </span>
        </div>
      </div>
    </Link>
  </FadeIn>
);

export default function ConditionsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Professional ear wax removal 1.jpg" 
            alt="Ear conditions treated by Ear Wax Solution"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Ear Conditions"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Understanding common ear conditions and how we can help
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Common Ear Conditions We Address</h2>
              <p className="text-lg text-gray-700">
                At Ear Wax Solution, we specialize in addressing ear conditions that are related to or affected by ear wax buildup. 
                Our expertise in professional ear wax removal can help with various ear issues, from hearing loss and blocked ears to 
                tinnitus and more. Explore the conditions below to learn how we can help you.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Conditions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <ConditionCard
                title="Hearing Loss"
                description="Discover how ear wax buildup can lead to temporary hearing loss and the effective solutions available."
                image="/images/Specialist smiling with patient 1.jpg"
                alt="Patient with hearing loss"
                link="/conditions/hearing-loss"
                delay={0.1}
              />
              
              <ConditionCard
                title="Blocked Ears"
                description="Learn about the causes of blocked ears, common symptoms, and our approach to providing fast relief."
                image="/images/Ear examination 1.jpg"
                alt="Blocked ears examination"
                link="/conditions/blocked-ears"
                delay={0.2}
              />
              
              <ConditionCard
                title="Tinnitus"
                description="Understand the connection between ear wax and tinnitus (ringing in the ears) and treatment options."
                image="/images/Person with hand on ear 1.jpg"
                alt="Person experiencing tinnitus"
                link="/conditions/tinnitus"
                delay={0.3}
              />
              
              <ConditionCard
                title="Ear Infections"
                description="Explore how ear wax relates to ear infections, prevention strategies, and professional ear care."
                image="/images/Doctor examining ear 1.jpg"
                alt="Doctor examining ear infection"
                link="/conditions/ear-infections"
                delay={0.4}
              />
              
              <ConditionCard
                title="Eustachian Tube Dysfunction"
                description="Learn how ear pressure, ear wax, and eustachian tube function are related, with guidance on managing symptoms."
                image="/images/Eustachian tube 1.jpg"
                alt="Eustachian tube dysfunction diagram"
                link="/conditions/eustachian-tube-dysfunction"
                delay={0.5}
              />
              
              <ConditionCard
                title="Vertigo & Dizziness"
                description="Understand when ear wax may contribute to balance issues, dizziness, and vertigo symptoms."
                image="/images/Person experiencing vertigo 1.jpg"
                alt="Person experiencing vertigo and dizziness"
                link="/conditions/vertigo-dizziness"
                delay={0.6}
              />
              
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">How We Help</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our approach to ear care focuses on safe, effective solutions for ear wax-related conditions.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Expert Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a thorough examination of your ears to properly identify the cause of your symptoms and determine if ear wax is a contributing factor.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Professional Removal</h3>
                  <p className="text-gray-600">
                    Our specialists use microsuction and other gentle techniques to safely remove ear wax blockages, often providing immediate relief from symptoms.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Preventive Care</h3>
                  <p className="text-gray-600">
                    We provide education and advice on maintaining ear health to prevent future issues, including proper ear cleaning techniques and preventive measures.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">When to Seek Professional Help</h2>
                <p className="text-lg text-gray-700 mb-6">
                  It's important to consult a professional ear care specialist if you're experiencing:
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Sudden or gradual hearing loss in one or both ears</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Persistent feeling of fullness or pressure in your ears</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Ringing, buzzing, or other noises in your ears</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Ear pain or discomfort that doesn't resolve</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Dizziness or balance issues that may be related to your ears</span>
                  </li>
                  <li className="flex items-start">
                    <FaArrowRight className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Visible signs of ear wax buildup or discharge from the ear</span>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/images/Ear wax consultation 1.jpg"
                    alt="Ear wax consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Ready to Address Your Ear Concerns?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't let ear problems affect your quality of life. Our professional ear care services can help you find relief.
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