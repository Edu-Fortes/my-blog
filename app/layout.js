import "./global.css";
import { comfortaa, wixMadeforDisplay } from "./fonts";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
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
