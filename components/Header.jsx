import Link from "next/link";
import React, { useState } from "react";

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
    backgroundColor: "#5b3d45",
    borderBottom: "1px solid black",
  };

  return (
    <header style={headerStyles}>
      {/* The logo is now a link to the home page */}
      <Link href="/">
        <img className="logo" src="/assets/logoipsum-222.svg" alt="Logo" />
      </Link>

      {/* The mobile menu toggle goes here. When it is clicked,
           the handleMobileMenuToggle function is called to flip the state of the mobile menu. */}
      <button onClick={handleMobileMenuToggle}>Menu</button>

      {/* The mobile menu goes here. The inline style is used to show or hide the menu
           based on the state of the mobile menu (controlled by the isMobileMenuOpen variable). */}
      <nav style={navStyles}>
        {/* The mobile menu items go here */}
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
