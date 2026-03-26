import './About.css'

const stats = [
  { num: '2+',  label: 'Years Experience' },
  { num: '15+', label: 'Projects Completed' },
  { num: '10+', label: 'Happy Clients' },
  { num: '∞',   label: 'Cups of Coffee' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <div className="about-grid">

          {/* Image */}
          <div className="about-img-wrap reveal">
            <div className="about-img-card">
              <div className="about-img-glow" />
              <div className="about-avatar">A</div>
              <p className="about-img-name">Anna · Developer</p>
              <div className="about-img-lines">
                <span /><span /><span />
              </div>
            </div>
            <div className="about-frame" />
          </div>

          {/* Text */}
          <div className="about-text reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Passionate about <em>craft</em>
            </h2>
            <div className="section-divider" />

            <p>
              Hi, I'm <strong>Anna</strong> — a frontend developer with a love for clean code,
              thoughtful UI, and memorable user experiences.
            </p>
            <p>
              I believe that great software is not just functional — it's beautiful.
              I combine <strong>technical precision</strong> with{' '}
              <strong>visual sensibility</strong> to build interfaces that feel as good as they work.
            </p>
            <p>
              When I'm not coding, you'll find me exploring design trends, contributing
              to open-source projects, or sketching ideas for my next project.
            </p>

            <div className="about-stats">
              {stats.map((s) => (
                <div className="stat-box" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
