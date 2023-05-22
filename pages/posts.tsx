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

  // Sort by Date Desc
  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );
  // Calculate total page
  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));
  // Collect all tech stack from {post}.md
  const techStackToSet = (posts: any[]): Set<string> => {
    const techStacks = posts.flatMap(post => post.frontMatter.techStack);
    return new Set(techStacks);
  }
  const techStackSet = techStackToSet(posts);
  const allTeckStacks = Array.from(techStackSet);

  return {
    props: {
      sortedPosts: sortedPosts.slice(0, PAGE_SIZE),
      pages,
      allTeckStacks,
    },
  };
};

const Home: NextPage<{sortedPosts: any[], pages: any[], allTeckStacks: string[]}> = ({ sortedPosts, pages, allTeckStacks }) => {
  return (
    <>
      <section id="posts">
        <Posts posts={sortedPosts} pages={pages} allTeckStacks={allTeckStacks}/>
      </section>
    </>
  );
};

export default Home;
