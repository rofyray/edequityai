import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { resolve } from 'path'

// Load .env.local for scripts running outside Next.js
config({ path: resolve(process.cwd(), '.env.local') })

let client: SupabaseClient | null = null

export function createAdminClient(): SupabaseClient {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local'
    )
  }

  client = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  return client
}
