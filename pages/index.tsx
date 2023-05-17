import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Aboutme from "../components/aboutme";
import PostCard from '../components/postcard';


import { TabMenu } from "../type/project";

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


const Home: NextPage = ({ posts }) => {
  const highLight = "text-blue-700 dark:text-blue-700";
  const [tabFilter, setTabFilter] = useState<String>(TabMenu.All);
  const [postsList, setProjectList] = useState(posts);
  
  const hasProjects = () => {
    return postsList.length !== 0;
  };

  const highLightTab = (menu: String) => {
    if (menu !== tabFilter) return;
    return highLight;
  };
  const filterProjects = (menu: String) => {
    const projects = posts.filter((post) => {
      if (menu === TabMenu.All) return true;
      const category = post.frontMatter.category.toLowerCase();
      return category === menu.toLowerCase();
    });

    setTabFilter(menu);
    setProjectList(projects);
  };
  // console.log(posts)
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
