import React, { useState } from "react";

function ContactForm() {
  // These state variables will store the values entered into the form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  // This function will be called when the form is submitted
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Alert the user with the values that were entered into the form
    alert(`Full name: ${fullName}\nEmail: ${email}\nFeedback: ${feedback}`);
  };

  const formStyles = {
    padding: "1em",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    width: "100%",
    gap: "1em",
  };

  const inputStyles = {
    width: "100%",
    maxWidth: "768px",
    display: "flex",
    flexFlow: "column",
    gap: "0.5em",
    input: {
      padding: "0.7em",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      {/* The form inputs are required, which means the form cannot be submitted unless they are filled out */}
      <label style={inputStyles}>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
          style={inputStyles.input}
        />
      </label>

      <label style={inputStyles}>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          style={inputStyles.input}
        />
      </label>

      <label style={inputStyles}>
        Feedback:
        <textarea
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          required
          style={inputStyles.input}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

// Don't forget to export the component so it can be used in other parts of the application!
export default ContactForm;
