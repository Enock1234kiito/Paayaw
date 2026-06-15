import crypto from 'crypto'
import { cookies } from 'next/headers'

export const COOKIE_NAME = 'gpm_admin'

/**
 * The value stored in the admin cookie: a hash derived from the admin
 * password. The raw password is never put in the cookie, and the cookie
 * can't be forged without knowing ADMIN_PASSWORD.
 */
export function sessionToken() {
  const pw = process.env.ADMIN_PASSWORD || ''
  return crypto.createHash('sha256').update(`${pw}::gpm-admin-session-v1`).digest('hex')
}

/** Constant-time check of a submitted password against ADMIN_PASSWORD. */
export function checkPassword(input: string) {
  const pw = process.env.ADMIN_PASSWORD || ''
  if (!pw || !input) return false
  const a = Buffer.from(input)
  const b = Buffer.from(pw)
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(a, b)
}

/** True if the current request carries a valid admin session cookie. */
export function isAuthed() {
  const token = cookies().get(COOKIE_NAME)?.value
  if (!token) return false
  const expected = sessionToken()
  if (token.length !== expected.length) return false
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected))
}
