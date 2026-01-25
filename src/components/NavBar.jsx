import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png'; // Adjust path if needed

export default function NavBar() {
  // State to control mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu when hamburger is clicked
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  // Close menu when a link is clicked (optional, for better UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {/* Logo: replace src with your logo path */}
      <img src={logo} alt="Alim Lab Logo" className="logo" />

      {/* Hamburger button for mobile */}
      <button
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={handleMenuToggle}
      >
        {/* Unicode hamburger icon */}
        &#9776;
      </button>

      {/* Navigation links */}
      <nav className={`main-nav${menuOpen ? ' open' : ''}`}>
        <a href="#projects" onClick={handleLinkClick}>Lab Projects</a>
        <a href="#about" onClick={handleLinkClick}>UX Stories</a>
        <a href="#contact" onClick={handleLinkClick}>About</a>
      </nav>
    </header>
  );
}