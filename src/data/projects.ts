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
    title: 'Personal Portfolio – Web Design & UI/UX Showcase',
    image: '/portfolio.png',
    description: `For my personal portfolio, I wanted to create a platform that not only showcases my work but also reflects my design sensibilities and approach to UI/UX. I approached the project as a combination of research, design, and front-end development, ensuring the final site was visually engaging, intuitive, and responsive.<br/><br/>

💡 <span style="font-weight: bold;">Research & Inspiration</span><br/>
Before designing, I spent time researching web templates, color schemes, and typography to define the look and feel I wanted for my portfolio. This phase helped me:<br/><br/>

Identify design trends that resonated with my aesthetic.<br/>

Choose a cohesive color palette and typography that enhanced readability and visual appeal.<br/>

Plan layouts and flows that would highlight my work effectively.<br/><br/>

🎨 <span style="font-weight: bold;">UI/UX Design</span><br/>
Using Figma, I designed the entire <a href="https://www.figma.com/design/TD2Fz5oyeppFBE0JRfQECM/Katherine-Gonzalez?node-id=13-58&t=4z7HjIxAEzHme5i1-0" target="_blank" rel="noopener noreferrer" style="
      color: #223843;
      text-decoration: underline;"
    >portfolio</a> , focusing on creating a user-friendly, visually compelling experience:<br/>

Layout & hierarchy: Structured content to guide visitors’ attention to projects and skills.<br/>

Interactive elements: Planned subtle animations and hover states to enhance engagement.<br/>

Consistency: Maintained uniform styling for buttons, typography, and spacing across pages.<br/>

Visual storytelling: Ensured images, text, and components worked together to tell the story of my work and capabilities.<br/><br/>

🖥️ <span style="font-weight: bold;">Front-End Development</span><br/>
I brought my designs to life using Next.js and TypeScript, leveraging my software engineering skills to create a fully functional, responsive site:<br/>

Component-based architecture: Built reusable components to maintain visual consistency and efficiency.<br/>

Responsive design: Ensured the portfolio looked great on desktop, tablet, and mobile.<br/>

Performance & optimization: Focused on fast loading times and smooth interactions to improve user experience.<br/><br/>

🚀 <span style="font-weight: bold;">Outcome & Takeaways</span><br/>
This project allowed me to combine my love for UI/UX design with front-end development. I learned how to:<br/>

Translate a visual concept into a functional website.<br/>

Balance aesthetic polish with usability and technical performance.<br/>

Apply research insights to create cohesive, intentional design decisions.<br/>

Use modern web tools to execute a design from concept to deployment.<br/><br/>

This portfolio reflects my passion for creating interfaces that are beautiful, intuitive, and human-centered, highlighting both my design thinking and technical execution skills.`,
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
