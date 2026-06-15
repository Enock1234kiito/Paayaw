'use client'

import { login } from './actions'

export default function LoginForm({ error }: { error?: boolean }) {
  return (
    <section className="max-w-md mx-auto px-6 py-24">
      <div className="bg-white rounded-2xl shadow-sm p-8" style={{ border: '1px solid rgba(26,92,42,0.1)' }}>
        <h1 className="font-playfair text-2xl font-bold mb-1" style={{ color: 'var(--green-dark)' }}>
          Admin Login
        </h1>
        <p className="text-sm mb-6" style={{ color: '#4a6350' }}>
          Enter the admin password to manage events.
        </p>
        {error && (
          <p className="text-sm mb-4 px-3 py-2 rounded-lg bg-red-50 text-red-700">
            Incorrect password. Please try again.
          </p>
        )}
        <form action={login} className="space-y-4">
          <input
            type="password"
            name="password"
            required
            autoFocus
            placeholder="Admin password"
            className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2"
            style={{ borderColor: 'rgba(26,92,42,0.2)', color: '#1a3a24' }}
          />
          <button type="submit" className="btn-primary w-full">
            Log In
          </button>
        </form>
      </div>
    </section>
  )
}
