import './ServicePage.css';

const services = [
  {
    title: "Website Audit & UX Review",
    desc: "Perfect if you already have a website but feel like something isn’t working.",
    features: [
      "Full website review",
      "UX and structure analysis",
      "3–5 actionable improvements",
      "Optional small redesign suggestions"
    ],
    price: "💰 Starting from $150",
    cta: "Request Audit",
    ctaUrl: "https://calendly.com/alima-lab-am/30min",
    theme: "entry"
  },
  {
    title: "Website Design",
    desc: "A clean, structured website designed to reflect your brand and guide your users clearly.",
    features: [
      "3–5 page website",
      "UX-focused layout",
      "Mobile responsive design",
      "Basic visual direction"
    ],
    price: "💰 Starting from $600–$1200",
    cta: "Start Your Website",
    ctaUrl: "https://calendly.com/alima-lab-am/30min",
    theme: "core"
  },
  {
    title: "Brand & Website Experience",
    desc: "A complete, cohesive digital presence built from strategy to final design.",
    features: [
      "Brand direction (colors, fonts, style)",
      "UX strategy",
      "Website design",
      "Visual consistency across pages"
    ],
    price: "💰 Starting from $1200–$2500+",
    cta: "Request Proposal",
    ctaUrl: "https://calendly.com/alima-lab-am/30min",
    theme: "premium"
  }
];

function ServicePage() {
  return (
    <main>
      <section className="section service-grid">
        <h2 className="services-title">Services</h2>
        {services.map((service, idx) => (
          <article key={idx} className={`project-card service-card ${service.theme}`}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul className="project-features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="service-price">{service.price}</div>
            <a
              href={service.ctaUrl}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {service.cta}
            </a>
          </article>
        ))}
      </section>

      <section className="section service-addition">
        <h3>Not sure what you need?</h3>
        <p>
          I offer a simple website review to help you understand what could be improved and what direction to take.
        </p>
        <a href="https://calendly.com/alima-lab-am/30min" className="btn-secondary" target="_blank" rel="noopener noreferrer">
          Request a Website Review
        </a>
      </section>
    </main>
  );
}

export default ServicePage;