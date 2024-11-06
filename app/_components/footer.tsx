"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-[0_0_0_2px_rgba(6,24,44,0.4),0_4px_6px_-1px_rgba(6,24,44,0.65),inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col space-y-8 lg:space-y-0">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/big-logo.webp"
                alt="Everything Talent Logo"
                width={40}
                height={40}
                className="w-auto h-8"
              />
              <span className="text-xl font-semibold">Everything Talent</span>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-3">
                {[
                  "Blogs",
                  "Success Stories",
                  "Case Studies",
                  "Whitepapers",
                  "FAQs",
                  "Hiring Guides",
                  "Support",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Started Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                GET STARTED
              </h3>
              <ul className="space-y-3">
                {[
                  "Pricing",
                  "Hiring Solutions",
                  "Product Features",
                  "Free Trial",
                  "Contact Support",
                  "Request Demo",
                  "Trust",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                LEGAL
              </h3>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "CCPA Compliance",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cityscape Image */}
        <div className="relative mt-12 h-48 w-full">
          <Image
            src="/images/botto-2.webp"
            alt="Cityscape"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Everything Talent Labs, LLC. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="https://x.com/EVRYTNGTALENT" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <Twitter className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/company/everything-talent-ai/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.github.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <Github className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}