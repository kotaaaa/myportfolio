import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { TabMenu } from "../../type/project";
import PostCard from '../../components/postcard';

const Projects: NextPage = ({ posts }) => {
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

  return (
    <>
      <Head>
        <title>Projects - Kota Portfolio</title>
      </Head>
      <section className="bg-white dark:bg-gray-900 h-fit py-8">
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
      </section>
    </>
  );
};

export default Projects;
