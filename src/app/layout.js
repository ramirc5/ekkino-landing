import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const grotesk = localFont({
  src: "./ClashGrotesk-Variable.ttf",
  display: "swap",
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Ekkino",
  description: "Web Development Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
