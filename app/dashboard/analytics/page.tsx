'use client'

import React from "react"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Eye, Clock as Click, Users, TrendingUp, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const viewsData = [
  { name: 'Mon', views: 120, clicks: 45 },
  { name: 'Tue', views: 200, clicks: 87 },
  { name: 'Wed', views: 180, clicks: 76 },
  { name: 'Thu', views: 290, clicks: 120 },
  { name: 'Fri', views: 240, clicks: 98 },
  { name: 'Sat', views: 220, clicks: 92 },
  { name: 'Sun', views: 160, clicks: 68 },
]

const sectionEngagement = [
  { name: 'About', value: 245, fill: 'hsl(var(--accent))' },
  { name: 'Skills', value: 198, fill: 'hsl(var(--chart-2))' },
  { name: 'Experience', value: 320, fill: 'hsl(var(--chart-3))' },
  { name: 'Projects', value: 287, fill: 'hsl(var(--chart-4))' },
  { name: 'Contact', value: 145, fill: 'hsl(var(--chart-5))' },
]

const deviceBreakdown = [
  { name: 'Desktop', value: 65 },
  { name: 'Mobile', value: 28 },
  { name: 'Tablet', value: 7 },
]

const projectClicks = [
  { name: 'Interactive Dashboard', clicks: 234 },
  { name: 'API Framework', clicks: 187 },
  { name: 'Design System', clicks: 156 },
  { name: 'Component Library', clicks: 142 },
]

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

const StatCard = ({ icon: Icon, label, value, trend }: { icon: React.ReactNode; label: string; value: string; trend?: number }) => (
  <Card className="p-6 bg-card/50 border-border hover:border-accent/50 transition-all">
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        {trend !== undefined && (
          <p className={`text-xs font-medium ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% from last week
          </p>
        )}
      </div>
      <div className="p-3 rounded-lg bg-accent/10 text-accent">{Icon}</div>
    </div>
  </Card>
)

export default function AnalyticsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Track your resume engagement and reach</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </motion.div>

      {/* Stat Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Eye className="h-6 w-6" />} label="Total Views" value="2,847" trend={12} />
        <StatCard icon={<Click className="h-6 w-6" />} label="Project Clicks" value="1,243" trend={8} />
        <StatCard icon={<Users className="h-6 w-6" />} label="Unique Visitors" value="892" trend={-3} />
        <StatCard icon={<TrendingUp className="h-6 w-6" />} label="Avg. Session Time" value="3m 24s" trend={5} />
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Views Over Time */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-card/50 border-border h-full">
            <h2 className="text-lg font-semibold text-foreground mb-6">Views Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="var(--color-accent)"
                  dot={false}
                  strokeWidth={2}
                  name="Views"
                />
                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="var(--color-chart-2)"
                  dot={false}
                  strokeWidth={2}
                  name="Project Clicks"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Section Engagement */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-card/50 border-border h-full">
            <h2 className="text-lg font-semibold text-foreground mb-6">Section Engagement</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sectionEngagement}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sectionEngagement.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Device Breakdown */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-card/50 border-border h-full">
            <h2 className="text-lg font-semibold text-foreground mb-6">Device Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deviceBreakdown}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" fill="var(--color-accent)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Project Clicks */}
        <motion.div variants={itemVariants}>
          <Card className="p-6 bg-card/50 border-border h-full">
            <h2 className="text-lg font-semibold text-foreground mb-6">Top Projects</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={projectClicks}
                layout="vertical"
                margin={{ left: 150, right: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis type="number" stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} />
                <YAxis dataKey="name" type="category" stroke="var(--color-muted-foreground)" style={{ fontSize: '12px' }} width={140} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="clicks" fill="var(--color-chart-3)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Privacy Notice */}
      <motion.div variants={itemVariants}>
        <Card className="p-6 bg-secondary/50 border-border">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Privacy First</h3>
            <p className="text-sm text-muted-foreground">
              We track engagement data to help you understand recruiter interest, but never collect personal information or use cookies. All data is anonymous and can be deleted anytime.
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
