import PostCards from "./components/PostCards";
import ListPosts from "./components/ListPosts";
import styles from "./components/style.module.css";
import { getSortedPostsData } from "./lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main>
      <h1 className={styles.heading}>Últimas postagens</h1>
      <PostCards />
      <section>
        <h2>Blog</h2>
        <ul>
          {posts.map((post) => (
            <ListPosts key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </main>
  );
}
