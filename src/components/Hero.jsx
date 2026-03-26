import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />

      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-h1">
          Creative
          <span className="hero-line2">
            developer &amp; <em>designer</em>
          </span>
        </h1>

        <p className="hero-sub">
          I craft beautiful digital experiences — blending code with design
          to build products people love.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
          <a
            href="/Anna-porfolio/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cv"
            download
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        scroll
      </div>
    </section>
  )
}
