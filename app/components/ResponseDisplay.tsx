'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface ResponseDisplayProps {
  text: string
}

export default function ResponseDisplay({ text }: ResponseDisplayProps) {
  const [displayedText, setDisplayedText] = useState('')
  const controls = useAnimation()

  useEffect(() => {
    let index = 0
    setDisplayedText('')

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index])
      index++

      if (index === text.length) {
        clearInterval(intervalId)
      }
    }, 30)

    return () => clearInterval(intervalId)
  }, [text])

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    })
  }, [displayedText, controls])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-zinc-100 leading-relaxed break-words whitespace-pre-wrap">
          {displayedText || 'Waiting for your response...'}
        </p>
      </div>
    </motion.div>
  )
}