import type { NextPage } from "next";

import Aboutme from "../components/aboutme";

const Home: NextPage = () => {
  return (
    <>
      <section id="aboutme">
        <Aboutme />
      </section>
    </>
  );
};

export default Home;
