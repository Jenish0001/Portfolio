import { motion } from "framer-motion";
import "./Home.css"; // We'll create this next
import image from "../assets/image.png";

export default function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <div className="hero">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <span className="small-intro">HELLO, I'M JENISH</span>

        <h1 className="hero-title">
          Web Developer
        </h1>

        <p className="hero-sub">at YourGitHub Portfolio</p>

        <div className="hero-buttons">
          <button className="btn pink">About Me</button>
          <button className="btn blue">Works</button>
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
            </motion.div>
  
  );
}
