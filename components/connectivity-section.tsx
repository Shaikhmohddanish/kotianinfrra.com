import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export type ConnectivityItem = {
  src: string
  label: string
  alt: string
}

export default function ConnectivitySection({ items }: { items: ConnectivityItem[] }) {
  if (!items?.length) return null

  return (
    <section className="py-16 md:py-24 pb-28 md:pb-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nearby <span className="text-primary">Connectivity</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need—education, transport, healthcare, and daily essentials—close to your home.
          </p>
        </div>

        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" aria-label="Connectivity highlights">
          {items.map((item) => (
            <li key={item.src} className="h-full">
              <Card className="h-full overflow-hidden bg-card/70 border-border/70 hover:border-primary/60 hover:bg-card transition-colors">
                <div className="relative aspect-video">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 240px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/25 to-transparent p-4">
                    <p className="font-semibold text-lg sm:text-base text-white leading-snug">{item.label}</p>
                  </div>
                </div>

                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Connectivity</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
