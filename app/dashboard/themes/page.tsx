'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Eye } from 'lucide-react'

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

interface Theme {
  id: string
  name: string
  description: string
  accentColor: string
  previewColors: string[]
}

const presetThemes: Theme[] = [
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Cool blues and teals with a modern touch',
    accentColor: '#0891b2',
    previewColors: ['#0891b2', '#06b6d4', '#0ea5e9', '#0284c7'],
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Earthy greens for a natural feel',
    accentColor: '#15803d',
    previewColors: ['#15803d', '#22c55e', '#16a34a', '#4ade80'],
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm oranges and reds',
    accentColor: '#ea580c',
    previewColors: ['#ea580c', '#f97316', '#fb923c', '#fed7aa'],
  },
  {
    id: 'amethyst',
    name: 'Amethyst',
    description: 'Rich purples and violets',
    accentColor: '#7c3aed',
    previewColors: ['#7c3aed', '#a78bfa', '#c4b5fd', '#ddd6fe'],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Elegant grays and blacks',
    accentColor: '#1f2937',
    previewColors: ['#1f2937', '#374151', '#4b5563', '#6b7280'],
  },
  {
    id: 'rose',
    name: 'Rose',
    description: 'Soft pinks and reds',
    accentColor: '#e11d48',
    previewColors: ['#e11d48', '#f43f5e', '#fb7185', '#fca5c3'],
  },
]

const fonts = [
  { id: 'geist', name: 'Geist', description: 'Clean and modern (Default)' },
  { id: 'inter', name: 'Inter', description: 'Highly readable' },
  { id: 'poppins', name: 'Poppins', description: 'Geometric and friendly' },
  { id: 'raleway', name: 'Raleway', description: 'Elegant and refined' },
  { id: 'syne', name: 'Syne', description: 'Bold and expressive' },
]

export default function ThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState('ocean')
  const [selectedFont, setSelectedFont] = useState('geist')
  const [accentColor, setAccentColor] = useState('#0891b2')
  const [darkMode, setDarkMode] = useState(true)
  const [visibleSections, setVisibleSections] = useState({
    about: true,
    skills: true,
    experience: true,
    projects: true,
    contact: true,
  })

  const toggleSection = (section: keyof typeof visibleSections) => {
    setVisibleSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-foreground">Customize Your Theme</h1>
        <p className="text-muted-foreground mt-2">Personalize your resume appearance</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Customization Panel */}
        <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
          {/* Accent Color */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Accent Color</h2>
            <div className="flex gap-2">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-16 h-16 rounded-lg cursor-pointer border border-border"
              />
              <div className="flex-1">
                <div className="text-sm font-mono text-muted-foreground">{accentColor}</div>
                <p className="text-xs text-muted-foreground mt-2">Click to pick a custom color</p>
              </div>
            </div>
          </div>

          {/* Dark/Light Toggle */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Appearance</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setDarkMode(false)}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                  !darkMode
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                  darkMode
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Font Selection */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Font</h2>
            <div className="space-y-2">
              {fonts.map((font) => (
                <button
                  key={font.id}
                  onClick={() => setSelectedFont(font.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    selectedFont === font.id
                      ? 'border-accent bg-accent/10'
                      : 'border-border hover:border-accent/50 bg-card/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{font.name}</div>
                      <div className="text-xs text-muted-foreground">{font.description}</div>
                    </div>
                    {selectedFont === font.id && <Check className="h-4 w-4 text-accent" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section Visibility */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Visible Sections</h2>
            <div className="space-y-2">
              {Object.entries(visibleSections).map(([section, visible]) => (
                <label
                  key={section}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border cursor-pointer hover:border-accent/50 transition-all"
                >
                  <input
                    type="checkbox"
                    checked={visible}
                    onChange={() => toggleSection(section as keyof typeof visibleSections)}
                    className="w-4 h-4 rounded border-border cursor-pointer"
                  />
                  <span className="text-sm font-medium text-foreground capitalize">{section}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <Button className="w-full" size="lg">
            Save Changes
          </Button>
        </motion.div>

        {/* Preview & Theme Selection */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
          {/* Preset Themes */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Preset Themes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {presetThemes.map((theme) => (
                <motion.button
                  key={theme.id}
                  onClick={() => {
                    setSelectedTheme(theme.id)
                    setAccentColor(theme.accentColor)
                  }}
                  whileHover={{ y: -4 }}
                  className={`text-left p-4 rounded-lg border-2 transition-all ${
                    selectedTheme === theme.id
                      ? 'border-accent bg-accent/10'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{theme.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{theme.description}</p>
                    </div>
                    <div className="flex gap-2">
                      {theme.previewColors.map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-lg border border-border/50"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  {selectedTheme === theme.id && (
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-accent">
                      <Check className="h-3 w-3" />
                      Selected
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Live Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Live Preview</h2>
              <a
                href="/u/elvismanzi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                <Eye className="h-4 w-4" />
                View Full
              </a>
            </div>
            <Card className={`p-8 border-border ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
              <div className="space-y-6 max-w-md">
                {/* Preview Header */}
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Elvis Manzi</h1>
                  <p className="text-lg font-semibold" style={{ color: accentColor }}>
                    Senior Full Stack Engineer
                  </p>
                </div>

                {/* Preview Content */}
                {visibleSections.skills && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm opacity-75">Skills</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>React</span>
                          <span className="opacity-60">95%</span>
                        </div>
                        <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                          <div
                            className="h-full"
                            style={{ width: '95%', backgroundColor: accentColor }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>TypeScript</span>
                          <span className="opacity-60">90%</span>
                        </div>
                        <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                          <div
                            className="h-full"
                            style={{ width: '90%', backgroundColor: accentColor }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {visibleSections.experience && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm opacity-75">Experience</h3>
                    <div className={`p-3 rounded border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                      <h4 className="font-semibold text-sm">Senior Engineer</h4>
                      <p className="text-xs opacity-75 mt-1">Tech Company • 2022 - Present</p>
                    </div>
                  </div>
                )}

                {visibleSections.projects && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm opacity-75">Featured Project</h3>
                    <div
                      className="p-3 rounded border transition-all hover:opacity-80"
                      style={{
                        borderColor: accentColor,
                        backgroundColor: `${accentColor}15`,
                      }}
                    >
                      <h4 className="font-semibold text-sm">Interactive Dashboard</h4>
                      <p className="text-xs opacity-60 mt-1">Real-time analytics platform</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
