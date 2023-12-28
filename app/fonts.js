import { Comfortaa, Wix_Madefor_Display } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
});

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  variable: "--font-wix-madefor-display",
  display: "swap",
});

export { comfortaa, wixMadeforDisplay };
