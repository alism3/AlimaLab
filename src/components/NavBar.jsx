import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import mobileLogo from "../assets/MobileLogo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a href="#" onClick={scrollToTop} className="logo-link">
        <img src={mobileLogo} alt="Alima Lab logo" className="logo mobile-logo" />
        <img src={logo} alt="Alima Lab logo" className="logo desktop-logo" />
      </a>

      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;