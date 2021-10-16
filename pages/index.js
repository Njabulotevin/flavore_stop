import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Checkout from "../components/checkout";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Menu from "../components/Menu";
import { MenuContext } from "../components/MenuContextProvider";
import styles from "../styles/Home.module.css";

export default function Home({ menu }) {
  const context = useContext(MenuContext);
  const { activity } = context;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="flavored stop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        {activity === "menu" ? <Menu data={menu} /> : <Checkout />}
        <ContactForm />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/menu");
  const menu = await res.json();

  return {
    props: { menu }, // will be passed to the page component as props
  };
}
