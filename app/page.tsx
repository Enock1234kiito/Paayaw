import Link from 'next/link'
import Image from 'next/image'
import ImageSlider from '@/components/ImageSlider'

const newsItems = [
  {
    title: 'A New Place of Worship Established in the Northern Region',
    date: 'September 2025',
    img: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?w=600&q=80',
    href: '/media',
  },
  {
    title: 'GPM Renovates Local School to Boost Education in the Community',
    date: 'June 2025',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    href: '/media',
  },
  {
    title: 'Remember Them — Annual Community Outreach a Great Success',
    date: 'May 2025',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
    href: '/media',
  },
  {
    title: 'Go To Them — GPM Evangelism Campaign Reaches Thousands',
    date: 'May 2025',
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
    href: '/media',
  },
]

export default function HomePage() {
  return (
    <>
      <ImageSlider />
      {/* ── HERO ── */}
      <section className="relative flex items-center justify-center text-white text-center overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Background */}
        <div
          className="absolute inset-0 animate-pan-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 hero-bg-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 animate-fade-up">
          <p className="text-xs tracking-[4px] uppercase font-bold mb-5" style={{ color: 'var(--gold-light)' }}>
            Welcome to GPM
          </p>
          <h1 className="font-playfair font-black leading-[1.05] mb-6" style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}>
            Welcome to{' '}
            <span style={{ color: 'var(--gold-light)' }}>Gideon Peprah</span>{' '}
            Ministries
          </h1>
          <p className="text-lg leading-relaxed opacity-90 max-w-xl mx-auto mb-10 font-light">
            Mobilising the Body of Christ to re-position God's people for the second coming of our Lord Jesus Christ.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-involved" className="btn-primary">Become a Partner</Link>
            <Link href="/media" className="btn-outline-white">Watch &amp; Listen</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 animate-bounce-scroll text-center text-xs tracking-[2px] uppercase text-white/50"
             style={{ transform: 'translateX(-50%)' }}>
          <div className="text-xl mb-1">↓</div>
          Scroll
        </div>
      </section>

      {/* Gold bar */}
      <div className="gold-bar" />

      {/* ── WELCOME ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-6 text-green-light" style={{ color: 'var(--green-light)' }}>
              A Word from<br />
              <span style={{ color: 'var(--gold)' }}>Pastor Gideon Peprah</span>
            </h2>
            <div className="space-y-4 text-base leading-[1.85] text-slate-300" style={{ color: 'rgb(203, 213, 225)' }}>
              <p>It gives me great pleasure to welcome you to the Gideon Peprah Ministries. The fact that you are here with me today means a great deal to me. Thank you.</p>
              <p>This website gives detailed information on what we do, but let me just sum up in a nutshell what GPM seeks to do: The Body of Christ is so richly endowed with multiple and varied gifts. GPM seeks to bring these resources together and effectively mobilise them to re-position God's people for the second coming of Christ.</p>
              <p>This requires an all-hands-on-deck strategy. The task is huge and it will take a concerted effort to achieve it. The Word of God must be preached to every person, the Gospel must go to the ends of the earth.</p>
              <p>Together, we will build strong and dedicated partnership relationships. I am excited to welcome you to partner with us as we work together in unity and in the power of His Spirit to bring into being His purpose for GPM.</p>
            </div>
            <p className="font-playfair italic text-xl mt-8 text-green-light" style={{ color: 'var(--green-light)' }}>
              — Pastor Gideon &amp; Mrs. Peprah
            </p>
          </div>

          {/* Image with gold border accent */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 -right-0 bottom-0 rounded-xl z-0"
              style={{ border: '3px solid var(--gold)', bottom: '-4px', right: '16px', left: '-16px', top: '-16px' }}
            />
            <Image
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=700&q=80"
              alt="Pastor Gideon Peprah"
              width={700}
              height={500}
              className="relative z-10 w-full rounded-xl shadow-2xl object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </section>

      {/* ── HOW MAY WE HELP ── */}
      <section style={{ background: '#1a3d25' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-3">How May We Help You Today?</h2>
          <div className="gold-underline mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Join the GPM Family',
                body: "Welcome to GPM. We encourage you to browse through the website and get in touch with us. Together we can do great things for the Kingdom.",
                cta: 'Become a Partner',
                href: '/get-involved',
              },
              {
                icon: '💛',
                title: 'Give',
                body: "It is more blessed to give than to receive. The Lord loves a cheerful giver. \"Your prayers and gifts of charity have ascended as a memorial offering before God.\"",
                cta: 'Give Now',
                href: '/get-involved#give',
              },
              {
                icon: '🎧',
                title: 'Watch & Listen',
                body: "So then faith comes by hearing, and hearing by the Word of God. Access our sermons, teachings, and live broadcasts anytime, anywhere.",
                cta: 'Watch Now',
                href: '/media',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl p-10 text-center text-white transition-all duration-250 hover:-translate-y-1.5"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(201,162,39,0.3)' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
                  style={{ background: 'var(--gold)' }}
                >
                  {card.icon}
                </div>
                <h3 className="font-playfair text-2xl mb-4" style={{ color: 'var(--gold-light)' }}>{card.title}</h3>
                <p className="text-sm leading-[1.8] opacity-85 mb-6">{card.body}</p>
                <Link
                  href={card.href}
                  className="text-xs font-bold tracking-wide border-b border-transparent hover:border-current transition-colors"
                  style={{ color: 'var(--gold-light)' }}
                >
                  {card.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-bar" />

      {/* ── RESOURCES ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-slate-900">
        <div className="text-center mb-14">
          <h2 className="section-title text-green-light">Resources</h2>
          <div className="gold-underline" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Books & Teaching Materials', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80' },
            { label: 'Daily Devotionals', img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80' },
            { label: 'Audio Sermons', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80' },
            { label: 'Bible Study Guides', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80' },
          ].map((r) => (
            <Link
              key={r.label}
              href="/resources"
              className="block rounded-xl overflow-hidden shadow-md bg-slate-800 transition-all duration-250 hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={r.img}
                alt={r.label}
                width={600}
                height={338}
                className="w-full object-cover"
                style={{ aspectRatio: '16/9' }}
              />
              <div
                className="px-4 py-3.5 text-center text-sm font-bold text-white"
                style={{ background: '#1a3d25' }}
              >
                {r.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── JOIN BANNER ── */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2d7a3e 0%, #1a3d25 100%)' }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a227' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-5">Join the GPM Family</h2>
          <p className="text-lg text-white/85 max-w-xl mx-auto mb-10 leading-relaxed">
            Together we can do Great Things for the Kingdom of God. Become a partner today and be part of something extraordinary.
          </p>
          <Link href="/get-involved" className="btn-primary">Become a Partner Today</Link>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-green-light">Stay Updated</h2>
            <div className="gold-underline" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item) => (
              <Link key={item.title} href={item.href} className="block bg-slate-800 rounded-xl overflow-hidden shadow-md card-hover">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={338}
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="p-5">
                  <p className="text-[11px] font-bold tracking-widest uppercase mb-2 text-gold" style={{ color: 'var(--gold)' }}>
                    {item.date}
                  </p>
                  <h3 className="text-sm font-bold leading-snug text-slate-200" style={{ color: 'rgb(226, 232, 240)' }}>
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── KINGDOM TV ── */}
      <section className="py-24 px-6 text-center bg-slate-900" style={{ background: '#0f2818' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-white mb-3">Kingdom Revolution TV</h2>
          <div className="gold-underline mb-12" />
          <div
            className="rounded-xl overflow-hidden flex flex-col items-center justify-center"
            style={{
              aspectRatio: '16/9',
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(201,162,39,0.3)',
            }}
          >
            <Link
              href="/media#tv"
              className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-transform duration-200 hover:scale-110"
              style={{ background: 'var(--gold)' }}
              aria-label="Watch Kingdom Revolution TV"
            >
              <svg className="w-9 h-9 ml-1" fill="var(--green-dark)" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </Link>
            <p className="text-white/50 text-lg">Watch our latest broadcast &amp; teachings</p>
            <Link href="/media#tv" className="mt-4 text-sm font-bold" style={{ color: 'var(--gold-light)' }}>
              Visit Kingdom Revolution TV →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
