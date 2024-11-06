'use client'

import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Customer Success",
    description:
      "Your success is our success. We are devoted to providing exceptional support and resources to help you achieve your hiring goals.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/images/cs2.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Customer Success"
        />
      </div>
    ),
  },
  {
    title: "Innovation",
    description:
      "We are committed to continuously improving our technology to meet the evolving needs of our users and stay ahead of industry trends.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/images/innovation.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Innovation"
        />
      </div>
    ),
  },
  {
    title: "Transparency",
    description:
      "We value open and honest communication, both within our team and with our users. We're dedicated to building trust through clarity and integrity.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/images/transparency.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Transparency"
        />
      </div>
    ),
  },
  {
    title: "Simplicity",
    description:
      "We believe that great technology should be intuitive and easy to use. Our solutions are designed to streamline your hiring process without unnecessary complexity.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/images/simplicity.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Simplicity"
        />
      </div>
    ),
  },
  {
    title: "Inclusivity",
    description:
      "We are committed to fostering a diverse and inclusive hiring environment. By eliminating biases and ensuring fairness, we empower every candidate to present their unique strengths and capabilities.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/images/Inclusivity.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Inclusivity"
        />
      </div>
    ),
  },
  {
    title: "Security",
    description:
      "We prioritize the protection of your data with robust security measures. Our systems are designed to safeguard your information and ensure privacy, giving you peace of mind.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/images/security.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Security"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src=""
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Security"
        />
      </div>
    ),
  },
]

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-white dark:bg-black">
      <h1 className="md:text-7xl text-2xl text-black dark:text-white relative z-20 text-center font-bold">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:text-black dark:hover:text-white duration-300">
          Standards That Set Us Apart
        </span>
      </h1>
      <p className="text-center mt-2 text-gray-700 dark:text-neutral-300 relative z-20 text-xl font-bold">
        At Everything Talent, our core values drive everything we do
      </p>
      <StickyScroll 
        content={content.map(item => ({
          ...item,
          description: (
            <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
          ),
          title: (
            <h3 className="text-black dark:text-white font-bold">{item.title}</h3>
          )
        }))} 
      />
    </div>
  )
}