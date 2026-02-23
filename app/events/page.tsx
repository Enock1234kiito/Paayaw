import Link from 'next/link'

export const metadata = { title: 'Events – Gideon Peprah Ministries' }

const events = [
  {
    date: { day: '14', month: 'Mar', year: '2026' },
    title: 'Kingdom Positioning Conference',
    location: 'GPM International Convention Centre, Accra',
    time: '9:00 AM – 6:00 PM',
    description: 'A powerful gathering of believers from across the nation coming together to receive fresh direction and positioning from God for this critical hour.',
    tag: 'Conference',
  },
  {
    date: { day: '28', month: 'Mar', year: '2026' },
    title: 'Good Friday Communion Service',
    location: 'GPM Main Auditorium',
    time: '10:00 AM – 12:00 PM',
    description: 'Join us as we remember the sacrifice of our Lord Jesus Christ and partake in Holy Communion together as a church family.',
    tag: 'Special Service',
  },
  {
    date: { day: '5', month: 'Apr', year: '2026' },
    title: 'Easter Sunday Celebration',
    location: 'GPM Main Auditorium',
    time: '7:00 AM – 11:00 AM',
    description: 'Celebrate the resurrection of our Lord! A joyful Easter service filled with praise, worship, and the proclamation of the risen Christ.',
    tag: 'Celebration',
  },
  {
    date: { day: '18', month: 'Apr', year: '2026' },
    title: '"Go To Them" Evangelism Outreach',
    location: 'Various Locations – Northern Region',
    time: 'All Day',
    description: 'Our quarterly evangelism campaign taking the Gospel to unreached communities. Volunteers welcome — sign up to be a part of this life-changing mission.',
    tag: 'Outreach',
  },
  {
    date: { day: '10', month: 'May', year: '2026' },
    title: "Remember Them – Mother's Day Outreach",
    location: 'GPM Community Centre',
    time: '10:00 AM – 3:00 PM',
    description: "Honouring mothers and reaching out to widows and vulnerable women in our community with gifts, prayer, and the love of Christ.",
    tag: 'Outreach',
  },
  {
    date: { day: '21', month: 'Jun', year: '2026' },
    title: 'Youth Camp 2026',
    location: 'GPM Retreat Centre, Eastern Region',
    time: 'Jun 21–23',
    description: 'Three days of worship, teaching, fellowship and adventure for young people aged 15–30. Register early — spaces are limited.',
    tag: 'Youth',
  },
]

const tagColors: Record<string, string> = {
  Conference: 'bg-green-main/10 text-green-dark',
  'Special Service': 'bg-gold/10 text-gold-dark',
  Celebration: 'bg-green-pale text-green-dark',
  Outreach: 'bg-orange-50 text-orange-700',
  Youth: 'bg-blue-50 text-blue-700',
}

export default function EventsPage() {
  return (
    <>
      <section
        className="relative flex items-center justify-center text-white text-center px-6 py-28"
        style={{ background: 'linear-gradient(160deg, var(--green-dark) 0%, #2d7a3e 100%)' }}
      >
        <div className="relative z-10">
          <p className="text-xs tracking-[4px] uppercase font-bold mb-4" style={{ color: 'var(--gold-light)' }}>
            What's Coming Up
          </p>
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-4">Events</h1>
          <div className="w-16 h-1 mx-auto" style={{ background: 'var(--gold)' }} />
        </div>
      </section>
      <div className="gold-bar" />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {events.map((e) => (
            <div
              key={e.title}
              className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col sm:flex-row transition-shadow hover:shadow-lg"
              style={{ border: '1px solid rgba(26,92,42,0.1)' }}
            >
              {/* Date block */}
              <div
                className="flex flex-col items-center justify-center px-8 py-6 sm:py-0 flex-shrink-0 text-white"
                style={{ background: 'var(--green-dark)', minWidth: '110px' }}
              >
                <span className="text-4xl font-black font-playfair leading-none">{e.date.day}</span>
                <span className="text-sm font-bold tracking-widest uppercase mt-1" style={{ color: 'var(--gold-light)' }}>
                  {e.date.month}
                </span>
                <span className="text-xs opacity-60 mt-0.5">{e.date.year}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <h3 className="font-playfair font-bold text-xl" style={{ color: 'var(--green-dark)' }}>
                    {e.title}
                  </h3>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tagColors[e.tag] || ''}`}>
                    {e.tag}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 mb-3 text-sm" style={{ color: '#4a6350' }}>
                  <span>📍 {e.location}</span>
                  <span>🕐 {e.time}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#4a6350' }}>{e.description}</p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 text-xs font-bold tracking-wide"
                  style={{ color: 'var(--green-main)' }}
                >
                  Register / Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-10 rounded-2xl" style={{ background: 'var(--green-pale)' }}>
          <h3 className="font-playfair text-2xl font-bold mb-3" style={{ color: 'var(--green-dark)' }}>
            Don't Miss an Event
          </h3>
          <p className="text-sm mb-6" style={{ color: '#4a6350' }}>
            Subscribe to our newsletter to stay informed about upcoming events, services, and ministry updates.
          </p>
          <Link href="/contact" className="btn-primary">Contact Us to Stay Connected</Link>
        </div>
      </section>
    </>
  )
}
