export interface Project {
  id: string
  slug: string
  name: string
  location: string
  image: string
  status: "completed" | "ongoing"
  whatsappMessage?: string
  details?: ProjectDetails
}

export interface ProjectUnitPricing {
  label: string
  price: string
}

export interface ProjectMapLocation {
  lat: number
  lng: number
  googleMapsUrl: string
  googleMapsShortUrl?: string
  embedUrl: string
}

export interface ProjectDetails {
  sector?: string
  storeys?: string
  constructionStatus?: string
  possession?: string
  unitTypes?: string[]
  pricing?: ProjectUnitPricing[]
  amenities?: string[]
  reraNumber?: string
  map?: ProjectMapLocation
}

export const completedProjects: Project[] = [
  {
    id: "1",
    slug: "exotica-ulwe",
    name: "Exotica",
    location: "Ulwe",
    image: "/images/exotica-ulwe.jpeg",
    status: "completed",
  },
  {
    id: "2",
    slug: "paradise-ulwe",
    name: "Paradise",
    location: "Ulwe",
    image: "/images/paradise-20-7bulwe-7d.jpeg",
    status: "completed",
  },
  {
    id: "3",
    slug: "arcade-karanjade",
    name: "Arcade",
    location: "Karanjade",
    image: "/images/arcade-20karanjade.jpeg",
    status: "completed",
  },
  {
    id: "4",
    slug: "sai-palace-karanjade-completed",
    name: "Sai Palace",
    location: "Karanjade",
    image: "/images/sai-20palace-20-7bkaranjade-7d.jpeg",
    status: "completed",
  },
  {
    id: "5",
    slug: "sai-supreme-villa-karanjade",
    name: "Sai Supreme Villa",
    location: "Karanjade",
    image: "/images/sai-20supreme-20villa-karanjade.jpeg",
    status: "completed",
  },
  {
    id: "6",
    slug: "sai-samarpan-kamothe",
    name: "Sai Samarpan",
    location: "Kamothe",
    image: "/images/sai-20samarpan-20-28kamothe-29.jpeg",
    status: "completed",
  },
  {
    id: "7",
    slug: "krishna-villa-karanjade",
    name: "Krishna Villa",
    location: "Karanjade",
    image: "/images/krishna-20villa-20-7bkaranjade-7d.jpeg",
    status: "completed",
  },
  {
    id: "8",
    slug: "nakshatra-ulwe",
    name: "Nakshatra",
    location: "Ulwe",
    image: "/images/nakshatra-20-7bulwe-7d.jpeg",
    status: "completed",
  },
]

export const ongoingProjects: Project[] = [
  {
    id: "10",
    slug: "sai-palace-sec-1-karanjade",
    name: "Sai Palace",
    location: "Karanjade",
    image: "/images/sai-20palace-20-7bkaranjade-7d.jpeg",
    status: "ongoing",
    whatsappMessage: "Hello! I'm interested in Sai Palace (Karanjade). Please share details like price, floor plans, and site visit availability.",
    details: {
      sector: "Sec-1, Karanjade",
      storeys: "G+7 Storey Tower",
      constructionStatus: "Nearing Possession",
      possession: "Mar 2026",
      unitTypes: ["1 BHK"],
      pricing: [{ label: "1 BHK", price: "Starting 40 Lacs onwards" }],
      reraNumber: "P52000077254",
      map: {
        lat: 18.977045,
        lng: 73.089897,
        googleMapsUrl: "https://www.google.com/maps?q=18.977045,73.089897",
        googleMapsShortUrl: "https://maps.app.goo.gl/PZxxt335c6yNQ7EF6",
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.9674476533437!2d73.08732207520285!3d18.97704498220731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU4JzM3LjQiTiA3M8KwMDUnMjMuNiJF!5e0!3m2!1sen!2sin!4v1768225259159!5m2!1sen!2sin",
      },
    },
  },
  {
    id: "11",
    slug: "sai-dham-sec-2a-karanjade",
    name: "Sai Dham",
    location: "Karanjade",
    image: "/images/Sai Dham.jpg",
    status: "ongoing",
    whatsappMessage: "Hello! I'm interested in Sai Dham (Karanjade). Please share details like price, floor plans, and site visit availability.",
    details: {
      sector: "Sec-2A, Karanjade",
      storeys: "G+13 Storey Tower",
      constructionStatus: "Under construction",
      possession: "Jun 2028",
      unitTypes: ["1 BHK", "2 BHK"],
      pricing: [
        { label: "1 BHK", price: "45 Lacs + taxes" },
        { label: "2 BHK", price: "70 Lacs + taxes" },
      ],
      amenities: ["Rooftop amenities"],
      reraNumber: "PR1270002500655",
      map: {
        lat: 18.982859,
        lng: 73.101036,
        googleMapsUrl: "https://www.google.com/maps?q=18.982859,73.101036",
        googleMapsShortUrl: "https://maps.app.goo.gl/nWSsA3GHhqhsfu3NA",
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.8357718873194!2d73.09846107520305!3d18.98285898220258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU4JzU4LjMiTiA3M8KwMDYnMDMuNyJF!5e0!3m2!1sen!2sin!4v1768225208858!5m2!1sen!2sin",
      },
    },
  },
  {
    id: "12",
    slug: "shiv-emerald-sec-3-karanjade",
    name: "Shiv Emerald",
    location: "Karanjade",
    image: "/images/shiv-emerald-karanjade.jpeg",
    status: "ongoing",
    whatsappMessage: "Hello! I'm interested in Shiv Emerald (Karanjade). Please share details like price, floor plans, and site visit availability.",
    details: {
      sector: "Sec-3, Karanjade",
      storeys: "G+4 Storey",
      constructionStatus: "Nearing Possession",
      possession: "Mar 2026",
      unitTypes: ["1 BHK", "1 RK"],
      pricing: [
        { label: "1 BHK", price: "40 Lacs (All inclusive)" },
        { label: "1 RK", price: "30 Lacs (All inclusive)" },
      ],
      reraNumber: "P52000056176",
      map: {
        lat: 18.979488,
        lng: 73.100319,
        googleMapsUrl: "https://www.google.com/maps?q=18.979488,73.100319",
        googleMapsShortUrl: "https://maps.app.goo.gl/noBcQwGSexCUd6mL8",
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.9121231982112!2d73.09774407520288!3d18.979487982205377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU4JzQ2LjIiTiA3M8KwMDYnMDEuMiJF!5e0!3m2!1sen!2sin!4v1768225298349!5m2!1sen!2sin",
      },
    },
  },
]

export const allProjects: Project[] = [...ongoingProjects, ...completedProjects]

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug)
}
