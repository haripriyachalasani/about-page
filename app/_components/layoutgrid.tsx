"use client";

import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen w-full bg-white dark:bg-black">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-gray-900 dark:text-white">
        The Journey to Transform Recruitment
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-gray-700 dark:text-neutral-200">
        Everything Talent was founded with a vision to transform the way organizations approach hiring. Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for bias in evaluating candidates, our founder set out to create a solution that simplifies the hiring journey while leveraging the latest advancements in technology.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-gray-900 dark:text-white">
        Combining Innovation with Efficiency
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-gray-700 dark:text-neutral-200">
        Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. This allows you to evaluate candidates quickly and accurately, regardless of their background or the complexity of the role. We are committed to leveraging the latest technology to streamline the recruitment process and reduce bias.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-gray-900 dark:text-white">
        Democratizing Recruitment Tools
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-gray-700 dark:text-neutral-200">
        We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1",
    thumbnail: "/images/story_1.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/story_2.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/story_3.webp",
  },
];