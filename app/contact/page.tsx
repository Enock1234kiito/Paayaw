export const metadata = { title: 'Contact Us – Gideon Peprah Ministries' }

export default function ContactPage() {
  return (
    <>
      <section
        className="relative flex items-center justify-center text-white text-center px-6 py-28"
        style={{ background: 'linear-gradient(160deg, var(--green-dark) 0%, #2d7a3e 100%)' }}
      >
        <div className="relative z-10">
          <p className="text-xs tracking-[4px] uppercase font-bold mb-4" style={{ color: 'var(--gold-light)' }}>Get In Touch</p>
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <div className="w-16 h-1 mx-auto" style={{ background: 'var(--gold)' }} />
        </div>
      </section>
      <div className="gold-bar" />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="section-title mb-6">We'd Love to Hear From You</h2>
            <p className="leading-relaxed mb-10" style={{ color: '#3d5c42' }}>
              Whether you have a prayer request, want to partner with us, or simply want to know more about GPM, we are here for you. Reach out to us through any of the channels below.
            </p>
            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Address', value: 'GPM International HQ\n Old Abesim\nSunyani, Ghana' },
                { icon: '📞', label: 'Phone', value: '+233 54 616 9116' },
                { icon: '✉️', label: 'Email', value: 'info@gideonpeprah.com' },
                { icon: '🕐', label: 'Office Hours', value: 'Monday – Friday: 9:00 AM – 5:00 PM\nSaturday: 10:00 AM – 2:00 PM' },
              ].map((c) => (
                <div key={c.label} className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'var(--green-pale)' }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: 'var(--gold-dark)' }}>{c.label}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#3d5c42' }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--gold-dark)' }}>Follow Us</p>
              <div className="flex gap-3">
                {['Facebook', 'YouTube', 'Instagram', 'Twitter'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="px-4 py-2 rounded-full text-xs font-bold transition-colors text-white"
                    style={{ background: 'var(--green-dark)' }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10" style={{ border: '1px solid rgba(26,92,42,0.1)' }}>
            <h3 className="font-playfair text-2xl font-bold mb-6" style={{ color: 'var(--green-dark)' }}>Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold tracking-wide uppercase mb-2" style={{ color: 'var(--green-dark)' }}>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-shadow focus:ring-2"
                    style={{ border: '1px solid rgba(26,92,42,0.2)', background: 'var(--green-pale)', '--tw-ring-color': 'var(--gold)' } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-wide uppercase mb-2" style={{ color: 'var(--green-dark)' }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Mensah"
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ border: '1px solid rgba(26,92,42,0.2)', background: 'var(--green-pale)' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wide uppercase mb-2" style={{ color: 'var(--green-dark)' }}>Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                  style={{ border: '1px solid rgba(26,92,42,0.2)', background: 'var(--green-pale)' }}
                />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wide uppercase mb-2" style={{ color: 'var(--green-dark)' }}>Subject</label>
                <select
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                  style={{ border: '1px solid rgba(26,92,42,0.2)', background: 'var(--green-pale)', color: '#3d5c42' }}
                >
                  <option value="">Select a subject</option>
                  <option>Partnership Enquiry</option>
                  <option>Prayer Request</option>
                  <option>General Enquiry</option>
                  <option>Events Information</option>
                  <option>Media / Press</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wide uppercase mb-2" style={{ color: 'var(--green-dark)' }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                  style={{ border: '1px solid rgba(26,92,42,0.2)', background: 'var(--green-pale)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full font-bold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: 'var(--green-dark)', color: '#fff' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
