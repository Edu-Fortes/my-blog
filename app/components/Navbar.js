import Link from "next/link";
import styles from "./style.module.css";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.navbar__list}>
        <Link href="/">
          <li className={styles.navbar__list_item}>Home</li>
        </Link>
        <li className={styles.navbar__list_item}>
          <Link href="/articles">Artigos</Link>
        </li>
        <li className={styles.navbar__list_item}>Barra de Pesquisa</li>
      </ul>
    </nav>
  );
}
