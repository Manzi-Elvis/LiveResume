'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 dark:to-accent/10">
      {/* Navigation */}
      <nav className="flex items-center gap-4 px-6 py-4 md:px-12 md:py-6 border-b border-border/50">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Demo Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 md:px-12 py-12"
      >
        <div className="space-y-6">
          <motion.div variants={fadeIn} className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Demo Resume</h1>
            <p className="text-lg text-muted-foreground">
              This is an example of what your interactive resume can look like
            </p>
          </motion.div>

          {/* Demo Info */}
          <motion.div variants={fadeIn} className="p-8 rounded-lg border border-accent/30 bg-accent/5 space-y-4">
            <p className="text-muted-foreground">
              This demo showcases the key features of LiveResume. When you create your own resume, you'll be able to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Edit your profile, skills, experience, and projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Customize colors, fonts, and theme</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Track analytics on views and engagement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Share your resume with a unique URL</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>Build trust with recruiters through interactivity</span>
              </li>
            </ul>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeIn} className="text-center space-y-4 pt-8">
            <h2 className="text-2xl font-bold text-foreground">Ready to create your interactive resume?</h2>
            <Link href="/dashboard">
              <Button size="lg">Get Started for Free</Button>
            </Link>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
            {[
              {
                title: 'Interactive Portfolio',
                description: 'Embed links to your projects with live demos and GitHub repos right on your resume',
              },
              {
                title: 'Real-Time Analytics',
                description: 'See exactly who viewed your resume, which sections they focused on, and more',
              },
              {
                title: 'Customizable Design',
                description: 'Choose from beautiful preset themes or create your own with custom colors',
              },
              {
                title: 'Mobile Optimized',
                description: 'Your resume looks perfect on desktop, tablet, and mobile devices',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-card/50 hover:border-accent/50 transition-all"
              >
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeIn} className="flex gap-4 justify-center pt-8">
            <Link href="/dashboard">
              <Button size="lg">Create Your Resume</Button>
            </Link>
            <Link href="/u/elvismanzi">
              <Button size="lg" variant="outline">
                View Example Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
