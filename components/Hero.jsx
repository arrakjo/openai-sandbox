import React from "react";

// This styles object contains the CSS styles for the div element
const divStyles = {
  position: "relative",
  height: "300px",
  backgroundImage: "url(/assets/hero.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "1em",
};

// This styles object contains the CSS styles for the text elements
const textStyles = {};

export default function Hero() {
  return (
    // The inline style here applies the styles from the divStyles object to the div element
    <div style={divStyles}>
      {/* The inline styles here apply the styles from the textStyles object to the h1 and p elements */}
      <h1 style={textStyles}>Welcome to Our Website!</h1>
      <p style={textStyles}>
        We're excited to share our amazing products with you.
      </p>

      <button>Learn More</button>
    </div>
  );
}
