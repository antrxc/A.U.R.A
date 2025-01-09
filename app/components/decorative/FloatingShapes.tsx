'use client'

import { motion } from 'framer-motion'

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Cylinder */}
      <motion.div
        className="absolute top-20 right-[20%] w-20 h-32 bg-gradient-to-br from-zinc-300 to-zinc-100 rounded-full transform -rotate-45"
        animate={{
          y: [0, 20, 0],
          rotate: [-45, -30, -45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.1))",
        }}
      />

      {/* Star shape */}
      <motion.div
        className="absolute bottom-40 left-[15%] w-40 h-40"
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-16 bg-gradient-to-t from-zinc-300 to-white"
              style={{
                transform: `rotate(${i * 45}deg)`,
                transformOrigin: 'center center',
                left: '50%',
                top: '50%',
                marginLeft: '-8px',
                marginTop: '-32px',
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-zinc-300 to-zinc-100"
          style={{
            left: `${30 + i * 20}%`,
            top: `${40 + i * 15}%`,
            filter: "drop-shadow(0 0 15px rgba(255,255,255,0.15))",
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  )
}