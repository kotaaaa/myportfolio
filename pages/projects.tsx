import type { NextPage } from "next";

import Projects from "../components/projects";

const Home: NextPage = () => {
  return (
    <>
      <section id="projects" className="py-10">
        <Projects />
      </section>
    </>
  );
};

export default Home;
