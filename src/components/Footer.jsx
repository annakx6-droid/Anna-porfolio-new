import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <a href="#hero" className="footer-logo">Anna.</a>
      <p className="footer-text">© {year} Anna. Crafted with ❤️ &amp; lots of ☕</p>
      <div className="footer-links">
        <a href="https://github.com/annakx6-droid" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  )
}
