'use client'

import { deleteEvent } from './actions'

export default function DeleteButton({ id, imageUrl, title }: { id: string; imageUrl?: string | null; title: string }) {
  return (
    <form
      action={deleteEvent}
      onSubmit={(e) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) {
          e.preventDefault()
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="image_url" value={imageUrl || ''} />
      <button
        type="submit"
        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
      >
        Delete
      </button>
    </form>
  )
}
