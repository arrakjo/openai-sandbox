import Head from "next/head";
import React from "react";
import MyFlow from "../components/Flow";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Flow() {
  return (
    <div>
      <Head>
        <title>Catalyst | React Flow</title>
        <meta name="description" content="A React website written by OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MyFlow />

      <Footer />
    </div>
  );
}

export default Flow;
