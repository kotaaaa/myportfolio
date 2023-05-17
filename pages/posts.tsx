import type { NextPage } from "next";
import Head from "next/head";

import Projects from "../components/projects";

const Home: NextPage = () => {
  return (
    <>
      <section id="posts">
        <Projects />
      </section>
    </>
  );
};

export default Home;
