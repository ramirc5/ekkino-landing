import React from "react";
import Image from "next/image";

export default function EmailPage() {
  return (
    <div className="bg-[url('../../public/title-overlay.png')] bg-contain md:bg-cover py-[30px] min-h-[450px]">
      <div className="w-[85%] mx-auto">
        <h1 className="text-[#2E2E2F] font-sans font-bold text-[34px]">
          LET&apos;S TALK
        </h1>
        <p className="text-[#2E2E2F] w-[85%]">
          Let us ignite your brand, catalyze your mission: Ekkino, your new
          marketing and creative agency partner
        </p>
      </div>
    </div>
  );
}
