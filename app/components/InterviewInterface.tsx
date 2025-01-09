'use client'

import { motion } from 'framer-motion'
import { Bot, Wand2 } from 'lucide-react'
import MicrophoneButton from './MicrophoneButton'
import ResponseDisplay from './ResponseDisplay'
import AnimatedAvatar from './AnimatedAvatar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface InterviewInterfaceProps {
  isRecording: boolean
  isResponding: boolean
  response: string
  jobDetails: {
    jobTitle: string
    companyName: string
  }
  onStartRecording: () => void
  onStopRecording: (blob: Blob) => void
  isComplete: boolean
}

export default function InterviewInterface({
  isRecording,
  isResponding,
  response,
  jobDetails,
  onStartRecording,
  onStopRecording,
  isComplete
}: InterviewInterfaceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Interview Header */}
      <div className="text-center space-y-2">
        <motion.div
          className="inline-block p-3 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-700"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <Wand2 className="w-8 h-8 text-zinc-100" />
        </motion.div>
        <h2 className="text-2xl font-bold text-zinc-100">
          Interview for {jobDetails.jobTitle}
        </h2>
        <p className="text-zinc-400">{jobDetails.companyName}</p>
      </div>

      {/* Chat Interface */}
      <Card className="backdrop-blur-sm bg-black/40 border-zinc-800 p-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent" />
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-r from-zinc-500/10 to-transparent blur-xl" />
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-32 bg-gradient-to-l from-zinc-500/10 to-transparent blur-xl" />
        </div>

        {/* Avatar and Response Section */}
        <div className="relative z-10">
          <AnimatedAvatar isResponding={isResponding} />
          <div className="mt-6 min-h-[200px] flex items-center justify-center">
            <ResponseDisplay text={response} />
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/40 to-transparent" />
      </Card>

      {/* Controls Section */}
      <div className="flex flex-col items-center space-y-4">
        {isComplete ? (
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.location.reload()}
          >
            Start New Interview
          </Button>
        ) : (
          <MicrophoneButton
            isRecording={isRecording}
            onStartRecording={onStartRecording}
            onStopRecording={onStopRecording}
          />
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-zinc-400"
        >
          {isComplete
            ? 'Interview completed. Click to start a new one.'
            : isRecording
            ? 'Listening...'
            : 'Click to start speaking'}
        </motion.p>
      </div>
    </motion.div>
  )
}

