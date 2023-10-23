import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }:{ post: any}) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="border border-gray-200 shadow-md h-fit dark:bg-gray-600 dark:border-gray-600 rounded-lg p-3 h-1/2 cursor-pointer dark:text-gray-200">
        <a>
          <div className="border rounded-lg">
            <Image
              src={`/${post.frontMatter.image}`}
              width={1200}
              height={700}
              alt={post.frontMatter.title}
            />
          </div>
          <div className="py-4">
            <h1 className="font-bold text-base">{post.frontMatter.title}</h1>
            <span>{post.frontMatter.date}</span>
          </div>
          {post.frontMatter.techStack && (
              <>
                <p className="mb-4 font-bold tracking-tight text-gray-900 dark:text-gray-200">
                  Tech Stack
                </p>
                {post.frontMatter.techStack.map((name: String, idx: number) => {
                  return (
                    <span
                      key={`techStack-${name}-${idx}`}
                      className="text-xs font-medium inline-block py-1 px-1.5 mx-1 rounded-full text-blue-600 bg-blue-100 last:mr-0 mr-1 dark:bg-gray-300 dark:text-gray-700"
                    >
                      {name}
                    </span>
                  );
                })}
              </>
            )}
        </a>
      </div>
    </Link>
  );
};

export default PostCard;
