import { Phone } from "lucide-react"

export default function CallButton() {
  const phoneNumber = "9326421282"

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-primary text-primary-foreground p-3 sm:p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label={`Call ${phoneNumber}`}
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  )
}
