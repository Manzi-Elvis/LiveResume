'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

const sampleResume = {
  name: 'Alex Chen',
  role: 'Senior Full Stack Engineer',
  location: 'San Francisco, CA',
  bio: 'Building beautiful, performant web experiences. Coffee enthusiast and open-source contributor.',
  email: 'alex@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  skills: [
    { name: 'React', proficiency: 95 },
    { name: 'TypeScript', proficiency: 90 },
    { name: 'Next.js', proficiency: 92 },
    { name: 'Tailwind CSS', proficiency: 88 },
    { name: 'PostgreSQL', proficiency: 85 },
    { name: 'Node.js', proficiency: 87 },
  ],
  experience: [
    {
      title: 'Senior Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Led development of core platform features serving 1M+ users.',
      highlights: ['Led 5-person team', '40% performance improvement', 'Open source contributions'],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built production systems from zero to scale.',
      highlights: ['Architected payment system', 'Improved CI/CD pipeline', 'Mentored 3 engineers'],
    },
  ],
  projects: [
    {
      name: 'Interactive Dashboard',
      description: 'Real-time analytics platform with WebSocket integration',
      tags: ['Next.js', 'TypeScript', 'Recharts'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      name: 'API Framework',
      description: 'Type-safe API framework for Node.js applications',
      tags: ['Node.js', 'TypeScript', 'GraphQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ResumePage({ params }: { params: { username: string } }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-br from-background to-background/95">
      {/* Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs">AC</span>
            </div>
            <div className="hidden sm:block">
              <h2 className="font-semibold text-foreground">{sampleResume.name}</h2>
              <p className="text-xs text-muted-foreground">{sampleResume.role}</p>
            </div>
          </div>
          <nav className="flex gap-1">
            {['about', 'experience', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  activeSection === section
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 py-12 space-y-16"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-pretty">
              {sampleResume.name}
            </h1>
            <p className="text-xl md:text-2xl text-accent font-semibold">{sampleResume.role}</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {sampleResume.bio}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={`mailto:${sampleResume.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href={sampleResume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={sampleResume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleResume.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                </div>
                <motion.div
                  className="h-2 bg-card rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full bg-linear-to-r from-accent to-accent/80"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Experience</h2>
          <div className="space-y-6">
            {sampleResume.experience.map((job, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="pb-6 border-b border-border/50 last:border-0 last:pb-0 space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                      <p className="text-accent font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {job.period}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            {sampleResume.projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section variants={itemVariants} className="py-12 text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Interested in connecting?</h2>
          <p className="text-muted-foreground">Feel free to reach out via email or social media.</p>
          <div className="flex gap-3 justify-center pt-4">
            <a href={`mailto:${sampleResume.email}`}>
              <Button>Send Email</Button>
            </a>
            <a href={sampleResume.github}>
              <Button variant="outline">View GitHub</Button>
            </a>
          </div>
        </motion.section>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>This interactive resume was created with LiveResume</p>
        </div>
      </footer>
    </div>
  )
}
