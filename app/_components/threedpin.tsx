"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { PinContainer } from "@/components/ui/3d-pin"

export function AnimatedPinDemo() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ">
            Meet our flexible pricing solutions
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Meet our flexible pricing solutions designed to fit every recruitment need! From startups to enterprises, we&apos;ve got a plan that works for you. Start with our FREE Starter plan featuring a complete ATS and 5 tech assessments monthly, perfect for small teams getting started. Scale up with our Business plan at $100/month for unlimited assessments and advanced features, or supercharge your hiring with our Growth plan at $500/month packed with AI integration and SSO capabilities. Need something more? Our Custom plan offers unlimited everything with dedicated support! Each plan includes our core AI-powered features, anti-cheat technology, and detailed reporting – because great hiring shouldn&apos;t break the bank.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-[40rem] flex items-center justify-center">
          {isClient && (
            <PinContainer
              title="everythingtalent.ai"
              href="https://everythingtalent.ai/pricing"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 text-base text-slate-100">
                  Curious about Everything Talent&apos;s Platform, Pricing & Integrations?
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    Watch Our Detailed Pricing Breakdown and Find Your Perfect Plan!
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <Image
                    src="/images/big-logo.webp"
                    alt="Everything Talent Pricing"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </PinContainer>
          )}
        </div>
      </div>
    </div>
  )
}