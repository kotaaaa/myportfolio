import fs from "fs";
import matter from "gray-matter";
import Pagination from "../../components/pagination";
import PostCard from "../../components/postcard";
import Head from "next/head";

const PAGE_SIZE = 8;

const range = (start: number, end: number, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

export async function getStaticProps({ params }: {params: any}) {
  const current_page = params.page;
  const files = fs.readdirSync("posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(fileContent);

    return {
      frontMatter: data,
      slug,
    };
  });

  const pages = range(1, Math.ceil(posts.length / PAGE_SIZE));

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1
  );

  const slicedPosts = sortedPosts.slice(
    PAGE_SIZE * (current_page - 1),
    PAGE_SIZE * current_page
  );

  return {
    props: {
      posts: slicedPosts,
      pages,
      current_page,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const count = files.length;

  const paths = range(1, Math.ceil(count / PAGE_SIZE)).map((i) => ({
    params: { page: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Page = ({ posts, pages, current_page }: { posts:any[], pages:any[], current_page:number }) => {
  return (
    <>
      <Head>
        <title>Posts - Kota Portfolio</title>
      </Head>
      <section className="bg-white dark:bg-gray-900 h-fit py-8">
        <div className="py-8 mx-auto max-w-screen-md content-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-400">
                Posts
          </h2>
          <div className="my-8">
            <div className="grid grid-cols-2 gap-20 py-8 mx-auto max-w-screen-md content-center">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <Pagination pages={pages} current_page={current_page} />
          </div>
        </div>
      </section>
    </>


  );
};

export default Page;
