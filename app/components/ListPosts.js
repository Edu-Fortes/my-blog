import Link from "next/link";

export default function ListPosts({ post }) {
  const { id, title, date } = post;
  return (
    <li>
      <Link href={`posts/${id}`}>{title}</Link>
      <br />
      {id}
      <br />
      {date}
    </li>
  );
}
