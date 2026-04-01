'use client'

import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { User, LogOut, ChevronDown } from 'lucide-react'

interface UserMenuProps {
  userName: string
  role: 'student' | 'teacher' | 'parent' | 'admin'
  profileHref?: string
}

const ROLE_LABELS: Record<string, string> = {
  student: 'Student',
  teacher: 'Teacher',
  parent: 'Parent',
  admin: 'Admin',
}

export function UserMenu({ userName, role, profileHref }: UserMenuProps) {
  const [signingOut, setSigningOut] = useState(false)

  const initial = userName.charAt(0).toUpperCase()

  async function handleSignOut() {
    setSigningOut(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
    } finally {
      window.location.href = '/login'
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-1.5 rounded-full bg-primary/10 py-1.5 pl-1.5 pr-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="User menu"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-clay-sm">
            {initial}
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[200px] rounded-xl border border-border bg-card p-1.5 shadow-clay-card animate-in fade-in-0 zoom-in-95"
        >
          {/* User info header */}
          <div className="px-3 py-2">
            <p className="truncate text-sm font-semibold text-foreground">{userName}</p>
            <p className="text-xs text-muted-foreground capitalize">{ROLE_LABELS[role]}</p>
          </div>

          <DropdownMenu.Separator className="my-1 h-px bg-border" />

          {/* Profile link (students only) */}
          {profileHref && (
            <DropdownMenu.Item asChild>
              <a
                href={profileHref}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground outline-none transition-colors hover:bg-muted focus-visible:bg-muted"
              >
                <User className="h-4 w-4" />
                My Profile
              </a>
            </DropdownMenu.Item>
          )}

          {/* Sign out */}
          <DropdownMenu.Item
            disabled={signingOut}
            onSelect={(e) => {
              e.preventDefault()
              handleSignOut()
            }}
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive outline-none transition-colors hover:bg-destructive/10 focus-visible:bg-destructive/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <LogOut className="h-4 w-4" />
            {signingOut ? 'Signing out...' : 'Sign Out'}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
