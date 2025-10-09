'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section className="w-full h-screen flex flex-col gap-6 bg-secondary md:px-36 px-4 md:pb-24 p-8 items-center justify-center">
      <motion.div
        className="flex items-center justify-center"
        animate={{
          opacity: 1,
          x: 0,
          rotate: [0, 360],
        }}
        transition={{
          duration: 1,
          opacity: { duration: 1 },
          x: { duration: 1 },
          rotate: {
            repeat: Infinity,
            ease: 'linear',
            duration: 10,
          },
        }}
        whileHover={{ scale: 1.25 }}
      >
        <Image src="/big-star.png" alt="Star" width={150} height={150} />
      </motion.div>
      <h1 className="font-serif text-primary md:text-5xl text-3xl font-bold">Uh oh!</h1>
      <div className="font-serif italic text-accent text-2xl text-center">
        This page is still a work in progress
      </div>
      <Link
        href="/"
        className="font-sans text-primary md:pt-16 text-lg pt-8 md:hover:text-gray active:text-gray"
      >
        return home
      </Link>
    </section>
  )
}
