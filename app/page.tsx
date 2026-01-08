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
    "Kotian Infra is a trusted real estate developer in Navi Mumbai. Explore ongoing and completed residential projects in Ulwe, Karanjade, and Kamothe.",
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
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Kotian Infra - Building Dreams"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Image
            src="/images/logo.png"
            alt="Kotian Infra Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-lg"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground text-balance">
            Building Dreams <span className="text-primary">Since 30+ Years</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Your trusted partner in real estate development. Creating quality homes and commercial spaces in Navi
            Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
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
                Founded by Mr. Subhakar Kotian, Kotian Infra has been transforming the real estate landscape of Navi
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
                alt="Kotian Infra Project"
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
              Explore our portfolio of residential projects across Navi Mumbai
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
