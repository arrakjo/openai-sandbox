import Head from "next/head";
import React from "react";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CalendarPage() {
  return (
    <div>
      <Head>
        <title>Catalyst | Calendar</title>
        <meta name="description" content="A React website written by OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Calendar />

      <Footer />
    </div>
  );
}
