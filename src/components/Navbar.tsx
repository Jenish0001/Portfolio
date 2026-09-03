import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "start", label: "start" },
    { id: "build", label: "build" },
    { id: "vault", label: "vault" },
    { id: "connect", label: "connect" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#start">JN</a>
        </div>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-menu-icon" onClick={() => setIsOpen(true)}>
          ☰
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-close-icon" onClick={() => setIsOpen(false)}>
          ✕
        </div>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setIsOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}