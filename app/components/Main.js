import styles from "../components/style.module.css";

export default function Main({ children }) {
  return (
    <main>
      <section className={styles.posts}>{children}</section>
    </main>
  );
}
