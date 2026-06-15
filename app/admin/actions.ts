'use server'

import { randomUUID } from 'crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { supabaseAdmin, EVENT_IMAGES_BUCKET } from '@/lib/supabase'
import { checkPassword, isAuthed, sessionToken, COOKIE_NAME } from '@/lib/auth'

export async function login(formData: FormData) {
  const password = String(formData.get('password') || '')
  if (!checkPassword(password)) {
    redirect('/admin?error=1')
  }
  cookies().set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
  redirect('/admin')
}

export async function logout() {
  cookies().delete(COOKIE_NAME)
  redirect('/admin')
}

export async function createEvent(formData: FormData) {
  if (!isAuthed()) redirect('/admin')

  const title = String(formData.get('title') || '').trim()
  const event_date = String(formData.get('event_date') || '')
  const location = String(formData.get('location') || '').trim()
  const time = String(formData.get('time') || '').trim()
  const description = String(formData.get('description') || '').trim()
  const tag = String(formData.get('tag') || '').trim()
  const image = formData.get('image') as File | null

  if (!title || !event_date) {
    redirect('/admin?error=missing')
  }

  const supabase = supabaseAdmin()

  let image_url: string | null = null
  if (image && image.size > 0) {
    const ext = (image.name.split('.').pop() || 'jpg').toLowerCase()
    const path = `${randomUUID()}.${ext}`
    const bytes = new Uint8Array(await image.arrayBuffer())
    const { error: upErr } = await supabase.storage
      .from(EVENT_IMAGES_BUCKET)
      .upload(path, bytes, { contentType: image.type || 'image/jpeg', upsert: false })
    if (!upErr) {
      const { data: pub } = supabase.storage.from(EVENT_IMAGES_BUCKET).getPublicUrl(path)
      image_url = pub.publicUrl
    }
  }

  const { error } = await supabase
    .from('events')
    .insert({ title, event_date, location, time, description, tag, image_url })

  if (error) {
    redirect('/admin?error=save')
  }

  revalidatePath('/events')
  revalidatePath('/admin')
  redirect('/admin?added=1')
}

export async function deleteEvent(formData: FormData) {
  if (!isAuthed()) redirect('/admin')

  const id = String(formData.get('id') || '')
  const image_url = String(formData.get('image_url') || '')
  if (!id) redirect('/admin')

  const supabase = supabaseAdmin()

  // Remove the stored photo too, if there is one.
  if (image_url) {
    const marker = `/${EVENT_IMAGES_BUCKET}/`
    const idx = image_url.indexOf(marker)
    if (idx !== -1) {
      const path = image_url.slice(idx + marker.length)
      await supabase.storage.from(EVENT_IMAGES_BUCKET).remove([path])
    }
  }

  await supabase.from('events').delete().eq('id', id)

  revalidatePath('/events')
  revalidatePath('/admin')
  redirect('/admin?deleted=1')
}
