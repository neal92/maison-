import { MessageCircle } from "lucide-react"
import { site } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <>
      <footer className="bg-foreground py-12 text-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-background/70">{site.location}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm text-background/70 md:text-right">
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-background">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="hover:text-background">
              {site.contact.email}
            </a>
            <p className="mt-3 text-xs text-background/50">
              © {new Date().getFullYear()} {site.name}. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${site.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" aria-hidden="true" />
        <span className="sr-only">Nous écrire sur WhatsApp</span>
      </a>
    </>
  )
}
