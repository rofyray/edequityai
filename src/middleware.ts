import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

// Public routes that don't require auth
const PUBLIC_ROUTES = ['/login', '/register', '/verify-email', '/auth/callback', '/api/auth/register', '/api/auth/login', '/api/auth/logout', '/help', '/privacy', '/terms']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Security headers
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // CSP — restrict resource loading to known origins
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
  const isDev = process.env.NODE_ENV === 'development'
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} 'wasm-unsafe-eval'`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    `connect-src 'self' ${supabaseUrl} https://api.openai.com https://api.elevenlabs.io https://*.upstash.io`,
    "media-src 'self' blob:",
    "frame-ancestors 'none'",
  ].join('; ')
  response.headers.set('Content-Security-Policy', csp)

  // HSTS (production only)
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }

  // Permissions Policy — restrict sensitive APIs
  response.headers.set('Permissions-Policy', 'camera=(self), microphone=(self), geolocation=()')

  // CORS — restrict to app origin
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
  response.headers.set('Access-Control-Allow-Origin', appUrl)
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Skip auth for public routes (root path checked explicitly to avoid startsWith('/') matching everything)
  if (pathname === '/' || PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return response
  }

  // Refresh Supabase session
  const { supabaseResponse, user } = await updateSession(request)

  // Redirect unauthenticated users to login
  if (!user && !pathname.startsWith('/api/')) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Return 401 for unauthenticated API calls
  if (!user && pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|manifest.json|icon-.*\\.png|sw\\.js|workbox-.*).*)',
  ],
}
