import Image from "next/image";
import avatar from "../../public/avatar.png";
import styles from "./style.module.css";

export default function PostCard() {
  return (
    <>
      <article className={styles.article}>
        <h2 className={styles.article__title}>
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <p className={styles.article__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
          nunc maecenas cras ipsum, lorem massa lacus
        </p>
        <div className={styles.author}>
          <Image
            src={avatar}
            alt="author avatar"
            className={styles.author__avatar}
          />
          <div>
            <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
            <time dateTime="2023-12-17" className={styles.article__date}>
              17 de dezembro de 2023
            </time>
          </div>
        </div>
      </article>
      <article className={styles.article}>
        <h2 className={styles.article__title}>
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <p className={styles.article__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
          nunc maecenas cras ipsum, lorem massa lacus
        </p>
        <div className={styles.author}>
          <Image
            src={avatar}
            alt="author avatar"
            className={styles.author__avatar}
          />
          <div>
            <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
            <time dateTime="2023-12-17">17 de dezembro de 2023</time>
          </div>
        </div>
      </article>
    </>
  );
}
