import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "@/app/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      <Link href="/">Voltar</Link>
    </>
  );
}
