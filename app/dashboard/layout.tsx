'use client'

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, BarChart3, Palette, Settings, LogOut, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Resume Editor', href: '/dashboard/editor', icon: FileText },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Themes', href: '/dashboard/themes', icon: Palette },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          sidebarOpen ? 'fixed md:relative' : 'hidden md:block'
        } w-64 h-screen border-r border-border bg-card/50 flex flex-col z-50 md:z-0`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">LR</span>
            </div>
            <span className="font-semibold text-lg">LiveResume</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-6 border-t border-border space-y-4">
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-xs">MRE</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">Elvis Manzi</div>
                <div className="text-xs text-muted-foreground truncate">elvis@example.com</div>
              </div>
              <ChevronDown className="h-4 w-4 flex-shrink-0" />
            </button>

            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute bottom-full left-0 right-0 mb-2 bg-card border border-border rounded-lg p-2 space-y-2"
              >
                <Link href="/dashboard/settings" className="block px-4 py-2 rounded hover:bg-secondary text-sm transition-colors">
                  Settings
                </Link>
                <a href="/u/elvismanzi" className="block px-4 py-2 rounded hover:bg-secondary text-sm transition-colors">
                  View Public Resume
                </a>
                <button className="w-full text-left px-4 py-2 rounded hover:bg-secondary text-sm transition-colors text-destructive">
                  <div className="flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </div>
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden absolute top-6 right-6 p-2 hover:bg-secondary rounded-lg"
        >
          <X className="h-6 w-6" />
        </button>
      </motion.aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-40"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-border bg-card/50 backdrop-blur px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 md:block hidden" />
          <div className="flex items-center gap-4">
            <a href="/u/elvismanzi" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                View Resume
              </Button>
            </a>
            <a href="/">
              <Button size="sm">Share</Button>
            </a>
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
