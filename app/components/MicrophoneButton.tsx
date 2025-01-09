'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from 'lucide-react'

interface MicrophoneButtonProps {
  isRecording: boolean
  onStartRecording: () => void
  onStopRecording: (audioBlob: Blob) => void
}

export default function MicrophoneButton({
  isRecording,
  onStartRecording,
  onStopRecording,
}: MicrophoneButtonProps) {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const audioChunks = useRef<Blob[]>([])

  useEffect(() => {
    if (isRecording) {
      startRecording()
    } else {
      stopRecording()
    }
  }, [isRecording])

  const startRecording = async () => {
    audioChunks.current = []
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      setMediaRecorder(recorder)

      recorder.ondataavailable = (event) => {
        audioChunks.current.push(event.data)
      }

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' })
        onStopRecording(audioBlob)
      }

      recorder.start()
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop()
      mediaRecorder.stream.getTracks().forEach((track) => track.stop())
    }
  }

  return (
    <Button
      variant={isRecording ? "destructive" : "default"}
      size="icon"
      onClick={isRecording ? stopRecording : onStartRecording}
    >
      {isRecording ? (
        <MicOff className="w-6 h-6" />
      ) : (
        <Mic className="w-6 h-6" />
      )}
    </Button>
  )
}

