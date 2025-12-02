import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* LOGO */}
        <div className="nav-logo">
          <a href="#home">JN</a>
        </div>

        {/* NAV LINKS (Desktop) */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* HAMBURGER ICON (Mobile) */}
        <div className="nav-menu-icon" onClick={() => setIsOpen(true)}>
          ☰
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-close-icon" onClick={() => setIsOpen(false)}>✕</div>

        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#profile" onClick={() => setIsOpen(false)}>Profile</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </>
  );
}
