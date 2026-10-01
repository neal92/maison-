import { Star } from "lucide-react"
import { site } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"

export function ReviewsSection() {
  return (
    <section id="avis" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Avis clients" title="Ils ont séjourné chez nous" center />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {site.reviews.map((review) => (
            <li key={review.name} className="flex flex-col rounded-2xl bg-card p-7 shadow-sm">
              <div className="flex gap-0.5" role="img" aria-label={`Note : ${review.rating} sur 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={i < review.rating ? "size-4 fill-accent text-accent" : "size-4 text-border"}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed">
                {`« ${review.text} »`}
              </blockquote>
              <footer className="mt-6 border-t pt-4 text-sm">
                <p className="font-semibold">{review.name}</p>
                <p className="text-muted-foreground">
                  {review.origin} · {review.date}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
