import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage: string
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] max-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground text-balance">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
