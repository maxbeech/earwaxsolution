'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCheck, 
  FaCalendarAlt, 
  FaHeadphonesAlt, 
  FaUserMd, 
  FaComments, 
  FaAward,
  FaArrowRight
} from 'react-icons/fa';

// Custom components
const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  index 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  link: string;
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
      className="group relative"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="p-6">
          <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <Link 
            href={link}
            className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors group"
          >
            Learn more
            <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ 
  quote, 
  author, 
  index 
}: { 
  quote: string; 
  author: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <div className="mb-4 text-blue-600">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed italic">{quote}</p>
      <div className="font-medium text-gray-900">{author}</div>
    </motion.div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  
  const heroControls = useAnimation();
  const sectionControls = useAnimation();
  
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderInterval = useRef<NodeJS.Timeout | null>(null);
  
  const slides = [
    {
      image: "/images/Specialist smiling with patient 1.jpg",
      title: "Professional Earwax Removal",
      subtitle: "Safe, gentle and effective treatment"
    },
    {
      image: "/images/Ear wax operation close up 1.jpg",
      title: "Advanced Microsuction Technology",
      subtitle: "The gold standard in earwax removal"
    },
    {
      image: "/images/Specialist smiling with patient 3.jpg",
      title: "Experienced Specialists",
      subtitle: "Trained professionals providing expert care"
    }
  ];

  const startSliderTimer = () => {
    if (sliderInterval.current) {
      clearInterval(sliderInterval.current);
    }
    
    sliderInterval.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 5000);
  };
  
  useEffect(() => {
    startSliderTimer();
    
    return () => {
      if (sliderInterval.current) {
        clearInterval(sliderInterval.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    }
    if (servicesInView) {
      sectionControls.start('visible');
    }
  }, [heroControls, sectionControls, heroInView, servicesInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0],
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            {slides.map((slide, index) => (
              index === activeSlide && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          ref={heroRef}
          animate={heroControls}
          initial="hidden"
          variants={staggerChildren}
          className="relative z-10 container mx-auto px-4 py-16"
        >
          <div className="max-w-3xl">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {slides[activeSlide].title}
                </motion.span>
              </AnimatePresence>
              <span className="text-blue-400">by expert specialists</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 mb-8"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {slides[activeSlide].subtitle}
                </motion.span>
              </AnimatePresence>
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/book-appointment" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-600/30 inline-flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2" />
                Book Appointment
              </Link>
              <Link 
                href="/services/microsuction" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Our Services
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600/20 rounded-full p-2">
                  <FaCheck className="text-blue-500 w-4 h-4" />
                </div>
                <span className="text-white text-sm">Modern Techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600/20 rounded-full p-2">
                  <FaCheck className="text-blue-500 w-4 h-4" />
                </div>
                <span className="text-white text-sm">Experienced Specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600/20 rounded-full p-2">
                  <FaCheck className="text-blue-500 w-4 h-4" />
                </div>
                <span className="text-white text-sm">Same-day Appointments</span>
              </div>
            </motion.div>
          </div>
          
          {/* Slider Navigation */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-4">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeSlide ? 'bg-blue-600 w-8' : 'bg-white/50'
                    }`}
                    onClick={() => {
                      setActiveSlide(index);
                      startSliderTimer();
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-medium text-gray-900 mb-6">
                We provide <span className="text-blue-600">professional earwax removal</span> services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Welcome to Earwax Solution, where we specialize in providing safe, gentle and effective earwax removal treatments. Our team of experienced specialists use the latest techniques to ensure optimal ear health.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Excessive earwax can cause discomfort, hearing loss, and other complications if not properly addressed. Our modern microsuction and irrigation methods are designed to safely remove earwax blockages, restoring your hearing and comfort.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-blue-600/10 rounded-full p-2 mr-3 mt-1">
                    <FaHeadphonesAlt className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Improved Hearing</h3>
                    <p className="text-sm text-gray-600">Experience clearer hearing after treatment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600/10 rounded-full p-2 mr-3 mt-1">
                    <FaUserMd className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Expert Team</h3>
                    <p className="text-sm text-gray-600">Qualified specialists in ear health</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/about/our-clinic" 
                className="inline-flex items-center text-blue-600 font-medium mt-6 hover:text-blue-800 transition-colors group"
              >
                Learn more about our clinic
                <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                  <FaArrowRight />
                </span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/Specialist smiling with patient 4.jpg" 
                  alt="Earwax removal specialist consulting with patient" 
                  width={600} 
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-xl p-6 shadow-xl max-w-[240px]">
                <div className="text-white font-bold text-4xl mb-1">15+</div>
                <div className="text-white/80 text-sm">Years of professional experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of ear care services, tailored to your individual needs. Our experienced specialists use the latest techniques and equipment to ensure the best possible results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Microsuction" 
              description="The gold standard in earwax removal. A precise, gentle method using microscopic visualization and suction for optimal safety."
              icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4v1h-2v2h2v1h-2.03c-.23 3.04-1.55 5.8-3.59 7.91l-2.07-2.09L12 14.98l1.33-1.25 3.57 3.6C14.79 19 11.52 20 8 20c-2.72 0-5.25-.78-7.4-2.12l.86-1.5C3.18 17.4 5.5 18 8 18c2.74 0 5.25-.66 7.35-1.77l-2.28-2.31 2.55-2.12C17.18 10.13 18.87 7.94 19.03 6H10V4h9v.5h.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H12V0h8.5c1.93 0 3.5 1.57 3.5 3.5 0 .17-.02.34-.04.5H21z"></path></svg>}
              link="/services/microsuction"
              index={0}
            />
            
            <ServiceCard 
              title="Ear Irrigation" 
              description="A gentle procedure using water to flush out earwax. Suitable for those with specific ear conditions where microsuction may not be appropriate."
              icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.66 11.2c-.23-.3-.51-.56-.77-.82-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32-2.59 2.08-3.61 5.75-2.39 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5.14.6.41 1.2.71 1.73 1.08 1.73 2.95 2.97 4.96 3.22 2.14.27 5.04-.62 6.53-2.53 1.44-1.84 1.98-4.12 1.42-6.43-.34-1.44-1.09-2.75-2.06-3.84 1.47 1.52 2.25 3.35 2.58 7.75.02.3.04.57.06.92zm-9.2 3.9l.07.18c.07.17.16.34.27.5.18.3.42.54.79.56.4.03.74-.1.96-.39.64-.78.13-1.82-.3-2.31-.31-.36-.7-.53-1.17-.43-.7.14-1.07.8-1.09 1.47 0 .15.01.3.04.43z"></path></svg>}
              link="/services/irrigation"
              index={1}
            />
            
            <ServiceCard 
              title="Ear Examination" 
              description="A thorough assessment of your ear canal and eardrum using state-of-the-art equipment to diagnose conditions and recommend treatments."
              icon={<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>}
              link="/services/examination"
              index={2}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all"
            >
              View All Services
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-medium text-gray-900 mb-4">Why Choose Earwax Solution</h2>
              <p className="text-gray-600">
                We pride ourselves on delivering exceptional ear care with a focus on your comfort, safety, and satisfaction.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="absolute -top-8 -right-20 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
            
            <motion.div
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/5 rounded-full filter blur-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FaUserMd className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Expert Specialists</h3>
                <p className="text-gray-600 text-sm">
                  Our team consists of qualified and experienced ear care specialists who are committed to providing the highest standard of care.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Modern Techniques</h3>
                <p className="text-gray-600 text-sm">
                  We use the latest advances in ear care technology, including microsuction and endoscopic visualization for precise and comfortable treatments.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FaCalendarAlt className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Quick Appointments</h3>
                <p className="text-gray-600 text-sm">
                  We understand ear discomfort needs prompt attention. Our efficient booking system allows for same-day or next-day appointments where possible.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FaComments className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Personalized Care</h3>
                <p className="text-gray-600 text-sm">
                  Every patient receives individualized attention. We take the time to understand your specific needs and provide tailored treatments.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path><path d="M9 17v3H7v-3H5v5h14v-5h-2v3h-2v-3H9z"></path></svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Patient Education</h3>
                <p className="text-gray-600 text-sm">
                  We believe in empowering our patients with knowledge. Our specialists provide detailed advice on maintaining ear health and preventing future issues.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <FaAward className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Our clinic maintains rigorous standards of cleanliness, safety, and professional care, ensuring you receive the best possible treatment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-medium text-white mb-4">What Our Patients Say</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience with Earwax Solution.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I had been struggling with muffled hearing for weeks. After a quick and painless microsuction treatment, I could hear clearly again. The difference was remarkable!" 
              author="Sarah Johnson"
              index={0}
            />
            
            <TestimonialCard 
              quote="The specialist was incredibly professional and took the time to explain everything. I felt comfortable throughout the procedure and the results were fantastic." 
              author="Michael Thompson"
              index={1}
            />
            
            <TestimonialCard 
              quote="I was nervous about having earwax removed, but the team put me at ease. The procedure was quick, painless, and effective. I can hear perfectly now!" 
              author="Emma Davies"
              index={2}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/about/testimonials"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg transition-all hover:bg-gray-100"
            >
              Read More Testimonials
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-10 lg:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-20 -mt-20 filter blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl">
              <motion.h2 
                className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                Ready to experience better hearing and comfort?
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-8 text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Book an appointment today and let our specialist team take care of your ear health concerns.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/book-appointment" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <FaCalendarAlt className="mr-2" />
                  Book Appointment
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-800 font-medium rounded-lg transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
