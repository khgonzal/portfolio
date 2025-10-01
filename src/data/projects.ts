export interface Project {
  title: string
  image: string
  description: string
  skills: string[]
}

export interface ProjectsProps {
  [key: string]: Project
}

export const projects: ProjectsProps = {
  moderna: {
    title: 'Moderna Integration Project',
    image: '/stockphoto.png',
    description: 'At Moderna, I worked on integrating AWS services with third-party systems...',
    skills: ['AWS SNS', 'SQS', 'Lambdas', 'EventBridge', 'CloudWatch'],
  },
  portfolio: {
    title: 'Personal Portfolio',
    image: '/stockphoto.png',
    description:
      'This portfolio website was designed in Figma and built with Next.js and TailwindCSS...',
    skills: ['Next.js', 'TailwindCSS', 'Figma', 'Framer Motion'],
  },
  dashboard: {
    title: 'Analytics Dashboard',
    image: '/stockphoto.png',
    description: 'Built an interactive dashboard for visualizing real-time business analytics...',
    skills: ['React', 'D3.js', 'TypeScript'],
  },
}
