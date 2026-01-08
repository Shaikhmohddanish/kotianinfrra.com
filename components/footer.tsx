import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Kotian Infra Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded"
              />
              <div>
                <span className="text-xl font-bold text-foreground">Kotian</span>
                <span className="text-xl font-bold text-primary"> Infra</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building dreams for over 30 years. Your trusted partner in real estate development in Navi Mumbai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a href="tel:9326421282" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  9326421282
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a
                  href="mailto:Kotianinfrra@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kotianinfrra@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Shop no.154,155, Agarwal Trade Center, Plot no.62, Sec-11, C.B.D Belapur, Navi Mumbai - 400614
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Office Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Saturday</li>
              <li>10:00 AM - 7:00 PM</li>
              <li className="pt-2">Sunday: By Appointment</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kotian Infra. All rights reserved.
            </p>
            <p className="text-sm text-primary">Building Trust, Delivering Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
