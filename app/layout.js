import "./global.css";
import { comfortaa, wixMadeforDisplay } from "./fonts";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <body>
        <Header>
          <Navbar />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
