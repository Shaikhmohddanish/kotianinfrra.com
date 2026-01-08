import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Terms & Conditions | Kotian Infra",
  description:
    "Read the terms and conditions for using the Kotian Infra website, including disclaimers, limitations, and policies.",
}

export default function TermsAndConditionsPage() {
  const effectiveDate = "8 January 2026"

  return (
    <>
      <div className="pt-16 md:pt-20">
        <HeroSection
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our website"
          backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
        />
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-6 md:p-10 space-y-8">
            <div>
              <p className="text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please
                do not use the website.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Use of Website</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>You agree to use the website only for lawful purposes.</li>
                <li>You must not attempt to disrupt the website, access restricted areas, or misuse any features.</li>
                <li>
                  Content is provided for general information about our projects and services and may be updated
                  without notice.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Enquiries and Communications</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you submit an enquiry or contact us via phone or WhatsApp, you authorize us to respond using the
                contact details you provide.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Project Information Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Images, plans, specifications, pricing, availability, timelines, and other project information on this
                website are indicative and may change. Final details are subject to approvals, agreements, and
                applicable regulations.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless stated otherwise, the website content (including text, logos, and images) is owned by or
                licensed to Kotian Infra. You may not copy, reproduce, or distribute content without permission.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                The website may include links to third-party sites (for example, WhatsApp, Google Maps). We are not
                responsible for their content or practices.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the extent permitted by law, Kotian Infra will not be liable for indirect, incidental, special, or
                consequential damages arising from your use of this website.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms & Conditions from time to time. Continued use of the website means you accept
                the updated terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">For questions about these terms, contact us at:</p>
              <div className="text-muted-foreground">
                <p>Email: Kotianinfrra@gmail.com</p>
                <p>Phone: +91 9326421282</p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                Note: This page provides general information and may need review to match your actual business
                policies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
