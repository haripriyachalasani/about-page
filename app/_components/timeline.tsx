import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";


export function TimelineDemo() {
  const data = [
    {
      title: "May 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Arctic Wolf on CNBC Disruptor 50
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/2023.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Arctic Wolf Expands to ANZ
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/2022-2.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Arctic Wolf Incident Launch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/2022-1.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
        title: "Aug 2021",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            IDC Names Arctic Wolf a Leader
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/2021.webp"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
