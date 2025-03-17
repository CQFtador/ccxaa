"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Heart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Debut", href: "/our-story" },
  { name: "Core Memories", href: "/highlights" },
  { name: "Mosaic", href: "/gallery" },
  { name: "Quote", href: "/quote" },
  { name: "For You", href: "/for-you" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" fill="#e8b4b8" />
            <span className="font-bold text-primary">Love Portfolio</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-end">
          <ul className="flex gap-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute inset-x-0 top-14 z-50 md:hidden">
            <ul className="flex flex-col bg-background border-b">
              {navigation.map((item) => (
                <li key={item.name} className="border-t border-primary/10">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

