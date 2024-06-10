import React from "react";
import Image from "next/image";
import Bullets from "./Bullets";
import Navbar from "./Navbar";
import main from "../../../public/main_icon.png";
import Star from "./Star";
import Link from "next/link";
export default function TitleSection() {
  return (
    <div className="bg-[url('../../public/title-overlay.png')] bg-contain md:bg-cover pb-[30px] min-h-[60vh] justify-between">
      <Navbar />
      <div className="flex flex-col w-[90%] mx-auto gap-[50px]">
        <div className="flex flex-row  justify-between m-0 ">
          <div class="flex flex-col gap-[10px]  w-[100%] xl:w-[50%]">
            <h1 className="text-[40px] xl:text-[50px] font-bold font-sans text-[#2E2E2F] ">
              A <span className="text-[#6C63FF]">FULL SERVICE</span> MARKETING{" "}
              <span className="text-[#6C63FF]">AGENCY</span> FOR{" "}
              <span className="text-[#6C63FF]">YOU</span>
            </h1>
            <p className="text-[#2E2E2F] font-semibold">
              Initiate Impact, Empower Change: Your Marketing and Design Partner
              for Non-Profits and Small Businesses
            </p>
          </div>
          <div className="">
            <Image
              className="hidden xl:block"
              src={`/main_icon.png`}
              width="250"
              height="310"
            />
          </div>
        </div>
        <Link href="/contact/">
          <button class="flex items-center px-4 py-2 border border-gray-400 rounded-full text-gray-700  focus:outline-none w-[135px]">
            Let&apos;s Chat
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
        </Link>
        <Bullets />
      </div>
    </div>
  );
}
