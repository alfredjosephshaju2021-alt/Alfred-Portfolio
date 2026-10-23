import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projects from '../projectData.js'
import './ProjectView.css'

function ProjectView() {
  const { projectId } = useParams()
  const project = Object.hasOwn(projects, projectId)
    ? projects[projectId]
    : null

  if (!project) {
    return (
      <main className="project-view-page">
        <div className="project-view-container project-not-found">
          <Link className="project-back-link" to="/#projects">
            ← Back to Home
          </Link>
          <h1>Project not found</h1>
          <p>That project page does not exist.</p>
          <Link className="project-action-link" to="/#projects">
            Return to the portfolio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <ProjectDetails
      key={projectId}
      project={project}
      projectId={projectId}
    />
  )
}

function ProjectDetails({ project, projectId }) {
  const screenshots = project.screenshots
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [failedImages, setFailedImages] = useState({})
  const activeScreenshot = screenshots[activeImageIndex]
  const canShowScreenshot =
    activeScreenshot && !failedImages[activeImageIndex]

  useEffect(() => {
    if (
      screenshots.length < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const slideshowTimer = window.setInterval(() => {
      setActiveImageIndex((currentIndex) =>
        (currentIndex + 1) % screenshots.length,
      )
    }, 2000)

    return () => window.clearInterval(slideshowTimer)
  }, [screenshots.length])

  function markImageAsFailed(index) {
    setFailedImages((currentFailures) => ({
      ...currentFailures,
      [index]: true,
    }))
  }

  return (
    <main className="project-view-page">
      <div className="project-view-container">
        <Link className="project-back-link" to="/#projects">
          ← Back to Home
        </Link>

        <header className="project-view-intro">
          <span className="project-view-eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>

        <section
          className="project-gallery"
          aria-label={`${project.title} screenshots`}
        >
          <div className="project-gallery-main">
            {canShowScreenshot ? (
              <img
                key={activeScreenshot}
                src={activeScreenshot}
                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                onError={() => markImageAsFailed(activeImageIndex)}
              />
            ) : (
              <div className="project-gallery-empty" role="status">
                <span className="project-gallery-empty-icon" aria-hidden="true">
                  ◫
                </span>
                <p>
                  {activeScreenshot
                    ? 'This screenshot could not be loaded.'
                    : 'Screenshots will be added here when available.'}
                </p>
                <small>
                  Add real images under public/screenshots/{projectId} and list
                  their paths in src/projectData.js.
                </small>
              </div>
            )}

            <span className="project-gallery-counter">
              {screenshots.length
                ? `${activeImageIndex + 1} / ${screenshots.length}`
                : '0 / 0'}
            </span>
          </div>

          {screenshots.length > 0 && (
            <div className="project-gallery-thumbnails" aria-label="Choose a screenshot">
              {screenshots.map((screenshot, index) => (
                <button
                  className={`project-gallery-thumbnail ${
                    index === activeImageIndex ? 'selected' : ''
                  }`}
                  key={screenshot}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-pressed={index === activeImageIndex}
                >
                  {failedImages[index] ? (
                    <span>Image unavailable</span>
                  ) : (
                    <img
                      src={screenshot}
                      alt=""
                      onError={() => markImageAsFailed(index)}
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="project-details-grid">
          <div className="project-detail-overview">
            <span className="project-view-eyebrow">PROJECT OVERVIEW</span>
            <h2>About the project</h2>
            <p>{project.overview}</p>
            <div className="project-overview-actions">
              {project.liveDemoUrl ? (
                <a
                  className="project-action-link primary"
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              ) : (
                <button
                  className="project-action-link primary"
                  type="button"
                  disabled
                  title="Add the live demo URL in src/projectData.js"
                >
                  Live Demo
                </button>
              )}

              {!project.hideGithubAction &&
                (project.githubUrl ? (
                  <a
                    className="project-action-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repository ↗
                  </a>
                ) : (
                  <button
                    className="project-action-link"
                    type="button"
                    disabled
                    title="Add the GitHub URL in src/projectData.js"
                  >
                    GitHub Repository
                  </button>
                ))}
            </div>
          </div>

          <div className="project-detail-features">
            <span className="project-view-eyebrow">
              {projectId === 'fixnear' ? 'PLANNED FEATURES' : 'KEY FEATURES'}
            </span>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

        </section>

      </div>
    </main>
  )
}

export default ProjectView
