import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catalyst</title>
        <meta name="description" content="A React website written by OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
