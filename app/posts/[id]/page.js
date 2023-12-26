import { getSortedPostsData } from "@/app/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = !posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Postagem não encontrada",
    };
  }

  return {
    title: post.title,
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
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  return (
    <>
      <h1>Página do Post</h1>
      <Link href="/">Voltar</Link>
    </>
  );
}
