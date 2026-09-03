import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xrbwdzqp");

  return (
    <section id="connect" className="contact section">
      <div className="container contact-inner">
        {/* ---- Header ---- */}
        <p className="section-label">connect</p>
        <h2 className="section-title">
          Let's talk<em>.</em>
        </h2>
        <p className="section-intro">
          Open to internships, collaborations, and anything worth building.
        </p>

        {/* ---- Form ---- */}
        {state.succeeded ? (
          <div className="contact-success">
            <span className="contact-success-icon">✓</span>
            <p>Message sent — I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="data-label" htmlFor="name">
                <strong>name</strong>
              </label>
              <input id="name" type="text" name="name" required />
            </div>

            <div className="form-group">
              <label className="data-label" htmlFor="email">
                <strong>email</strong>
              </label>
              <input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <label className="data-label" htmlFor="message">
                <strong>message</strong>
              </label>
              <textarea id="message" name="message" rows={5} required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        )}

        {/* ---- Socials ---- */}
        <div className="connect-socials">
          <a
            href="https://github.com/jenish0001"
            target="_blank"
            rel="noopener noreferrer"
            className="social-stamp"
          >
            github/jenish0001
          </a>
          <span className="social-sep">·</span>
          <a
            href="https://www.linkedin.com/in/jenish-niroula-208866398/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-stamp"
          >
            linkedin/jenish
          </a>
          <span className="social-sep">·</span>
          <a
            href="https://www.instagram.com/jenish_niroula/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-stamp"
          >
            instagram/jenish
          </a>
        </div>

        {/* ---- Resume ---- */}
        <div className="connect-resume">
          <a href="/resume.pdf" download className="btn btn-ghost resume-link">
            Download resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}