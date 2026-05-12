import { useEffect, useRef, useState } from "react"

const OSM_ATTRIBUTION = '\u00a9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

function OpenStreetMapEmbed({ query, title = "Ubicación en el mapa" }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const osmUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`

  useEffect(() => {
    let cancelled = false

    const init = async () => {
      try {
        if (!window.L) {
          const link = document.createElement("link")
          link.rel = "stylesheet"
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          document.head.appendChild(link)

          await new Promise((resolve, reject) => {
            const script = document.createElement("script")
            script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            script.onload = resolve
            script.onerror = reject
            document.head.appendChild(script)
          })
        }

        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
          { headers: { "Accept-Language": "es" } }
        )
        const data = await res.json()

        if (cancelled) return
        if (!data.length) { setError(true); setLoading(false); return }

        const { lat, lon, display_name } = data[0]

        if (!mapRef.current) return
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        }

        const map = window.L.map(mapRef.current, { zoomControl: true }).setView(
          [parseFloat(lat), parseFloat(lon)],
          15
        )
        mapInstanceRef.current = map

        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: OSM_ATTRIBUTION,
          maxZoom: 19,
        }).addTo(map)

        window.L.marker([parseFloat(lat), parseFloat(lon)])
          .addTo(map)
          .bindPopup(display_name)
          .openPopup()

        setLoading(false)
      } catch (e) {
        if (!cancelled) { setError(true); setLoading(false) }
      }
    }

    init()

    return () => {
      cancelled = true
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [query])

  return (
<div className="overflow-hidden rounded-2xl bg-gray-100" style={{ position: "relative", zIndex: 0 }}>
      <div style={{ height: "224px", width: "100%", position: "relative" }}>
        {loading && !error && (
          <div
            style={{
              position: "absolute", inset: 0, zIndex: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#eaf8fb", fontSize: "13px", color: "#0d6e7a",
            }}
          >
            Cargando mapa...
          </div>
        )}
        {error && (
          <div
            style={{
              position: "absolute", inset: 0, zIndex: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#eaf8fb", fontSize: "13px", color: "#666",
            }}
          >
            No se pudo cargar el mapa
          </div>
        )}
        <div ref={mapRef} style={{ height: "100%", width: "100%" }} title={title} />
      </div>
      
    </div>
  )
}

export default OpenStreetMapEmbed