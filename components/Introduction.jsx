import React from "react";

function Introduction() {
  return (
    <section>
      <h2>Introduction</h2>

      <div>
        {/* The first card goes here */}
        <div>
          <h3>Card 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae metus in ante facilisis rhoncus. Nullam eget mauris libero.
          </p>
        </div>

        {/* The second card goes here */}
        <div>
          <h3>Card 2</h3>
          <p>
            Pellentesque rutrum massa quis eros pharetra, ac aliquet nibh
            ultricies. Aliquam erat volutpat. Fusce ac vestibulum tellus.
          </p>
        </div>

        {/* The third card goes here */}
        <div>
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
