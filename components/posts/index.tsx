import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import PostCard from '../../components/postcard';
import Pagination from '../../components/pagination';

const Posts: NextPage<{ posts: any[], pages: any[] }> = ({ posts, pages }) => {
  const [postsList, setPostList] = useState(posts);

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
          <div className="my-8">
            <div className="grid grid-cols-2 gap-20 py-8 mx-auto max-w-screen-md content-center">
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
