import Head from "next/head";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login to Catalyst</title>
        <meta name="description" content="A React website written by OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  );
};

export default LoginPage;
