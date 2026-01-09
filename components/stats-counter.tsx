"use client"

import { useEffect, useState, useRef } from "react"

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 3, suffix: "", label: "Ongoing Projects" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 1000000, suffix: "+", label: "Sq.Ft Delivered" },
]

function useCountUp(end: number, duration = 2000, start: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return count
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const count = useCountUp(stat.value, 2000, start)

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num.toString()
  }

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
        {stat.value >= 1000 ? formatNumber(count) : count}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base text-foreground/80">{stat.label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} start={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
