import React from "react";

const styles = {
  padding: "2rem 1rem",
  display: "flex",
  justifyContent: "space-between",
};

function Footer() {
  return (
    <footer style={styles}>
      {/* The logo goes here */}
      <img className="logo" src="/assets/logoipsum-222.svg" alt="Logo" />

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
      <p>Created using responses from OpenAI ChatGPT</p>
    </footer>
  );
}

// Don't forget to export the component so it can be used in other parts of the application!
export default Footer;
