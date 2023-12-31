import styles from "./style.module.css";

export default function PostCards({ children }) {
  return <ul className={styles.posts__columns}>{children}</ul>;
}
