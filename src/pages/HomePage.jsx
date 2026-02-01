import './HomePage.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa';



function HomePage() {
    console.log("HomePage is rendering!");
  // Data strategy: Edit here to update site-wide
  const agencyData = {
    name: <>Alice Maiorana</>,
    tagline: 'Full-Stack Developer | Product Marketing Strategist',
    about: <> Proud SheCoder building intuitive web apps with UX/UI passion. <br/> Full-stack developer who blends Sales, Customer Success, and Product Marketing to create human-centric digital experiences at Alima Lab.</>,
  };

  const projects = [
    { title: 'LifeData AI Omnichannel', desc: 'AI conversational UX journeys...', tags: ['React', 'AI', 'UX'] },
    { title: 'Content Portfolio', desc: 'Marketing campaigns & presentations...', tags: ['Marketing', 'Design'] },
  ];

  return (
    <>
      <main>
        {/* Section 1: About */}
        <section id="about" className="section about">
          <div className="content-wrapper">
            <h1 className="name-title">{agencyData.name}</h1>
            <p className="tagline">{agencyData.tagline}</p>

            {/* Social Icons - Right after tagline! */}
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
            <a href="#projects" className="btn-primary">Projects</a>
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
                <p className="project-tags">
                  {project.tags.join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Skills */}
        <section id="skills" className="section skills">
          <h2>Skills</h2>
          <ul className="skills-grid">
            <li>React · Django · Full-Stack</li>
            <li>UX Design · Figma · Marketing</li>
          </ul>
        </section>

        {/* Section 4: Contact */}
        <section id="contact" className="section contact">
          <h2>Contact Alim Lab</h2>
          <p>Let's grow your product together.</p>
          <ul className="contact-links">
            <li><a href="mailto:alice@alimlab.com">alice@alimlab.com</a></li>
            <li><a href="#">LinkedIn / GitHub</a></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 {agencyData.name} | Full-Stack Agency</p>
      </footer>
    </>
  );
}

export default HomePage;
