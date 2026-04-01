import type { Metadata, Viewport } from 'next'
import { ToastProvider } from '@/components/toast-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'EdEquity AI',
  description: 'Culturally-adaptive K-12 learning platform for underserved students',
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#a67c52',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Headland+One&family=IBM+Plex+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
        <ToastProvider />
      </body>
    </html>
  )
}
