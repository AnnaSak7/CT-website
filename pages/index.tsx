import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Masthead from "../components/masthead";
import Bio from "../components/bio";
import Appearance from "../components/appearance";
import Works from "../components/works";
import Telop from "../components/telop";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chika & Tatsuya</title>
        <meta name="description" content="Jazz duo Chika & Tatsuya's website" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
      </Head>

      <Masthead />
      <Appearance />
      <Bio />
      <Works />
      <Telop />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
