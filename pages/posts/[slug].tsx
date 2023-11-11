import fs from 'fs';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkPrism from 'remark-prism';
import gfm from 'remark-gfm';
import rehypeStringify from 'rehype-stringify';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

import { createElement } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';

const toReactNode = (content: any) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
    })
    .processSync(content).result;
};

export async function getStaticProps({ params }: { params: any}) {
  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);
  const result = await unified()
    .use(remarkParse)
    .use(gfm)
    .use(remarkPrism, {
      plugins: ['line-numbers'],
    })
    .use(remarkToc)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return {
    props: { frontMatter: data, content: result.toString(), slug: params.slug },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Post = ({ frontMatter, content, slug }: { frontMatter: any, content: any, slug: any }) => {
  return (
    <div className="prose prose-lg py-20 mx-auto max-w-screen-md content-center text-base dark:text-gray-400">
      <h1 className="mt-12 dark:text-gray-400">{frontMatter.title}</h1>
      <span>{frontMatter.date}</span>
      {toReactNode(content)}
    </div>
  );
};

export default Post;
