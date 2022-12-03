import React from "react";

function Footer() {
  return (
    <footer>
      {/* The logo goes here */}
      <img className="logo" src="/vercel.svg" alt="Logo" />

      {/* The policy links go here */}
      <ul>
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-use">Terms of Use</a>
        </li>
      </ul>

      {/* The paragraph element goes here */}
      <p>Created by OpenAI</p>
    </footer>
  );
}

// Don't forget to export the component so it can be used in other parts of the application!
export default Footer;
