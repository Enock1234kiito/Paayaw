'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'About Us', href: '/about-us', children: [
      { label: 'How It Began', href: '/about-us' },
      { label: 'Statements of Faith', href: '/about-us#faith' },
      { label: 'The Pastor', href: '/about-us#pastor' },
      { label: 'Leadership', href: '/about-us#leadership' },
    ],
  },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' },
  { label: 'Media', href: '/media' },
  { label: 'Give', href: '/give' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-md'
      }`}
      style={{ background: scrolled ? 'rgba(13,53,22,0.97)' : 'var(--green-dark)', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[72px]' : 'h-[88px]'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/images/logo.jpg"
              alt="Gideon Peprah Ministries"
              width={56}
              height={56}
              className={`rounded-full object-cover flex-shrink-0 transition-all duration-300 ring-2 ring-gold/30 group-hover:ring-gold/60 ${scrolled ? 'w-11 h-11' : 'w-14 h-14'}`}
            />
            <div className="text-white hidden sm:block">
              <div className={`font-playfair font-bold leading-tight transition-all duration-300 ${scrolled ? 'text-[15px]' : 'text-[17px]'}`}>
                Gideon Peprah Ministries
              </div>
              <div className="text-[10px] tracking-[1.8px] uppercase" style={{ color: 'var(--gold-light)' }}>
                Advancing the Kingdom
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pathname.startsWith(item.href)
                          ? 'text-white bg-white/15'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden shadow-2xl z-50"
                        style={{ background: 'var(--green-dark)', border: '1px solid rgba(201,162,39,0.2)' }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3.5 text-sm text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200 border-b border-white/5 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-white bg-white/15'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'var(--green-dark)' }}
      >
        <div className="px-4 py-3 space-y-1 border-t border-white/10">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-sm text-white/85 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileExpanded === item.label ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-4 mt-1 space-y-1 border-l-2 pl-3" style={{ borderColor: 'var(--gold)' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2.5 text-sm text-white/70 hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-3 rounded-lg text-sm text-white/85 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-3 pb-2">
            <Link
              href="/get-involved"
              className="block text-center px-5 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:shadow-lg"
              style={{ background: 'var(--gold)', color: 'var(--green-dark)' }}
            >
              Give
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
