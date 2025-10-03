import type { Metadata, Viewport } from 'next'
import { Hedvig_Letters_Serif, Hedvig_Letters_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { Analytics } from '@vercel/analytics/next'

const hedvigSerif = Hedvig_Letters_Serif({
  variable: '--font-hedvig-serif',
  subsets: ['latin'],
})

const hedvigSans = Hedvig_Letters_Sans({
  variable: '--font-hedvig-sans',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Katherine Gonzalez | Portfolio',
  description:
    'UI/UX & Web Designer & Front-End Developer passionate about bringing visions to life.',
  openGraph: {
    type: 'website',
    url: 'www.khgonzalez.com',
    title: 'Katherine Gonzalez | Portfolio',
    description:
      'UI/UX & Web Designer & Front-End Developer passionate about bringing visions to life.',
    siteName: 'Katherine Gonzalez Portfolio',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Katherine Gonzalez Portfolio',
      },
    ],
  },
}

export const generateViewport = (): Viewport => {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false, // optional — prevents zoom on mobile
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${hedvigSerif.variable} ${hedvigSans.variable} antialiased overflow-x-hidden`}
      >
        <NavBar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
