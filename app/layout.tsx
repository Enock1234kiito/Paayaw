import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gideon Peprah Ministries – Advancing the Kingdom of God',
  description: 'Mobilising the Body of Christ to re-position God\'s people for the second coming of our Lord Jesus Christ.',
  icons: {
    icon: '/images/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
