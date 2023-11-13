import type { NextPage } from "next";
import Head from "next/head";

import Aboutme from "../components/aboutme";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kota Portfolio</title>
      </Head>

      <section id="aboutme">
        <Aboutme />
      </section>
    </>
  );
};

export default Home;
