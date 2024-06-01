import Image from "next/image";

export default function WorkTogether() {
  return (
    <div className="text-white bg-[url('../../public/worktogether.png')] bg-cover min-h-[270px] flex gap-[10px] flex-col justify-center items-center gap-[30px]">
      <h1 className="font-bold font-sans text-[40px]">LET’S WORK TOGETHER</h1>
      <button class="flex items-center px-6 py-3 bg-[#807BEC] text-white text-lg font-medium rounded-full transition duration-300 hover:bg-purple-800 focus:outline-none w-[157px]">
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
    </div>
  );
}
