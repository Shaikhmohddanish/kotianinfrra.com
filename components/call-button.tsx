import { Phone } from "lucide-react"

export default function CallButton() {
  const phoneNumber = "9326421282"

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-6 left-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label={`Call ${phoneNumber}`}
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
