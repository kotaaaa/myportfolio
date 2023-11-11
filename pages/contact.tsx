import type { NextPage } from "next";

import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <>
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </>
  );
};

export default Home;
