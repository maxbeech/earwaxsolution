'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.3,
  direction = 'down',
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // Apply a much gentler parallax effect and limit the range to prevent image from moving out of view
  const factor = direction === 'up' ? -speed * 20 : speed * 20; // Reduced from 100 to 20
  const y = useTransform(scrollYProgress, [0, 1], [0, factor]);
  
  return (
    <motion.div
      ref={ref}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y }}
        initial={{ opacity: 1 }} // Ensure image starts visible
        animate={{ opacity: 1 }} // Keep it visible during animation
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          className="object-cover w-full h-full"
          sizes="100vw"
          priority={true}
        />
      </motion.div>
    </motion.div>
  );
} 