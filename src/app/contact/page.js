import Image from "next/image";
import EmailPage from "./components/EmailPage";
import Footer from "../components/Footer";
export const metadata = {
  title: "Contact Us | Ekkino",

  description:
    "Get in touch with Ekkino, your partner in digital marketing and creative solutions. Contact us for inquiries, support, or to learn how we can help your business grow.",
};
export default function Home() {
  return (
    <>
      <EmailPage />
      <Footer />
    </>
  );
}
