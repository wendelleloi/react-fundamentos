import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./app.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/wendelleloi.png",
      name: "Wendell Eloi",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "primeiro parágrafo" },
      { type: "paragraph", content: "segundo parágrafo" },
      { type: "paragraph", content: "terceiro parágrafo" },
      { type: "link", content: "site.com/exemplo" },
    ],
    publishedAt: new Date("2023-04-11 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/wendelleloi.png",
      name: "Wendell Silva",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "primeiro parágrafo" },
      { type: "paragraph", content: "segundo parágrafo" },
      { type: "paragraph", content: "terceiro parágrafo" },
      { type: "link", content: "site.com/exemplo" },
    ],
    publishedAt: new Date("2023-04-11 13:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content as Content[]}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
