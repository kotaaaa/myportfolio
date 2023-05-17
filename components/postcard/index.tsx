import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="border border-gray-200 shadow-md h-fit dark:bg-gray-700 dark:border-gray-600 rounded-lg p-3 h-1/2">
        <a>
          <div className="border rounded-lg">
            <Image
              src={`/${post.frontMatter.image}`}
              width={1200}
              height={700}
              alt={post.frontMatter.title}
            />
          </div>
          <div className="px-0 py-4">
            <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
            <span>{post.frontMatter.date}</span>
          </div>
          <div className="text-xs font-semibold inline-block py-1 px-2 mr-2 mb-3 rounded text-blue-600 bg-blue-200 last:mr-0">
                  {post.frontMatter.category}
          </div>
          {post.frontMatter.techStack && (
              <>
                <p className="mb-4 font-bold tracking-tight text-gray-900 dark:text-gray-300">
                  Tech Stack
                </p>
                {post.frontMatter.techStack.map((name: String, idx: number) => {
                  return (
                    <span
                      key={`techStack-${name}-${idx}`}
                      className="text-xs font-semibold inline-block py-1 px-2 mx-1 rounded text-blue-600 bg-blue-200 last:mr-0 mr-1"
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
