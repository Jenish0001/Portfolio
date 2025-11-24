import { motion } from "framer-motion";
import "./Profile.css";

export default function Profile() {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ===== ABOUT SECTION ===== */}
      <section className="profile-about">
        <div className="about-left">
          <h2 className="profile-heading">About Me</h2>

          <p className="profile-text">
            I’m a frontend developer who loves clean UI, smooth animations, and
            building things that feel good to use.
            I like turning ideas into visuals and visuals into working interfaces.
          </p>

          <ul className="quick-facts">
            <li><strong>Location:</strong> Kathmandu, Nepal</li>
            <li><strong>Focus:</strong> React, UI/UX, Frontend</li>
            <li><strong>Currently Learning:</strong> Animations + Advanced React</li>
          </ul>
        </div>

        <div className="about-right">
          <div className="profile-photo-wrapper">
            <img src="/my-photo.png" alt="profile" className="profile-photo" />
          </div>
        </div>
      </section>

      {/* ===== SKILLS GRID ===== */}
      <section className="profile-skills">
        <h2 className="profile-heading">Skills</h2>

        <div className="skills-grid">
          {[
            "React",
            "JavaScript",
            "HTML & CSS",
            "Tailwind",
            "Framer Motion",
            "Git & GitHub",
          ].map((skill, i) => (
            <div className="skill-card" key={i}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TOOLS ===== */}
      <section className="profile-tools">
        <h2 className="profile-heading">Tools I Use</h2>

        <div className="tools-row">
          {["VS Code", "GitHub", "Chrome DevTools", "Figma", "NPM"].map(
            (tool, i) => (
              <div className="tool-box" key={i}>
                {tool}
              </div>
            )
          )}
        </div>
      </section>

      {/* ===== CURRENT STATUS ===== */}
      <section className="profile-status">
        <div className="status-box">
          <h3>What I'm Working On</h3>
          <p>
            Building my portfolio, learning advanced React patterns, and
            leveling up my animation game.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="profile-cta">
        <button className="profile-btn">View My Projects</button>
      </section>
    </motion.div>
  );
}
