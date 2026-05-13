import { useEffect, useRef, useState } from "react"

const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

function OpenStreetMapEmbed({ query, coordinates, title = "Ubicación en el mapa" }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const init = async () => {
      try {
        setError(false)
        setLoading(true)

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

        let lat = coordinates?.lat
        let lon = coordinates?.lon
        let displayName = query

        if (lat === undefined || lon === undefined) {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
            { headers: { "Accept-Language": "es" } },
          )
          const data = await res.json()

          if (cancelled) return
          if (!data.length) {
            setError(true)
            setLoading(false)
            return
          }

          lat = data[0].lat
          lon = data[0].lon
          displayName = data[0].display_name
        }

        if (cancelled || !mapRef.current) return

        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        }

        const numericLat = parseFloat(lat)
        const numericLon = parseFloat(lon)
        const map = window.L.map(mapRef.current, { zoomControl: true }).setView(
          [numericLat, numericLon],
          15,
        )
        mapInstanceRef.current = map

        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: OSM_ATTRIBUTION,
          maxZoom: 19,
        }).addTo(map)

        window.L.marker([numericLat, numericLon])
          .addTo(map)
          .bindPopup(displayName)
          .openPopup()

        setLoading(false)
      } catch {
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
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
  }, [query, coordinates])

  return (
    <div
      className="overflow-hidden rounded-2xl bg-gray-100"
      style={{ position: "relative", zIndex: 0 }}
    >
      <div style={{ height: "224px", width: "100%", position: "relative" }}>
        {loading && !error && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#eaf8fb",
              fontSize: "13px",
              color: "#0d6e7a",
            }}
          >
            Cargando mapa...
          </div>
        )}
        {error && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#eaf8fb",
              fontSize: "13px",
              color: "#666",
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
