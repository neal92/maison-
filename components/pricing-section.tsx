import { CalendarDays } from "lucide-react"
import { site } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const euro = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })

export function PricingSection() {
  return (
    <section id="tarifs" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Tarifs & disponibilités"
          title="Des tarifs simples, sans surprise"
          description="Pas de paiement en ligne : contactez-nous pour vérifier les disponibilités, nous confirmons votre réservation directement avec vous."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {site.pricing.map((tier) => {
            const highlight = "highlight" in tier && tier.highlight
            const isSpecial = "special" in tier && tier.special
            return (
              <li
                key={tier.season}
                className={cn(
                  "flex flex-col rounded-2xl border p-7",
                  highlight ? "border-primary bg-primary text-primary-foreground" : isSpecial ? "border-accent/50 bg-accent/10" : "bg-card",
                )}
              >
                <h3 className="font-serif text-2xl font-semibold">{tier.season}</h3>
                <p className={cn("mt-1 text-sm", highlight ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {tier.period}
                </p>
                {!isSpecial && (
                  <>
                    <p className="mt-8">
                      <span className="font-serif text-5xl font-semibold">{euro.format(tier.night)}</span>
                      <span className={cn("ml-1 text-sm", highlight ? "text-primary-foreground/80" : "text-muted-foreground")}>
                        / nuit
                      </span>
                    </p>
                    <p className={cn("mt-2 text-sm", highlight ? "text-primary-foreground/80" : "text-muted-foreground")}>
                      ou {euro.format(tier.week)} la semaine
                    </p>
                  </>
                )}
                {isSpecial && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Réception, traiteur, décoration et services personnalisés. Contactez-nous pour un devis sur mesure.
                  </p>
                )}
              </li>
            )
          })}
        </ul>

        <div className="mt-14 space-y-8">
          <div className="grid gap-10 rounded-2xl border bg-card p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h3 className="font-serif text-2xl font-semibold">Informations pratiques</h3>
              <dl className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {site.practicalInfo.map((info) => (
                  <div key={info.label} className="flex justify-between gap-4 border-b pb-3 text-sm">
                    <dt className="text-muted-foreground">{info.label}</dt>
                    <dd className="text-right font-medium">{info.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <a
              href="#contact"
              className={cn(buttonVariants(), "h-12 gap-2 bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90")}
            >
              <CalendarDays className="size-4" aria-hidden="true" />
              Vérifier les disponibilités
            </a>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-primary">Formules spéciales</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Vous souhaitez organiser un <strong>anniversaire</strong> ou un <strong>repas</strong> ?
              Nous proposons des formules adaptées à vos besoins, incluant les services de la maison et les repas.
              <br />
              <span className="mt-2 inline-block font-medium">Contactez-nous pour un devis personnalisé.</span>
            </p>
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: "outline" }), "mt-6 h-11 px-6 text-base")}
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
