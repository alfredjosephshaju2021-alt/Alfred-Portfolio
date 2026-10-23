const technologies = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/149ECA' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F0DB4F' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/102A56' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/111111' },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
]

function Skills() {
  const toolRows = [technologies.slice(0, 6), technologies.slice(6)]

  return (
    <section className="skills section-block" id="skills">
      <div className="section-heading">
        <h2>Skills &amp; tools.</h2>
      </div>

      <div className="skills-marquee" aria-label="Technologies I work with">
        {toolRows.map((row, rowIndex) => (
          <div
            className={`skills-marquee-row ${
              rowIndex === 0 ? 'skills-marquee-row-left' : 'skills-marquee-row-right'
            }`}
            aria-hidden="true"
            key={`row-${rowIndex}`}
          >
            <div className="marquee-track">
              {[...row, ...row].map((tech, index) => (
                <div
                  key={`tech-${rowIndex}-${index}`}
                  className="skill-card marquee-item logo-only"
                  aria-hidden={index >= row.length}
                >
                  <img src={tech.icon} alt="" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="skills-marquee-mobile-row">
          <div className="marquee-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`mobile-tech-${index}`}
                className="skill-card marquee-item logo-only"
                aria-hidden={index >= technologies.length}
              >
                <img src={tech.icon} alt="" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="skills-caption">A growing toolkit for building thoughtful things.</p>
    </section>
  )
}

export default Skills
