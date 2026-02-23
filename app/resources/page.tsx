import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Resources – Gideon Peprah Ministries' }

const books = [
  { title: 'Positioned for His Return', category: 'Books', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80', desc: 'A powerful teaching on how the Body of Christ can be prepared for the second coming of Jesus.' },
  { title: 'The Fire of Revival', category: 'Books', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80', desc: 'Stirring your heart for a fresh move of God in your life, family, and nation.' },
  { title: 'Kingdom Partnerships', category: 'Books', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80', desc: 'Unlocking the power of covenant relationships in ministry and in the Kingdom of God.' },
  { title: 'Daily Strength Devotional', category: 'Devotionals', img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80', desc: '365 days of Spirit-filled devotions to fuel your walk with God every single day.' },
]

const sermons = [
  { title: 'The Hour is Now', series: 'Kingdom Positioning', duration: '48 min' },
  { title: 'Faith That Moves Mountains', series: 'Living by Faith', duration: '52 min' },
  { title: 'Walking in the Spirit', series: 'Life in the Spirit', duration: '61 min' },
  { title: 'The Power of Partnership', series: 'Kingdom Relationships', duration: '44 min' },
  { title: 'Revived for the Harvest', series: 'Kingdom Positioning', duration: '55 min' },
  { title: 'Prayer That Prevails', series: 'Life of Prayer', duration: '49 min' },
]

export default function ResourcesPage() {
  return (
    <>
      <section
        className="relative flex items-center justify-center text-white text-center px-6 py-28"
        style={{ background: 'linear-gradient(160deg, var(--green-dark) 0%, #2d7a3e 100%)' }}
      >
        <div className="relative z-10">
          <p className="text-xs tracking-[4px] uppercase font-bold mb-4" style={{ color: 'var(--gold-light)' }}>Grow Your Faith</p>
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-4">Resources</h1>
          <div className="w-16 h-1 mx-auto" style={{ background: 'var(--gold)' }} />
        </div>
      </section>
      <div className="gold-bar" />

      {/* Books */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="section-title">Books &amp; Devotionals</h2>
          <div className="gold-underline" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((b) => (
            <div key={b.title} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <Image
                src={b.img}
                alt={b.title}
                width={400}
                height={260}
                className="w-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="p-5">
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--gold-dark)' }}>
                  {b.category}
                </span>
                <h3 className="font-playfair font-bold text-lg mt-1 mb-2" style={{ color: 'var(--green-dark)' }}>{b.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#4a6350' }}>{b.desc}</p>
                <a href="#" className="text-xs font-bold" style={{ color: 'var(--green-main)' }}>Get a Copy →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audio Sermons */}
      <section style={{ background: 'var(--green-pale)' }} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Audio Sermons</h2>
            <div className="gold-underline" />
          </div>
          <div className="space-y-4">
            {sermons.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded-xl px-6 py-4 flex items-center gap-5 shadow-sm card-hover"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm"
                  style={{ background: 'var(--green-main)' }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--green-dark)' }}>{s.title}</h4>
                  <p className="text-xs" style={{ color: 'var(--gold-dark)' }}>{s.series}</p>
                </div>
                <span className="text-xs text-gray-400">{s.duration}</span>
                <button
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                  style={{ background: 'var(--gold)' }}
                  aria-label={`Play ${s.title}`}
                >
                  <svg className="w-4 h-4 ml-0.5" fill="var(--green-dark)" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/media" className="btn-outline-green">View All Sermons</Link>
          </div>
        </div>
      </section>

      {/* Bible Study */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="section-title mb-4">Bible Study Guides</h2>
        <div className="gold-underline mb-6" />
        <p className="max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: '#3d5c42' }}>
          Our Bible study materials are designed to help individuals and small groups go deeper into the Word of God, discover its truth, and apply it to everyday life.
        </p>
        <Link href="/contact" className="btn-primary">Request Study Materials</Link>
      </section>
    </>
  )
}
