'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import starImage from '@/assets/star.png';

export function FloatingShapes() {
  // Positions for stars
  const stars = [
    { top: '10%', left: '20%', delay: 0 },
    { top: '50%', left: '70%', delay: 1 },
    { top: '70%', left: '30%', delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute w-64 h-64"
          style={{ top: star.top, left: star.left }}
          animate={{
            y: [0, 20, 0], // Up and down motion
          }}
          transition={{
            duration: 6, // Animation duration
            repeat: Infinity, // Infinite looping
            ease: 'easeInOut', // Smooth easing
            delay: star.delay, // Delayed start for each star
          }}
        >
          <Image
            src={starImage}
            alt={`Star ${index + 1}`}
            layout="fill"
            objectFit="contain"
            className="drop-shadow-md"
          />
        </motion.div>
      ))}
    </div>
  );
}
