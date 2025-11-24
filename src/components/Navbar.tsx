import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <Link to="/">JN</Link>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>

      {/* FUTURE: MOBILE MENU ICON */}
      <div className="nav-menu-icon">
        {/* We’ll put a hamburger icon here later */}
      </div>
    </nav>
  );
}
