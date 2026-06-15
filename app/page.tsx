import Link from 'next/link'
import Image from 'next/image'
import ImageSlider from '@/components/ImageSlider'

const newsItems = [
  {
    title: 'A New Place of Worship Established in the Northern Region',
    date: 'September 2025',
    img: '/images/V_185.jpg',
    href: '/media',
  },
  {
    title: 'GPM Renovates Local School to Boost Education in the Community',
    date: 'June 2025',
    img: '/images/V_197.jpg',
    href: '/media',
  },
  {
    title: 'Remember Them — Annual Community Outreach a Great Success',
    date: 'May 2025',
    img: '/images/V_172.jpg',
    href: '/media',
  },
  {
    title: 'Go To Them — GPM Evangelism Campaign Reaches Thousands',
    date: 'May 2025',
    img: '/images/V_186.jpg',
    href: '/media',
  },
]

export default function HomePage() {
  return (
    <>
      <ImageSlider />

      {/* ── WELCOME ── */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Subtle pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a227' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p
                className="text-xs tracking-[4px] uppercase font-bold mb-4"
                style={{ color: 'var(--gold)' }}
              >
                Welcome to GPM
              </p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-8" style={{ color: 'var(--green-light)' }}>
                A Word from<br />
                <span style={{ color: 'var(--gold)' }}>Pastor Gideon Peprah</span>
              </h2>
              <div className="space-y-4 text-base leading-[1.85] text-slate-300">
                <p>It gives me great pleasure to welcome you to the Gideon Peprah Ministries. The fact that you are here with me today means a great deal to me. Thank you.</p>
                <p>This website gives detailed information on what we do, but let me just sum up in a nutshell what GPM seeks to do: The Body of Christ is so richly endowed with multiple and varied gifts. GPM seeks to bring these resources together and effectively mobilise them to re-position God&apos;s people for the second coming of Christ.</p>
                <p>This requires an all-hands-on-deck strategy. The task is huge and it will take a concerted effort to achieve it. The Word of God must be preached to every person, the Gospel must go to the ends of the earth.</p>
                <p>Together, we will build strong and dedicated partnership relationships. I am excited to welcome you to partner with us as we work together in unity and in the power of His Spirit to bring into being His purpose for GPM.</p>
              </div>
              <p className="font-playfair italic text-xl mt-8" style={{ color: 'var(--green-light)' }}>
                — Pastor Gideon &amp; Mrs. Peprah
              </p>
            </div>

            {/* Image with gold border accent */}
            <div className="relative group flex justify-center">
              <div
                className="absolute rounded-xl z-0 transition-all duration-500 group-hover:scale-[1.02]"
                style={{ border: '3px solid var(--gold)', inset: '-12px' }}
              />
              <Image
                src="/images/Pastor.jpg"
                alt="Pastor Gideon Peprah"
                width={914}
                height={1280}
                className="relative z-10 w-full max-w-md rounded-xl shadow-2xl object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gold bar */}
      <div className="gold-bar" />

      {/* ── HOW MAY WE HELP ── */}
      <section style={{ background: '#1a3d25' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[4px] uppercase font-bold mb-3" style={{ color: 'var(--gold)' }}>
            Get Started
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">How May We Help You?</h2>
          <div className="gold-underline mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: 'Join the GPM Family',
                body: "Welcome to GPM. We encourage you to browse through the website and get in touch with us. Together we can do great things for the Kingdom.",
                cta: 'Become a Partner',
                href: '/get-involved',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: 'Give',
                body: "It is more blessed to give than to receive. The Lord loves a cheerful giver. \"Your prayers and gifts of charity have ascended as a memorial offering before God.\"",
                cta: 'Give Now',
                href: '/get-involved#give',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                ),
                title: 'Watch & Listen',
                body: "So then faith comes by hearing, and hearing by the Word of God. Access our sermons, teachings, and live broadcasts anytime, anywhere.",
                cta: 'Watch Now',
                href: '/media',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl p-10 text-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,162,39,0.2)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--gold)', color: 'var(--green-dark)' }}
                >
                  {card.icon}
                </div>
                <h3 className="font-playfair text-2xl mb-4" style={{ color: 'var(--gold-light)' }}>{card.title}</h3>
                <p className="text-sm leading-[1.8] text-white/75 mb-8">{card.body}</p>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-all duration-200 hover:gap-3"
                  style={{ color: 'var(--gold-light)' }}
                >
                  {card.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-bar" />

      {/* ── RESOURCES ── */}
      <section className="bg-slate-900 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[4px] uppercase font-bold mb-3" style={{ color: 'var(--gold)' }}>
              Grow in Faith
            </p>
            <h2 className="section-title text-green-light">Resources</h2>
            <div className="gold-underline" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Books & Teaching Materials', img: '/images/V_88.jpg' },
              { label: 'Daily Devotionals', img: '/images/V_70.jpg' },
              { label: 'Audio Sermons', img: '/images/V_198.jpg' },
              { label: 'Bible Study Guides', img: '/images/V_205.jpg' },
            ].map((r) => (
              <Link
                key={r.label}
                href="/resources"
                className="group block rounded-xl overflow-hidden shadow-md bg-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={r.img}
                    alt={r.label}
                    width={600}
                    height={338}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ aspectRatio: '16/9' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div
                  className="px-4 py-4 text-center text-sm font-bold text-white"
                  style={{ background: '#1a3d25' }}
                >
                  {r.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN BANNER ── */}
      <section
        className="py-28 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2d7a3e 0%, #1a3d25 100%)' }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a227' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-12 h-0.5 mx-auto mb-8" style={{ background: 'var(--gold)' }} />
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-6">Join the GPM Family</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Together we can do Great Things for the Kingdom of God. Become a partner today and be part of something extraordinary.
          </p>
          <Link href="/get-involved" className="btn-primary">Become a Partner Today</Link>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="py-28 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[4px] uppercase font-bold mb-3" style={{ color: 'var(--gold)' }}>
              Latest News
            </p>
            <h2 className="section-title text-green-light">Stay Updated</h2>
            <div className="gold-underline" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block bg-slate-800/80 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={338}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ aspectRatio: '16/9' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)' }}>
                    {item.date}
                  </p>
                  <h3 className="text-sm font-bold leading-snug text-slate-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── KINGDOM TV ── */}
      <section className="py-28 px-6 text-center" style={{ background: '#0f2818' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[4px] uppercase font-bold mb-3" style={{ color: 'var(--gold)' }}>
            Watch Live
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">Kingdom Revolution TV</h2>
          <div className="gold-underline mb-14" />
          <div
            className="group rounded-2xl overflow-hidden flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl"
            style={{
              aspectRatio: '16/9',
              background: 'rgba(255,255,255,0.04)',
              border: '2px solid rgba(201,162,39,0.2)',
            }}
          >
            <Link
              href="/media#tv"
              className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-2xl"
              style={{ background: 'var(--gold)' }}
              aria-label="Watch Kingdom Revolution TV"
            >
              <svg className="w-9 h-9 ml-1" fill="var(--green-dark)" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
            <p className="text-white/50 text-lg">Watch our latest broadcast &amp; teachings</p>
            <Link
              href="/media#tv"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 hover:gap-3"
              style={{ color: 'var(--gold-light)' }}
            >
              Visit Kingdom Revolution TV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
