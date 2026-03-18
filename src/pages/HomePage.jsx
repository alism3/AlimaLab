import './HomePage.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaEnvelope, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

function HomePage() {
  console.log("HomePage is rendering!");

  const aboutData = {
    name: <>Alice Maiorana</>,
    tagline: '- Designing clear, beautiful websites that help small businesses grow -',
    intro: <>UX/UI designer creating thoughtful digital experiences for small businesses and personal brands. I combine strategy, empathy, and design to build websites that feel good to use and easy to trust.</>,
    about: <>I'm a full-stack developer blending <strong>Sales</strong>, <strong>Customer Success</strong>, and <strong>Product Marketing</strong> to build human-centric digital experiences. <strong>SheCodes Australia $10K Scholarship Recipient</strong>
<br/><br/>Based in <strong>Australia</strong>, I transform ideas into beautiful and easy web apps—from quirky alpaca crowdfunding to collaborative music platforms. <br/><br/>My <strong>"peculiar personality"</strong> embraces challenges and thrives on direct feedback. When not coding, I'm designing UX patterns or growing <strong>Alima Lab</strong>.</>,
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
      liveUrl: 'https://vibelabmusic.netlify.app',
      frontendRepo: null,
      backendRepo: null,
    },
    { 
      title: 'Portfolio Website', 
      desc: 'This website! A personal portfolio to showcase my work and skills.', 
      features: [
        'Responsive design for all devices',
        'Modern UI with React components',
        'CSS animations and gradients'
      ],
      tags: ['React', 'CSS', 'Vite'],
      liveUrl: null,
      frontendRepo: 'https://github.com/alism3/AlimaLab',
      backendRepo: null,
    },
  ];

  return (
    <>
      <main>
        {/* Section 1: Hero */}
        <section id="hero" className="section hero">
          <div className="content-wrapper">
            <h1 className="name-title">{aboutData.name}</h1>
            <p className="tagline">{aboutData.tagline}</p>

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

            <p>{aboutData.intro}</p>

            {/* Hero Buttons */}
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">Projects</a>
              <a href="https://calendly.com/alima-lab-am/30min" className="btn-secondary" target="_blank" rel="noopener noreferrer">View Services</a>
            </div>
          </div>
        </section>

        {/* Section 2: Services */}
        <section id="services" className="section services-home services-box">
          <h2 className="services-title">Ways We Can Work Together</h2>
          <p className="services-intro">
            I design thoughtful digital experiences tailored to your brand and your goals. <br />
            Whether you need small improvements or a complete website, I offer solutions that bring clarity, structure, and intention to your online presence.
          </p>
          <div className="services-cards">
            {/* Starter Offer */}
            <div className="service-card-home project-card">
              <h3>Starter Offer</h3>
              <strong>Website Audit + UX Fixes</strong>
              <ul className="project-features">
                <li>Review your website</li>
                <li>Give improvements</li>
                <li>Optional small redesign</li>
              </ul>
              <div className="service-price-home">💰 $150 – $300 (first clients)</div>
              <span className="service-note">PERFECT for beginners</span>
              <div className="service-btn-row">
                <a href="/services" className="btn-primary">See Details</a>
              </div>
            </div>
            {/* Core Offer */}
            <div className="service-card-home project-card">
              <h3>Core Offer</h3>
              <strong>Website Design (Simple)</strong>
              <ul className="project-features">
                <li>3–5 pages</li>
                <li>Clean + structured</li>
                <li>Mobile friendly</li>
              </ul>
              <div className="service-price-home">💰 $500 – $1200</div>
              <div className="service-btn-row">
                <a href="/services" className="btn-primary">See Details</a>
              </div>
            </div>
            {/* Premium Offer */}
            <div className="service-card-home project-card">
              <h3>Premium Offer</h3>
              <strong>Brand + Website Experience</strong>
              <ul className="project-features">
                <li>Branding + UX + website</li>
                <li>Strategy + structure</li>
              </ul>
              <div className="service-price-home">💰 $1200 – $2500+</div>
              <div className="service-btn-row">
                <a href="/services" className="btn-primary">See Details</a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Projects */}
        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                {/* Tags as pills */}
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

        {/* Section 2: About Me */}
        <section id="about" className="section about">
          <h2>About Me</h2>
          <div className="about-content">
            <p>{aboutData.about}</p>
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
                <li>Django</li>
                <li>Django REST Framework</li>
                <li>Python</li>
                <li>REST APIs</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Tools & Deployment</h3>
              <ul className="skill-list">
                <li>Git & GitHub</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Figma</li>
                <li>VS Code</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 5: Contact */}
        <section id="contact" className="section contact">
          <h2>Let's Build Together</h2>
          <p>Ready to create something amazing?</p>
          
          {/* Call to Action Button */}
          <div className="contact-buttons">
            <a
              href="https://calendly.com/alima-lab-am/30min"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </div>

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
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Alima Lab | Full-Stack Developer</p>
      </footer>
    </>
  );
}

export default HomePage;