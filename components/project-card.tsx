import Image from "next/image"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  name: string
  location: string
  image: string
  status: "completed" | "ongoing"
  whatsappMessage?: string
}

export default function ProjectCard({ name, location, image, status, whatsappMessage }: ProjectCardProps) {
  const phoneNumber = "919326421282"
  const defaultMessage = `Hello! I'm interested in ${name} (${location}). Please share details like price, floor plans, and site visit availability.`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage ?? defaultMessage)}`

  const content = (
    <Card
      className="overflow-hidden group bg-card border-border hover:border-primary/50 transition-colors cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge
          className={`absolute top-3 right-3 ${
            status === "completed"
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-primary hover:bg-primary/90 text-primary-foreground"
          }`}
        >
          {status === "completed" ? "Completed" : "Ongoing"}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-card-foreground">{name}</h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{location}</span>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={`Enquire about ${name} on WhatsApp`}
    >
      {content}
    </a>
  )
}
