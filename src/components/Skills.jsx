import './Skills.css'

const skills = [
  {
    icon: '⚛️',
    name: 'Frontend Development',
    desc: 'Building responsive, performant interfaces with modern frameworks and clean architecture.',
    tags: ['React', 'Vite', 'JSX'],
  },
  {
    icon: '🎨',
    name: 'UI / UX Design',
    desc: 'Designing intuitive user flows and pixel-perfect interfaces with attention to detail.',
    tags: ['Figma', 'CSS', 'Design Systems'],
  },
  {
    icon: '🌐',
    name: 'Web Technologies',
    desc: 'Solid foundations in semantic HTML, modern CSS, and JavaScript ES6+.',
    tags: ['HTML5', 'CSS3', 'JS ES6+'],
  },
  {
    icon: '🚀',
    name: 'Performance & Deploy',
    desc: 'Optimizing for speed and deploying to modern platforms with CI/CD pipelines.',
    tags: ['GitHub Pages', 'Vercel', 'Netlify'],
  },
  {
    icon: '🔧',
    name: 'Developer Tools',
    desc: 'Proficient with modern tooling for productive, maintainable development workflows.',
    tags: ['Git', 'ESLint', 'npm'],
  },
  {
    icon: '📧',
    name: 'Integrations',
    desc: 'Connecting apps to third-party services and APIs to power real-world functionality.',
    tags: ['EmailJS', 'REST APIs', 'React Router'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Skills &amp; <em>Expertise</em>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-card reveal" key={s.name} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-desc">{s.desc}</div>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span className="skill-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
