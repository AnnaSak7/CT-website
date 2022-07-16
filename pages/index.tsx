import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/masthead";
import About from "../components/about";
import Appearance from "../components/appearance";
import Works from "../components/works";
import Telop from "../components/telop";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <About />
      <Appearance />
      <Works />
      <Telop />
      <About />
    </div>
  );
};

export default Home;
