import type { NextPage } from "next";
import Head from "next/head";

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
  
  // console.log("ここで2")
  // console.log("ここで2", posts)

  return {
    props: {
      posts,
    },
  };
};

const Home: NextPage<{posts: any[]}> = ({ posts }) => {
  // console.log("ここは2？", posts); // ここで出力してみる
  return (
    <>
      <section id="posts">
        <Projects posts={posts}/>
      </section>
    </>
  );
};

export default Home;
