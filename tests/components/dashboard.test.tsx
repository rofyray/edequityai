import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StudentDashboardClient } from '@/app/dashboard/StudentDashboardClient'
import { StreakCounter } from '@/components/dashboard/StreakCounter'
import { ModuleCard } from '@/components/dashboard/ModuleCard'
import { OfflineBanner } from '@/components/dashboard/OfflineBanner'
import { AchievementBadge } from '@/components/dashboard/AchievementBadge'
import { XPCounter } from '@/components/dashboard/XPCounter'

// Mock fetch for dashboard API
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({
    student: { id: 'student-123', fullName: 'Jaylen Carter', grade: 5, region: 'appalachia', state: 'NC', streakDays: 7, xpTotal: 350 },
    progress: {
      math: { percent: 45, modulesCompleted: 3, totalModules: 12 },
      ela: { percent: 30, modulesCompleted: 2, totalModules: 12 },
    },
    recommendedModules: [
      { id: 'mod-1', slug: 'g5-math-fractions', title: 'Adding Fractions', subject: 'math', grade: 5, topicCluster: 'Fractions', estimatedMinutes: 18, xpReward: 50, region: 'appalachia' },
      { id: 'mod-2', slug: 'g5-ela-theme', title: 'Theme from Details', subject: 'ela', grade: 5, topicCluster: 'Reading Literature', estimatedMinutes: 15, xpReward: 40, region: 'all' },
    ],
    recentActivity: [],
    achievements: [
      { id: 'first-lesson', label: 'First Lesson', icon: '📚', earned: true },
      { id: 'streak-7', label: 'Week Warrior', icon: '⭐', earned: true },
    ],
  }),
})

const defaultProps = {
  studentId: 'student-123',
  studentName: 'Jaylen Carter',
  grade: 5,
  region: 'appalachia' as const,
  state: 'NC',
  streakDays: 7,
  xpTotal: 350,
  subjects: ['math', 'ela'],
}

describe('StudentDashboard', () => {
  it('renders dashboard with loaded indicator', () => {
    render(<StudentDashboardClient {...defaultProps} />)
    expect(screen.getByTestId('dashboard-loaded')).toBeInTheDocument()
  })

  it('displays correct student name greeting', () => {
    render(<StudentDashboardClient {...defaultProps} />)
    expect(screen.getByText(/Hey, Jaylen/)).toBeInTheDocument()
  })

  it('displays correct grade and state context', () => {
    render(<StudentDashboardClient {...defaultProps} />)
    expect(screen.getByText(/Grade 5/)).toBeInTheDocument()
    expect(screen.getByText(/NC/)).toBeInTheDocument()
  })

  it('displays region pill with correct region', () => {
    render(<StudentDashboardClient {...defaultProps} />)
    expect(screen.getByText('Appalachia')).toBeInTheDocument()
  })

  it('renders progress section for enrolled subjects', () => {
    render(<StudentDashboardClient {...defaultProps} />)
    expect(screen.getByTestId('progress-section')).toBeInTheDocument()
    expect(screen.getByText('Math')).toBeInTheDocument()
    expect(screen.getByText('ELA')).toBeInTheDocument()
  })

  it('displays correct streak count from student record', () => {
    render(<StudentDashboardClient {...defaultProps} />)
    expect(screen.getByTestId('streak-count')).toHaveTextContent('7')
  })

  it('displays correct XP count', () => {
    render(<StudentDashboardClient {...defaultProps} />)
    expect(screen.getByTestId('xp-count')).toHaveTextContent('350')
  })
})

describe('StreakCounter', () => {
  it('renders singular "day" for streak of 1', () => {
    render(<StreakCounter days={1} />)
    expect(screen.getByText('day streak')).toBeInTheDocument()
  })

  it('renders plural "days" for streak > 1', () => {
    render(<StreakCounter days={5} />)
    expect(screen.getByText('days streak')).toBeInTheDocument()
  })
})

describe('ModuleCard', () => {
  const mockModule = {
    id: 'mod-1',
    slug: 'g5-math-fractions',
    title: 'Adding Fractions',
    subject: 'math' as const,
    grade: 5,
    topicCluster: 'Number & Operations—Fractions',
    estimatedMinutes: 18,
    xpReward: 50,
    region: 'appalachia',
  }

  it('renders module title and topic', () => {
    render(<ModuleCard module={mockModule} />)
    expect(screen.getByText('Adding Fractions')).toBeInTheDocument()
    expect(screen.getByText('Number & Operations—Fractions')).toBeInTheDocument()
  })

  it('renders estimated time and XP reward', () => {
    render(<ModuleCard module={mockModule} />)
    expect(screen.getByText('18 min')).toBeInTheDocument()
    expect(screen.getByText('50 XP')).toBeInTheDocument()
  })

  it('links to module page', () => {
    render(<ModuleCard module={mockModule} />)
    const link = screen.getByTestId('module-card-mod-1')
    expect(link).toHaveAttribute('href', '/module/g5-math-fractions')
  })

  it('shows Math badge for math modules', () => {
    render(<ModuleCard module={mockModule} />)
    expect(screen.getByText('Math')).toBeInTheDocument()
  })

  it('shows ELA badge for ela modules', () => {
    render(<ModuleCard module={{ ...mockModule, subject: 'ela' }} />)
    expect(screen.getByText('ELA')).toBeInTheDocument()
  })
})

describe('OfflineBanner', () => {
  it('shows offline banner when navigator.onLine is false', () => {
    Object.defineProperty(navigator, 'onLine', { value: false, writable: true, configurable: true })
    render(<OfflineBanner />)
    expect(screen.getByRole('alert')).toHaveTextContent(/offline/i)
    Object.defineProperty(navigator, 'onLine', { value: true, writable: true, configurable: true })
  })

  it('hides offline banner when online', () => {
    Object.defineProperty(navigator, 'onLine', { value: true, writable: true, configurable: true })
    render(<OfflineBanner />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})

describe('AchievementBadge', () => {
  it('renders earned achievement at full opacity', () => {
    const { container } = render(
      <AchievementBadge achievement={{ id: 'test', label: 'Test', icon: '🏆', earned: true }} />
    )
    expect(container.firstChild).toHaveClass('opacity-100')
  })

  it('renders unearned achievement with reduced opacity', () => {
    const { container } = render(
      <AchievementBadge achievement={{ id: 'test', label: 'Locked', icon: '🔒', earned: false }} />
    )
    expect(container.firstChild).toHaveClass('opacity-40')
  })
})

describe('XPCounter', () => {
  it('formats large XP numbers with locale separators', () => {
    render(<XPCounter xp={1500} />)
    expect(screen.getByTestId('xp-count')).toHaveTextContent('1,500')
  })
})
