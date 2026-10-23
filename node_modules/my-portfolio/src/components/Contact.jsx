function Contact() {
  return (
    <section className="contact section-block" id="contact">
      <div className="contact-content">
        <h2>
          Have something
          <br />
          <span>good in mind?</span>
        </h2>

        <p>
          I&apos;m open to opportunities where I can keep learning and
          contribute to meaningful work. I&apos;d love to hear from you.
        </p>

        <div className="contact-socials">
          <a href="mailto:yourmail@example.com">
            Email <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://linkedin.com/in/alfredjosephshaju"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="contact-decoration">AJ.</div>
    </section>
  )
}

export default Contact
