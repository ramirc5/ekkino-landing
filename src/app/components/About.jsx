import Image from "next/image";
import Services from "./Services";
import Star from "./Star";
export default function About() {
  return (
    <div id="about" className="bg-white">
      <div className="w-[90%] text-black mx-auto py-[50px]">
        <div className="flex gap-[50px] flex-col md:flex-row">
          <div className="flex flex-col ">
            <div className="flex justify-between">
              <h1 className="text-[#2E2E2F] font-sans font-bold text-[34px]">
                ABOUT US
              </h1>
              <Image
                className="relative bottom-[145px] hidden md:hidden"
                src={`/5star.png`}
                width="100"
                height="150"
                style={{ transform: "rotate(15deg)" }}
              />
            </div>
            <p className="font-semibold">
              Ekkino (ἐκκινέω) means to start, to initiate, to set into motion.
              Our commitment is to catalyze change, spark progress, and propel
              your mission forward through marketing and design solutions
            </p>
            <br />
            <p className="font-semibold">
              Our small team of three, including two Catholics, established
              Ekkino in 2024 with the purpose of assisting Churches and
              Non-Profits in their mission to improve the world. Our work aims
              to enhance both visual appeal and measurable impact, whether it’s
              increasing engagement, generating donations, or promoting
              goodness.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="ml-auto mr-0">
              <Image
                className="relative bottom-[85px] hidden md:block rotate-15"
                src={`/5star.png`}
                width="175"
                height="200"
                style={{ transform: "rotate(15deg)" }}
              />
            </div>
            <h1 className="font-bold font-sans text-[34px] text-right">
              THE PROCESS
            </h1>
            <p className="font-semibold text-right">
              Utilizing a 5-step approach enables us to deliver efficient and
              high-quality solutions while offering the full range of services
              typically associated with large-scale operations. Each step is
              carefully navigated through to ensure we meet our clients’ needs
              with precision and care.
            </p>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}
