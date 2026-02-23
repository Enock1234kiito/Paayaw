import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'About Us – Gideon Peprah Ministries' }

const leaders = [
  { name: 'Elder Samuel Asante', role: 'Chairman, Governing Council', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Mrs. Grace Boateng', role: 'Vice Chair', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Deacon James Mensah', role: 'Secretary', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
  { name: 'Dr. Abena Osei', role: 'Treasurer', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="relative flex items-center justify-center text-white text-center px-6 py-28"
        style={{ background: 'linear-gradient(160deg, #1a3d25 0%, #0d3516 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a227' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="relative z-10">
          <p className="text-xs tracking-[4px] uppercase font-bold mb-4" style={{ color: 'var(--gold-light)' }}>Our Story</p>
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <div className="w-16 h-1 mx-auto" style={{ background: 'var(--gold)' }} />
        </div>
      </section>
      <div className="gold-bar" />

      {/* How It Began */}
      <section id="how-it-began" className="max-w-7xl mx-auto px-6 py-24 bg-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title mb-6 text-green-light">How It Began</h2>
            <div className="space-y-4 leading-[1.85] text-slate-300" style={{ color: 'rgb(203, 213, 225)' }}>
              <p>Gideon Peprah Ministries (GPM) was founded out of a deep conviction to mobilise the Body of Christ and position God's people for the imminent return of our Lord Jesus Christ.</p>
              <p>What began as a small fellowship of believers united by a common passion for the Word of God has grown into a powerful ministry spanning multiple nations, reaching souls and transforming communities through the power of the Gospel.</p>
              <p>Over the years, GPM has expanded its reach through church planting, evangelism campaigns, education initiatives, and community development projects — all rooted in the uncompromising proclamation of the Gospel.</p>
              <p>Today, GPM stands as a beacon of hope, equipping and empowering believers to live out their faith in every sphere of society.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-xl z-0" style={{ border: '3px solid var(--gold)', opacity: 0.6 }} />
            <Image
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&q=80"
              alt="GPM History"
              width={700}
              height={480}
              className="relative z-10 w-full rounded-xl shadow-2xl object-cover"
              style={{ maxHeight: '460px' }}
            />
          </div>
        </div>
      </section>

      {/* Statements of Faith */}
      <section id="faith" className="py-20 px-6 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-green-light">Statements of Faith</h2>
            <div className="gold-underline" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'The Bible', body: 'We believe the Holy Bible is the inspired, infallible Word of God and the supreme authority in all matters of faith and conduct.' },
              { title: 'The Trinity', body: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.' },
              { title: 'Jesus Christ', body: 'We believe in the deity of our Lord Jesus Christ, His virgin birth, sinless life, atoning death, bodily resurrection, and His imminent return.' },
              { title: 'Salvation', body: 'We believe that salvation is by grace through faith in Jesus Christ alone, and that all who repent and believe shall receive eternal life.' },
              { title: 'The Holy Spirit', body: 'We believe in the present ministry of the Holy Spirit, who empowers believers for life and service.' },
              { title: 'The Church', body: 'We believe in the universal Church, the Body of Christ, and the importance of Christian fellowship, worship, and discipleship.' },
            ].map((f) => (
              <div key={f.title} className="bg-slate-700 rounded-xl p-6 shadow-sm border-l-4" style={{ borderColor: 'var(--gold)' }}>
                <h3 className="font-playfair font-bold text-lg mb-2 text-green-light" style={{ color: 'var(--green-light)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pastor */}
      <section id="pastor" className="max-w-7xl mx-auto px-6 py-24 bg-slate-900">
        <div className="text-center mb-14">
          <h2 className="section-title text-green-light">The Pastor</h2>
          <div className="gold-underline" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=700&q=80"
              alt="Pastor Gideon Peprah"
              width={600}
              height={700}
              className="w-full rounded-xl shadow-2xl object-cover mx-auto"
              style={{ maxHeight: '520px' }}
            />
          </div>
          <div>
            <h3 className="font-playfair text-3xl font-bold mb-2 text-green-light" style={{ color: 'var(--green-light)' }}>Pastor Gideon Peprah</h3>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gold" style={{ color: 'var(--gold)' }}>Founder &amp; President, GPM</p>
            <div className="space-y-4 leading-[1.85] text-slate-300" style={{ color: 'rgb(203, 213, 225)' }}>
              <p>Pastor Gideon Peprah is a man of deep faith and unwavering commitment to the Word of God. Called by God from a young age, he has devoted his life to the proclamation of the Gospel and the building of God's Kingdom on earth.</p>
              <p>With decades of ministry experience spanning evangelism, church planting, and community development, Pastor Gideon carries a burning passion to see the Body of Christ mobilised and prepared for the second coming of Jesus Christ.</p>
              <p>He holds advanced degrees in Theology and Ministry Leadership, and is widely regarded as a gifted teacher, preacher, and apostolic voice to this generation.</p>
              <p>Together with his wife Mrs. Peprah, they lead GPM with a shared vision of reaching the lost, strengthening believers, and transforming communities for the glory of God.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 px-6 bg-slate-800" style={{ background: '#1a3d25' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-4xl font-bold text-white mb-3">Governing Council &amp; Leadership</h2>
            <div className="w-16 h-1 mx-auto" style={{ background: 'var(--gold)' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((l) => (
              <div key={l.name} className="text-center">
                <Image
                  src={l.img}
                  alt={l.name}
                  width={200}
                  height={200}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                  style={{ border: '3px solid var(--gold)' }}
                />
                <h4 className="font-bold text-white text-base">{l.name}</h4>
                <p className="text-sm mt-1" style={{ color: 'var(--gold-light)' }}>{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
