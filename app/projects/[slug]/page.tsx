import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MapPin, Calendar, Building2, BadgeCheck, Phone, MessageCircle, ArrowLeft } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ongoingProjects, getProjectBySlug } from "@/lib/projects"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ongoingProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const descriptionParts = [project.details?.sector, project.details?.storeys, project.details?.possession].filter(Boolean)

  return {
    title: `${project.name} | Kotian Infrra`,
    description: descriptionParts.length ? `${project.name} — ${descriptionParts.join(" • ")}` : `${project.name} project details`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      url: `/projects/${project.slug}`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  }
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  // Only allow details pages for ongoing projects for now.
  if (!project || project.status !== "ongoing") {
    notFound()
  }

  const phoneDisplay = "9326421282"
  const phoneE164 = "919326421282"

  const defaultMessage = `Hello! I'm interested in ${project.name} (${project.location}). Please share details like price, floor plans, and site visit availability.`
  const whatsappUrl = `https://wa.me/${phoneE164}?text=${encodeURIComponent(project.whatsappMessage ?? defaultMessage)}`

  const sector = project.details?.sector
  const storeys = project.details?.storeys
  const constructionStatus = project.details?.constructionStatus
  const possession = project.details?.possession
  const unitTypes = project.details?.unitTypes ?? []
  const pricing = project.details?.pricing ?? []
  const amenities = project.details?.amenities ?? []
  const reraNumber = project.details?.reraNumber
  const map = project.details?.map

  return (
    <>
      {/* Header offset */}
      <div className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.name} - ${project.location}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-background" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            <div className="flex items-center justify-between gap-4">
              <Button variant="outline" className="bg-background/20 border-white/20 text-white hover:bg-background/30" asChild>
                <Link href="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              </Button>

              <Badge className="bg-primary text-primary-foreground">Ongoing Project</Badge>
            </div>

            <div className="mt-8 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance">{project.name}</h1>

              <div className="mt-4 flex flex-wrap gap-3 text-white/90">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{sector ?? project.location}</span>
                </div>
                {storeys && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">{storeys}</span>
                  </div>
                )}
                {possession && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm">Possession: {possession}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href={`tel:${phoneDisplay}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>

                <Button variant="outline" className="border-white/25 bg-background/10 text-white hover:bg-background/20 hover:text-white" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Enquiry
                  </a>
                </Button>
              </div>

              {constructionStatus && (
                <p className="mt-6 text-white/80 leading-relaxed">
                  <span className="font-medium text-white">Status:</span> {constructionStatus}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="text-sm font-medium text-foreground text-right">{sector ?? project.location}</div>
                    </div>
                    {storeys && (
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-sm text-muted-foreground">Structure</div>
                        <div className="text-sm font-medium text-foreground text-right">{storeys}</div>
                      </div>
                    )}
                    {constructionStatus && (
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-sm text-muted-foreground">Construction</div>
                        <div className="text-sm font-medium text-foreground text-right">{constructionStatus}</div>
                      </div>
                    )}
                    {possession && (
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-sm text-muted-foreground">Possession</div>
                        <div className="text-sm font-medium text-foreground text-right">{possession}</div>
                      </div>
                    )}
                    {reraNumber && (
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-sm text-muted-foreground">RERA</div>
                        <div className="text-sm font-medium text-foreground text-right break-all">{reraNumber}</div>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <BadgeCheck className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For floor plans, current availability, and site visits, connect with our team via call or WhatsApp.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {map && (
                <Card className="border-border lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Location & Map</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">{sector ?? project.location}</span> 
                        <Button variant="outline" size="sm" asChild>
                          <a href={map.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                            Open in Google Maps
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="relative w-full overflow-hidden rounded-lg border border-border bg-card aspect-[16/9]">
                      <iframe
                        src={map.embedUrl}
                        className="absolute inset-0 h-full w-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${project.name} location map`}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card className="border-border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Units & Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  {unitTypes.length === 0 && pricing.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Pricing details will be shared on enquiry.</p>
                  ) : (
                    <div className="space-y-4">
                      {unitTypes.length > 0 && (
                        <div>
                          <div className="text-sm font-medium text-foreground mb-2">Available Units</div>
                          <div className="flex flex-wrap gap-2">
                            {unitTypes.map((t) => (
                              <Badge key={t} variant="secondary" className="bg-muted text-foreground">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {pricing.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-3">
                          {pricing.map((p) => (
                            <div key={`${p.label}-${p.price}`} className="rounded-lg border border-border bg-card p-4">
                              <div className="text-sm text-muted-foreground">{p.label}</div>
                              <div className="mt-1 text-base font-semibold text-foreground">{p.price}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Enquiry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={`tel:${phoneDisplay}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call {phoneDisplay}
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Share your preferred unit type and budget — we’ll respond with availability and next steps.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-xl">Amenities & Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  {amenities.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Amenities information will be shared on enquiry.</p>
                  ) : (
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {amenities.map((a) => (
                        <li key={a} className="text-sm text-foreground flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
