import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section className="projects section-block" id="projects">
      <div className="section-heading">
        <h2>Things I&apos;ve built.</h2>
      </div>

      <p className="projects-intro">
        A few projects that reflect what I&apos;ve learned, what I value,
        and where I&apos;m headed.
      </p>

      <div className="projects-grid">
        <article className="project-card">
          <Link
            className="project-card-navigation"
            to="/projects/billmate"
            aria-label="View Bill.com project details"
          />
          <div className="project-preview billmate-preview">
            <img
              className="billmate-preview-image"
              src="/screenshots/billmate/billmate-homepage.png"
              alt="Bill.com homepage"
            />
            <span className="project-count">01</span>
          </div>

          <div className="project-info">
            <div className="project-meta">
              <span className="project-category">WEB APPLICATION</span>
              <span className="project-status">Completed</span>
            </div>

            <h3>Bill.com</h3>

            <p>
              A billing management application that helps
              companies manage products, create customer
              invoices and organize their bills.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Bootstrap</span>
              <span>JSON Server</span>
            </div>

          </div>
        </article>

        <article className="project-card">
          <Link
            className="project-card-navigation"
            to="/projects/fixnear"
            aria-label="View FixNear project details"
          />
          <div className="project-preview fixnear-preview">
            <div className="fixnear-content">
              <div className="fixnear-brand">
                <span className="fixnear-mark">F</span>
                <span>FixNear</span>
              </div>

              <span className="fixnear-label">
                LOCAL SERVICES
              </span>

              <h3>
                Find help.
                <br />
                Right nearby.
              </h3>

              <div className="fixnear-search">
                <span>⌕</span>
                <span>What do you need fixed?</span>
                <span>↗</span>
              </div>

              <div className="fixnear-services">
                <span>Electrical</span>
                <span>Plumbing</span>
                <span>Repairs</span>
              </div>
            </div>

            <span className="project-count">02</span>
          </div>

          <div className="project-info">
            <div className="project-meta">
              <span className="project-category">FULL STACK PROJECT</span>
              <span className="project-status in-progress">
                In Development
              </span>
            </div>

            <h3>FixNear</h3>

            <p>
              A planned local service platform to help people
              discover nearby professionals such as electricians
              and plumbers and request their services.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-links">
              <span className="project-coming-soon">
                Currently building
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
