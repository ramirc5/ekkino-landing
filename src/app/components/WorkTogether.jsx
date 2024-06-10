import Image from "next/image";
import Link from "next/link";
export default function WorkTogether() {
  return (
    <div className="text-white bg-center 2xl:bg-[url('../../public/Connect-2XL.png')] xl:bg-[url('../../public/Connect-XL.png')] lg:bg-[url('../../public/Connect-Large.png')] md:bg-[url('../../public/Connect-Medium.png')] sm:bg-[url('../../public/Connect-Small.png')] bg-cover min-h-[100px] md:min-h-[273px] flex flex-col justify-center items-center md:gap-[30px]">
      <h1 className="font-bold font-sans text-[24px] md:text-[40px]">
        LET’S WORK TOGETHER
      </h1>
      <Link href="/contact/">
        <button class="flex text-[10px] md:text-[24px] items-center px-3 py-2 md:px-6 md:py-3 bg-[#807BEC] text-white text-lg font-medium rounded-full transition duration-300 focus:outline-none w-[135px] md:w-[184px]">
          Let&apos;s Talk
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}
