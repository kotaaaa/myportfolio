import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import PostCard from '../../components/postcard';
import Pagination from '../../components/pagination';

const Posts: NextPage<{ posts: any[], pages: any[], allTeckStacks: string[] }> = ({ posts, pages, allTeckStacks }) => {
  const highLight = "font-semibold bg-blue-200";
  const defalutPosts = posts
  const [tabFilter, setTabFilter] = useState<string[]>([]);
  const [postsList, setPostList] = useState(posts);

  const highLightTab = (name: string) => {
    if (!tabFilter.includes(name)) return;
    return highLight;
  };

  const filterProjects = (name: string) => {
    
    let newTabFilter: string[];
    // If the selected tech stack is already in the array, remove it.
    if (tabFilter.includes(name)) {
      newTabFilter = tabFilter.filter(item => item !== name);
    } else {
      // If not, add it to the array.
      newTabFilter = [...tabFilter, name];
    }    
    setTabFilter(newTabFilter);
    // initialize posts if no tag is selected
    if (newTabFilter.length == 0) {
      setPostList(defalutPosts)
      return;      
    }
    const posts = defalutPosts.filter((data) => { 
      // AND condition for teck stack
      return newTabFilter.every(item => data.frontMatter.techStack.includes(item));
    });
    setPostList(posts);
  };

  return (
    <>
      <Head>
        <title>Posts - Kota Portfolio</title>
      </Head>
      <section className="bg-white dark:bg-gray-900 h-fit py-8">
        <div className="py-8 mx-auto max-w-screen-md content-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-300">
                Posts
          </h2>
          <div className="content-center gap-2 py-4 mx-auto max-w-screen-md content-center">
            {allTeckStacks.map((name: string, idx: number) => {
              return (
                <button
                  key={`techStack-${name}-${idx}`}
                  className={`text-xs inline-block py-1 px-2 my-1 mx-1.5 rounded-full text-blue-600 bg-blue-50 last:mr-0 mr-1 ${highLightTab(
                        name
                  )}`} 
                  id={name}
                  onClick={() => filterProjects(name)}
                >
                 + {name}
                </button>
              );
            })}
          </div>
          <div className="my-2">
            <div className="grid grid-cols-2 gap-20 py-4 mx-auto max-w-screen-md content-center">
              {postsList.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination pages={pages} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
