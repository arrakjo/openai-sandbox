import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Catalyst</title>
        <meta name="description" content="A React website written by OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Introduction />
      <CallToAction />
      <Footer />
    </div>
  );
}
