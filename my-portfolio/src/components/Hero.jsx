import portraitImage from '../assets/alfred-portrait.png'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="sr-only">
            Alfred Joseph Shaju — MERN Stack Developer
          </h1>
          <pre className="developer-code" aria-label="Developer profile">
            <code>
              <span className="code-line">
                <span className="code-brace">{'{'}</span>
              </span>
              <span className="code-line">
                <span className="code-indent" />
                <span className="code-key">&quot;name&quot;</span>
                <span className="code-punctuation">: </span>
                <span className="code-value">&quot;Alfred Joseph Shaju&quot;</span>
                <span className="code-punctuation">,</span>
              </span>
              <span className="code-line">
                <span className="code-indent" />
                <span className="code-key">&quot;occupation&quot;</span>
                <span className="code-punctuation">: </span>
                <span className="code-value">&quot;MERN Stack Developer&quot;</span>
                <span className="code-punctuation">,</span>
              </span>
              <span className="code-line code-crafting">
                <span className="code-indent" />
                <span className="code-key">&quot;crafting&quot;</span>
                <span className="code-punctuation">: [</span>
                <span className="code-value">
                  &quot;Code with purpose. Build with passion.&quot;
                </span>
                <span className="code-punctuation">]</span>
              </span>
              <span className="code-line">
                <span className="code-brace code-brace-close">{'}'}</span>
              </span>
            </code>
          </pre>

          <p className="hero-description">
            I turn ideas into clean, practical web experiences.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              className="hero-resume-link"
              target="_blank"
              rel="noreferrer"
            >
              Download resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
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
