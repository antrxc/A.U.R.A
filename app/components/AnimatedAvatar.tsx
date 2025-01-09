'use client'

import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

interface AnimatedAvatarProps {
  isResponding: boolean
}

export default function AnimatedAvatar({ isResponding }: AnimatedAvatarProps) {
  const pulseVariants = {
    idle: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    responding: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  const ringVariants = {
    idle: {
      opacity: [0.2, 0.4, 0.2],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    responding: {
      opacity: [0.4, 0.6, 0.4],
      scale: [0.9, 1.1, 0.9],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Ring */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-zinc-500/20 blur-sm"
        variants={ringVariants}
        animate={isResponding ? "responding" : "idle"}
      />
      
      {/* Inner Ring */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-zinc-400/20"
        variants={ringVariants}
        animate={isResponding ? "responding" : "idle"}
      />
      
      {/* Avatar */}
      <motion.div
        className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-zinc-700 to-zinc-600 p-4 shadow-lg"
        variants={pulseVariants}
        animate={isResponding ? "responding" : "idle"}
      >
        <Bot className="w-full h-full text-white" />
      </motion.div>
    </div>
  )
}