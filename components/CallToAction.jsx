import React from "react";

function CallToAction() {
  return (
    <section>
      {/* The full-width card goes here */}
      <div>
        <h2>Ready to take the next step?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae metus in ante facilisis rhoncus.
        </p>
      </div>

      {/* The buttons go here */}
      <div>
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
