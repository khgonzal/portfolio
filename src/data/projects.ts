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
    title: 'Moderna – Vaccine Lifecycle Tracking Application',
    image: '/moderna.png',
    description: `At Moderna, I was part of a two-person development team responsible for designing and building a web application that scientists used to track the lifecycle of vaccines. This was a high-stakes, data-heavy application, and while functionality was critical, creating an intuitive, visually clear, and user-friendly interface was just as important.<br/><br/>

💡 <span style="font-weight: bold;">Our Design Process</span><br/>
We approached the project as a combination of UI/UX design and development. Our workflow included:<br/>
1. Collaborating with end users to understand their workflows and pain points.<br/>
2. Designing interactive prototypes that illustrated layouts, flows, and visual hierarchy.<br/>
3. Testing prototypes with users and iterating to improve usability and clarity.<br/>
4. Translating prototypes into functional interfaces with polished visual design.<br/><br/>

🎨 <span style="font-weight: bold;">UI/UX Focus</span><br/>
A core part of my role was designing the interface with the end user in mind:<br/>
- <span style="font-weight: 550;">User-centered design:</span> Ensuring that every element, from typography to spacing to button placement, made the application intuitive for scientists, many of whom were not familiar with digital tools.<br/>
- <span style="font-weight: 550;">Visual hierarchy:</span> Organizing information so critical data was immediately clear, while less essential details were visually secondary.<br/>
- <span style="font-weight: 550;">Consistency and branding:</span> Aligning the UI with Moderna’s design scheme while maintaining nearly full creative control over layout, colors, and component styling.<br/>
- <span style="font-weight: 550;">Accessibility:</span> Designing interfaces that were easy to navigate and readable for all users, regardless of technical comfort.<br/><br/>

🖥️ <span style="font-weight: bold;">Bringing Design to Life</span><br/>
I handled both UI design and front-end implementation, ensuring that the visual language we created translated directly into functional, responsive components. This included:<br/>
- Designing reusable components that maintained consistency across the application.<br/>
- Implementing interactions and flows that enhanced usability without compromising performance.<br/>
- Balancing aesthetic polish with the practical needs of users who relied on the application daily.<br/><br/>

🚀 <span style="font-weight: bold;">Outcome & Takeaways</span><br/>
Through this project, I gained first-hand experience designing interfaces for complex, user-critical applications. I learned how to:<br/>
- Think like the end user to create intuitive, elegant interfaces.<br/>
- Merge design thinking with front-end development for cohesive UI/UX.<br/>
- Prioritize usability and clarity while maintaining creative freedom.<br/>
- Translate user feedback into concrete design improvements that enhance workflow efficiency.<br/><br/>

This project reinforced my passion for <span style="font-weight: 550;">UI/UX design</span>, particularly in building interfaces that are not just functional but also enjoyable, clear, and human-centered.`,
    skills: [
      'UI/UX Design',
      'Front-end Development',
      'Prototyping',
      'User-Centered Design',
      'Responsive Web Design',
    ],
  },
  portfolio: {
    title: 'Personal Portfolio',
    image: '/portfolio.png',
    description:
      'This portfolio website was designed in Figma and built with Next.js and TailwindCSS...',
    skills: ['Next.js', 'TailwindCSS', 'Figma', 'Web Design', 'UI/UX Design'],
  },
  dashboard: {
    title: 'Analytics Dashboard',
    image: '/stockphoto.png',
    description: 'Built an interactive dashboard for visualizing real-time business analytics...',
    skills: ['React', 'TypeScript'],
  },
}
