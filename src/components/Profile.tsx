import "../styles/Profile.css";
import jenish from "../assets/jenish.jpg";

const skills = [
  { name: "React", accent: "teal" as const },
  { name: "JavaScript", accent: "amber" as const },
  { name: "HTML & CSS", accent: "coral" as const },
  { name: "Tailwind", accent: "teal" as const },
  { name: "Framer Motion", accent: "violet" as const },
  { name: "Git & GitHub", accent: "coral" as const },
];

const tools = ["VS Code", "GitHub", "Chrome DevTools", "NPM"];

export default function Profile() {
  return (
    <section id="build" className="profile section">
      <div className="container profile-inner">
        {/* ---- Header ---- */}
        <p className="section-label">build</p>
        <h2 className="section-title">
          How I build<em>.</em>
        </h2>

        <div className="profile-top">
          {/* ---- Working method ---- */}
          <div className="profile-about">
            <p className="about-text">
              I build the web end-to-end: React front-ends, WordPress themes
              with proper file architecture, and the structured-data layer
              underneath.
            </p>

            <div className="about-text">
              Right now I'm deep in the <strong>Nyayashree</strong> project —
              a legal-services WordPress theme with JSON-LD structured-data
              markup baked in for SEO. That's the thread:{" "}
              <em>code that structures information</em>, whether it's a
              component tree or schema that tells Google what a law firm
              actually does.
            </div>
          </div>

          {/* ---- Photo ---- */}
          <div className="profile-photo-wrap">
            <img src={jenish} alt="Jenish" className="profile-photo" />
          </div>
        </div>

        {/* ---- Quick facts (data labels) ---- */}
        <div className="facts-row">
          <span className="data-label">
            <strong>location:</strong> Manamaiju, Kathmandu
          </span>
          <span className="sep">·</span>
          <span className="data-label">
            <strong>focus:</strong> full-stack + structured data
          </span>
          <span className="sep">·</span>
          <span className="data-label">
            <strong>currently learning:</strong> ML / data science
          </span>
        </div>

        {/* ---- Differentiators: feature + secondary, not equal tiles ---- */}
        <div className="build-feature">
          <div className="build-feature-main">
            <span className="diff-tag diff-tag-coral">structured data · current build</span>
            <h3>JSON-LD Schema — Nyayashree</h3>
            <p className="build-feature-desc">
              Building structured-data markup for the Nyayashree legal-services
              WordPress theme — schema.org types baked into the theme's
              templates, so search engines can tell exactly what a law firm
              does. This is the clearest example of my thread:{" "}
              <em>code that structures information</em>.
            </p>
            <span className="data-label build-feature-meta">
              <strong>stack:</strong> wordpress · json-ld · schema.org
              <span className="sep">·</span>
              <strong>status:</strong> active
            </span>
          </div>

          <div className="build-feature-side">
            <div className="diff-item">
              <span className="diff-tag diff-tag-teal">learning</span>
              <h4>ML / Data Science</h4>
              <p>
                Teaching machines to find structure in data — the data-science
                echo of what schema does for search.
              </p>
            </div>
            <div className="diff-item">
              <span className="diff-tag diff-tag-violet">policy</span>
              <h4>APNIC Policy Course</h4>
              <p>
                Internet governance and policy frameworks — structure at the
                protocol level, not just code.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Skills ---- */}
        <div className="skills-section">
          <h3 className="skills-heading">Skills</h3>
          <div className="skills-grid">
            {skills.map((s) => (
              <span className={`skill-chip skill-${s.accent}`} key={s.name}>
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* ---- Tools ---- */}
        <div className="skills-section">
          <h3 className="skills-heading">Tools</h3>
          <div className="skills-grid">
            {tools.map((t) => (
              <span className="skill-chip skill-mono" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ---- Status ---- */}
        <div className="status-box">
          <span className="data-label">
            <strong>status:</strong> active
          </span>
          <p>
            Building the Nyayashree theme, experimenting with ML models,
            and learning advanced React patterns — one repo at a time.
          </p>
        </div>

        {/* ---- CTA ---- */}
        <a href="#vault">
          <button className="btn btn-primary">Visit the Vault →</button>
        </a>
      </div>
    </section>
  );
}