import "../styles/Home.css"; // We'll create this next
import image from "../assets/image.png";


export default function Home() {

  return (
    <div className="home-container">

      <div className="hero">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <span className="small-intro">HELLO, I'M JENISH</span>

          <h1 className="hero-title">
            Full Stack Developer
          </h1>

          <p className="hero-sub">Build One Repo at a Time.</p>

          <div className="hero-buttons">
            <a href="#profile">
              <button className="btn pink">
                About Me
              </button>
            </a>
            <a href="#projects">
              <button className="btn blue">
                Works
              </button>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          {/* Replace with your picture */}
          <div className="profile-wrapper">
            <img
              src={image}
              alt="profile"
              className="profile-img"
            />
          </div>



          {/* Decorative shapes */}
          <div className="shape shape-red"></div>
          <div className="shape shape-blue"></div>
        </div>
      </div>

    </div>

  );
}
