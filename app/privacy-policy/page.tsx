import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Privacy Policy | Kotian Infrra",
  description:
    "Read Kotian Infrra's privacy policy covering what information we collect, how we use it, and your choices.",
}

export default function PrivacyPolicyPage() {
  const effectiveDate = "8 January 2026"

  return (
    <>
      <div className="pt-16 md:pt-20">
        <HeroSection
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information"
          backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        />
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-6 md:p-10 space-y-8">
            <div>
              <p className="text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                This Privacy Policy explains how Kotian Infrra ("we", "us", "our") collects, uses, discloses, and
                protects information when you visit our website or contact us.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Contact details you provide (such as name, phone number, email, and message content) when you submit
                  an enquiry.
                </li>
                <li>
                  Project interest details you provide (for example, the project name or location you are interested
                  in).
                </li>
                <li>
                  Basic usage/analytics data (for example, pages visited and interactions) to understand site
                  performance and improve user experience.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">How We Use Information</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>To respond to your enquiries and requests.</li>
                <li>To share information about projects, availability, pricing, and site visits when requested.</li>
                <li>To operate, maintain, and improve our website and services.</li>
                <li>To protect against fraud, abuse, and security incidents.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">WhatsApp and Phone Calls</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you contact us via WhatsApp or phone, your communication will be handled through those platforms.
                Their privacy practices are governed by their own policies.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Sharing of Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share information only when necessary to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Provide requested services or respond to your enquiry.</li>
                <li>Comply with legal obligations or lawful requests.</li>
                <li>Protect the rights, safety, and security of our customers and business.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain enquiry information for as long as needed to respond to you, maintain business records, and
                comply with legal requirements.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use reasonable administrative and technical safeguards to protect your information. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Your Choices</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>You can choose not to submit personal information, but some features may not work.</li>
                <li>You may request updates or deletion of your enquiry information by contacting us.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <div className="text-muted-foreground">
                <p>Email: Kotianinfrra@gmail.com</p>
                <p>Phone: +91 9326421282</p>
                <p>
                  Address: Shop no.154,155, Agarwal Trade Center, Plot no.62, Sec-11, C.B.D Belapur, Navi Mumbai -
                  400614
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                Note: This page provides general information and may need review to match your actual processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
