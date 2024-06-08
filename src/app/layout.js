import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const grotesk = localFont({
  src: "./ClashGrotesk-Variable.ttf",
  display: "swap",
  variable: "--font-grotesk",
});

const addJsonLd = () => {
  return {
    __html: `
    {
      "@context": "http://ekkino.com",
      "@type": "WebSite",
      "name": "Ekkino",
      "address" : {
        "@type": "PostalAddress",
        "addressLocality": "Cheyenne",
        "addressRegion": "WY".
        "addressCountry": "US".
        }
      }
    `,
  };
};

export const metadata = {
  title: "Ekkino | Digital Marketing and Creative Agency",
  description:
    "Ekkino is a digital marketing and creative agency for nonprofits, churches, and small businesses. We offer brand strategy, digital design, social media management, SEO, web design, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${grotesk.variable}`}>
      <Head
        type="application/ld+json"
        dangerouslySetInnerHTML={addJsonLd()}
        key="item-jsonld"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
