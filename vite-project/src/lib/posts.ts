import { type PostType } from "../types/posts.types";

const posts: PostType[] = [
  {
    id: 1,
    title: "Learning React",
    slug: "learning-react",
    content:
      "React is a JavaScript library used to build interactive user interfaces and SPAs.",
    levelOfUnderstanding: "Currently Practicing",
  },
  {
    id: 2,
    title: "React Router",
    slug: "react-router",
    content:
      "React Router is a library used to handle navigation and routing in React applications.",
    levelOfUnderstanding: "Get It",
  },
  {
    id: 3,
    title: "Context API",
    slug: "context-api",
    content:
      "Context API allows you to share data across multiple components without passing props manually.",
    levelOfUnderstanding: "Currently Practicing",
  },
  {
    id: 4,
    title: "Custom Hooks",
    slug: "custom-hooks",
    content:
      "Custom hooks allow you to reuse stateful logic across different React components.",
    levelOfUnderstanding: "Dont Get IT",
  },
];

export default posts;
