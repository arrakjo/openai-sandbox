import Head from "next/head";
import React from "react";
import Admin from "../components/Admin";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AdminPage() {
  return (
    <div>
      <Head>
        <title>Catalyst | Admin</title>
        <meta name="description" content="A React website written by OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Admin />

      <Footer />
    </div>
  );
}
