import Image from "next/image";

export default function ListServices() {
  return (
    <div className="text-[#2E2E2F] bg-[url('../../public/services-bg.png')] lg:bg-cover pb-[50px] flex gap-[10px] flex-col min-h-[25vh]">
      <div className="text-center">
        <h2 className="text-[38px] font-bold font-sans relative bottom-[20px]">
          OUR SERVICES
        </h2>
      </div>
      <div className="flex mx-auto w-[80%] md:w-[90%] flex-wrap gap-[70px] justify-center text-[16px] md:text-[24px] font-sans font-semibold">
        <h3>BRANDING</h3>
        <h3>WEB DESIGN</h3>
        <h3>SEO</h3>
        <h3>COPYWRITING</h3>
        <h3>PAID ADS</h3>
        <h3>SOCIAL MEDIA</h3>
        <h3>PRINT</h3>
        <h3>E-COMMERCE</h3>
        <h3 className="hidden lg:block">FREE ADS</h3>
        <h3 className="hidden lg:block">DIGITAL MARKETING</h3>
        <h3 className="hidden lg:block">SEM</h3>
        <h3>DIGITAL DESIGN</h3>
        <h3>WORDPRESS</h3>
        <h3>AND MORE</h3>
      </div>
    </div>
  );
}
