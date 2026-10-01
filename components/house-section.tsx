import Image from "next/image"
import { Check, BedDouble, Bath, Users, Ruler } from "lucide-react"
import { site } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"

export function HouseSection() {
  const stats = [
    { icon: Users, value: site.capacity, label: "Voyageurs" },
    { icon: BedDouble, value: site.bedrooms, label: "Chambres" },
    { icon: Bath, value: site.bathrooms, label: "Salles de bain" },
    { icon: Ruler, value: site.surface, label: "Surface" },
  ]

  return (
    <section id="maison" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="La maison" title="Un havre de paix au milieu des oliviers" />
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{site.description}</p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {
                "Au rez-de-chaussée, un grand salon ouvert sur la terrasse, une cuisine équipée et une salle à manger. À l'étage, des chambres calmes et lumineuses. Dehors, la piscine, le jardin clos et la pergola invitent à de longues soirées d'été."
              }
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="rounded-xl border bg-card p-4">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                  <dd className="mt-3 font-serif text-2xl font-semibold">{value}</dd>
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/salon.png"
              alt="Salon de la villa"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h3 className="font-serif text-2xl font-semibold">Les chambres</h3>
            <ul className="mt-6 divide-y">
              {site.rooms.map((room) => (
                <li key={room.name} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                  <span className="font-medium">{room.name}</span>
                  <span className="text-sm text-muted-foreground">{room.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h3 className="font-serif text-2xl font-semibold">Équipements & extérieur</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.amenities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
