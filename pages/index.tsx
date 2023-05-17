import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Aboutme from "../components/aboutme";
import Projects from "../components/projects";
import Contact from "../components/contact";
import PostCard from '../components/postcard';


import { TabMenu } from "../type/project";

import fs from 'fs';
import matter from 'gray-matter';
// import Link from 'next/link';

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
  
  console.log("ここで")
  console.log("ここで", posts)

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

  console.log("postsList??", postsList)
  
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
    console.log("projects", projects)
    setProjectList(projects);
  };
  console.log(posts)
  return (
    <>
      <Head>
        <title>Kota Portfolio</title>
      </Head>

      <section id="aboutme">
        <Aboutme />
      </section>
      <div className="py-8 mx-auto max-w-screen-md content-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-300">
              Projects
        </h2>
        <ul
          className="flex flex-row justify-center list-none border-b-0 pl-0 mb-4"
          id="tabs-tabJustify"
          role="tablist"
        >
          {Object.keys(TabMenu).map((menu, idx) => {
            return (
              <li
                className="nav-item flex-grow text-center "
                role="presentation"
                key={`${idx}-${menu} project tab`}
              >
                <button
                  className={`nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2
                  text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-blue-700 ${highLightTab(
                    menu
                  )}`}
                  id={menu}
                  onClick={() => filterProjects(menu)}
                >
                  {menu}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="my-8">
          <div className="grid grid-cols-2 gap-20 py-8 mx-auto max-w-screen-md content-center">
            {!hasProjects() && (
              <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                Comming soon...
              </p>
            )}
            {postsList.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
