import "../styles/Home.css";
import jenish from "../assets/jenish.jpg";

export default function Home() {
  return (
    <section id="start" className="hero section">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            Jenish
            <span className="hero-role">Full Stack Developer</span>
          </h1>

          <p className="hero-sub">
            I build the web end-to-end — React apps, WordPress themes, and the
            structured data behind them, from UI to <em>JSON-LD schema</em>.
          </p>

          <div className="hero-meta data-label">
            <strong>role:</strong> developer
            <span className="sep">·</span>
            <strong>stack:</strong> react / typescript / wordpress
          </div>

          <div className="hero-buttons">
            <a href="#build">
              <button className="btn btn-primary">How I build</button>
            </a>
            <a href="#vault">
              <button className="btn btn-ghost">See the work</button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-wrapper">
            <img src={jenish} alt="Jenish" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}