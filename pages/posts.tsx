import type { NextPage } from "next";

import fs from 'fs';
import matter from 'gray-matter';

import Posts from "../components/posts";

const PAGE_SIZE = 8;

const range = (start: number, end: number, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);


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

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  return {
    props: {
      sortedPosts: sortedPosts.slice(0, PAGE_SIZE),
      pages,
    },
  };
};

const Home: NextPage<{sortedPosts: any[], pages: any[]}> = ({ sortedPosts, pages }) => {
  return (
    <>
      <section id="posts">
        <Posts posts={sortedPosts} pages={pages}/>
      </section>
    </>
  );
};

export default Home;
