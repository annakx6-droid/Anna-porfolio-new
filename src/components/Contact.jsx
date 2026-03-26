import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const channels = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'anna@example.com',
    href: 'mailto:anna@example.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'annakx6-droid',
    href: 'https://github.com/annakx6-droid',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/anna',
    href: '#',
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    // Replace with your EmailJS IDs
    emailjs
      .sendForm('service_wtnfr2a', 'template_bios5fp', formRef.current, {
        publicKey: '5TAFVijc7pcofLlVF',
      })
      .then(
        () => {
          setStatus('sent')
          formRef.current.reset()
          setTimeout(() => setStatus('idle'), 3500)
        },
        () => setStatus('error'),
      )
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <div className="reveal">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's <em>work</em> together
          </h2>
          <div className="section-divider" />
        </div>

        <div className="contact-layout">
          {/* Info */}
          <div className="contact-info reveal">
            <h3>Open to new projects</h3>
            <p>
              Whether you have a project in mind, a question, or just want to say hi
              — my inbox is always open. I'll get back to you as soon as possible.
            </p>
            <div className="contact-channels">
              {channels.map((c) => (
                <a key={c.label} href={c.href} className="channel" target="_blank" rel="noopener noreferrer">
                  <div className="channel-icon">{c.icon}</div>
                  <div>
                    <div className="channel-label">{c.label}</div>
                    <div className="channel-val">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form — preserved from original */}
          <div className="contact-card reveal">
            <div className="card-header">
              <span className="form-tag">GET IN TOUCH</span>
              <h2 className="contact-heading">Let's <em>talk</em></h2>
              <p className="subtext">Drop us a message and we'll get back to you.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="form-body">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your full name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="What's on your mind?" required />
              </div>

              <button
                type="submit"
                className={`submit-btn ${status === 'sent' ? 'sent' : ''}`}
                disabled={status === 'sending'}
              >
                <span className="btn-text">
                  {status === 'idle'    && 'Send Message'}
                  {status === 'sending' && 'Sending…'}
                  {status === 'sent'    && '✓ Message Sent!'}
                  {status === 'error'   && 'Try Again'}
                </span>
                <span className="btn-glow" />
              </button>
            </form>

            <div className="accent-bar" />
          </div>
        </div>
      </div>
    </section>
  )
}
