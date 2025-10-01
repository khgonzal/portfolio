import type { Metadata, Viewport } from 'next'
import { Hedvig_Letters_Serif, Hedvig_Letters_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

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
  title: "Katherine Gonzalez's portfolio",
  description: "Katherine Gonzalez's portfolio",
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
      </body>
    </html>
  )
}
