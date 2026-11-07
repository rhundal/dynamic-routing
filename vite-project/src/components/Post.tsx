import { type PostType } from "../types/posts.types";

export default function Post(post: PostType) {
  return (
    <div>
      <article className="border rounded-lg p-5 shadow-sm">
        <header>
          <h2 className="text-xl font-semibold">{post.title}</h2>
        </header>

        <p className="mt-3 text-gray-600">{post.content}</p>

        <footer className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-blue-600">
            {post.levelOfUnderstanding}
          </span>
        </footer>
      </article>
    </div>
  );
}
