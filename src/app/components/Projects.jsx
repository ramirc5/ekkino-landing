import React from "react";
import Image from "next/image";
import Bullets from "./Bullets";
import Navbar from "./Navbar";
import main from "../../../public/main_icon.png";
import Pkgs from "./Pkgs";

export default function Projects() {
  return (
    <div className="bg-[url('../../public/projects-bg.png')] bg-contain md:bg-cover pb-[30px]">
      <div className="flex flex-col w-[90%] mx-auto gap-[50px]">
        <Pkgs />
        <div className="flex flex-col text-[#2E2E2F] hidden md:block">
          <h1 className="font-sans font-bold text-[32px] text-center">
            NONE OF THESE FIT? HAVE QUESTIONS?
          </h1>
          <div className="flex gap-[20px]">
            <p className="text-left">
              At Ekkino, we recognize that every organization is unique, and
              your marketing and designs need may differ from other
              organizations. While our pre-existing plans serve as a starting
              point for most, we understand the importance of being fluid. These
              plans are designed to provide a basic guideline of the services
              and products we offer to propel organizations forward, along with
              an estimate of typical costs.
            </p>
            <p className="text-right">
              If your organization has questions about specific products or
              services include in our plans, or if you would like to customize a
              plan to better suit your needs, we’re here to help. Whether you
              prefer a virtual meeting, phone call or email, we’re eager to
              discuss your options and tailor a plan that aligns with your
              organization’s goals and budget.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
