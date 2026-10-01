"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { site } from "@/lib/site-config"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

export function GallerySection() {
  const photos = site.gallery
  const [index, setIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
  }, [index])

  const show = (delta: number) =>
    setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length))

  return (
    <section id="galerie" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Galerie"
          title="Un aperçu de votre séjour"
          description="Cliquez sur une photo pour l'agrandir."
        />

        <ul className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:auto-rows-[240px] md:grid-cols-3 md:gap-4">
          {photos.map((photo, i) => (
            <li
              key={photo.src}
              className={cn(i === 0 && "col-span-2 row-span-2", i === photos.length - 1 && "col-span-2 md:col-span-1")}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={i < 3}
                  quality={85}
                  sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="sr-only">Agrandir la photo</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") show(1)
          if (e.key === "ArrowLeft") show(-1)
        }}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        aria-label="Visionneuse de photos"
        className="m-0 h-full max-h-none w-full max-w-none bg-black/90 p-0 backdrop:bg-black/80"
      >
        {index !== null && (
          <div className="flex h-full w-full items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && setIndex(null)}>
            <div className="relative h-[80svh] w-full max-w-5xl">
              <Image src={photos[index].src} alt={photos[index].alt} fill quality={95} sizes="100vw" className="object-contain" />
            </div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/80">
              {index + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={() => setIndex(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20"
            >
              <X className="size-5" />
              <span className="sr-only">Fermer</span>
            </button>
            <button
              type="button"
              onClick={() => show(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <ChevronLeft className="size-6" />
              <span className="sr-only">Photo précédente</span>
            </button>
            <button
              type="button"
              onClick={() => show(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <ChevronRight className="size-6" />
              <span className="sr-only">Photo suivante</span>
            </button>
          </div>
        )}
      </dialog>
    </section>
  )
}
