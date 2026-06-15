import { isAuthed } from '@/lib/auth'
import { getEvents, splitDate, tagColors } from '@/lib/events'
import { logout } from './actions'
import LoginForm from './login-form'
import EventForm from './event-form'
import DeleteButton from './delete-button'

export const metadata = { title: 'Manage Events – GPM Admin' }
export const dynamic = 'force-dynamic'

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { error?: string; added?: string; deleted?: string }
}) {
  if (!isAuthed()) {
    return <LoginForm error={!!searchParams.error} />
  }

  const events = await getEvents()

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-playfair text-3xl font-bold" style={{ color: 'var(--green-dark)' }}>
            Manage Events
          </h1>
          <p className="text-sm mt-1" style={{ color: '#4a6350' }}>
            Add new events or remove old ones. Changes appear on the Events page right away.
          </p>
        </div>
        <form action={logout}>
          <button type="submit" className="text-sm font-semibold" style={{ color: 'var(--green-main)' }}>
            Log out
          </button>
        </form>
      </div>

      {searchParams.added && (
        <p className="text-sm mb-6 px-4 py-2.5 rounded-lg bg-green-pale text-green-dark">✓ Event added.</p>
      )}
      {searchParams.deleted && (
        <p className="text-sm mb-6 px-4 py-2.5 rounded-lg bg-green-pale text-green-dark">✓ Event deleted.</p>
      )}
      {searchParams.error === 'save' && (
        <p className="text-sm mb-6 px-4 py-2.5 rounded-lg bg-red-50 text-red-700">
          Could not save the event. Check that Supabase is configured correctly.
        </p>
      )}
      {searchParams.error === 'missing' && (
        <p className="text-sm mb-6 px-4 py-2.5 rounded-lg bg-red-50 text-red-700">
          Title and date are required.
        </p>
      )}

      {/* Add event */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-10" style={{ border: '1px solid rgba(26,92,42,0.1)' }}>
        <h2 className="font-playfair text-xl font-bold mb-5" style={{ color: 'var(--green-dark)' }}>
          Add a New Event
        </h2>
        <EventForm />
      </div>

      {/* Existing events */}
      <h2 className="font-playfair text-xl font-bold mb-4" style={{ color: 'var(--green-dark)' }}>
        Current Events ({events.length})
      </h2>
      {events.length === 0 ? (
        <p className="text-sm" style={{ color: '#4a6350' }}>
          No events yet. Add your first one above.
        </p>
      ) : (
        <div className="space-y-3">
          {events.map((e) => {
            const d = splitDate(e.event_date)
            return (
              <div
                key={e.id}
                className="bg-white rounded-xl p-4 flex items-center gap-4"
                style={{ border: '1px solid rgba(26,92,42,0.1)' }}
              >
                <div
                  className="flex flex-col items-center justify-center rounded-lg px-3 py-2 text-white flex-shrink-0"
                  style={{ background: 'var(--green-dark)', minWidth: '64px' }}
                >
                  <span className="text-xl font-black font-playfair leading-none">{d.day}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--gold-light)' }}>
                    {d.month}
                  </span>
                </div>
                {e.image_url && (
                  <img src={e.image_url} alt="" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold truncate" style={{ color: 'var(--green-dark)' }}>
                      {e.title}
                    </h3>
                    {e.tag && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[e.tag] || 'bg-gray-100 text-gray-600'}`}>
                        {e.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs truncate" style={{ color: '#4a6350' }}>
                    {[e.location, e.time].filter(Boolean).join(' · ')}
                  </p>
                </div>
                <DeleteButton id={e.id} imageUrl={e.image_url} title={e.title} />
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
