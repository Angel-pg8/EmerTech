import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/loguito.png"
import BackButton from "../components/BackButton"
import imgConvulsion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/convulsionleve-GRAVE.png"
import imgFractura from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/fracturadebrazo-GRAVES.png"
import imgIntoxicacion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/intoxicacionalimentaria-GRAVE.png"
import imgMordida from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/mordidadeanimal-GRAVE.png"

const emergencias = [
  {
    id: "Convulción leve",
    nombre: "Convulsión",
    imagen: imgConvulsion,
  },
  {
    id: "Fractura de brazo",
    nombre: "Fractura de brazo",
    imagen: imgFractura,
  },
  {
    id: "intoxicacion alimentaria",
    nombre: "Intoxicación alimentaria",
    imagen: imgIntoxicacion,
  },
  {
    id: "Mordedura de animal",
    nombre: "Mordida de animal",
    imagen: imgMordida,
  },
]

export default function EmergenciasGrave() {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState("")

  const filtradas = emergencias.filter((emergencia) =>
    emergencia.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="min-h-screen pb-20" style={{ backgroundColor: "#0d1120" }}>

      {/* HEADER */}
      <div style={{ backgroundColor: "#0d1120" }} className="px-4 pt-6 pb-4">
        <div className="mb-4 flex items-center gap-3">
          <BackButton onClick={() => navigate(-1)} className="shrink-0" />
          <img src={Logo} alt="Logo" className="h-10 w-10 object-contain" />
          <h1 className="text-2xl font-black text-white leading-tight">
            Más información sobre{" "}
            <span style={{ color: "#3EB9BC" }}>emergencias graves:</span>
          </h1>
        </div>

        {/* BUSCADOR */}
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ backgroundColor: "#1a2236" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0"
            style={{ color: "#3EB9BC" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar emergencia..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
          />
        </div>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-2 gap-3 px-4 pt-4">
        {filtradas.length === 0 ? (
          <p className="col-span-2 mt-10 text-center text-white/50">
            No se encontraron resultados
          </p>
        ) : (
          filtradas.map((emergencia) => (
            <div
              key={emergencia.id}
              onClick={() => navigate(`/emergencias/grave/${emergencia.id}`)}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              <img
                src={emergencia.imagen}
                alt={emergencia.nombre}
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <p className="text-xs font-bold leading-snug text-gray-800">
                  {emergencia.nombre}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}