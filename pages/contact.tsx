import type { NextPage } from "next";

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
