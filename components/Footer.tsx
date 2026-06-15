import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--green-dark)' }} className="text-white/75">
      {/* Gold bar top accent */}
      <div className="gold-bar" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-playfair font-black text-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                style={{ background: 'var(--gold)', color: 'var(--green-dark)' }}
              >
                GP
              </div>
              <div>
                <div className="font-playfair font-bold text-lg text-white leading-tight">Gideon Peprah Ministries</div>
                <div className="text-[10px] tracking-[1.8px] uppercase" style={{ color: 'var(--gold-light)' }}>
                  Advancing the Kingdom of God
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-md">
              To be a repositioned and revived people of God ready for the return of our Lord Jesus Christ.
              Together we mobilise God&apos;s people across the globe.
            </p>
            <div className="flex gap-3 mt-4">
              {['Facebook', 'YouTube', 'Instagram', 'Twitter'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--gold-light)' }}
                  aria-label={s}
                  title={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase mb-5" style={{ color: 'var(--gold-light)' }}>
              About Us
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Began', href: '/about-us' },
                { label: 'Statements of Faith', href: '/about-us#faith' },
                { label: 'The Pastor', href: '/about-us#pastor' },
                { label: 'Governing Council', href: '/about-us#leadership' },
                { label: 'What We Do', href: '/what-we-do' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase mb-5" style={{ color: 'var(--gold-light)' }}>
              Get Involved
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Become a Partner', href: '/get-involved' },
                { label: 'Give Online', href: '/get-involved#give' },
                { label: 'Events', href: '/events' },
                { label: 'Resources', href: '/resources' },
                { label: 'Kingdom Revolution TV', href: '/media#tv' },
                { label: 'Contact Us', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <span>&copy; {new Date().getFullYear()} Gideon Peprah Ministries. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span style={{ color: 'var(--gold-light)' }}>Designed for the Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
