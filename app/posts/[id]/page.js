import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import formatDate from "@/app/lib/formatDate";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./style.module.css";

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

  const { title, date, content } = await getPostData(id);
  const formattedDate = formatDate(date);

  return (
    <main className={styles.post}>
      <h1 className={styles.post__title}>{title}</h1>
      <time datetime={date}>{formattedDate}</time>
      <article
        className={styles.post__article}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Link href="/">Voltar</Link>
    </main>
  );
}
