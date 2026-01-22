'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Trash2, GripVertical, Eye, Save, X } from 'lucide-react'

interface ResumeData {
  name: string
  role: string
  bio: string
  email: string
  github: string
  linkedin: string
  skills: Array<{ name: string; proficiency: number }>
  experience: Array<{ title: string; company: string; period: string; description: string }>
}

export default function EditorPage() {
  const [resume, setResume] = useState<ResumeData>({
    name: 'Alex Chen',
    role: 'Senior Full Stack Engineer',
    bio: 'Building beautiful, performant web experiences.',
    email: 'alex@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    skills: [
      { name: 'React', proficiency: 95 },
      { name: 'TypeScript', proficiency: 90 },
    ],
    experience: [
      {
        title: 'Senior Engineer',
        company: 'Tech Company',
        period: '2022 - Present',
        description: 'Led development of core platform features.',
      },
    ],
  })

  const [showPreview, setShowPreview] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleBasicChange = (field: keyof Omit<ResumeData, 'skills' | 'experience'>, value: string) => {
    setResume((prev) => ({ ...prev, [field]: value }))
  }

  const addSkill = () => {
    setResume((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: '', proficiency: 50 }],
    }))
  }

  const updateSkill = (idx: number, field: 'name' | 'proficiency', value: string | number) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.map((s, i) => (i === idx ? { ...s, [field]: value } : s)),
    }))
  }

  const removeSkill = (idx: number) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== idx),
    }))
  }

  const addExperience = () => {
    setResume((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          title: '',
          company: '',
          period: '',
          description: '',
        },
      ],
    }))
  }

  const updateExperience = (idx: number, field: string, value: string) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((e, i) =>
        i === idx ? { ...e, [field]: value } : e
      ),
    }))
  }

  const removeExperience = (idx: number) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== idx),
    }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="h-full flex flex-col md:flex-row gap-0">
      {/* Form Panel */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="md:w-1/2 overflow-y-auto border-b md:border-b-0 md:border-r border-border"
      >
        <div className="p-6 md:p-8 space-y-8 pb-20">
          {/* Profile Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2">
                  Full Name
                </label>
                <Input
                  value={resume.name}
                  onChange={(e) => handleBasicChange('name', e.target.value)}
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2">
                  Professional Role
                </label>
                <Input
                  value={resume.role}
                  onChange={(e) => handleBasicChange('role', e.target.value)}
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2">
                  Bio
                </label>
                <Textarea
                  value={resume.bio}
                  onChange={(e) => handleBasicChange('bio', e.target.value)}
                  className="bg-card border-border resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Contact & Links</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2">
                  Email
                </label>
                <Input
                  value={resume.email}
                  onChange={(e) => handleBasicChange('email', e.target.value)}
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2">
                  GitHub URL
                </label>
                <Input
                  value={resume.github}
                  onChange={(e) => handleBasicChange('github', e.target.value)}
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground block mb-2">
                  LinkedIn URL
                </label>
                <Input
                  value={resume.linkedin}
                  onChange={(e) => handleBasicChange('linkedin', e.target.value)}
                  className="bg-card border-border"
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Skills</h2>
              <Button onClick={addSkill} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Skill
              </Button>
            </div>
            <div className="space-y-3">
              {resume.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-3 items-end"
                >
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab mt-6" />
                  <div className="flex-1">
                    <Input
                      placeholder="Skill name"
                      value={skill.name}
                      onChange={(e) => updateSkill(idx, 'name', e.target.value)}
                      className="bg-card border-border mb-2"
                    />
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.proficiency}
                        onChange={(e) => updateSkill(idx, 'proficiency', parseInt(e.target.value))}
                        className="flex-1 h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-sm text-muted-foreground w-12">{skill.proficiency}%</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => removeSkill(idx)}
                    size="sm"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Experience</h2>
              <Button onClick={addExperience} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Job
              </Button>
            </div>
            <div className="space-y-6">
              {resume.experience.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg border border-border bg-card/50 space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-2 flex-1">
                      <GripVertical className="h-5 w-5 text-muted-foreground cursor-grab mt-2" />
                      <div className="flex-1 space-y-3">
                        <Input
                          placeholder="Job Title"
                          value={job.title}
                          onChange={(e) => updateExperience(idx, 'title', e.target.value)}
                          className="bg-background border-border"
                        />
                        <Input
                          placeholder="Company Name"
                          value={job.company}
                          onChange={(e) => updateExperience(idx, 'company', e.target.value)}
                          className="bg-background border-border"
                        />
                        <Input
                          placeholder="2022 - Present"
                          value={job.period}
                          onChange={(e) => updateExperience(idx, 'period', e.target.value)}
                          className="bg-background border-border"
                        />
                        <Textarea
                          placeholder="Job description"
                          value={job.description}
                          onChange={(e) => updateExperience(idx, 'description', e.target.value)}
                          className="bg-background border-border resize-none"
                          rows={2}
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => removeExperience(idx)}
                      size="sm"
                      variant="ghost"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Preview/Actions Panel */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="md:w-1/2 bg-secondary/50 border-t md:border-t-0 p-6 flex flex-col gap-4"
      >
        <div className="flex gap-2">
          <Button
            onClick={() => setShowPreview(!showPreview)}
            className="flex-1"
            variant={showPreview ? 'default' : 'outline'}
          >
            <Eye className="h-4 w-4 mr-2" />
            {showPreview ? 'Close Preview' : 'Preview'}
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1"
            variant={saved ? 'default' : 'outline'}
          >
            <Save className="h-4 w-4 mr-2" />
            {saved ? 'Saved!' : 'Save'}
          </Button>
        </div>

        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 rounded-lg border border-border bg-white dark:bg-background overflow-hidden flex flex-col"
          >
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{resume.name}</h1>
                  <p className="text-lg text-accent font-semibold">{resume.role}</p>
                </div>
                <p className="text-muted-foreground text-sm">{resume.bio}</p>

                <div className="pt-4 border-t border-border/50 space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground mb-2">SKILLS</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {resume.skills.map((skill) => (
                        <div key={skill.name} className="text-xs">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.proficiency}%</span>
                          </div>
                          <div className="h-1 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {resume.experience.length > 0 && (
                  <div className="pt-4 border-t border-border/50">
                    <h3 className="font-semibold text-sm text-muted-foreground mb-3">EXPERIENCE</h3>
                    <div className="space-y-3">
                      {resume.experience.map((job, idx) => (
                        <div key={idx} className="text-sm">
                          <h4 className="font-semibold">{job.title}</h4>
                          <p className="text-accent text-xs">{job.company}</p>
                          <p className="text-muted-foreground text-xs">{job.period}</p>
                          <p className="text-muted-foreground text-xs mt-1">{job.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <Card className="p-4 bg-card/50 border-border">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Current Version</span>
              <span className="font-semibold text-accent">v1.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Last Saved</span>
              <span className="text-xs text-muted-foreground">Just now</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Public URL</span>
              <a
                href="/u/alexchen"
                className="text-accent hover:underline text-xs"
              >
                /u/alexchen
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
