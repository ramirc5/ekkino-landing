import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-[#2E2E2F] text-[#FFFFFF] py-[25px]">
      <div className="flex flex-col md:flex-row gap-[15px] md:gap-[0px] items-center md:items-start  w-[90%] mx-auto justify-between ">
        <div className="flex flex-col items-center md:items-start md:items-no-stretch gap-[5px] md:  gap-[20px] w-[95%] md:w-[250px]">
          <Image src={`/logo.svg`} width="110" height="140" />
          <p className="text-[10px] text-center md:text-left">
            We don’t just talk, we listen. Together, we craft solutions that
            take your ideas and goals to reality bringing your organization to
            new heights. Our mission is to support you in achieving your goals,
            ensuring a rapid return on your investment and standing by you for
            any future needs.
          </p>
          <p className="text-[8px] hidden md:block">
            All Rights Reserved @ 2024 Ekkino
          </p>
        </div>
        <div className="flex gap-[30px] mx-auto justify-space-around md:flex-row">
          <div className="flex flex-col gap-[3px] md:gap-[10px] w-[80%] w-auto">
            <h3>Menu</h3>
            <Link href="/#about">
              <p className="text-[12px]">About Us</p>
            </Link>
            <Link href="/#services">
              <p className="text-[12px]">Services</p>
            </Link>
            <Link href="/#latest">
              <p className="text-[12px]">Latest Projects</p>
            </Link>
          </div>
          <div className="flex flex-col gap-[3px] md:gap-[10px]">
            <h3>Information</h3>
            <Link href="/contact/">
              <p className="text-[12px]">Contact Us</p>
            </Link>
            <Link href="/terms/">
              <p className="text-[12px]">Terms & Conditions</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[10px] w-[80%] w-auto">
          <h3 className="text-center hidden md:block">Connect</h3>
          <div className="flex gap-[10px] justify-around md:flex-row">
            <a href="https://www.facebook.com/ekkinogroup" target="_blank">
              {" "}
              <Image src={`/fb.svg`} width="20" height="20" />
            </a>
            <a href="https://www.instagram.com/ekkinogroup/" target="_blank">
              {" "}
              <Image src={`/insta.svg`} width="20" height="20" />
            </a>
            <a href="https://www.linkedin.com/company/ekkino" target="_blank">
              {" "}
              <Image src={`/linkedin.svg`} width="20" height="20" />
            </a>
            <a href="https://www.x.com/ekkinogroup" target="_blank">
              {" "}
              <Image src={`/twitter.png`} width="20" height="20" />
            </a>
          </div>
        </div>
        <p className="text-[8px] md:hidden">
          All Rights Reserved @ 2024 Ekkino
        </p>
      </div>
    </div>
  );
}
