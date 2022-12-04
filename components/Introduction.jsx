import React from "react";

const styles = {
  padding: "2rem 1rem",
  cards: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  card: {
    flex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    backgroundColor: "rgba(230, 255, 255, 1)",
    minWidth: "280px",
    color: "black",
  },
};

function Introduction() {
  return (
    <section style={styles}>
      <h2>Introduction</h2>

      <div style={styles.cards}>
        {/* The first card goes here */}
        <div style={styles.card}>
          <h3>Card 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae metus in ante facilisis rhoncus. Nullam eget mauris libero.
          </p>
        </div>

        {/* The second card goes here */}
        <div style={styles.card}>
          <h3>Card 2</h3>
          <p>
            Pellentesque rutrum massa quis eros pharetra, ac aliquet nibh
            ultricies. Aliquam erat volutpat. Fusce ac vestibulum tellus.
          </p>
        </div>

        {/* The third card goes here */}
        <div style={styles.card}>
          <h3>Card 3</h3>
          <p>
            Suspendisse potenti. Donec convallis sodales mollis. Suspendisse
            euismod orci eget orci varius porta. Maecenas vel ante vel arcu
            malesuada tempus.
          </p>
        </div>
      </div>
    </section>
  );
}

// Don't forget to export the component so it can be used in other parts of the application!
export default Introduction;
