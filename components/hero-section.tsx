import Image from "next/image"
import { BedDouble, Bath, MapPin, Users } from "lucide-react"
import { site } from "@/lib/site-config"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const facts = [
    { icon: Users, label: `${site.capacity} personnes` },
    { icon: BedDouble, label: `${site.bedrooms} chambres` },
    { icon: Bath, label: `${site.bathrooms} salles de bain` },
  ]

  return (
    <section id="accueil" className="relative flex min-h-svh items-end overflow-hidden">
      <Image
        src="/images/hero.png"
        alt={`${site.name}, maison en pierre avec piscine`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:pb-24">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/90">
          <MapPin className="size-4" aria-hidden="true" />
          {site.location}
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/90">{site.tagline}</p>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
          {facts.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className={cn(buttonVariants(), "h-12 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90")}
          >
            Nous contacter
          </a>
          <a
            href="#maison"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 border-white/60 bg-white/10 px-7 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white",
            )}
          >
            Découvrir la maison
          </a>
        </div>
      </div>
    </section>
  )
}
