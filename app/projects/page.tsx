import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import ProjectCard from "@/components/project-card"
import { completedProjects, ongoingProjects } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Our Projects | Kotian Infra",
  description:
    "Explore our portfolio of completed and ongoing residential projects in Ulwe, Karanjade, and Kamothe, Navi Mumbai.",
}

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <HeroSection
          title="Our Projects"
          subtitle="Explore our portfolio of quality residential developments across Navi Mumbai"
          backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
        />
      </div>

      {/* Ongoing Projects */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ongoing <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground">Currently under development - Book your dream home today</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project) => (
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
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 md:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Completed <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground">Successfully delivered projects with 100% customer satisfaction</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {completedProjects.map((project) => (
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
        </div>
      </section>
    </>
  )
}
