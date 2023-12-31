import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import avatar from "/public/avatar.png";
import formatDate from "../lib/formatDate";

export default function ListPosts({ post }) {
  const { id, description, title, date, author, cover } = post;
  const formattedDate = formatDate(date);
  return (
    <li>
      <Link href={`posts/${id}`} className={styles.link}>
        <article className={styles.article}>
          {cover === undefined ? (
            <div></div>
          ) : (
            <div>
              <Image
                src={cover}
                alt="Imagem de capa do post"
                className={styles.article__img}
                width={500}
                height={500}
              />
            </div>
          )}
          <h2 className={styles.article__title}>{title}</h2>
          <p className={styles.article__text}>{description}</p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="Avatar do autor da postagem"
              className={`${styles.author__avatar} ${styles.link}`}
            />
            <div>
              <h3 className={styles.author__title}>{author}</h3>
              <time
                dateTime={date.slice(-19, -9)}
                className={styles.article__date}
              >
                {formattedDate}
              </time>
            </div>
          </div>
          <hr />
        </article>
      </Link>
    </li>
  );
}
