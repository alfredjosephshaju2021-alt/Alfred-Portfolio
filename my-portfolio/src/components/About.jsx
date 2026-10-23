function About() {
  return (
    <section className="about section-block" id="about">
      <div className="section-heading">
        <h2>
          A little about <span>me.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m Alfred, a Computer Science graduate who enjoys turning
            thoughtful ideas into useful digital products. I&apos;m growing
            my skills across the MERN stack by building practical projects.
            I enjoy creating responsive interfaces and solving problems with
            simple, thoughtful solutions. I care about the details that make
            an experience feel clear, intuitive, and human. I&apos;m always
            learning, experimenting, and finding ways to make my work better.
          </p>

        </div>

        <div className="about-details">
          <div className="detail-item">
            <span className="detail-icon" aria-hidden="true">01</span>
            <div>
              <h3>Education</h3>
              <p>BSc Computer Science</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon" aria-hidden="true">02</span>
            <div>
              <h3>Location</h3>
              <p>Kerala, India</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon" aria-hidden="true">03</span>
            <div>
              <h3>Current Focus</h3>
              <p>MERN Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
