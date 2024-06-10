import Image from "next/image";

export default function Portfolio() {
  return (
    <div
      id="latest"
      className="flex text-[#2E2E2F] gap-[10px] flex-col py-[30px]"
    >
      <Image
        className="relative bottom-[5px] hidden md:block rotate-15 mt-[-100px]"
        src={`/1minute.png`}
        width="175"
        height="200"
        style={{ transform: "rotate(-30deg)" }}
      />
      <div className="flex justify-between">
        <h1 className="text-[38px] font-bold font-sans">LATEST PROJECTS</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-[25px] mx-auto">
        <div className="flex flex-col items-end">
          <Image
            className=""
            src={`/app1.jpeg`}
            sizes="100vw"
            width={900}
            height={600}
          />
          <p className="text-right text-black font-[12px]">
            Flyer and UI Design
          </p>
        </div>
        <div className="flex flex-col items-end">
          <Image
            className=""
            src={`/app2.jpeg`}
            sizes="100vw"
            width={900}
            height={600}
          />
          <p className="text-right text-black font-[12px]">
            Branding and UI Design
          </p>
        </div>
      </div>
      <div className="flex mx-auto w-[80%] flex-wrap gap-[30px] justify-center text-[16px] font-sans font-semibold"></div>
    </div>
  );
}
