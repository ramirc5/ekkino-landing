import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="flex text-[#2E2E2F] gap-[10px] flex-col py-[30px]">
      <div className="flex justify-between">
        <h1 className="text-[38px] font-bold font-sans">LATEST PROJECTS</h1>
      </div>
      <div className="flex flex-col md:flex-row md:gap-[10px] hidden md:block">
        <div className="flex flex-col gap-[10px] w-full md:w-[70%] py-[10px]">
          <div className="bg-[url('../../public/impact.png')] bg-contain md:bg-cover min-h-[200px] md:min-h-[400px]" />

          <p className="text-right text-black">Branding & Website</p>
        </div>
        <div className="flex flex-col gap-[10px] w-full md:w-[30%] py-[10px]">
          <div className="bg-[url('../../public/ad-campaign.png')] bg-cover md:w-[100%] min-h-[200px] md:min-h-[250px]" />

          <p className="text-right text-black">Google Ad Campaign</p>
        </div>
      </div>
      <div className="flex flex-col md:hidden gap-[25px]">
        <div>
          <Image className="" src={`/impact.png`} width="400" height="150" />
          <p className="text-right text-black">Branding & Website</p>
        </div>
        <div>
          <Image
            className=""
            src={`/ad-campaign.png`}
            width="400"
            height="150"
          />
          <p className="text-right text-black">Google Ad Campaign</p>
        </div>
      </div>
      <div className="flex mx-auto w-[80%] flex-wrap gap-[30px] justify-center text-[16px] font-sans font-semibold"></div>
    </div>
  );
}
