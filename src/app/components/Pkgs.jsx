"use client";
import React from "react";
import Link from "next/link";

import { useState } from "react";

export default function Pkgs() {
  const [activeTab, setActiveTab] = useState("marketing");

  const packagesContent = {
    marketing: [
      {
        title: "Basic Plan",
        price: "$650/month",
        description: "Limited budgets - starting social media",
        details: [
          [
            "Social Media Management (2 Platforms)",
            "Includes: Analytics and Reporting",
          ],

          ["Email Marketing Campaign", "Includes: Setup and First Campaign"],
          [
            "Basic Content Creation (2 graphics)",
            "Includes: Blog or Social Media Graphics",
          ],
        ],
      },
      {
        title: "Basic Plan",
        price: "$1250/month",
        description: "Ideal for growing organizations",
        details: [
          [
            "Social Media Management (3 Platforms)",
            "Includes: Basic Plan, Strategy Development, Scheduling and Posting",
          ],

          ["Email Marketing Campaign", "Includes: Setup and Two Campaigns"],
          [
            "Basic Content Creation (4 graphics)",
            "Includes: Basic Plan, Print Content",
          ],
          [
            "Basic SEO Optimization",
            "Includes: Keyword Research, Content Optimization, Local SEO",
          ],
        ],
      },
      {
        title: "Basic Plan",
        price: "$2450/month",
        description: "Limited budgets - starting social media",
        details: [
          [
            "Social Media Management (4 Platforms)",
            "Includes: Advanced Plan, Community Engagement",
          ],

          ["Email Marketing Campaign", "Includes: Setup and Four Campaigns"],
          [
            "Basic Content Creation (8 graphics)",
            "Includes: Advanced Plan and Video Content",
          ],
          [
            "Advanced SEO Optimization",
            "Includes: Advanced Plan, On-Page Optimization, Mobile-Friendliness, Page Speed Optimization",
          ],
          [
            "Paid Advertising (1 Platform)",
            "Includes: Setup, Creation, and Placement",
          ],
        ],
      },
      // ... other marketing plans
    ],
    design: [
      {
        title: "Basic Plan",
        price: "$500/month",
        description: "Limited budgets - basic visual direction",
        details: [
          [
            "Basic Visual Identity",
            "Includes: Logo Design and Brand Guidelines",
          ],
          [
            "Basic Social Media Graphics",
            "Includes: Avatar and Banner Creation",
          ],
          [
            "Meetings",
            "Includes: Milestone Meetings to Discuss Progress and Review",
          ],
        ],
      },
      {
        title: "Advanced Plan",
        price: "$1325/month",
        description: "Works best for small businesses",
        details: [
          ["Visual Identity", "Includes: Basic Plan and Mockups"],
          ["Website Design (Up to 3 pages)", "Includes: Non-Interactive File"],
          ["Social Media Graphics", "Includes: Basic Plan, 3 Post Designs"],
          [
            "Basic Print Design (1 option)",
            "Includes: Business Card, Flyer, or Brochure",
          ],
        ],
      },
      {
        title: "Premium Plan",
        price: "$1850/month before fee",
        description: "Suggested for larger organizations",
        details: [
          ["Visual Identity", "Includes: Advanced Plan, Extra Revisions"],
          [
            "Custom Website Design (Up to 5 pages)",
            "Includes: Interactive File",
          ],
          [
            "Website Development (Upcharge)",
            "Includes: WordPress or Custom Development",
          ],
          ["Social Media Graphics", "Includes: Basic Plan and Post Template"],
          [
            "Print Design (3 options)",
            "Includes: Business Card, Flyer, Brochure, Bulletin, Menu, etc",
          ],
        ],
      },
      // ... other design plans
    ],
    combo: [
      {
        title: "Brand Launch",
        price: "$2000/month",
        description: "Popular with startups and small business",
        details: [
          ["Visual Identity", "Includes: Logo Design and Brand Guidelines"],
          [
            "Website Design and Development",
            "Includes: Figma File and Published Site",
          ],
          ["Basic Content Creation", "Includes: Social Media or Blog Graphics"],
          ["Email Marketing Campaign", "Includes: Setup and First Campaign"],
        ],
      },
      {
        title: "Online Boost",
        price: "$3150/month",
        description: "Works well for stagnant organizations",
        details: [
          [
            "Website Design and Development",
            "Includes: Figma File and Published Site",
          ],
          [
            "Advanced Content Creation",
            "Includes: Branded Social and Blog Graphics",
          ],
          ["Email Marketing Campaigns", "Includes: Setup and Two Campaigns"],
          [
            "Basic SEO Optimization",
            "Includes: Technical Audit, Keyword Research, Local SEO, Content Optimization, and SEO Reporting",
          ],
        ],
      },
      {
        title: "Growth Accelerator",
        price: "$5425/month",
        description: "Perfect for hungry established organizations",
        details: [
          [
            "Website Design and Development",
            "Includes: Interactive File and Published Site",
          ],
          [
            "Paid Advertisement (1 Platform)",
            "Includes: Setup, Creation, Research, Performance Tracking, and Analysis",
          ],
          [
            "Social Media Management (4 platforms)",
            "Includes: Community Engagement and More",
          ],
          [
            "Advanced Content Creation",
            "Includes: Branded Graphics, Blog Posts, and Video Content",
          ],
          [
            "Advanced SEO",
            "Includes: Online Boost, Mobile Friendliness, and Page Speed Optimization",
          ],
        ],
      },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = (content) => {
    return content.map((plan, index) => (
      <div
        key={index}
        className="p-6 bg-[#6C63FF] text-white rounded-xl flex flex-col items-center justify-between min-h-[640px] gap-[10px]"
      >
        <div>
          <h3 className="text-2xl font-bold">{plan.title}</h3>
          <p className="mt-4 text-[24px] font-sans font-semibold">
            Starting at {plan.price}
          </p>
          <p className="mt-2 font-semibold opacity-60 ">{plan.description}</p>
          <ul className="mt-4 space-y-2 text-[14px]">
            {plan.details.map((detail, i) => (
              <>
                <li key={i} className="flex font-semibold items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {detail[0]}
                </li>
                <li key={i} className="flex font-semibold items-center">
                  {detail[1]}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div>
          <Link href="/email">
            <button class="flex text-[10px] md:text-[14px] justify-center items-center px-2 py-2 md:px-3  border border-white   text-white text-lg font-medium rounded-full transition duration-300 hover:bg-purple-800 focus:outline-none w-[135px] md:w-[274px]">
              Like This Plan? Lets Chat
              <svg
                class="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="hidden md:block">
      <div className="flex justify-between space-x-4 mb-8">
        <h1 className="text-[#2E2E2F] font-bold font-sans text-[40px]">
          {activeTab.toUpperCase()} PACKAGES
        </h1>
        <div>
          <button
            onClick={() => handleTabChange("marketing")}
            className={`px-4 py-2 text-black ${
              activeTab === "marketing" ? "border-b-2  border-black " : ""
            }`}
          >
            Marketing
          </button>
          <button
            onClick={() => handleTabChange("design")}
            className={`px-4 py-2 text-black ${
              activeTab === "design" ? "border-b-2  border-black " : ""
            }`}
          >
            Design
          </button>
          <button
            onClick={() => handleTabChange("combo")}
            className={`px-4 py-2 text-black ${
              activeTab === "combo" ? "border-b-2  border-black " : ""
            }`}
          >
            Both
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderContent(packagesContent[activeTab])}
      </div>
    </div>
  );
}
