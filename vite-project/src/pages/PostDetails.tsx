import Post from "../components/post";
import posts from "../lib/posts";
import type { PostType } from "../types/posts.types";

import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { slug } = useParams<{ slug: string }>();

  let selectedPost: PostType | undefined = posts.find(
    (post) => post.slug === slug,
  );

  // let post1: PostType | undefined = posts.at(0);

  return (
    <div>
      {" "}
      This is my Post Details Page which will call Posts Component which
      constructs individual posts and display selected individual posts here.
      <div>{selectedPost && <Post {...selectedPost} />}</div>
    </div>
  );
}
