import { createClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client using the service-role key.
 * NEVER import this into a Client Component — the service-role key
 * must stay on the server. All event reads/writes go through here.
 */
export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local'
    )
  }
  return createClient(url, key, { auth: { persistSession: false } })
}

export const EVENT_IMAGES_BUCKET = 'event-images'
