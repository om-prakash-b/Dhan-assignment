import { LandingHero } from "@/components/landing-hero"
import { WhyDhan } from "@/components/why-dhan"
import { ProductLines } from "@/components/product-lines"
import { Personas } from "@/components/personas"
import { PainPoints } from "@/components/pain-points"
import { Solutions } from "@/components/solutions"
import { Prioritization } from "@/components/prioritization"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2F3B2F]">
      <nav className="fixed top-0 w-full z-50 bg-[#2F3B2F]/90 backdrop-blur supports-[backdrop-filter]:bg-[#2F3B2F]/60 border-b border-[#2F3B2F]">
        <div className="container flex h-16 items-center px-4">
          <div className="mr-4 text-xl font-semibold text-white">
            Omprakash<span className="text-green-400">&gt;</span>Dhan assignment
          </div>
          <div className="flex flex-1 items-center justify-end space-x-8">
            <nav className="flex items-center space-x-6">
              {["Home", "Why Dhan", "Product lines", "Personas", "Pain points", "Solutions", "Prioritization"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </nav>
      <LandingHero />
      <WhyDhan />
      <ProductLines />
      <Personas />
      <PainPoints />
      <Solutions />
      <Prioritization />
    </main>
  )
}

