import Main from "./components/Main";
import PostCard from "./components/PostCard";
import styles from "./components/style.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.heading}>Últimas postagens</h1>
      <Main>
        <PostCard />
      </Main>
    </>
  );
}
