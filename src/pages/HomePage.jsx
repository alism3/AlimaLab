import './HomePage.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaEnvelope, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

function HomePage() {
    console.log("HomePage is rendering!");
  // Data strategy: Edit here to update site-wide
  const agencyData = {
    name: <>Alice Maiorana</>,
    tagline: 'Full-Stack Developer | Product Marketing Strategist',
    about: <> Proud SheCoder building intuitive web apps with UX/UI passion. <br/> Full-stack developer who blends Sales, Customer Success, and Product Marketing to create human-centric digital experiences at Alima Lab.</>,
  };

  const projects = [
  { 
    title: 'Alpaca Heaven', 
    desc: "Fun platform connecting animal lovers to alpaca farms through quirky campaigns. A Full-stack app with user auth, pledge system, farmer dashboards.",
    
    features: [
      'User auth & role-based access (farmers vs donors)',
      'Real-time pledge tracking & farmer dashboards',
      'Mobile-first responsive design'
    ],
    tags: ['React', 'Django REST Framework', 'REST API', 'Heroku', 'Netlify'],
    liveUrl: 'https://alpacaheaven.netlify.app/',
    frontendRepo: 'https://github.com/alism3/AlpacaHeaven_Frontend.git',
    backendRepo: 'https://github.com/alism3/crowdfunding_backend.git',
  },
    { 
      title: 'VibeLab', 
      desc: "Collaborative playlist app for groups to co-create event music. Built complete mobile-first frontend with Spotify API integration, real-time collaboration, and smooth user flows.", 
      features: [
        'Spotify API song search & selection',
        'Real-time collaborative playlist building', 
        'Mobile-first responsive design (all devices)',
        'Complete user flow (auth → create → share)'
      ],
      tags: ['React', 'Django REST Framework', 'REST API', 'Agile Methodologies', 'Netlify'],
      liveUrl: 'vibelabmusic.netlify.app',
      frontendRepo: null,
      backendRepo: null,
    },
    { 
      title: 'Portfolio Website', 
      desc: 'This website! A personal portfolio to showcase my work and skills.', 
      features: ['Responsive design', 'Modern UI', 'React components', 'CSS animations'],
      tags: ['React', 'CSS', 'Vite'],
      liveUrl: null,
      frontendRepo: 'https://github.com/alism3/portfolio',
      backendRepo: null,
    },
  ];

  return (
    <>
      <main>
        {/* Section 1: About */}
        <section id="about" className="section about">
          <div className="content-wrapper">
            <h1 className="name-title">{agencyData.name}</h1>
            <p className="tagline">{agencyData.tagline}</p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://github.com/alism3" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </a>
              <a href="https://linkedin.com/in/alicemaiorana" target="_blank" rel="noopener noreferrer">
                <SiLinkedin />
              </a>
              <a href="mailto:alima.lab.am@gmail.com">
                <FaEnvelope />
              </a>
            </div>

            <p>{agencyData.about}</p>

            {/* Hero Buttons */}
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">Projects</a>
              <a href="https://calendly.com/alima-lab-am/30min" className="btn-secondary" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </div>
          </div>
        </section>

        {/* Section 2: Projects */}
        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                {/* Tags as green pills - RIGHT AFTER description */}
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                {/* Key Features with arrows */}
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> View Live
                    </a>
                  )}
                  {project.frontendRepo && (
                    <a href={project.frontendRepo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaCode /> Frontend
                    </a>
                  )}
                  {project.backendRepo && (
                    <a href={project.backendRepo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaCode /> Backend
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Skills */}
        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <div className="skills-container">
            
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul className="skill-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <ul className="skill-list">
                <li>Django REST Framework</li>
                <li>Python</li>
                <li>REST APIs</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <ul className="skill-list">
                <li>Git & GitHub</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Figma</li>
                <li>VS Code</li>
                <li>Asana</li>
                <li>Insomnia</li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Alima Lab | Full-Stack Developer</p>
        <a href="/cv/AliceMaiorana_CV.pdf" className="footer-link" download>Download CV</a>
      </footer>
    </>
  );
}

export default HomePage;