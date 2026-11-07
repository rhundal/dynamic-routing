import Post from "../components/post";
import posts from "../lib/posts";
import type { PostType } from "../types/posts.types";

export default function PostDetails() {
  let post1: PostType | undefined = posts.at(0);

  return (
    <div>
      {" "}
      This is my Post Details Page which will call Posts Component, construct it
      and display individual posts.
      <div>{post1 && <Post {...post1} />}</div>
    </div>
  );
}
