import type { NextPage } from "next";
import Head from "next/head";
import fs from 'fs';
import matter from 'gray-matter';

import Aboutme from "../components/aboutme";
import Posts from "../components/posts";

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

  // Sort by Date Desc
  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );
  // Collect all tech stack from {post}.md
  const techStackToSet = (posts: any[]): Set<string> => {
    const techStacks = posts.flatMap(post => post.frontMatter.techStack);
    return new Set(techStacks);
  }
  const techStackSet = techStackToSet(posts);
  const allTeckStacks = Array.from(techStackSet);

  return {
    props: {
      sortedPosts: sortedPosts,
      allTeckStacks,
    },
  };
};

const Home: NextPage<{sortedPosts: any[], allTeckStacks: string[]}> = ({ sortedPosts, allTeckStacks }) => {
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
