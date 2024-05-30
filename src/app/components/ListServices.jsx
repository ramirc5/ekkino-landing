import Image from "next/image";

export default function ListServices() {
  return (
    <div className="text-[#2E2E2F] bg-[url('../../public/ListServicesBg.png')] bg-cover pb-[30px] flex gap-[10px] flex-col">
      <div className="text-center">
        <h1 className="text-[28px] font-bold relative bottom-[20px]">
          OUR SERVICES
        </h1>
      </div>
      <div className="flex mx-auto w-[80%] flex-wrap gap-[30px] justify-evenly text-[16px] font-bold">
        <h2>BRANDING</h2>
        <h2>WEB DESIGN</h2>
        <h2>SEO</h2>
        <h2>COPYWRITING</h2>
        <h2>PAID ADS</h2>
        <h2>SOCIAL MEDIA</h2>
        <h2>PRINT</h2>
        <h2>E-COMMERCE</h2>
        <h2>FREE ADS</h2>
        <h2>DIGITAL MARKETING</h2>
        <h2>SEM</h2>
        <h2>DIGITAL DESIGN</h2>
        <h2>WORDPRESS</h2>
        <h2>AND MORE</h2>
      </div>
    </div>
  );
}
