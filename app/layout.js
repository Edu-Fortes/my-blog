import "./global.css";
import { comfortaa, wixMadeforDisplay } from "./fonts";

export const metadata = {
  title: "Meu blog - Últimas postagens",
  description: "Blog pessoal criado com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${comfortaa.variable} ${wixMadeforDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
