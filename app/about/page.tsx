import type { Metadata } from "next"
import Image from "next/image"
import { Target, Eye, Heart } from "lucide-react"
import HeroSection from "@/components/hero-section"
import StatsCounter from "@/components/stats-counter"

export const metadata: Metadata = {
  title: "About Us | Kotian Infrra",
  description:
    "Learn about Kotian Infrra's 25+ years journey in real estate development under the leadership of Mr. Subhakar Kotian.",
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <HeroSection
          title="About Us"
          subtitle="Building trust and delivering excellence for over two and a half decades"
          backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
        />
      </div>

      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden border border-border aspect-square min-h-[320px]">
              <Image
                src="/images/founder.jpeg"
                alt="Mr. Subhakar Kotian - Founder of Kotian Infrra"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Mr. Subhakar <span className="text-primary">Kotian</span>
              </h2>
              <p className="text-primary font-medium mb-6">Founder & Managing Director</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 25 years of experience in the real estate industry, Mr. Subhakar Kotian has been the driving
                force behind Kotian Infrra's success. His vision of creating quality homes at affordable prices has
                helped thousands of families find their dream homes.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Under his leadership, Kotian Infrra has successfully completed 20+ residential projects across Navi
                Mumbai and Mumbai, earning a reputation for timely delivery, quality construction, and transparent dealings.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Mr. Kotian served as the 1st President of{" "}
                <a
                  href="https://banmraigad.in/past-president"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  CredAI Banmraigad
                </a>{" "}
                (2001-05), contributing significantly to the development and organization of the real estate industry in the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His philosophy of putting customers first and maintaining the highest standards of construction has made
                Kotian Infrra a trusted name in the real estate sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-md mx-auto md:mx-0 rounded-lg overflow-hidden border border-border aspect-square min-h-[320px]">
              <Image
                src="/images/Sagar-Patel.png"
                alt="Mr. Sagar Patel - Partner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                Mr Sagar <span className="text-primary">Patel</span>
              </h2>
              <p className="text-primary font-medium mb-6">Partner</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 15 years of experience in the real estate industry, Mr Sagar Patel brings extensive expertise and strategic vision to Kotian Infrra as a valued partner. His
                deep understanding of the real estate market and commitment to excellence has been instrumental in
                driving the company's growth and success.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With a focus on innovation and customer satisfaction, Mr Patel works closely with the team to ensure
                every project meets the highest standards of quality and delivers exceptional value to homebuyers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His collaborative approach and dedication to building lasting relationships have strengthened Kotian
                Infrra's position as a trusted name in Navi Mumbai and Mumbai's real estate sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality homes that exceed customer expectations while maintaining affordability and timely
                delivery.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted real estate developer in Navi Mumbai and Mumbai, known for integrity, quality, and customer
                satisfaction.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, transparency, quality craftsmanship, and an unwavering commitment to customer satisfaction
                guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground">Over two and a half decades of building dreams and creating communities</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-lg text-foreground">The Beginning</h3>
                  <p className="text-primary text-sm mb-2">1990s</p>
                  <p className="text-muted-foreground">
                    Mr. Subhakar Kotian founded Kotian Infrra with a vision to provide quality homes in Navi Mumbai and Mumbai.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-lg text-foreground">Expansion</h3>
                  <p className="text-primary text-sm mb-2">2000s</p>
                  <p className="text-muted-foreground">
                    Expanded operations across Ulwe, Karanjade, and Kamothe, completing multiple successful projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="w-0.5 h-full bg-border" />
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-lg text-foreground">Milestone Achievement</h3>
                  <p className="text-primary text-sm mb-2">2010s</p>
                  <p className="text-muted-foreground">
                    Crossed 1 million sq.ft of delivered space and served over 1000+ happy families across Navi Mumbai and Mumbai.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Present & Future</h3>
                  <p className="text-primary text-sm mb-2">2020s</p>
                  <p className="text-muted-foreground">
                    Continuing to build quality homes with 3 ongoing projects and a commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
