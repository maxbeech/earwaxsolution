'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarAlt, FaParking, FaWheelchair, FaBus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

export default function LocationsPage() {
  const [activeLocation, setActiveLocation] = useState("horley");

  const locations = [
    {
      id: "horley",
      name: "Horley Clinic",
      address: "123 High Street, Horley, Surrey, RH6 7AB",
      phone: "01234 567890",
      email: "horley@earwaxsolution.co.uk",
      image: "/images/Specialist smiling with patient 2.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20037.086236172615!2d-0.17656347031249935!3d51.16963770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f11816acd78d%3A0xb8f691350c5c4bb!2sHorley!5e0!3m2!1sen!2suk!4v1617200722342!5m2!1sen!2suk",
      hours: [
        { day: "Monday", time: "9:00 AM - 5:00 PM" },
        { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 7:00 PM" },
        { day: "Thursday", time: "9:00 AM - 5:00 PM" },
        { day: "Friday", time: "9:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM" },
        { day: "Sunday", time: "Closed" }
      ],
      features: ["Wheelchair Access", "Free Parking", "Public Transport Access"]
    },
    {
      id: "epsom",
      name: "Epsom Clinic",
      address: "45 London Road, Epsom, Surrey, KT17 2BT",
      phone: "01234 567891",
      email: "epsom@earwaxsolution.co.uk",
      image: "/images/Specialist smiling with patient 5.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20037.086236172615!2d-0.17656347031249935!3d51.16963770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876073980093e0f%3A0x4198d70ecf341d83!2sEpsom!5e0!3m2!1sen!2suk!4v1617200722342!5m2!1sen!2suk",
      hours: [
        { day: "Monday", time: "9:00 AM - 5:00 PM" },
        { day: "Tuesday", time: "9:00 AM - 7:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
        { day: "Thursday", time: "9:00 AM - 7:00 PM" },
        { day: "Friday", time: "9:00 AM - 5:00 PM" },
        { day: "Saturday", time: "9:00 AM - 1:00 PM" },
        { day: "Sunday", time: "Closed" }
      ],
      features: ["Wheelchair Access", "Free Parking", "Public Transport Access"]
    },
    {
      id: "london",
      name: "London Clinic",
      address: "78 Harley Street, London, W1G 7HJ",
      phone: "020 7946 0123",
      email: "london@earwaxsolution.co.uk",
      image: "/images/Specialist smiling with patient 4.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.917524486787!2d-0.15078373796388774!3d51.51952445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sHarley%20St%2C%20London!5e0!3m2!1sen!2suk!4v1617200722342!5m2!1sen!2suk",
      hours: [
        { day: "Monday", time: "9:00 AM - 6:00 PM" },
        { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
        { day: "Thursday", time: "9:00 AM - 6:00 PM" },
        { day: "Friday", time: "9:00 AM - 6:00 PM" },
        { day: "Saturday", time: "10:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" }
      ],
      features: ["Wheelchair Access", "Public Transport Access", "Extended Hours Available"]
    }
  ];

  const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];
  
  const featureIcons = {
    "Wheelchair Access": <FaWheelchair className="text-blue-600" />,
    "Free Parking": <FaParking className="text-blue-600" />,
    "Public Transport Access": <FaBus className="text-blue-600" />,
    "Extended Hours Available": <FaClock className="text-blue-600" />
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative hero-section overflow-hidden">
        {/* Background Image - z-index 1 */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <ParallaxImage 
            src="/images/Specialist smiling with patient 1.jpg" 
            alt="Our clinic locations"
            speed={-5} /* Reduced speed */
          />
        </div>
        {/* Overlay - z-index 2 */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: 2 }}></div>
        {/* Content - z-index 3 */}
        <div className="absolute inset-0 flex items-center" style={{ zIndex: 3 }}>
          <div className="container mx-auto px-4 hero-content">
            <HeroHeading
              title="Our Locations"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Find your nearest Ear Wax Solution clinic across Surrey, London, and Kent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Conveniently Located Clinics</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ear Wax Solution operates modern, well-equipped clinics across Surrey, London, and Kent, making professional ear wax removal accessible to patients throughout the region. All our clinics offer the same high standard of care and use state-of-the-art equipment for effective ear wax removal.
              </p>
              <p className="text-lg text-gray-700">
                If you're unable to visit one of our clinics, we also offer <Link href="/services/home-visits" className="text-blue-600 hover:text-blue-800 transition-colors">home visit services</Link> across our service area.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setActiveLocation(location.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeLocation === location.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-neutral-100 text-gray-700 hover:bg-neutral-200'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Location Info */}
            <FadeIn>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src={currentLocation.image}
                    alt={currentLocation.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-medium text-gray-900 mb-6">{currentLocation.name}</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{currentLocation.address}</p>
                    </div>
                    <div className="flex items-start">
                      <FaPhone className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{currentLocation.phone}</p>
                    </div>
                    <div className="flex items-start">
                      <FaEnvelope className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{currentLocation.email}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Opening Hours</h3>
                  <div className="space-y-2 mb-8">
                    {currentLocation.hours.map((hour, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600 font-medium">{hour.day}</span>
                        <span className="text-gray-700">{hour.time}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Clinic Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentLocation.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        {featureIcons[feature as keyof typeof featureIcons]}
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                      Book at this location
                      <FaCalendarAlt className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Map */}
            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg h-full">
                <div className="h-[600px] w-full">
                  <iframe
                    src={currentLocation.map}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title={`Map of ${currentLocation.name}`}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Home Visits Info */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Can't Visit Us? We'll Come to You</h2>
              <p className="text-lg text-gray-700 mb-4">
                We understand that visiting a clinic isn't always convenient or possible for everyone. That's why we offer comprehensive home visit services across Surrey, London, and Kent.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mobile ear wax removal service brings the same high-quality care and equipment to your doorstep. This service is particularly beneficial for:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Elderly patients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Those with mobility issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Busy professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Anyone who prefers the comfort of their own home</span>
                </li>
              </ul>
              <Link href="/services/home-visits" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                Learn more about home visits
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 3.jpg"
                  alt="Home visit service"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Ready to Book Your Appointment?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule an appointment at your preferred location
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