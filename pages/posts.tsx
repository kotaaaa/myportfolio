import type { NextPage } from "next";

import Projects from "../components/projects";

import fs from 'fs';
import matter from 'gray-matter';

export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Home: NextPage<{posts: any[]}> = ({ posts }) => {
  return (
    <>
      <section id="posts">
        <Projects posts={posts}/>
      </section>
    </>
  );
};

export default Home;
