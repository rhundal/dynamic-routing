import Post from "../components/Post";
import posts from "../lib/posts";
import type { PostType } from "../types/posts.types";

import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { slug } = useParams<{ slug: string }>();

  let selectedPost: PostType | undefined = posts.find(
    (post) => post.slug === slug,
  );

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <main className="flex justify-center border-1 border-gray-200 rounded-xl w-[1000px] p-10">
          {selectedPost && <Post {...selectedPost} />}
        </main>
      </div>
    </>
  );
}
