"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/ui/Spotlight"
import Image from "next/image"
import { useTheme } from "next-themes"

export function SpotlightPreview() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className={cn(
      "h-[35rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden",
      currentTheme === "dark" 
        ? "bg-black/[5] bg-grid-white/[0.02]" 
        : "bg-white bg-grid-black/[0.02]"
    )}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={currentTheme === "dark" ? "white" : "black"}
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
        <Image
          src="/images/big-logo.webp"
          alt="Everything Talent Logo"
          width={250}
          height={250}
          className="mx-auto mb-4"
        />
        <h1 className={cn(
          "text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-opacity-50",
          currentTheme === "dark"
            ? "bg-gradient-to-b from-neutral-50 to-neutral-400"
            : "bg-gradient-to-b from-neutral-900 to-neutral-600"
        )}>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Everything Talent</span><br /> 
          <span className={currentTheme === "dark" ? "text-white" : "text-black"}>turn every hire into your next superstar with</span><br />
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">AI-powered</span>
          <span className={currentTheme === "dark" ? "text-white" : "text-black"}> talent discovery </span>
        </h1>
      </div>
    </div>
  )
}
