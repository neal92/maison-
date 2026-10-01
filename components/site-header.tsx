"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { site } from "@/lib/site-config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#maison", label: "La maison" },
  { href: "#galerie", label: "Galerie" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "bg-background/95 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a
          href="#accueil"
          className={cn(
            "font-serif text-2xl font-semibold tracking-tight",
            solid ? "text-foreground" : "text-white",
          )}
        >
          {site.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.slice(1, -1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-opacity hover:opacity-70",
                  solid ? "text-foreground" : "text-white",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={cn(buttonVariants(), "h-10 bg-accent px-5 text-accent-foreground hover:bg-accent/90")}
            >
              Réserver
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={cn("p-2 md:hidden", solid ? "text-foreground" : "text-white")}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t bg-background md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3.5 text-base font-medium last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
