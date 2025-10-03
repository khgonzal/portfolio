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
    description: `At Moderna, I was part of a two-person development team responsible for designing and building a web application that scientists used to track the lifecycle of vaccines. This was a high traffic application, and while functionality was critical, creating an intuitive and user-friendly interface was just as important.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">Our Design Process</span><br/>
We approached the project as a combination of UI/UX design and development. Our workflow included:<br/>
1. Collaborating with end users to understand their workflows and pain points.<br/>
2. Designing interactive prototypes that illustrated layouts, flows, and data visualization.<br/>
3. Testing prototypes with users and iterating to improve usability and clarity.<br/>
4. Translating prototypes into functional interfaces with polished visual design.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">UI/UX Focus</span><br/>
A core part of my role was designing the interface with the end user in mind:<br/>
- <span style="font-weight: bold;">User-centered design:</span> Ensuring that every element, from color scheme to spacing to button placement, made the application intuitive for scientists, many of whom were not familiar with digital tools.<br/>
- <span style="font-weight: bold;">Visual hierarchy:</span> Organizing information so critical data was immediately clear, while less essential details were visually secondary.<br/>
- <span style="font-weight: bold;">Consistency and branding:</span> Aligning the UI with Moderna’s design scheme while maintaining nearly full creative control over layout, colors, and component styling.<br/>
- <span style="font-weight: bold;">Accessibility:</span> Designing interfaces that were easy to navigate and readable for all users, regardless of technical comfort.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">Bringing Design to Life</span><br/>
I handled both UI design and front-end implementation, ensuring that what we created translated directly into functional, responsive components. This included:<br/>
- Designing reusable components that maintained consistency across the application.<br/>
- Implementing interactions and flows that enhanced usability without compromising performance.<br/>
- Balancing aesthetics with the practical needs of users who relied on the application daily.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">Outcome & Takeaways</span><br/>
Through this project, I gained first-hand experience designing interfaces for complex and critical applications. I learned how to:<br/>
- Think like the end user to create intuitive, elegant interfaces.<br/>
- Merge design thinking with front-end development for cohesive UI/UX.<br/>
- Prioritize usability and clarity while maintaining creative freedom.<br/>
- Translate user feedback into concrete design improvements that enhance workflow efficiency.<br/><br/>

This project reinforced my passion for <span style="font-weight: bold;">UI/UX and web design</span>, particularly in building interfaces that are not just functional but also engaging, clear, and keep the end user in mind.`,
    skills: [
      'UI/UX Design',
      'Front-end Development',
      'Prototyping',
      'User-Centered Design',
      'Responsive Web Design',
    ],
  },
  portfolio: {
    title: 'Personal Portfolio – Web Design & UI/UX Showcase',
    image: '/portfolio.png',
    description: `You're looking at it! For my personal portfolio, I set out to create a space that not only showcases my work but also demonstrates my ability to bring a vision to life. I believe that design is as much about understanding the person, brand, or idea behind it as it is about execution. To practice this, I treated myself as the client — clarifying the story, essence, and message I wanted to communicate, and then designing and building around that vision.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">Research & Inspiration</span><br/>
I began by researching web templates, color schemes, and typography to establish the look and feel I wanted. This process helped me:<br/>
- Identify design trends that resonated with my aesthetic.<br/>
- Choose a cohesive color palette and typography that supported clarity and readability.<br/>
- Plan layouts and flows that would highlight my work in an engaging way.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">UI/UX Design</span><br/>
Using Figma, I designed the entire <a href="https://www.figma.com/design/TD2Fz5oyeppFBE0JRfQECM/Katherine-Gonzalez?node-id=13-58&t=4z7HjIxAEzHme5i1-0" target="_blank" rel="noopener noreferrer" style="color: #223843; text-decoration: underline;">portfolio</a>, focusing on creating a visually compelling experience that communicates my vibe and design philosophy:<br/>
- <span style="font-weight: bold;">Visual storytelling:</span> Integrated images, text, and components that conveyed the story of my work and capabilities.<br/>
- <span style="font-weight: bold;">Layout & hierarchy:</span> Structured content to guide visitors’ attention naturally toward projects and skills.<br/>
- <span style="font-weight: bold;">Consistency:</span> Maintained uniform styling for typography, buttons, and spacing to create cohesion.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">Front-End Development</span><br/>
I translated my designs into a fully functional, responsive website using Next.js and TypeScript:<br/>
- <span style="font-weight: bold;">Component-based architecture:</span> Built reusable components to ensure consistency and scalability.<br/>
- <span style="font-weight: bold;">Responsive design:</span> Optimized layouts for desktop, tablet, and mobile devices.<br/>
- <span style="font-weight: bold;">Performance & optimization:</span> Focused on smooth interactions and simple flows for an effortless user experience.<br/><br/>

<img src="/star.png" width="20" height="20" style="display:inline-block; margin-right:6px;" /><span style="font-weight: bold;">Outcome & Takeaways</span><br/>
This project brought together my love for UI/UX design and front-end development while also allowing me to explore how design can capture and communicate essence. By practicing on myself first, I strengthened my ability to:<br/>
- Translate a vision into a functional, interactive experience.<br/>
- Prioritize storytelling and message as much as aesthetics.<br/>
- Apply research and design principles to create intentional, cohesive outcomes.<br/>
- Use modern tools to go from concept to deployment seamlessly.<br/><br/>

Ultimately, this portfolio reflects my passion for creating interfaces that are beautiful, intuitive, and rooted in the unique vision of the person or brand behind them. It shows how I approach design as both an artistic and user-centered process, balancing creative direction with technical execution.
`,
    skills: [
      'UI/UX Design',
      'Front-end Development',
      'Figma',
      'Next.js',
      'TypeScript',
      'Responsive Web Design',
      'Visual Design',
    ],
  },
  dashboard: {
    title: 'Analytics Dashboard',
    image: '/stockphoto.png',
    description: 'Built an interactive dashboard for visualizing real-time business analytics...',
    skills: ['React', 'TypeScript'],
  },
}
