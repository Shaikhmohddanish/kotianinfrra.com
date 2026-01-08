import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kotian Infra for enquiries, pricing, and site visits. Reach us via phone, email, or WhatsApp in Navi Mumbai.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <HeroSection
          title="Contact Us"
          subtitle="Get in touch with our team for enquiries and site visits"
          backgroundImage="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop"
        />
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    Quick <span className="text-primary">Contact</span>
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    Prefer a faster response? Call, WhatsApp, or email us directly.
                  </p>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a href="tel:9326421282" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </a>
                    <a
                      href={`https://wa.me/919326421282?text=${encodeURIComponent(
                        "Hello! I would like to enquire about your projects. Please share details and site visit availability.",
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-foreground hover:text-background bg-transparent"
                      >
                        WhatsApp
                      </Button>
                    </a>
                    <a href="mailto:Kotianinfrra@gmail.com" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-foreground hover:text-background bg-transparent"
                      >
                        Email
                      </Button>
                    </a>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border p-4">
                      <h3 className="font-semibold text-foreground">For site visits</h3>
                      <p className="text-sm text-muted-foreground mt-1">Share your preferred date & time.</p>
                    </div>
                    <div className="rounded-lg border border-border p-4">
                      <h3 className="font-semibold text-foreground">For pricing</h3>
                      <p className="text-sm text-muted-foreground mt-1">Mention project name and budget range.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Contact <span className="text-primary">Information</span>
              </h2>

              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Head Office</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Shop no.154,155, Agarwal Trade Center, Plot no.62, Sec-11, C.B.D Belapur, Navi Mumbai - 400614
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                        <a
                          href="tel:9326421282"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          +91 9326421282
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                        <a
                          href="mailto:Kotianinfrra@gmail.com"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          Kotianinfrra@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Office Hours</h3>
                        <p className="text-muted-foreground text-sm">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                        <p className="text-muted-foreground text-sm">Sunday: By Appointment</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Embed */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4 text-foreground">Find Us</h3>
                <div className="aspect-video rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5853455768254!2d73.03673731490193!3d19.02159558713899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0x4ae1b87d7f05c0d3!2sAgarwal%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kotian Infra Office Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
