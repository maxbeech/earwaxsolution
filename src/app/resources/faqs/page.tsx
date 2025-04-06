'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSearch, FaArrowRight } from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

// FAQ Item Component
const FAQItem = ({ 
  question, 
  answer,
  isOpen,
  onClick
}: { 
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full flex justify-between items-center py-5 px-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600 flex-shrink-0 ml-4"
        >
          <FaChevronDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-gray-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ Category Component
const FAQCategory = ({ 
  title, 
  faqs 
}: { 
  title: string;
  faqs: {
    question: string;
    answer: React.ReactNode;
  }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <FadeIn>
        <h2 className="text-2xl font-medium text-gray-900 mb-6">{title}</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // General FAQs
  const generalFAQs = [
    {
      question: "What is ear wax?",
      answer: (
        <>
          <p>
            Ear wax, also known as cerumen, is a natural substance produced by glands in the ear canal. It has several important functions:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Protecting the ear canal from dust, debris, and potential infections</li>
            <li>Moisturizing the ear canal to prevent dryness and irritation</li>
            <li>Providing a slightly acidic environment that helps prevent bacterial growth</li>
          </ul>
          <p className="mt-2">
            Ear wax is usually yellowish-brown in color and has a waxy texture. It naturally migrates from the eardrum to the outer ear, carrying with it dead skin cells and debris.
          </p>
        </>
      )
    },
    {
      question: "Why do I need ear wax removal?",
      answer: (
        <>
          <p>
            While ear wax is natural and beneficial, some people produce excess wax or have wax that doesn't naturally clear from the ear canal. This can lead to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Blockage of the ear canal, causing hearing loss or a feeling of fullness</li>
            <li>Tinnitus (ringing in the ears)</li>
            <li>Earache or discomfort</li>
            <li>Itchiness in the ear canal</li>
            <li>Problems with hearing aids fitting correctly or working properly</li>
          </ul>
          <p className="mt-2">
            Professional ear wax removal is recommended when you experience these symptoms or when your GP identifies a wax buildup during an examination.
          </p>
        </>
      )
    },
    {
      question: "How often should I have ear wax removed?",
      answer: (
        <p>
          The frequency of ear wax removal varies from person to person. Some people may never need ear wax removal, while others might require it several times a year. It depends on how quickly your ears produce wax and whether you're prone to impaction. As a general guideline, it's best to have your ears checked and cleaned when you experience symptoms such as reduced hearing, earache, or a feeling of fullness in the ear. Regular check-ups every 6-12 months might be recommended for those who frequently experience wax buildup.
        </p>
      )
    },
    {
      question: "Can I clean my ears at home?",
      answer: (
        <>
          <p>
            We strongly advise against inserting anything into your ear canal for cleaning, including cotton swabs (Q-tips), hairpins, or other objects. These can:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Push wax deeper into the ear canal, causing impaction</li>
            <li>Damage the sensitive skin in your ear canal</li>
            <li>Risk perforating your eardrum</li>
          </ul>
          <p className="mt-2">
            For home care, you can gently clean the outer ear with a washcloth. If you feel you have excess wax, you can use over-the-counter ear drops designed to soften wax, following the package instructions. However, if you're experiencing symptoms, it's safest to consult a professional for proper assessment and removal.
          </p>
        </>
      )
    }
  ];

  // Procedure FAQs
  const procedureFAQs = [
    {
      question: "What is microsuction?",
      answer: (
        <>
          <p>
            Microsuction is a safe and effective method for removing ear wax. It involves:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Using a special microscope or loupe system to provide a clear, magnified view of the ear canal</li>
            <li>A small, thin suction device to gently remove the wax</li>
            <li>No water or irrigation, making it suitable for people with perforated eardrums or a history of ear surgery</li>
          </ul>
          <p className="mt-2">
            The procedure is generally quick (15-30 minutes) and provides immediate relief from wax blockage.
          </p>
        </>
      )
    },
    {
      question: "Is ear wax removal painful?",
      answer: (
        <p>
          Microsuction ear wax removal is generally not painful. Most patients report minimal or no discomfort during the procedure. You might hear the sound of the suction, which can be loud, and occasionally you might feel a slight sensitivity if the wax is very impacted or if your ear canal is inflamed. Our specialists are trained to work gently and carefully to minimize any discomfort. If you have very sensitive ears or are anxious about the procedure, please let us know beforehand so we can take extra precautions to ensure your comfort.
        </p>
      )
    },
    {
      question: "Do I need to prepare for my appointment?",
      answer: (
        <>
          <p>
            For microsuction, preparation is helpful but not always necessary. For best results:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>You can use olive oil ear drops for 2-3 days before your appointment to soften the wax</li>
            <li>Apply 2-3 drops twice daily</li>
            <li>Continue using the drops until the day of your appointment</li>
          </ul>
          <p className="mt-2">
            However, microsuction can still be effective without preparation, so don't worry if you haven't used ear drops before your visit.
          </p>
        </>
      )
    },
    {
      question: "What happens during my appointment?",
      answer: (
        <>
          <p>
            During your appointment:
          </p>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>Our specialist will discuss your symptoms and ear health history</li>
            <li>Your ears will be examined using a microscope or loupe system</li>
            <li>The appropriate method for wax removal will be discussed with you</li>
            <li>For microsuction, a small suction device will be used to gently remove the wax</li>
            <li>After the procedure, you'll receive advice on ear care and prevention of future buildups</li>
          </ol>
          <p className="mt-2">
            The entire appointment typically lasts 20-30 minutes, with the actual procedure taking about 15 minutes per ear, depending on the amount and hardness of the wax.
          </p>
        </>
      )
    }
  ];

  // After Care FAQs
  const afterCareFAQs = [
    {
      question: "How should I care for my ears after wax removal?",
      answer: (
        <>
          <p>
            After your ear wax removal:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Avoid inserting anything into your ear canal, including cotton swabs</li>
            <li>Keep water out of your ears for 24-48 hours if possible</li>
            <li>If you need to use earplugs or earbuds, ensure they're clean</li>
            <li>Be aware that your ears might feel different initially as they adjust to being clear of wax</li>
          </ul>
          <p className="mt-2">
            If you experience any unusual symptoms like pain, discharge, or hearing problems after the procedure, contact us or your GP promptly.
          </p>
        </>
      )
    },
    {
      question: "How can I prevent ear wax buildup in the future?",
      answer: (
        <>
          <p>
            While you can't stop your ears from producing wax, you can reduce the risk of buildup:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Avoid inserting objects into your ear canal, including cotton swabs</li>
            <li>For those prone to wax buildup, consider using preventive ear drops (like olive oil) once a week</li>
            <li>Clean the outer ear with a washcloth - don't go into the ear canal</li>
            <li>If you use hearing aids or earbuds regularly, clean them according to manufacturer instructions</li>
            <li>Schedule regular check-ups if you frequently experience wax buildup</li>
          </ul>
        </>
      )
    },
    {
      question: "When should I seek medical attention after ear wax removal?",
      answer: (
        <>
          <p>
            Contact your healthcare provider if you experience any of these symptoms after ear wax removal:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Pain or severe discomfort in the ear</li>
            <li>Discharge from the ear, especially if it's bloody or has an unusual color</li>
            <li>Sudden hearing loss or significant changes in hearing</li>
            <li>Persistent ringing in the ears (tinnitus) that wasn't present before</li>
            <li>Dizziness or balance problems</li>
            <li>Fever, which could indicate an infection</li>
          </ul>
          <p className="mt-2">
            While complications from professional ear wax removal are rare, it's important to seek prompt medical attention if you notice anything unusual.
          </p>
        </>
      )
    }
  ];

  // Filter FAQs based on search term
  const filterFAQs = (faqs: {question: string; answer: React.ReactNode}[]) => {
    if (!searchTerm) return faqs;
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const filteredGeneralFAQs = filterFAQs(generalFAQs);
  const filteredProcedureFAQs = filterFAQs(procedureFAQs);
  const filteredAfterCareFAQs = filterFAQs(afterCareFAQs);

  const hasResults = filteredGeneralFAQs.length > 0 || filteredProcedureFAQs.length > 0 || filteredAfterCareFAQs.length > 0;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Specialist smiling with patient 4.jpg" 
            alt="Ear Wax Solution specialist with patient"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Frequently Asked Questions"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Find answers to common questions about ear wax, our procedures, and aftercare
            </p>
          </div>
        </div>
      </section>

      {/* Search and FAQ Content */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <FadeIn>
              <div className="mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for questions..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaSearch />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* FAQ Content */}
            {!hasResults ? (
              <FadeIn>
                <div className="text-center py-12">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">No results found</h2>
                  <p className="text-gray-600 mb-8">
                    We couldn't find any FAQs matching your search. Please try different keywords or browse our categories below.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >
                    View All FAQs
                  </button>
                </div>
              </FadeIn>
            ) : (
              <>
                {filteredGeneralFAQs.length > 0 && (
                  <FAQCategory title="General Questions" faqs={filteredGeneralFAQs} />
                )}
                
                {filteredProcedureFAQs.length > 0 && (
                  <FAQCategory title="About the Procedure" faqs={filteredProcedureFAQs} />
                )}
                
                {filteredAfterCareFAQs.length > 0 && (
                  <FAQCategory title="Aftercare and Prevention" faqs={filteredAfterCareFAQs} />
                )}
              </>
            )}

            {/* Still Have Questions */}
            <FadeIn>
              <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600 mt-12">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">Still Have Questions?</h2>
                <p className="text-gray-600 mb-6">
                  If you couldn't find the answer to your question, please don't hesitate to contact us. Our team is ready to assist you with any inquiries about our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >
                    Contact Us
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <a 
                    href="tel:01293365124" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 transition-all duration-300"
                  >
                    Call Us: 01293 365124
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
} 