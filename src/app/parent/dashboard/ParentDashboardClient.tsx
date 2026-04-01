'use client'

import { useState, useEffect, useCallback } from 'react'
import { ProgressRing } from '@/components/clay/ProgressRing'
import { ChildSelector } from '@/components/parent/ChildSelector'
import { WeeklySummary } from '@/components/parent/WeeklySummary'
import { AchievementShowcase } from '@/components/parent/AchievementShowcase'
import { ActivityFeed } from '@/components/parent/ActivityFeed'
import type { LinkedChild, ParentDashboardData } from '@/lib/dashboard/parent-types'

interface ParentDashboardClientProps {
  parentId: string
}

export function ParentDashboardClient({ parentId }: ParentDashboardClientProps) {
  const [children, setChildren] = useState<LinkedChild[]>([])
  const [selectedChildId, setSelectedChildId] = useState<string | null>(null)
  const [dashboard, setDashboard] = useState<ParentDashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch linked children
  useEffect(() => {
    fetch('/api/parent/children')
      .then((r) => r.json())
      .then((data) => {
        setChildren(data.children ?? [])
        if (data.children?.length > 0) {
          setSelectedChildId(data.children[0].id)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Fetch dashboard for selected child
  const fetchDashboard = useCallback(async () => {
    if (!selectedChildId) return
    const res = await fetch(`/api/parent/child/${selectedChildId}/dashboard`)
    if (res.ok) {
      setDashboard(await res.json())
    }
  }, [selectedChildId])

  useEffect(() => {
    fetchDashboard()
  }, [fetchDashboard])

  if (loading) {
    return <p className="text-sm text-muted-foreground text-center py-8">Loading...</p>
  }

  if (children.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-4xl mb-4">👋</p>
        <h2 className="text-xl font-serif font-bold mb-2">Welcome!</h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto" role="alert">
          No children linked to your account yet. Your child&apos;s teacher or
          school administrator will connect your accounts.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Child selector */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif font-bold">
            {dashboard?.child.fullName ?? 'Loading...'}
          </h2>
          {dashboard && (
            <p className="text-sm text-muted-foreground">
              Grade {dashboard.child.grade === 0 ? 'K' : dashboard.child.grade} &middot;{' '}
              {dashboard.child.region.charAt(0).toUpperCase() + dashboard.child.region.slice(1)}
            </p>
          )}
        </div>
        <ChildSelector
          children={children}
          selectedId={selectedChildId}
          onSelect={setSelectedChildId}
        />
      </div>

      {dashboard && (
        <>
          {/* Weekly summary */}
          <WeeklySummary summary={dashboard.summary} />

          {/* Progress rings */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <ProgressRing percent={dashboard.progress.math.percent} label="Math" color="primary" />
              <p className="text-xs text-muted-foreground mt-1">
                {dashboard.progress.math.modulesCompleted}/{dashboard.progress.math.totalModules} modules
              </p>
            </div>
            <div className="flex flex-col items-center">
              <ProgressRing percent={dashboard.progress.ela.percent} label="ELA" color="primary" />
              <p className="text-xs text-muted-foreground mt-1">
                {dashboard.progress.ela.modulesCompleted}/{dashboard.progress.ela.totalModules} modules
              </p>
            </div>
          </div>

          {/* Achievements */}
          <AchievementShowcase achievements={dashboard.achievements} />

          {/* Recent activity */}
          <ActivityFeed activities={dashboard.recentActivity} />
        </>
      )}
    </div>
  )
}
