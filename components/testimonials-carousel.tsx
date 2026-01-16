"use client"

import { useEffect, useState } from "react"
import { Quote, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/lib/testimonials"

function Stars({ rating }: { rating?: Testimonial["rating"] }) {
  const safeRating = rating ?? 5
  return (
    <div className="flex items-center gap-0.5 sm:gap-1" aria-label={`${safeRating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, idx) => {
        const filled = idx < safeRating
        return (
          <Star
            key={idx}
            className={cn(
              "h-3.5 w-3.5 sm:h-4 sm:w-4",
              filled ? "fill-primary text-primary" : "text-muted-foreground/40",
            )}
          />
        )
      })}
    </div>
  )
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 2000)

    return () => clearInterval(intervalId)
  }, [api])
  
  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: testimonials.length > 3 }}
      className="w-full px-4 sm:px-0"
    >
      <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
        {testimonials.map((t, idx) => (
          <CarouselItem key={`${t.name}-${idx}`} className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
            <Card className="h-full bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="flex h-full flex-col p-4 sm:p-5 md:p-6">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
                    <p className="font-semibold text-sm sm:text-base text-foreground truncate">{t.name}</p>
                    {(t.location || t.date) && (
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">
                        {[t.location, t.date].filter(Boolean).join(" • ")}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 rounded-full bg-primary/15 p-1.5 sm:p-2 text-primary">
                    <Quote className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </div>

                <div className="mt-2 sm:mt-3">
                  <Stars rating={t.rating} />
                </div>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-sm leading-relaxed text-muted-foreground line-clamp-6 md:line-clamp-none">"{t.quote}"</p>

                {(t.sourceLabel || t.sourceUrl) && (
                  <div className="mt-auto pt-4 sm:pt-5 border-t border-border text-xs sm:text-sm">
                    {t.sourceUrl ? (
                      <a
                        href={t.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-block"
                      >
                        {t.sourceLabel ?? "View source"}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{t.sourceLabel}</span>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden sm:flex -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2" />
      <CarouselNext className="hidden sm:flex -right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2" />
    </Carousel>
  )
}
