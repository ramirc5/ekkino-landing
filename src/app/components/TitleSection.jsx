import React from "react";
import Image from "next/image";
import Bullets from "./Bullets";

import main from "../../../public/main_icon.png";

export default function TitleSection() {
  return (
    <div className="bg-[url('../../public/title-overlay.png')] bg-cover py-[30px]">
      <div className="flex flex-col w-[80%] mx-auto gap-[50px]">
        <div className="flex flex-row  justify-between mx-auto">
          <div class="flex flex-col gap-[10px] w-[50%]">
            <h1 className="text-[36px] font-bold text-[#2E2E2F] ">
              A <span className="text-[#6C63FF]">FULL SERVICE</span> MARKETING{" "}
              <span className="text-[#6C63FF]">AGENCY</span> FOR{" "}
              <span className="text-[#6C63FF]">YOU</span>
            </h1>
            <p className="text-[#2E2E2F]">
              Initiate Impact, Empower Change: Your Marketing and Design Partner
              for Non-Profits and Small Businesses
            </p>
          </div>

          <Image src={`/main_icon.png`} width="200" height="230" />
        </div>
        <button class="flex items-center px-4 py-2 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none w-[135px]">
          Let's Chat
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
        <Bullets />
      </div>
    </div>
  );
}
