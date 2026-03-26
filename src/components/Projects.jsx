import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'Anna Portfolio — This Website',
    desc: 'A personal portfolio site built with React + Vite, featuring smooth animations, dark-mode design, and a fully functional contact form powered by EmailJS.',
    tags: ['React', 'Vite', 'CSS3', 'EmailJS'],
    live: '#',
    code: 'https://github.com/annakx6-droid/Anna-porfolio',
    featured: true,
  },
  {
    num: '02',
    title: 'Project Two',
    desc: 'A short description of this project and what makes it interesting or challenging to work on.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    code: '#',
    featured: false,
  },
  {
    num: '03',
    title: 'Project Three',
    desc: 'A short description of this project and what makes it interesting or challenging to work on.',
    tags: ['React', 'React Router'],
    live: '#',
    code: '#',
    featured: false,
  },
]

function MockBrowser({ accent = false }) {
  return (
    <div className="mock-browser">
      <div className="mock-bar">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
      </div>
      <div className="mock-body">
        <div className={`mock-line ${accent ? 'accent' : ''}`} style={{ width: '30%' }} />
        <div className="mock-line" style={{ width: '70%' }} />
        <div className="mock-line" style={{ width: '50%' }} />
        <div className="mock-line" style={{ width: '85%' }} />
        <div className="mock-line" style={{ width: '40%' }} />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">My Work</span>
          <h2 className="section-title">
            Featured <em>Projects</em>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.num}
              className={`project-card reveal ${p.featured ? 'featured' : ''}`}
            >
              <div className="project-img">
                <div className="project-img-inner">
                  <MockBrowser accent={p.featured} />
                </div>
                <span className="project-num">{p.num}</span>
              </div>
              <div className="project-body">
                <div className="project-tech">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-links">
                  <a href={p.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                  <a href={p.code} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
