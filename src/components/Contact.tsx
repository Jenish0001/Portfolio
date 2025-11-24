import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="contact-title">Let's Connect</h1>
      <p className="contact-sub">Open to internships, collabs, and cool ideas.</p>

      {/* ===== CONTACT FORM ===== */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />

        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>

      {/* ===== SOCIALS ===== */}
      <div className="socials">
        <a href="https://github.com/Ayanokoji0001" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/jenish-niroula-208866398/" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/jenish_niroula/" target="_blank">Instagram</a>
      </div>

      {/* ===== RESUME BUTTON ===== */}
      <div className="resume-section">
        <a href="/resume.pdf" download className="resume-btn">
          Download Resume
        </a>
      </div>
    </motion.div>
  );
}
