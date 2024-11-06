"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-background transition-colors duration-300 shadow-[0_0_0_2px_rgba(6,24,44,0.4),0_4px_6px_-1px_rgba(6,24,44,0.65),inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-foreground font-bold text-lg">
            <Image
              src="/images/logo.webp"
              alt="Everything Talent Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span>Everything Talent</span>
          </Link>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="/home" className="text-lg font-semibold hover:text-primary">
                Home
              </Link>
              <Link href="/" className="text-lg font-semibold hover:text-primary">
                About
              </Link>
              <Link href="/use-cases" className="text-lg font-semibold hover:text-primary">
                Use Cases
              </Link>
              <Link href="/pricing" className="text-lg font-semibold hover:text-primary">
                Pricing
              </Link>
              <Link href="/resources" className="text-lg font-semibold hover:text-primary">
                Resources
              </Link>
              <Link href="/blog" className="text-lg font-semibold hover:text-primary">
                Blog
              </Link>
              <Link href="/support" className="text-lg font-semibold hover:text-primary">
                Support
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link href="/use-cases" className="text-muted-foreground hover:text-primary">
            Use Cases
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-primary">
            Pricing
          </Link>
          <Link href="/resources" className="text-muted-foreground hover:text-primary">
            Resources
          </Link>
          <Link href="/blog" className="text-muted-foreground hover:text-primary">
            Blog
          </Link>
          <Link href="/support" className="text-muted-foreground hover:text-primary">
            Support
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
            <Link href="/login" className="text-white">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}