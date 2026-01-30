function HomePage() {
    console.log("HomePage is rendering!");
  // Data strategy: Edit here to update site-wide
  const agencyData = {
    name: 'Alim Lab',
    tagline: 'Product Marketing & Full-Stack Agency',
    about: 'Creative strategist growing startups through UX, content, and custom web apps. Perth-based, self-employed.',
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
            <h1>{agencyData.name}</h1>
            <p>{agencyData.tagline}</p>
            <p>{agencyData.about}</p>
            <a href="#projects" className="btn-primary">See Projects</a>
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
