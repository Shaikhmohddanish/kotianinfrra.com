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

export interface ProjectDetails {
  sector?: string
  storeys?: string
  constructionStatus?: string
  possession?: string
  unitTypes?: string[]
  pricing?: ProjectUnitPricing[]
  amenities?: string[]
  reraNumber?: string
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
    },
  },
]

export const allProjects: Project[] = [...ongoingProjects, ...completedProjects]

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug)
}
