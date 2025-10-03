import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'

interface ProjectPageProps {
  params: {
    projectName: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectName } = await params
  const project = projects[projectName.toLowerCase()]

  if (!project) notFound()

  return (
    <section className="min-h-screen md:px-48 md:py-24 p-12 space-y-12 flex flex-col items-center bg-secondary">
      <Link
        href="/#projects"
        className="absolute md:top-24 md:left-24 top-22 left-12 flex items-center text-primary font-sans hover:text-gray transition"
      >
        <BiArrowBack className="w-6 h-6 mr-2" />
        <span className="font-semibold">Back</span>
      </Link>
      <div className="relative w-full max-w-4xl aspect-[2/1]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="rounded-lg shadow-md object-cover"
        />
      </div>

      <div className="max-w-3xl">
        <h1 className="text-4xl text-primary font-bold mb-4 text-center">{project.title}</h1>
        <p
          className="text-lg text-primary leading-relaxed font-sans"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>
      </div>

      <div className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Skills Used</h2>
        <ul className="flex flex-wrap gap-3">
          {project.skills.map((skill, i) => (
            <li
              key={i}
              className="px-4 py-2 bg-accent font-sans text-white rounded-md text-sm font-bold"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
