import type { NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'

import Aboutme from "../components/aboutme";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
