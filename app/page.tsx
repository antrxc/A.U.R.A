'use client'

import { useState } from 'react'
import PreInterviewForm from './components/PreInterviewForm'
import InterviewInterface from './components/InterviewInterface'
import { FloatingShapes } from './components/decorative/FloatingShapes'
import { createInitialState, getNextQuestion, processAnswer, isInterviewComplete, generateResponse } from './lib/interviewLogic'

export default function VirtualHRBot() {
  const [isRecording, setIsRecording] = useState(false)
  const [response, setResponse] = useState('')
  const [isResponding, setIsResponding] = useState(false)
  const [interviewStarted, setInterviewStarted] = useState(false)
  const [interviewState, setInterviewState] = useState(createInitialState())
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    companyName: '',
    requirements: '',
    questionSet: '',
    domain: ''
  })

  const handleStartInterview = (details) => {
    setJobDetails(details)
    setInterviewStarted(true)
    const firstQuestion = getNextQuestion(interviewState)
    if (firstQuestion) {
      setResponse(firstQuestion.text)
    }
  }

  const handleAudioRecorded = async (audioBlob) => {
    setIsRecording(false)
    setIsResponding(true)

    // Simulate audio-to-text conversion
    const simulatedText = "This is a simulated answer from the candidate."

    const currentQuestion = getNextQuestion(interviewState)
    if (currentQuestion) {
      const aiResponse = generateResponse(currentQuestion, simulatedText)
      const newState = processAnswer(interviewState, simulatedText)
      setInterviewState(newState)

      const nextQuestion = getNextQuestion(newState)
      if (nextQuestion) {
        setResponse(aiResponse + "\n\n" + nextQuestion.text)
      } else {
        setResponse(aiResponse + "\n\nThank you for completing the interview.")
      }
    }

    setIsResponding(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {!interviewStarted ? (
          <PreInterviewForm onSubmit={handleStartInterview} />
        ) : (
          <InterviewInterface
          isRecording={isRecording}
          isResponding={isResponding}
          response={response}
          jobDetails={jobDetails}
          onStartRecording={() => setIsRecording(true)}
          onStopRecording={handleAudioRecorded}
          isComplete={isInterviewComplete(interviewState)}
          />
        )}
        <FloatingShapes />
      </div>
    </div>
  )
}