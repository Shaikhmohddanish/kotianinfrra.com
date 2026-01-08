import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kotian Infra",
    short_name: "Kotian Infra",
    description: "Real estate developer in Navi Mumbai with 30+ years of experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#C9A227",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  }
}
