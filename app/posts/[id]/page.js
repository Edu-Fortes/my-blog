import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import formatDate from "@/app/lib/formatDate";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./style.module.css";
import avatar from "/public/avatar.png";

export function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const { id } = params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return {
      title: "Postagem não encontrada",
    };
  }

  return {
    title: `Meu blog - ${post.title}`,
  };
}

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }) {
  const posts = getSortedPostsData();
  const { id } = params;

  if (!posts.find((post) => post.id === id)) {
    return notFound();
  }

  const { title, date, author, content } = await getPostData(id);
  const formattedDate = formatDate(date);

  return (
    <main className={styles.post}>
      <h1 className={styles.post__title} id="top">
        {title}
      </h1>
      <div className={styles.author}>
        <Image
          src={avatar}
          alt="Avatar do autor da postagem"
          className={`${styles.author__avatar} ${styles.link}`}
        />
        <div>
          <h3 className={styles.author__title}>{author}</h3>
          <time dateTime={date.slice(-19, -9)} className={styles.article__date}>
            {formattedDate}
          </time>
        </div>
      </div>
      <article
        className={styles.post__article}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <footer className={styles.post__footer}>
        <Link href="/">Voltar</Link>
        <Link href="#top">Top</Link>
      </footer>
    </main>
  );
}
