import Image from "next/image";
import Test from "./components/Test";
import TitleSection from "./components/TitleSection";
import About from "./components/About";
import ListServices from "./components/ListServices";
import Footer from "./components/Footer";
import WorkTogether from "./components/WorkTogether";

export default function Home() {
  return (
    <>
      <TitleSection />
      <About />
      <ListServices />
      <WorkTogether />
      <Footer />
    </>
  );
}
