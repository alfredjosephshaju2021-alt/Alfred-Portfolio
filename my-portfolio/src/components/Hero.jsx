import portraitImage from '../assets/alfred-portrait.png'

const technologies = [
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'node' },
  { name: 'MongoDB', icon: 'mongo' },
  { name: 'Express.js', icon: 'express' },
]

function TechnologyIcon({ type }) {
  if (type === 'react') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.2" fill="currentColor" />
        <ellipse cx="16" cy="16" rx="13" ry="5" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
      </svg>
    )
  }

  if (type === 'node') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m16 2.5 12 7v13l-12 7-12-7v-13l12-7Z" />
        <text x="16" y="20" textAnchor="middle">JS</text>
      </svg>
    )
  }

  if (type === 'mongo') {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 2.5c-5.3 7-8.6 12.1-7.1 18.1 1 4.1 4.2 6.4 6.3 7.8l.8-4.1.8 4.1c2.1-1.4 5.3-3.7 6.3-7.8C24.6 14.6 21.3 9.5 16 2.5Z" />
        <path d="M16 9v18" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 8h13M5 8v16M5 16h10M5 24h13M23 8l6 16m0-16-6 16" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">Alfred Joseph Shaju</h1>
          <h2 className="hero-role">MERN Stack Developer</h2>
          <p className="hero-description">
            I build modern web applications using React, Node.js, Express.js
            and MongoDB. Passionate about creating clean, responsive and
            user-friendly experiences.
          </p>

          <a
            href="/resume.pdf"
            className="hero-resume-link"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 2v10m0 0 4-4m-4 4L6 8M3 13v4h14v-4" />
            </svg>
          </a>

          <ul className="hero-tech-stack" aria-label="Technology stack">
            {technologies.map(({ name, icon }) => (
              <li key={name}>
                <TechnologyIcon type={icon} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <span className="hero-decoration-line" aria-hidden="true">
            <span />
          </span>
          <span className="hero-decoration-dot" aria-hidden="true" />
          <div className="hero-avatar-frame">
            <img
              className="hero-avatar"
              src={portraitImage}
              alt="Portrait of Alfred Joseph Shaju"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
