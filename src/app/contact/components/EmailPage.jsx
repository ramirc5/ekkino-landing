import React from "react";
import Image from "next/image";
import Contact from "./Contact";
import Navbar from "../../components/Navbar";

export default function EmailPage() {
  return (
    <div className="bg-[url('../../public/title-overlay.png')] bg-contain md:bg-cover pb-[30px] min-h-[80vh]">
      <Navbar />
      <div className="flex w-[90%] mx-auto flex-col gap-[30px] md:flex-row md:gap-[0px]">
        <div className="w-full md:w-[85%] mx-auto ">
          <h2 className="text-[#2E2E2F] font-sans font-bold text-[50px]">
            LET&apos;S TALK
          </h2>
          <p className="text-[#2E2E2F] w-[90%]">
            Let us ignite your brand, catalyze your mission: Ekkino, your new
            marketing and creative agency partner
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
}
