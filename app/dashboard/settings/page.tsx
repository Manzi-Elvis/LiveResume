'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Shield, Bell, LogOut, Trash2, Copy, Check } from 'lucide-react'
import { useState } from 'react'

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

export default function SettingsPage() {
  const [email, setEmail] = useState('elvis@example.com')
  const [username, setUsername] = useState('elvismanzi')
  const [copied, setCopied] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://liveresume.com/u/${username}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSave = () => {
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 2000)
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 md:p-8 space-y-8 max-w-2xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
      </motion.div>

      {/* Account Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Account
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Update your account information</p>
        </div>
        <Card className="p-6 bg-card/50 border-border space-y-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-2">Email Address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border"
            />
            <p className="text-xs text-muted-foreground mt-2">This is your login email</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground block mb-2">Username</label>
            <div className="flex gap-2">
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-background border-border flex-1"
              />
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Your public URL: liveresume.com/u/{username}
            </p>
          </div>
          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} className={saveSuccess ? 'bg-green-600 hover:bg-green-600' : ''}>
              {saveSuccess ? 'Saved!' : 'Save Changes'}
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </Card>
      </motion.div>

      {/* Privacy & Security */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy & Security
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Control how your data is handled</p>
        </div>
        <Card className="p-6 bg-card/50 border-border space-y-4">
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border cursor-pointer hover:border-accent/50 transition-all">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-border cursor-pointer" />
              <div className="flex-1">
                <div className="font-medium text-foreground">Analytics</div>
                <div className="text-xs text-muted-foreground">Allow us to collect anonymous analytics data</div>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border cursor-pointer hover:border-accent/50 transition-all">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-border cursor-pointer" />
              <div className="flex-1">
                <div className="font-medium text-foreground">Search Indexing</div>
                <div className="text-xs text-muted-foreground">Allow search engines to index your resume</div>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border cursor-pointer hover:border-accent/50 transition-all">
              <input type="checkbox" className="w-4 h-4 rounded border-border cursor-pointer" />
              <div className="flex-1">
                <div className="font-medium text-foreground">Email Notifications</div>
                <div className="text-xs text-muted-foreground">Receive notifications about profile views</div>
              </div>
            </label>
          </div>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Manage how you receive updates</p>
        </div>
        <Card className="p-6 bg-card/50 border-border space-y-4">
          <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border cursor-pointer hover:border-accent/50 transition-all">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-border cursor-pointer" />
            <div className="flex-1">
              <div className="font-medium text-foreground">Resume Views</div>
              <div className="text-xs text-muted-foreground">Get notified when someone views your resume</div>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border cursor-pointer hover:border-accent/50 transition-all">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-border cursor-pointer" />
            <div className="flex-1">
              <div className="font-medium text-foreground">Project Clicks</div>
              <div className="text-xs text-muted-foreground">Get notified when projects are clicked</div>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 border border-border cursor-pointer hover:border-accent/50 transition-all">
            <input type="checkbox" className="w-4 h-4 rounded border-border cursor-pointer" />
            <div className="flex-1">
              <div className="font-medium text-foreground">Weekly Digest</div>
              <div className="text-xs text-muted-foreground">Receive a weekly summary of your analytics</div>
            </div>
          </label>
        </Card>
      </motion.div>

      {/* Danger Zone */}
      <motion.div variants={itemVariants} className="space-y-4 pt-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Danger Zone</h2>
          <p className="text-sm text-muted-foreground mt-1">Irreversible actions</p>
        </div>
        <Card className="p-6 bg-destructive/10 border-destructive/50 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border">
              <div>
                <div className="font-medium text-foreground">Log Out</div>
                <div className="text-xs text-muted-foreground">Sign out from this device</div>
              </div>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border">
              <div>
                <div className="font-medium text-foreground">Delete Account</div>
                <div className="text-xs text-muted-foreground">Permanently delete your account and all data</div>
              </div>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Help */}
      <motion.div variants={itemVariants}>
        <Card className="p-6 bg-accent/10 border-accent/50">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Need Help?</h3>
            <p className="text-sm text-muted-foreground">
              Check out our documentation or contact support for assistance.
            </p>
            <div className="flex gap-2 pt-2">
              <a href="#" className="text-sm text-accent hover:underline">
                Documentation
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#" className="text-sm text-accent hover:underline">
                Contact Support
              </a>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
