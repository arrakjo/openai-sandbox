import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  // State variable to track whether the login details are being processed
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Set the processing state to true
    setProcessing(true);

    // Wait for 2 seconds before continuing (to simulate processing time)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Do some validation or authentication here

    // Redirect to the homepage
    router.push("/");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        {processing ? (
          // If the login details are being processed, show a spinning loader
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          // Otherwise, show the submit button
          <button type="submit">Login</button>
        )}

        {/* CSS styles for the loader */}
        <style jsx>{`
          .loader {
            display: inline-block;
            position: relative;
            width: 64px;
            height: 64px;
          }

          .loader div {
            animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            transform-origin: 32px 32px;
          }

          .loader div:after {
            content: " ";
            display: block;
            position: absolute;
            top: 3px;
            left: 29px;
            width: 5px;
            height: 14px;
            border-radius: 20%;
            background: #333;
          }

          .loader div:nth-child(1) {
            animation-delay: -0.45s;
          }

          .loader div:nth-child(2) {
            animation-delay: -0.3s;
          }

          .loader div:nth-child(3) {
            animation-delay: -0.15s;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </form>
    </div>
  );
};

export default Login;
