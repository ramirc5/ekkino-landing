import Image from "next/image";
import ServicesArrow from "../../../public/services-arrow.svg";

export default function Services() {
  return (
    <div className="flex text-[#2E2E2F] flex-wrap gap-[25px] w-[95%] mx-auto py-[30px] justify-evenly">
      <div className="flex flex-col w-[320px]">
        <div className="flex justify-between">
          <h1 className="text-bold text-[32px]">DISCOVERY</h1>
          <Image src={ServicesArrow} />
        </div>
        <p>
          We discuss your ideas, needs, goals, and vision. Working closely with
          you to develop solutions.
        </p>
      </div>
      <div className="flex flex-col w-[320px]">
        <div className="flex justify-between">
          <h1 className="text-bold text-[32px]">STRATEGY</h1>
          <Image src={ServicesArrow} />
        </div>
        <p>
          Ekkino will conduct research on user experience, features, and
          competitors if applicable to ensure you stand out.
        </p>
      </div>
      <div className="flex flex-col w-[320px]">
        <div className="flex justify-between">
          <h1 className="text-bold text-[32px]">CRAFTING</h1>
          <Image src={ServicesArrow} />
        </div>
        <p>
          Building begins, we keep you updated at every step. Our process
          ensures timely progress and superior quality.
        </p>
      </div>
      <div className="flex flex-col w-[320px]">
        <div className="flex justify-between">
          <h1 className="text-bold text-[32px]">EXECUTION</h1>
          <Image src={ServicesArrow} />
        </div>
        <p>
          After confirming you love our work, we bring the final project to
          life, meticulously executing every detail
        </p>
      </div>
      <div className="flex flex-col w-[320px]">
        <div className="flex justify-between">
          <h1 className="text-bold text-[32px]">OPTIMIZE/SUPPORT</h1>
          <Image src={ServicesArrow} />
        </div>
        <p>
          We offer ongoing support services, ensuring that even after delivery,
          your project remains well maintained
        </p>
      </div>
    </div>
  );
}
