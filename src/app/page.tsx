import Image from 'next/image'
import { Widget } from '@/components/Widget'
import Link from 'next/link'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-screen h-screen flex md:flex-row flex-col md:gap-24 gap-6 bg-secondary md:px-36 px-4 md:pb-24 p-8">
        <div className="flex items-center justify-center">
          <Image src="/profile.png" alt="Katherine Gonzalez" width={407} height={609} />
        </div>

        <div className="flex flex-col items-start justify-center">
          <h1 className="font-serif text-primary md:text-5xl text-3xl">
            Hi! I'm Katherine Gonzalez
          </h1>

          <p className="font-serif italic text-accent md:text-4xl text-2xl">
            I'm so glad you're here
          </p>

          <Link
            href="/#info"
            className="font-sans text-primary md:text-2xl md:pt-16 text-xl pt-8 md:hover:text-gray active:text-gray"
          >
            Get to know a little bit more about me ↓
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section
        className="w-screen h-screen bg-primary md:py-24 md:px-36 p-8 md:grid md:grid-rows-2 md:grid-cols-2 md:gap-6 flex flex-col gap-24"
        id="info"
      >
        <div className="row-start-1 col-start-1 flex flex-col items-start">
          <h1 className="font-serif text-secondary italic md:text-4xl text-2xl">
            A highly collaborative web developer with a technical background + an eye for detail
          </h1>
        </div>
        <div className="row-start-2 col-start-2 flex flex-col items-end gap-6">
          <h2 className="font-serif text-secondary md:text-3xl text-xl font-bold md:font-normal">
            I strongly believe in communication + collaboration as the most effective solution
          </h2>
          <p className="font-sans text-secondary text-lg leading-relaxed">
            In today's world, most questions can be answered with AI or a quick search on the
            internet. That's why I believe soft skills are just as important as technical skills
            when it comes to efficiently tackling problems and creating solutions. These are what
            set people apart from the crowd - the ability to work together without fear of judgment
            or asking the wrong questions; leading with transparency and vulnerability.
          </p>
        </div>
      </section>

      {/* Project Section */}
      <section
        className="w-screen h-screen bg-secondary md:py-24 md:px-36 p-12 overflow-y-hidden"
        id="projects"
      >
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-serif text-primary md:text-4xl text-2xl">projects</h1>
          <div
            className="flex md:flex-row flex-col items-center gap-12 
                md:overflow-x-scroll md:overflow-y-visible 
                overflow-y-auto"
          >
            <Widget image="/moderna.png" projectName="Moderna" />
            <Widget image="/portfolio.png" projectName="Portfolio" />
            <Widget />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="w-screen h-screen bg-primary md:p-36 p-12 md:grid md:grid-rows-2 md:grid-cols-2 gap-8 flex flex-col"
        id="connect"
      >
        <div className="row-start-1 col-start-1 flex flex-col items-start">
          <h1 className="font-serif text-secondary italic font-bold text-6xl">Let's connect</h1>
        </div>
        <div className="row-start-2 col-start-2 flex flex-col gap-10 md:pl-24">
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
        </div>
      </section>
    </>
  )
}
