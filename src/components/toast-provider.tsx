'use client'

import { Toaster } from 'sonner'

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'flex items-center gap-3 w-full rounded-clay-input border-2 px-4 py-3 shadow-clay-sm font-serif text-sm',
          success: 'bg-[#dcfce7] text-[#166534] border-[#86efac]',
          error: 'bg-[#fee2e2] text-[#991b1b] border-[#fca5a5]',
          warning: 'bg-[#fef3c7] text-[#92400e] border-[#fcd34d]',
          info: 'bg-[#dbeafe] text-[#1e40af] border-[#93c5fd]',
        },
      }}
    />
  )
}
