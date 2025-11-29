import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/">JN</Link>
        </div>

        {/* NAV LINKS (Desktop) */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* HAMBURGER ICON (Mobile) */}
        <div className="nav-menu-icon" onClick={() => setIsOpen(true)}>
          {/* You can throw a burger icon here later */}
          ☰
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-close-icon" onClick={() => setIsOpen(false)}>✕</div>

        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/Profile" onClick={() => setIsOpen(false)}>Profile</Link>
        <Link to="/Projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </>
  );
}
