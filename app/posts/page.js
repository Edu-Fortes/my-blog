import Link from "next/link";

export default function PostPage() {
  return (
    <>
      <h1>Página do Post</h1>
      <Link href="/" className="link">
        Voltar
      </Link>
    </>
  );
}
