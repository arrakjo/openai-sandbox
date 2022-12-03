import Head from "next/head";
import React from "react";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CalculatorPage() {
  return (
    <div>
      <Head>
        <title>Catalyst | Calculator</title>
        <meta name="description" content="A React website written by OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Calculator />

      <Footer />
    </div>
  );
}
