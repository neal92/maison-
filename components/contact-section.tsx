"use client"

import { useState, type FormEvent } from "react"
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react"
import { site } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-base outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"

function formatDate(value: string) {
  return value ? new Date(value).toLocaleDateString("fr-FR") : "—"
}

export function ContactSection() {
  const [sendVia, setSendVia] = useState<"email" | "whatsapp">("email")
  const today = new Date().toISOString().slice(0, 10)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (key: string) => String(data.get(key) ?? "").trim()

    const body = [
      `Bonjour,`,
      ``,
      `Je souhaite réserver ${site.name}.`,
      `Arrivée : ${formatDate(get("arrival"))}`,
      `Départ : ${formatDate(get("departure"))}`,
      `Nombre de personnes : ${get("guests")}`,
      ``,
      get("message"),
      ``,
      `${get("name")}`,
      `${get("email")}${get("phone") ? ` — ${get("phone")}` : ""}`,
    ].join("\n")

    const url =
      sendVia === "whatsapp"
        ? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(body)}`
        : `mailto:${site.contact.email}?subject=${encodeURIComponent(`Demande de réservation — ${get("name")}`)}&body=${encodeURIComponent(body)}`

    window.open(url, sendVia === "whatsapp" ? "_blank" : "_self")
  }

  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: "Écrivez-nous", href: `https://wa.me/${site.contact.whatsapp}` },
    { icon: Phone, label: "Téléphone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "E-mail", value: site.contact.email, href: `mailto:${site.contact.email}` },
  ]

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading
            eyebrow="Contact & réservation"
            title="Réservez votre séjour"
            description="Indiquez-nous vos dates et le nombre de voyageurs. Nous vous répondons rapidement pour confirmer la disponibilité et les modalités."
          />

          <ul className="mt-10 flex flex-col gap-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border bg-card p-4 transition-colors hover:border-primary"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-lg bg-accent/10 p-4 border border-accent/30">
            <p className="text-sm text-foreground">
              <strong>Pour une meilleure réactivité,</strong> nous vous recommandons de nous contacter par <strong>mail</strong> ou <strong>téléphone</strong>.
            </p>
          </div>

          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {site.contact.address}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border bg-card p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Nom complet
              </label>
              <input id="name" name="name" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                E-mail
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                Téléphone <span className="font-normal text-muted-foreground">(facultatif)</span>
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="arrival" className="mb-1.5 block text-sm font-medium">
                Arrivée
              </label>
              <input id="arrival" name="arrival" type="date" min={today} required className={fieldClass} />
            </div>
            <div>
              <label htmlFor="departure" className="mb-1.5 block text-sm font-medium">
                Départ
              </label>
              <input id="departure" name="departure" type="date" min={today} required className={fieldClass} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="guests" className="mb-1.5 block text-sm font-medium">
                Nombre de personnes
              </label>
              <select id="guests" name="guests" defaultValue="2" className={fieldClass}>
                {Array.from({ length: site.capacity }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n > 1 ? "personnes" : "personne"}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Questions, demandes particulières…"
                className={cn(fieldClass, "resize-y")}
              />
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-2 text-sm font-medium">Envoyer ma demande par</legend>
            <div className="grid grid-cols-2 gap-2">
              {(["email", "whatsapp"] as const).map((option) => (
                <label
                  key={option}
                  className={cn(
                    "flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors has-focus-visible:ring-3 has-focus-visible:ring-ring/30",
                    sendVia === option ? "border-primary bg-primary/10 text-primary" : "hover:bg-muted",
                  )}
                >
                  <input
                    type="radio"
                    name="sendVia"
                    value={option}
                    checked={sendVia === option}
                    onChange={() => setSendVia(option)}
                    className="sr-only"
                  />
                  {option === "email" ? <Mail className="size-4" aria-hidden="true" /> : <MessageCircle className="size-4" aria-hidden="true" />}
                  {option === "email" ? "E-mail" : "WhatsApp"}
                </label>
              ))}
            </div>
          </fieldset>

          <Button
            type="submit"
            className={cn(buttonVariants(), "mt-6 h-12 w-full bg-accent text-base text-accent-foreground hover:bg-accent/90")}
          >
            Envoyer ma demande
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Aucun paiement en ligne. La réservation est confirmée après échange avec nous.
          </p>
        </form>
      </div>
    </section>
  )
}
