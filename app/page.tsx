import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Building2, Users, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatsCounter from "@/components/stats-counter"
import ProjectCard from "@/components/project-card"
import { completedProjects, ongoingProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Kotian Infrra is a trusted real estate developer in Navi Mumbai and Mumbai. Explore ongoing and completed residential projects in Ulwe, Karanjade, and Kamothe.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
}

export default function HomePage() {
  const featuredProjects = [...completedProjects.slice(0, 3), ...ongoingProjects.slice(0, 1)]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/Banner.jpg"
            alt="Exclusive 1 & 2 BHK Apartments - Karanjade"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Main Brand Section */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <Image
                src="/images/logo.png"
                alt="Kotian Infrra Logo"
                width={120}
                height={120}
                className="mx-auto mb-4 sm:mb-5 md:mb-6 rounded-lg w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2 md:mb-3">
                Building Dreams
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4 md:mb-5">
                Since 25+ Years
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto px-2 sm:px-4">
                Your trusted partner in real estate development. Creating quality homes and commercial spaces in Navi Mumbai and Mumbai.
              </p>
            </div>

            {/* Apartment Details Section */}
            <div className="mx-auto w-full max-w-5xl px-2 sm:px-0">
              <div className="rounded-xl sm:rounded-2xl border border-white/20 bg-black/70 backdrop-blur-md p-4 sm:p-5 md:p-6 lg:p-7">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white text-balance text-center mb-3 sm:mb-4 md:mb-5">
                  Exclusive <span className="text-primary">1 & 2 BHK</span> Apartments
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <div className="rounded-lg bg-white/10 p-2.5 sm:p-3 md:p-4 hover:bg-white/15 transition-colors">
                    <p className="text-xs md:text-sm text-gray-300">Location</p>
                    <p className="mt-1 font-medium text-white text-sm sm:text-base md:text-lg">Karanjade</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-2.5 sm:p-3 md:p-4 hover:bg-white/15 transition-colors">
                    <p className="text-xs md:text-sm text-gray-300">1 BHK</p>
                    <p className="mt-1 font-medium text-white text-sm sm:text-base md:text-lg">45 Lacs + taxes</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-2.5 sm:p-3 md:p-4 hover:bg-white/15 transition-colors">
                    <p className="text-xs md:text-sm text-gray-300">2 BHK</p>
                    <p className="mt-1 font-medium text-white text-sm sm:text-base md:text-lg">70 Lacs + taxes</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-2.5 sm:p-3 md:p-4 hover:bg-white/15 transition-colors">
                    <p className="text-xs md:text-sm text-gray-300">Tower</p>
                    <p className="mt-1 font-medium text-white text-sm sm:text-base md:text-lg">G+13 Storey</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-2.5 sm:p-3 md:p-4 hover:bg-white/15 transition-colors">
                    <p className="text-xs md:text-sm text-gray-300">Amenities</p>
                    <p className="mt-1 font-medium text-white text-sm sm:text-base md:text-lg">Rooftop amenities</p>
                  </div>
                  <a href="tel:9326421282" className="rounded-lg bg-white/10 p-2.5 sm:p-3 md:p-4 hover:bg-white/20 transition-colors">
                    <p className="text-xs md:text-sm text-gray-300">Contact</p>
                    <p className="mt-1 font-semibold text-primary text-sm sm:text-base md:text-lg">9326421282</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsCounter />

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Trusted Name in <span className="text-primary">Real Estate</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by Mr. Subhakar Kotian, Kotian Infrra has been transforming the real estate landscape of Navi
                Mumbai for over three decades. Our commitment to quality construction and customer satisfaction has made
                us a preferred choice for homebuyers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Quality Construction</h4>
                    <p className="text-sm text-muted-foreground">Premium materials & finishes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Customer First</h4>
                    <p className="text-sm text-muted-foreground">1000+ happy families</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Timely Delivery</h4>
                    <p className="text-sm text-muted-foreground">On-time project completion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground">Trusted Legacy</h4>
                    <p className="text-sm text-muted-foreground">30+ years of excellence</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/sai-20palace-20-7bkaranjade-7d.jpeg"
                alt="Kotian Infrra Project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of residential projects across Navi Mumbai and Mumbai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                location={project.location}
                image={project.image}
                status={project.status}
                whatsappMessage={project.whatsappMessage}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-primary/30 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Ready to Find Your Dream Home?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get in touch with our team to explore our ongoing and upcoming projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:9326421282">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Call: 9326421282
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
                >
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
