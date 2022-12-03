import React, { useState } from "react";
import Logo from "../public/vercel.svg";

export default function Header() {
  // Use the useState hook to keep track of the state of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // This function is called when the mobile menu toggle is clicked,
  // and it flips the state of the mobile menu between open and closed
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // This styles object contains the CSS styles for the header element
  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    padding: "1em",
    position: "relative",
    zIndex: 10,
  };

  // This styles object contains the CSS styles for the nav element
  const navStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    display: isMobileMenuOpen ? "block" : "none",
    backgroundColor: "#010101",
  };

  return (
    <header style={headerStyles}>
      {/* The logo goes here */}
      <img className="logo" src="/vercel.svg" alt="Logo" />

      {/* The mobile menu toggle goes here. When it is clicked,
           the handleMobileMenuToggle function is called to flip the state of the mobile menu. */}
      <button onClick={handleMobileMenuToggle}>Menu</button>

      {/* The mobile menu goes here. The inline style is used to show or hide the menu
           based on the state of the mobile menu (controlled by the isMobileMenuOpen variable). */}
      <nav style={navStyles}>
        {/* The mobile menu items go here */}
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
