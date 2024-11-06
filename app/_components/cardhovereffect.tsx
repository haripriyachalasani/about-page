/* eslint-disable prefer-const */
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Vortex } from "@/components/ui/vortex";

export const HoverEffect = ({
  items,
  className,
  heading = "Our Professionals",
  paragraph = "At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.",
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
  className?: string;
  heading?: string;
  paragraph?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("container mx-auto px-4", className)}>
      <h1 className="text-5xl pt-8 font-bold text-center mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        {heading}
      </h1>
      <p className="text-center mt-2 text-neutral-700 dark:text-neutral-300 relative z-20 text-xl">
        {paragraph}
      </p>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardImage src={item.image} alt={item.title} />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] group-hover:border-neutral-300 dark:group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <Vortex />
      </div>
      <div className="relative z-10 bg-white/50 dark:bg-black/50 rounded-xl p-4">
        {children}
      </div>
    </div>
  );
};

export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-neutral-900 dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-neutral-700 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Amar",
    description: "UI/UX Designer",
    link: "https://stripe.com",
    image: "/images/team.webp",
  },
  {
    title: "Rahul",
    description: "Backend Developer",
    link: "https://netflix.com",
    image: "/images/team.webp",
  },
  {
    title: "Vignesh",
    description: "Product Manager",
    link: "https://google.com",
    image: "/images/team.webp",
  },
  {
    title: "Amar",
    description: "UI/UX Designer",
    link: "https://stripe.com",
    image: "/images/team.webp",
  },
  {
    title: "Rahul",
    description: "Backend Developer",
    link: "https://netflix.com",
    image: "/images/team.webp",
  },
  {
    title: "Vignesh",
    description: "Product Manager",
    link: "https://google.com",
    image: "/images/team.webp",
  },
];