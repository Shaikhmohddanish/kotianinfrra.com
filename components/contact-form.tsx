"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
        Send Us a <span className="text-primary">Message</span>
      </h2>

      {isSubmitted ? (
        <Card className="bg-card border-border">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Thank You!</h3>
            <p className="text-muted-foreground">
              Your message has been sent successfully. Our team will contact you shortly.
            </p>
          </CardContent>
        </Card>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Full Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required className="bg-input border-border" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                required
                className="bg-input border-border"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="bg-input border-border"
            />
          </div>
          <div>
            <label htmlFor="project" className="block text-sm font-medium mb-2 text-foreground">
              Interested Project
            </label>
            <Input
              id="project"
              name="project"
              placeholder="Which project are you interested in?"
              className="bg-input border-border"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about your requirements..."
              rows={4}
              required
              className="bg-input border-border"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </>
  )
}
