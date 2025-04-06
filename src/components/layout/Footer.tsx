'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6 w-48 h-16 relative">
              <Image 
                src="/images/logo.png" 
                alt="Earwax Solution Logo"
                fill
                className="object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Earwax Solution provides professional earwax removal services using the latest techniques. 
              Our specialists deliver safe, effective treatments for improved ear health and hearing.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="text-gray-300 hover:text-blue-400" aria-label="Facebook">
                <FaFacebookSquare className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-blue-400" aria-label="Twitter">
                <FaTwitterSquare className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-blue-400" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-400" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/our-clinic" className="text-gray-300 hover:text-blue-300 transition-colors">
                  About Our Clinic
                </Link>
              </li>
              <li>
                <Link href="/services/microsuction" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Microsuction
                </Link>
              </li>
              <li>
                <Link href="/services/irrigation" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Ear Irrigation
                </Link>
              </li>
              <li>
                <Link href="/patient-info/pricing" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/patient-info/faqs" className="text-gray-300 hover:text-blue-300 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Clinic Hours */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-blue-300">Clinic Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaClock className="w-4 h-4 text-blue-300 mt-0.5 mr-2" />
                <div>
                  <span className="block text-white">Monday - Friday</span>
                  <span className="text-gray-300">9:00 AM - 5:30 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="w-4 h-4 text-blue-300 mt-0.5 mr-2" />
                <div>
                  <span className="block text-white">Saturday</span>
                  <span className="text-gray-300">9:00 AM - 1:00 PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="w-4 h-4 text-blue-300 mt-0.5 mr-2" />
                <div>
                  <span className="block text-white">Sunday</span>
                  <span className="text-gray-300">Closed</span>
                </div>
              </li>
              <li className="mt-4 text-gray-300">
                <em>Home visits available by appointment</em>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-blue-300">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-300 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">123 Ear Health Avenue, London, UK</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-4 h-4 text-blue-300 mr-2 flex-shrink-0" />
                <a href="tel:01234567890" className="text-gray-300 hover:text-blue-300 transition-colors">
                  01234 567890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-4 h-4 text-blue-300 mr-2 flex-shrink-0" />
                <a href="mailto:info@earwaxsolution.co.uk" className="text-gray-300 hover:text-blue-300 transition-colors">
                  info@earwaxsolution.co.uk
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/book-appointment" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors inline-block"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <div className="mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} Earwax Solution. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-blue-300 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 