import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import CallButton from "@/components/call-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://kotianinfrra.com"),
  title: {
    default: "Kotian Infrra - Building Dreams Since 30+ Years",
    template: "%s | Kotian Infrra",
  },
  description:
    "Kotian Infrra is a leading real estate developer in Navi Mumbai and Mumbai with 25+ years of experience, 20+ completed projects, and 1000+ happy customers. Explore our residential projects in Ulwe, Karanjade, and Kamothe.",
  keywords: "real estate, Navi Mumbai, Mumbai, apartments, flats, Ulwe, Karanjade, Kamothe, Kotian Infrra, residential projects",
  authors: [{ name: "Kotian Infrra" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kotian Infrra - Building Dreams Since 25+ Years",
    description: "Leading real estate developer in Navi Mumbai and Mumbai with 20+ completed projects and 1000+ happy customers.",
    url: "/",
    siteName: "Kotian Infrra",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Kotian Infrra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotian Infrra - Building Dreams Since 25+ Years",
    description: "Leading real estate developer in Navi Mumbai and Mumbai with 20+ completed projects and 1000+ happy customers.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [{ url: "/images/logo.png" }],
    shortcut: [{ url: "/images/logo.png" }],
    apple: [{ url: "/images/logo.png" }],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C9A227",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Kotian Infrra",
    url: "https://kotianinfrra.com",
    logo: "https://kotianinfrra.com/images/logo.png",
    telephone: "+91 9326421282",
    email: "Kotianinfrra@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop no.154,155, Agarwal Trade Center, Plot no.62, Sec-11, C.B.D Belapur",
      addressLocality: "Navi Mumbai",
      postalCode: "400614",
      addressCountry: "IN",
    },
  }

  return (
    <html lang="en">
      <head>
        <Script
          id="kotian-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CallButton />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
