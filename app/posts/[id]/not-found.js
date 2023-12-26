import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>A postagem requisitada não existe</h1>
      <Link href="/">Voltar</Link>
    </>
  );
}
