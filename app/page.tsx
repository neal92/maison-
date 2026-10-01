import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { HouseSection } from "@/components/house-section"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HouseSection />
        <GallerySection />
        <PricingSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
