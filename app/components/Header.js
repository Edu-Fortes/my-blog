import Image from "next/image";
import logo from "/public/next.svg";
import style from "../components/style.module.css";

export default function Header({ children }) {
  return (
    <header className={style.header}>
      <Image src={logo} alt="logo do blog" className={style.header__logo} />
      {children}
      <button type="button">Toggle</button>
    </header>
  );
}
