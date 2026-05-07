import { googleConfig } from "../config/googleConfig"

const MAPS_API_KEY = googleConfig.mapsApiKey || import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const isConfigured =
  MAPS_API_KEY && MAPS_API_KEY !== "PEGA_AQUI_TU_GOOGLE_MAPS_API_KEY"

function GoogleMapEmbed({ query, title = "Ubicacion en Google Maps" }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

  if (!isConfigured) {
    return (
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="block rounded-2xl bg-[#0d6e7a] px-4 py-3 text-center text-sm font-bold text-white"
      >
        Abrir en Google Maps
      </a>
    )
  }

  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(query)}`

  return (
    <div className="overflow-hidden rounded-2xl bg-gray-100">
      <iframe
        title={title}
        src={embedUrl}
        className="h-56 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="block bg-[#0d6e7a] px-4 py-3 text-center text-sm font-bold text-white"
      >
        Ver ruta en Google Maps
      </a>
    </div>
  )
}

export default GoogleMapEmbed
