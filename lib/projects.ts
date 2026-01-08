export interface Project {
  id: string
  name: string
  location: string
  image: string
  status: "completed" | "ongoing"
  whatsappMessage?: string
}

export const completedProjects: Project[] = [
  {
    id: "1",
    name: "Exotica",
    location: "Ulwe",
    image: "/images/exotica-ulwe.jpeg",
    status: "completed",
  },
  {
    id: "2",
    name: "Paradise",
    location: "Ulwe",
    image: "/images/paradise-20-7bulwe-7d.jpeg",
    status: "completed",
  },
  {
    id: "3",
    name: "Arcade",
    location: "Karanjade",
    image: "/images/arcade-20karanjade.jpeg",
    status: "completed",
  },
  {
    id: "4",
    name: "Sai Palace",
    location: "Karanjade",
    image: "/images/sai-20palace-20-7bkaranjade-7d.jpeg",
    status: "completed",
  },
  {
    id: "5",
    name: "Sai Supreme Villa",
    location: "Karanjade",
    image: "/images/sai-20supreme-20villa-karanjade.jpeg",
    status: "completed",
  },
  {
    id: "6",
    name: "Sai Samarpan",
    location: "Kamothe",
    image: "/images/sai-20samarpan-20-28kamothe-29.jpeg",
    status: "completed",
  },
  {
    id: "7",
    name: "Krishna Villa",
    location: "Karanjade",
    image: "/images/krishna-20villa-20-7bkaranjade-7d.jpeg",
    status: "completed",
  },
  {
    id: "8",
    name: "Nakshatra",
    location: "Ulwe",
    image: "/images/nakshatra-20-7bulwe-7d.jpeg",
    status: "completed",
  },
]

export const ongoingProjects: Project[] = [
  {
    id: "9",
    name: "Sai Palace Phase 2",
    location: "Karanjade",
    image: "/images/sai-20palace-20-7bkaranjade-7d.jpeg",
    status: "ongoing",
  },
  {
    id: "10",
    name: "Kotian Heights",
    location: "Ulwe",
    image: "/images/exotica-ulwe.jpeg",
    status: "ongoing",
  },
  {
    id: "11",
    name: "Green Valley",
    location: "Kamothe",
    image: "/images/sai-20samarpan-20-28kamothe-29.jpeg",
    status: "ongoing",
  },
  {
    id: "12",
    name: "Shiv Emerald",
    location: "Karanjade",
    image: "/images/shiv-emerald-karanjade.jpeg",
    status: "ongoing",
    whatsappMessage: "Hello! I'm interested in Shiv Emerald (Karanjade). Please share details like price, floor plans, and site visit availability.",
  },
]
