import Image from "next/image";
import Link from "next/link";
import logo from "/public/next.svg";
import style from "../components/style.module.css";

export default function Header({ children }) {
  return (
    <header className={style.header}>
      <Link href="/">
        <Image src={logo} alt="logo do blog" className={style.header__logo} />
      </Link>
      {children}
      <button type="button">Toggle</button>
    </header>
  );
}
