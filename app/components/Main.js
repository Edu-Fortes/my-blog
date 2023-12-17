import styles from "../components/style.module.css";

export default function Main({ children }) {
  return (
    <main>
      <h1 className={styles.heading}>Últimas postagens</h1>
      <section>{children}</section>
    </main>
  );
}
