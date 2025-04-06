'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaMicrophone, 
  FaWater, 
  FaHome, 
  FaClinicMedical, 
  FaChild, 
  FaUserFriends,
  FaArrowRight,
  FaEyeDropper
} from 'react-icons/fa';
import HeroHeading from '@/components/ui/HeroHeading';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';

// Service Card Component
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
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="p-6 flex-grow">
          <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className="px-6 pb-6">
          <Link 
            href={link}
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
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

export default function ServicesPage() {
  const services = [
    {
      title: "Microsuction",
      description: "Our primary ear wax removal method using gentle suction technology. Safe, quick, and effective with no water or messy irrigation.",
      icon: <FaMicrophone className="w-6 h-6" />,
      link: "/services/microsuction"
    },
    {
      title: "Water Irrigation",
      description: "A gentle method using body-temperature water to flush out ear wax. Controlled water pressure ensures safety and comfort.",
      icon: <FaWater className="w-6 h-6" />,
      link: "/services/water-irrigation"
    },
    {
      title: "Home Visit Ear Wax Removal",
      description: "Can't make it to our clinic? We offer home visits across Surrey and London for your convenience and comfort.",
      icon: <FaHome className="w-6 h-6" />,
      link: "/services/home-visit"
    },
    {
      title: "In Clinic Ear Wax Removal",
      description: "Visit one of our fully-equipped clinics in Horley, East Grinstead, Epsom, or Gravesend for professional treatment.",
      icon: <FaClinicMedical className="w-6 h-6" />,
      link: "/services/in-clinic"
    },
    {
      title: "Children Ear Wax Removal",
      description: "Special gentle procedures for young patients, with a friendly approach to make the experience comfortable for children.",
      icon: <FaChild className="w-6 h-6" />,
      link: "/services/children"
    },
    {
      title: "Ear Wax Removal for Disabilities",
      description: "Adapted services for patients with disabilities, ensuring accessibility and comfort for everyone.",
      icon: <FaUserFriends className="w-6 h-6" />,
      link: "/services/disabilities"
    },
    {
      title: "Ear Drops",
      description: "Professional advice on ear drop usage for softening ear wax prior to removal procedures.",
      icon: <FaEyeDropper className="w-6 h-6" />,
      link: "/services/ear-drops"
    },
    {
      title: "Foreign Body Removal",
      description: "Safe removal of small foreign objects from the ear canal using specialized equipment.",
      icon: <FaMicrophone className="w-6 h-6" />,
      link: "/services/foreign-body-removal"
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/Ear wax operation close up 2.jpg" 
            alt="Ear wax removal procedure"
            speed={-10}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <HeroHeading
              title="Our Services"
              className="text-5xl font-medium text-white max-w-3xl"
            />
            <p className="text-xl text-white/90 mt-4 max-w-2xl">
              Professional ear wax removal services using modern techniques for effective, comfortable treatment
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Comprehensive Ear Care Services</h2>
              <p className="text-lg text-gray-700">
                At Ear Wax Solution, we offer a range of professional ear wax removal services to address various needs and preferences. Our methods are safe, effective, and performed by experienced specialists using the latest equipment and techniques.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Microsuction Feature */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 5.jpg"
                  alt="Microsuction ear wax removal procedure"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Microsuction: The Gold Standard</h2>
              <p className="text-lg text-gray-700 mb-4">
                Microsuction is our primary ear wax removal method and is widely considered the gold standard in the industry. This technique uses a small, precise suction device to gently remove ear wax while providing the specialist with a clear view of the ear canal.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Unlike irrigation, microsuction doesn't use water, making it suitable for people with perforated eardrums or a history of ear surgery. The procedure is quick, usually taking just 15-30 minutes, and provides immediate relief from ear wax blockage.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our specialists use specialized equipment including a microscope or loupe system and gentle suction to ensure a safe, comfortable experience with optimal results.
              </p>
              <Link 
                href="/services/microsuction" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                Learn More About Microsuction
                <FaArrowRight className="ml-2" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Home Visits */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Convenient Home Visit Services</h2>
              <p className="text-lg text-gray-700 mb-4">
                We understand that visiting a clinic isn't always convenient or possible for everyone. That's why Ear Wax Solution offers comprehensive home visit services across Surrey and London areas.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mobile ear wax removal service brings the same high-quality care and equipment to your doorstep. This service is particularly beneficial for elderly patients, those with mobility issues, or anyone with a busy schedule.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We cover Horley, Epsom, London, Surrey, Bromley, Kent, Gravesend, and surrounding areas. Book a home visit appointment for a convenient and professional ear wax removal experience in the comfort of your own home.
              </p>
              <Link 
                href="/services/home-visit" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                Book a Home Visit
                <FaArrowRight className="ml-2" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/Specialist smiling with patient 2.jpg"
                  alt="Home visit ear wax removal service"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
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
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg h-full">
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Horley Ear Wax Clinic</h3>
                  <address className="text-gray-600 not-italic mb-4">
                    Surrey Injury Clinic<br />
                    Caledonian House<br />
                    Reigate Road<br />
                    Hookwood<br />
                    RH6 0AP
                  </address>
                  <div className="mt-4">
                    <Link 
                      href="/contact?clinic=horley" 
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg h-full">
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">East Grinstead Ear Wax Clinic</h3>
                  <address className="text-gray-600 not-italic mb-4">
                    Old Station House<br />
                    London Road<br />
                    East Grinstead<br />
                    West Sussex<br />
                    RH19 1EP
                  </address>
                  <div className="mt-4">
                    <Link 
                      href="/contact?clinic=eastgrinstead" 
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg h-full">
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Epsom Ear Wax Clinic</h3>
                  <address className="text-gray-600 not-italic mb-4">
                    Nima Pharmacy + Travel Clinic<br />
                    56-58 The Broadway<br />
                    Stoneleigh<br />
                    Epsom<br />
                    KT17 2HS
                  </address>
                  <div className="mt-4">
                    <Link 
                      href="/contact?clinic=epsom" 
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg h-full">
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">Gravesend Ear Wax Clinic</h3>
                  <address className="text-gray-600 not-italic mb-4">
                    Singlewell Pharmacy<br />
                    133 Singlewell Road<br />
                    Gravesend<br />
                    Kent<br />
                    DA11 7QA
                  </address>
                  <div className="mt-4">
                    <Link 
                      href="/contact?clinic=gravesend" 
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-6">Ready to Book Your Appointment?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              View our transparent pricing and book your appointment online today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/pricing" 
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent hover:bg-blue-700 text-white border border-white px-8 py-4 rounded-md font-medium transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 