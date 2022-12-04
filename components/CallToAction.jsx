import React from "react";

const styles = {
  padding: "2rem 1rem",
  backgroundColor: "rgba(255, 155, 255, 1)",
  upper: {
    color: "black",
  },
  lower: {
    display: "flex",
    gap: 10,
  },
};

function CallToAction() {
  return (
    <section style={styles}>
      {/* The full-width card goes here */}
      <div style={styles.upper}>
        <h2>Ready to take the next step?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae metus in ante facilisis rhoncus.
        </p>
      </div>

      {/* The buttons go here */}
      <div style={styles.lower}>
        <button>Learn More</button>
        {/* The second button links to the contact page */}
        <button>
          <a href="/contact">Contact Us</a>
        </button>
      </div>
    </section>
  );
}

// Don't forget to export the component so it can be used in other parts of the application!
export default CallToAction;
