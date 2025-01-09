'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Bot, Sparkles, Building2, FileQuestion, Briefcase } from 'lucide-react'

interface PreInterviewFormProps {
  onSubmit: (jobDetails: JobDetails) => void
}

interface JobDetails {
  jobTitle: string
  companyName: string
  requirements: string
  questionSet: string
  domain: string
}

export default function PreInterviewForm({ onSubmit }: PreInterviewFormProps) {
  const [jobDetails, setJobDetails] = useState<JobDetails>({
    jobTitle: '',
    companyName: '',
    requirements: '',
    questionSet: '',
    domain: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setJobDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(jobDetails)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="backdrop-blur-sm bg-black/40 border-zinc-800">
        <CardHeader className="space-y-2 text-center pb-2">
          <motion.div
            className="w-20 h-20 mx-auto bg-gradient-to-tr from-zinc-700 to-zinc-600 rounded-2xl p-5"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Bot className="w-full h-full text-white" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Virtual HR Assistant
          </motion.h2>
          <p className="text-zinc-400">Let's set up your AI-powered interview session</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.01 }}
            >
              <Label className="text-zinc-400 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Job Title
              </Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                value={jobDetails.jobTitle}
                onChange={handleChange}
                required
                className="bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700"
                placeholder="e.g. Senior Software Engineer"
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.01 }}
            >
              <Label className="text-zinc-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Company Name
              </Label>
              <Input
                id="companyName"
                name="companyName"
                value={jobDetails.companyName}
                onChange={handleChange}
                required
                className="bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700"
                placeholder="e.g. Tech Innovations Inc"
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.01 }}
            >
              <Label className="text-zinc-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Requirements
              </Label>
              <Textarea
                id="requirements"
                name="requirements"
                value={jobDetails.requirements}
                onChange={handleChange}
                required
                rows={3}
                className="bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700"
                placeholder="List the key requirements for this position..."
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.01 }}
            >
              <Label className="text-zinc-400 flex items-center gap-2">
                <FileQuestion className="w-4 h-4" />
                Question Set & Domain
              </Label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="questionSet"
                  name="questionSet"
                  value={jobDetails.questionSet}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700"
                  placeholder="e.g. Technical"
                />
                <Input
                  id="domain"
                  name="domain"
                  value={jobDetails.domain}
                  onChange={handleChange}
                  required
                  className="bg-zinc-900/50 border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700"
                  placeholder="e.g. Software Development"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-zinc-700 to-zinc-600 hover:from-zinc-600 hover:to-zinc-500 text-white"
              >
                Start Interview
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}