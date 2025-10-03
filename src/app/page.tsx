'use client'

import Image from 'next/image'
import { Widget } from '@/components/Widget'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-screen h-dvh flex md:flex-row flex-col md:gap-24 gap-6 bg-secondary md:px-36 px-4 md:pb-24 p-8">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/profile.png" alt="Katherine Gonzalez" width={407} height={609} />
        </motion.div>

        <motion.div
          className="flex flex-col items-start justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h1 className="font-serif text-primary md:text-5xl text-3xl">
            Hi! I&apos;m Katherine Gonzalez
          </h1>

          <motion.p
            className="font-serif italic text-accent md:text-4xl text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            I&apos;m so glad you&apos;re here
          </motion.p>

          <Link
            href="/#info"
            className="font-sans text-primary md:pt-16 text-lg pt-8 md:hover:text-gray active:text-gray"
          >
            Get to know a little bit more about me ↓
          </Link>
        </motion.div>
      </section>

      {/* Info Section */}
      <motion.section
        className="w-screen min-h-dvh bg-primary md:py-24 md:px-36 p-8 md:grid md:grid-rows-2 md:grid-cols-2 md:gap-6 flex flex-col gap-24"
        id="info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <div className="row-start-1 col-start-1 flex flex-col items-start">
          <h1 className="font-serif text-secondary italic md:text-4xl text-2xl">
            A highly collaborative web developer with a technical background + an eye for detail
          </h1>
        </div>
        <motion.div
          className="row-start-2 col-start-2 flex flex-col items-end gap-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="font-serif text-secondary md:text-3xl text-xl font-bold md:font-normal">
            I strongly believe in communication + collaboration as the most effective solution
          </h2>
          <p className="font-sans text-secondary text-lg leading-relaxed">
            In today&apos;s world, most answers can be found with AI or a quick internet search.
            That&apos;s why I believe soft skills are{' '}
            <span className="italic">just as important</span> as technical skills when it comes to
            efficiently tackling problems and creating solutions. My approach is rooted in
            transparency and vulnerability, paired with a clear understanding of the challenges at
            hand. I strive to create an environment where everyone feels welcome, and believe that
            when you work with the right people - <span className="font-bold">everybody wins.</span>
          </p>
        </motion.div>
      </motion.section>

      {/* Project Section */}
      <motion.section
        className="w-screen min-h-dvh bg-secondary md:py-24 md:px-36 p-12 overflow-y-hidden"
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-serif text-primary md:text-4xl text-2xl">projects</h1>
          <motion.div
            className="flex md:flex-row flex-col items-center gap-12 md:overflow-y-visible 
                overflow-y-auto"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <Widget image="/portfolio.png" projectName="Portfolio" />
            <Widget image="/moderna.png" projectName="Moderna" />
            <Widget />
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="w-screen min-h-dvh bg-primary md:p-36 p-12 md:grid md:grid-rows-2 md:grid-cols-2 gap-8 flex flex-col"
        id="connect"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="row-start-1 col-start-1 flex flex-col items-start">
          <h1 className="font-serif text-secondary italic font-bold text-6xl">
            Let&apos;s connect
          </h1>
        </div>
        <motion.div
          className="row-start-2 col-start-2 flex flex-col gap-10 md:pl-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex flex-row gap-4 items-baseline">
            <h2 className="font-serif text-secondary text-2xl">Phone</h2>
            <h1 className="font-sans text-secondary text-lg leading-relaxed">205-515-7932</h1>
          </div>
          <div className="flex flex-row gap-4 items-baseline">
            <h2 className="font-serif text-secondary text-2xl">Email</h2>
            <h1 className="font-sans text-secondary text-lg leading-relaxed">
              <a href="mailto:khgonzalez0@gmail.com" className="hover:text-gray transition-colors">
                khgonzalez0@gmail.com
              </a>
            </h1>
          </div>
          <div className="flex flex-row gap-6 items-end">
            <a
              href="https://www.linkedin.com/in/katherine-gonzalez-4b61ab73/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-12 h-12 text-secondary hover:text-gray transition-colors" />
            </a>
            <a href="https://github.com/khgonzal" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="w-12 h-12 text-secondary hover:text-gray transition-colors" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-secondary text-primary px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray transition-colors cursor-pointer"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}
