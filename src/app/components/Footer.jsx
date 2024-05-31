import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#2E2E2F] py-[25px]">
      <div className="flex w-[90%] mx-auto justify-between">
        <div className="flex flex-col gap-[20px] w-[250px]">
          <Image src={`/logo.svg`} width="110" height="140" />
          <p className="text-[10px]">
            We don’t just talk, we listen. Together, we craft solutions that
            take your ideas and goals to reality bringing your organization to
            new heights. Our mission is to support you in achieving your goals,
            ensuring a rapid return on your investment and standing by you for
            any future needs.
          </p>
          <p className="text-[8px]">All Rights Reserved @ 2024 Ekkino</p>
        </div>
        <div className="flex gap-[30px] ">
          <div className="flex flex-col gap-[10px]">
            <h3>Menu</h3>
            <p className="text-[12px]">About Us</p>
            <p className="text-[12px]">Services</p>
            <p className="text-[12px]">Latest Services</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h3>Information</h3>
            <p className="text-[12px]">Contact Us</p>
            <p className="text-[12px]">Terms & Conditions</p>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3>Connect</h3>
          <div className="flex gap-[10px]">
            <Image src={`/fb.svg`} width="20" height="20" />
            <Image src={`/insta.svg`} width="20" height="20" />
            <Image src={`/linkedin.svg`} width="20" height="20" />
          </div>
        </div>
      </div>
    </div>
  );
}
