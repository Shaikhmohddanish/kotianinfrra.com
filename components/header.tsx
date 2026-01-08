"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const primaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const legalNavLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "instant" })
    router.push(href)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[9998] bg-background/98 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "/")}>
              <Image
                src="/images/logo.png"
                alt="Kotian Infra Logo"
                width={48}
                height={48}
                className="w-12 h-12 md:w-12 md:h-12 rounded"
              />
              <div>
                <span className="text-base sm:text-lg md:text-xl font-bold text-foreground">Kotian</span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-primary"> Infra</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:9326421282" className="flex items-center gap-2">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="w-4 h-4" />
                  <span>9326421282</span>
                </Button>
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-foreground relative z-[10000]"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-[9999] overflow-y-auto">
          <nav className="flex flex-col px-4 py-6">
            {[...primaryNavLinks, ...legalNavLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-4 text-base font-medium transition-colors border-b border-border last:border-0 ${
                  pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:9326421282" className="mt-6">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 9326421282
              </Button>
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
