import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import avatar from "/public/avatar.png";

export default function ListPosts({ post }) {
  const { id, description, title, date, author, cover } = post;
  console.log(cover);
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
              <time dateTime={date} className={styles.article__date}>
                17 de dezembro de 2023
              </time>
            </div>
          </div>
          <hr />
        </article>
      </Link>
      {/* <br />
      {id}
      <br />
      {description}
      <br />
      {date} */}
    </li>
  );
}
