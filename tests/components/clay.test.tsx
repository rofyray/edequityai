import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClayCard, ClayButton, ClayInput, ClayBadge, RegionPill } from '@/components/clay'

describe('Clay Design System', () => {
  it('renders ClayCard with children', () => {
    render(<ClayCard>Hello</ClayCard>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders ClayCard with size variants', () => {
    const { container } = render(<ClayCard size="lg">Large</ClayCard>)
    expect(container.firstChild).toHaveClass('p-8')
  })

  it('renders ClayButton with primary variant', () => {
    render(<ClayButton>Click me</ClayButton>)
    const btn = screen.getByRole('button', { name: /click me/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('bg-primary')
  })

  it('renders ClayButton with secondary variant', () => {
    render(<ClayButton variant="secondary">Secondary</ClayButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-secondary')
  })

  it('renders ClayButton meeting minimum touch target size', () => {
    render(<ClayButton>Touch</ClayButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('min-h-[44px]')
    expect(btn).toHaveClass('min-w-[44px]')
  })

  it('renders ClayInput with label', () => {
    render(<ClayInput label="Email" placeholder="Enter email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders ClayInput with error state', () => {
    render(<ClayInput label="Name" error="Required field" />)
    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('renders ClayBadge with color variants', () => {
    render(<ClayBadge color="success">Active</ClayBadge>)
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('renders RegionPill for each region', () => {
    const { rerender } = render(<RegionPill region="appalachia" />)
    expect(screen.getByText('Appalachia')).toBeInTheDocument()

    rerender(<RegionPill region="delta" />)
    expect(screen.getByText('Mississippi Delta')).toBeInTheDocument()

    rerender(<RegionPill region="tribal" />)
    expect(screen.getByText('Tribal Lands')).toBeInTheDocument()
  })
})
