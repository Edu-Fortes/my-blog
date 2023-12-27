import PostCards from "./components/PostCards";
import ListPosts from "./components/ListPosts";
import styles from "./components/style.module.css";
import { getSortedPostsData } from "./lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main>
      <h1 className={styles.heading}>Últimas postagens</h1>
      <section className={styles.posts}>
        <PostCards>
          {posts.slice(0, 3).map((post) => (
            <ListPosts key={post.id} post={post} />
          ))}
        </PostCards>
        <PostCards>
          {posts.slice(3, 5).map((post) => (
            <ListPosts key={post.id} post={post} />
          ))}
        </PostCards>
        <PostCards>
          {posts.slice(5, 8).map((post) => (
            <ListPosts key={post.id} post={post} />
          ))}
        </PostCards>
      </section>
    </main>
  );
}
