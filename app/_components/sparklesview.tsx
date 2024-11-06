'use client'

import React, { useEffect, useState } from "react"
import { SparklesCore } from "@/components/ui/sparkles"
import { LayoutGridDemo } from "@/app/_components/layoutgrid"
import { useTheme } from "next-themes"

export function SparklesPreview() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set a default theme if none is detected
    if (!theme) {
      setTheme('dark')
    }
  }, [theme, setTheme])

  // Prevent rendering with incorrect theme
  if (!mounted) return null

  const isDarkTheme = theme === 'dark'

  return (
    <div className={`h-[55rem] w-full ${isDarkTheme ? 'bg-black' : 'bg-white'} flex flex-col items-center justify-center overflow-hidden rounded-md`}>
      <h1 className="md:text-4xl text-4xl lg:text-6xl font-bold text-center relative z-20 py-8 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Where It All Began
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={isDarkTheme ? "#FFFFFF" : "#000000"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className={`absolute inset-0 w-full h-full ${isDarkTheme ? 'bg-black' : 'bg-white'} [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]`}></div>
      </div>
      <div className="w-full flex-grow">
        <LayoutGridDemo />
      </div>
    </div>
  )
}