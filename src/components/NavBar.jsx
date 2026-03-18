import { useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.png";
import mobileLogo from "../assets/MobileLogo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section after navigating to HomePage
  const handleSectionNav = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="site-header">
        <button onClick={scrollToTop} className="logo-link" style={{ background: "none", border: "none", padding: 0 }}>
          <img src={mobileLogo} alt="Alima Lab logo" className="logo mobile-logo" />
          <img src={logo} alt="Alima Lab logo" className="logo desktop-logo" />
        </button>

        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <button className="nav-btn" onClick={() => handleSectionNav("about")}>About</button>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <button className="nav-btn" onClick={() => handleSectionNav("skills")}>Skills</button>
          <button className="nav-btn" onClick={() => handleSectionNav("projects")}>Projects</button>
          <button className="nav-btn" onClick={() => handleSectionNav("contact")}>Contact</button>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;