"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={` ${
          isOpen
            ? `fixed top-0 w-full h-screen bg-[url('../../public/mobile-bg.png')] bg-contain`
            : ``
        }  text-white text-semibold text-[#2E2E2F] px-[30px] md:hidden`}
      >
        <div className="flex py-[20px]">
          <div className="flex flex-col gap-[25px] justify-between w-full">
            <Link href="/" onClick={toggle}>
              <Image
                className=""
                src={`${isOpen ? `logo.svg` : `ekkino-nav.svg`}`}
                width="100"
                height="150"
              />
            </Link>
            <div
              className={`${isOpen ? `flex flex-col gap-[20px]` : `hidden`}`}
            >
              <Link href="/#about" onClick={toggle}>
                <p>About Us</p>
              </Link>
              <Link href="/#services" onClick={toggle}>
                <p>Services</p>
              </Link>
              <Link href="/#latest">
                <p>Work</p>
              </Link>
              <Link href="/contact/" onClick={toggle}>
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
          {isOpen && (
            <Image
              onClick={toggle}
              className="h-[20px] pl-[0px]"
              src={`/close-nav.png`}
              width="20"
              height="50"
            />
          )}
          {!isOpen && (
            <Image
              onClick={toggle}
              className="h-[20px]"
              src={`/burger.png`}
              width="20"
              height="50"
            />
          )}
        </div>
      </div>
      <div className="text-[#2E2E2F] bg-transparent font-semibold [text-16px] pt-[30px] pb-[20px] w-[90%] mx-auto hidden md:block">
        <div className="flex justify-between w-full">
          <Link href="/">
            <Image
              className=""
              src={`/ekkino-nav.svg`}
              width="100"
              height="150"
            />
          </Link>
          <div className="flex gap-[20px]">
            <Link href="/#about">
              <p>About Us</p>
            </Link>
            <Link href="/#services">
              <p>Services</p>
            </Link>
            <Link href="/#latest">
              <p>Work</p>
            </Link>
            <Link href="/contact/">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
