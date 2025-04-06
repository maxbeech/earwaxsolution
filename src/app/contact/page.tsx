'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

const ClinicCard = ({ 
  name,
  address,
  index 
}: { 
  name: string;
  address: string[];
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-medium text-gray-900 mb-3">{name}</h3>
        <address className="text-gray-600 not-italic mb-4">
          {address.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </address>
        <Link 
          href={`/contact?clinic=${name.toLowerCase().replace(/\s+/g, '')}`}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        >
          Book an Appointment
        </Link>
      </div>
    </motion.div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
    clinic: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message. We will be in touch shortly!'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: '',
      message: '',
      clinic: ''
    });
  };

  const clinics = [
    {
      name: "Horley Ear Wax Clinic",
      address: [
        "Surrey Injury Clinic",
        "Caledonian House",
        "Reigate Road",
        "Hookwood",
        "RH6 0AP"
      ]
    },
    {
      name: "East Grinstead Ear Wax Clinic",
      address: [
        "Old Station House",
        "London Road",
        "East Grinstead",
        "West Sussex",
        "RH19 1EP"
      ]
    },
    {
      name: "Epsom Ear Wax Clinic",
      address: [
        "Nima Pharmacy + Travel Clinic",
        "56-58 The Broadway",
        "Stoneleigh",
        "Epsom",
        "KT17 2HS"
      ]
    },
    {
      name: "Gravesend Ear Wax Clinic",
      address: [
        "Singlewell Pharmacy",
        "133 Singlewell Road",
        "Gravesend",
        "Kent",
        "DA11 7QA"
      ]
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 5.jpg" 
            alt="Ear Wax Solution specialist with patient"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Contact Us"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Get in touch with our team for appointments, inquiries, or information about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <FadeIn delay={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Phone</h3>
                  <p className="text-gray-600 mb-2">Call us directly for bookings</p>
                  <a href="tel:01293365124" className="text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors flex-grow">
                    01293 365124
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Email</h3>
                  <p className="text-gray-600 mb-2">For inquiries and information</p>
                  <a href="mailto:info@earwaxsolution.co.uk" className="text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors flex-grow">
                    info@earwaxsolution.co.uk
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Office Hours</h3>
                  <p className="text-gray-600 mb-1">Monday - Saturday: 9 AM - 6 PM</p>
                  <p className="text-gray-600 flex-grow">Sunday: 9 AM - 5 PM (Emergency Appointments)</p>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <FadeIn>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-medium text-gray-900 mb-6">Send Us a Message</h2>
                  {formStatus.submitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                      {formStatus.message}
                    </div>
                  ) : formStatus.error ? (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                      {formStatus.message}
                    </div>
                  ) : null}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="reason" className="block text-gray-700 mb-2">Reason for Contact</label>
                      <select 
                        id="reason" 
                        name="reason" 
                        value={formData.reason} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select a reason</option>
                        <option value="Appointment">Book an Appointment</option>
                        <option value="Information">Request Information</option>
                        <option value="Question">General Question</option>
                        <option value="Issue">Report an Issue</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="clinic" className="block text-gray-700 mb-2">Preferred Clinic (Optional)</label>
                      <select 
                        id="clinic" 
                        name="clinic" 
                        value={formData.clinic} 
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="">Select a clinic</option>
                        <option value="Horley">Horley Ear Wax Clinic</option>
                        <option value="EastGrinstead">East Grinstead Ear Wax Clinic</option>
                        <option value="Epsom">Epsom Ear Wax Clinic</option>
                        <option value="Gravesend">Gravesend Ear Wax Clinic</option>
                        <option value="HomeVisit">Home Visit</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      ></textarea>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 w-full md:w-auto"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                  <h2 className="text-3xl font-medium text-gray-900 mb-6">Book an Appointment</h2>
                  <p className="text-gray-600 mb-8">
                    For the fastest service, you can call us directly to book your appointment. Alternatively, you can use our online booking system or send us a message using the contact form.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mr-4">
                        <FaPhone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-1">Speak directly with our booking team</p>
                        <a href="tel:01293365124" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                          01293 365124
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mr-4">
                        <FaCalendarAlt className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Online Booking</h3>
                        <p className="text-gray-600 mb-1">Use our convenient online booking system</p>
                        <a href="#book-online" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                          Book Online
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-600 mr-4">
                        <FaMapMarkerAlt className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Home Visits</h3>
                        <p className="text-gray-600 mb-1">We offer home visits in Surrey and London</p>
                        <Link href="/services/home-visit" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Clinic Locations</h2>
              <p className="text-lg text-gray-700">
                Visit one of our conveniently located clinics for professional ear wax removal services. All our clinics are equipped with state-of-the-art technology and staffed by experienced specialists.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinics.map((clinic, index) => (
              <ClinicCard
                key={index}
                name={clinic.name}
                address={clinic.address}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-neutral-50" id="book-online">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-medium text-gray-900 mb-6">Book Online</h2>
                <p className="text-gray-600 mb-8">
                  Use our online booking system to schedule your appointment at your preferred clinic. Simply select your clinic, preferred date and time, and provide your details.
                </p>
                {/* This would typically be an iframe for a booking system, but we'll use a placeholder for now */}
                <div className="bg-gray-100 p-8 rounded-lg text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Online Booking System</h3>
                  <p className="text-gray-600 mb-4">Our online booking system will be integrated here.</p>
                  <button 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >
                    Book Now
                  </button>
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
            <h2 className="text-3xl text-white mb-6">Need Urgent Assistance?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              For emergency appointments or urgent inquiries, call us directly for immediate assistance.
            </p>
            <a 
              href="tel:01293365124" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
            >
              Call 01293 365124
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 