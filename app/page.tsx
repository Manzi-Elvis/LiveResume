'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Zap, BarChart3, Palette, Share2, Moon, Code, Users } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-background via-background to-accent/5 dark:to-accent/10">
      {/* Subtle animated background elements */}
      <div className="pointer-events-none fixed inset-0">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl dark:bg-accent/30"
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl dark:bg-accent/20"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-40 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">LR</span>
          </div>
          <span className="text-lg font-semibold text-foreground hidden sm:inline">LiveResume</span>
        </motion.div>
        <div className="flex items-center gap-4">
          <Link href="/demo">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              View Demo
            </Button>
          </Link>
          <Link href="/dashboard/editor">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={fadeIn} className="text-center space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight text-foreground">
              Your Resume.
              <br />
              <span className="bg-linear-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                But Interactive.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Replace static PDFs with interactive web resumes that recruiters explore. Track engagement, showcase projects, and stand out from the crowd.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Create Your Live Resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  View Demo Resume
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={fadeIn} className="py-8 border-y border-border">
            <p className="text-sm font-medium text-muted-foreground text-center mb-6">
              Trusted by creators at leading companies
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {['Google', 'Meta', 'Microsoft', 'Apple', 'Tesla'].map((company) => (
                <div key={company} className="text-sm font-semibold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Interactive Projects',
                description: 'Showcase your work with embedded demos, GitHub links, and live previews.',
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: 'Built-in Analytics',
                description: 'Track views, section engagement, and which projects capture recruiters.',
              },
              {
                icon: <Palette className="h-6 w-6" />,
                title: 'Custom Themes',
                description: 'Choose from professional themes or create your own with color picker.',
              },
              {
                icon: <Share2 className="h-6 w-6" />,
                title: 'Shareable Links',
                description: 'Get a unique URL to share with recruiters, no account required to view.',
              },
              {
                icon: <Moon className="h-6 w-6" />,
                title: 'Dark & Light Mode',
                description: 'Automatic theme switching based on recruiter preferences.',
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: 'Developer-Friendly',
                description: 'Built with modern tech stack: Next.js, TypeScript, Tailwind CSS.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Footer */}
          <motion.div variants={fadeIn} className="text-center py-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to elevate your resume?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of creators getting noticed by top companies.
            </p>
            <Link href="/dashboard">
              <Button size="lg">Start Creating Now</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 text-center text-sm text-muted-foreground">
          <p>© 2026 LiveResume. Built with modern web technologies.</p>
        </div>
      </footer>
    </div>
  )
}
