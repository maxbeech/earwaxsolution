'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
};

type Location = {
  id: string;
  name: string;
  address: string;
};

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreed: false,
  });

  const services: Service[] = [
    {
      id: 'microsuction',
      name: 'Microsuction',
      description: 'Our safest and most effective method of ear wax removal',
      price: '£80',
    },
    {
      id: 'irrigation',
      name: 'Irrigation',
      description: 'Traditional water-based method for ear wax removal',
      price: '£70',
    },
    {
      id: 'examination',
      name: 'Ear Examination',
      description: 'Full examination of ear canal and ear drum',
      price: '£50',
    },
    {
      id: 'hearing-health',
      name: 'Hearing Health Consultation',
      description: 'Comprehensive hearing assessment and advice',
      price: '£60',
    },
    {
      id: 'home-visit',
      name: 'Home Visit',
      description: 'Any of our services provided in the comfort of your home',
      price: 'From £120',
    },
  ];

  const locations: Location[] = [
    {
      id: 'horley',
      name: 'Horley Clinic',
      address: '123 High Street, Horley, Surrey, RH6 7AB',
    },
    {
      id: 'epsom',
      name: 'Epsom Clinic',
      address: '45 London Road, Epsom, Surrey, KT17 2BT',
    },
    {
      id: 'london',
      name: 'London Clinic',
      address: '78 Harley Street, London, W1G 7HJ',
    },
    {
      id: 'home-visit',
      name: 'Home Visit',
      address: 'We come to your location',
    },
  ];

  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a server
    // For demonstration, we'll just advance to the success state
    setStep(4);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return formData.service && formData.location && formData.date && formData.time;
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 3:
        return formData.agreed;
      default:
        return false;
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage
            src="/images/Specialist smiling with patient 4.jpg"
            alt="Book your appointment"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Book Your Appointment"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <div className="mt-4">
              <p className="text-xl text-white/90 max-w-2xl">
                Complete the form below to schedule your ear wax removal treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between items-center">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <span>1</span>
                  </div>
                  <span className="text-sm font-medium">Service Details</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <span>2</span>
                  </div>
                  <span className="text-sm font-medium">Personal Information</span>
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <span>3</span>
                  </div>
                  <span className="text-sm font-medium">Confirmation</span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Details */}
                {step === 1 && (
                  <FadeIn>
                    <h2 className="text-2xl font-medium text-gray-900 mb-6">Select Your Service</h2>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-3">Select Treatment *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <div 
                            key={service.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              formData.service === service.id
                                ? 'border-blue-600 bg-blue-50 shadow-md'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                            onClick={() => setFormData({...formData, service: service.id})}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-medium">{service.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                              </div>
                              <div className="text-blue-600 font-medium">{service.price}</div>
                            </div>
                            {formData.service === service.id && (
                              <div className="mt-2 text-blue-600">
                                <FaCheck />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 font-medium mb-3">Select Location *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {locations.map((location) => (
                          <div 
                            key={location.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              formData.location === location.id
                                ? 'border-blue-600 bg-blue-50 shadow-md'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                            onClick={() => setFormData({...formData, location: location.id})}
                          >
                            <div>
                              <h3 className="text-lg font-medium">{location.name}</h3>
                              <p className="text-gray-600 text-sm mt-1">{location.address}</p>
                            </div>
                            {formData.location === location.id && (
                              <div className="mt-2 text-blue-600">
                                <FaCheck />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a time</option>
                          {availableTimes.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepComplete()}
                        className={`px-6 py-3 rounded-md font-medium text-white transition-all ${
                          isStepComplete()
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Continue to Personal Details
                      </button>
                    </div>
                  </FadeIn>
                )}

                {/* Step 2: Personal Information */}
                {step === 2 && (
                  <FadeIn>
                    <h2 className="text-2xl font-medium text-gray-900 mb-6">Your Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide any additional information about your condition or specific requirements"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 rounded-md font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepComplete()}
                        className={`px-6 py-3 rounded-md font-medium text-white transition-all ${
                          isStepComplete()
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Review & Confirm
                      </button>
                    </div>
                  </FadeIn>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <FadeIn>
                    <h2 className="text-2xl font-medium text-gray-900 mb-6">Review & Confirm</h2>
                    
                    <div className="bg-neutral-50 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Appointment Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                          <p className="text-gray-600 text-sm">Service</p>
                          <p className="font-medium">{services.find(s => s.id === formData.service)?.name}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Price</p>
                          <p className="font-medium">{services.find(s => s.id === formData.service)?.price}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Location</p>
                          <p className="font-medium">{locations.find(l => l.id === formData.location)?.name}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Address</p>
                          <p className="font-medium">{locations.find(l => l.id === formData.location)?.address}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Date</p>
                          <p className="font-medium">{formData.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Time</p>
                          <p className="font-medium">{formData.time}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                          <p className="text-gray-600 text-sm">Name</p>
                          <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Email</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Phone</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                      </div>
                      
                      {formData.message && (
                        <div className="mt-4">
                          <p className="text-gray-600 text-sm">Additional Information</p>
                          <p className="font-medium">{formData.message}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="agreed"
                          name="agreed"
                          checked={formData.agreed}
                          onChange={handleInputChange}
                          className="mt-1 mr-3"
                          required
                        />
                        <label htmlFor="agreed" className="text-gray-700">
                          I confirm that the information provided is correct and I agree to Ear Wax Solution's{' '}
                          <Link href="#" className="text-blue-600 hover:underline">
                            Terms and Conditions
                          </Link>{' '}
                          and{' '}
                          <Link href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 rounded-md font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!isStepComplete()}
                        className={`px-6 py-3 rounded-md font-medium text-white transition-all ${
                          isStepComplete()
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </FadeIn>
                )}

                {/* Step 4: Success */}
                {step === 4 && (
                  <FadeIn>
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheck className="text-green-600 text-3xl" />
                      </div>
                      <h2 className="text-2xl font-medium text-gray-900 mb-4">Booking Successful!</h2>
                      <p className="text-lg text-gray-700 mb-8">
                        Thank you for booking with Ear Wax Solution. We have sent a confirmation email to {formData.email} with all the details of your appointment.
                      </p>
                      <p className="text-gray-700 mb-8">
                        Your appointment is scheduled for <span className="font-medium">{formData.date}</span> at <span className="font-medium">{formData.time}</span>.
                      </p>
                      <div className="flex justify-center gap-4">
                        <Link href="/" className="px-6 py-3 rounded-md font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all">
                          Return to Home
                        </Link>
                        <Link href="/patient-info" className="px-6 py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all">
                          View Patient Information
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-gray-900 mb-4">Need Help?</h2>
              <p className="text-lg text-gray-700">
                If you have any questions or need assistance with booking, please contact us directly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-neutral-50 p-6 rounded-lg text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-700 mb-4">Our friendly team is here to help</p>
                  <a href="tel:01234567890" className="text-blue-600 font-medium">01234 567 890</a>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <div className="bg-neutral-50 p-6 rounded-lg text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-700 mb-4">Send us an email anytime</p>
                  <a href="mailto:info@earwaxsolution.co.uk" className="text-blue-600 font-medium">info@earwaxsolution.co.uk</a>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="bg-neutral-50 p-6 rounded-lg text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-700 mb-4">Find your nearest clinic</p>
                  <Link href="/locations" className="text-blue-600 font-medium">View Our Locations</Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 