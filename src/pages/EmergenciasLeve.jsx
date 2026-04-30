import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "../assets/loguito.png"
import imgDeshidratacion from "../assets/Portada_emergencias/Emergencias_leves_img/Deshidratacion.jpg"
import imgDolorCabeza from "../assets/Portada_emergencias/Emergencias_leves_img/dolor_cabeza.jpg"
import imgDolorOido from "../assets/Portada_emergencias/Emergencias_leves_img/dolor_oido.jpg"
import imgIntoxicacion from "../assets/Portada_emergencias/Emergencias_leves_img/intoxicacion.jpg"
import imgQuemadura from "../assets/Portada_emergencias/Emergencias_leves_img/quemadura_leve.jpg"

 const emergencias = [
  {
    id: "Dolor de oido",
    nombre: "Dolor de oído",
    tipo: "Otológica",
    imagen: imgDolorOido,
  },
  {
    id: "Dolor de cabeza",
    nombre: "Dolor de cabeza",
    tipo: "Neurológica",
    imagen: imgDolorCabeza,
  },
  {
    id: "Deshidratacion",
    nombre: "Deshidratación",
    tipo: "Metabólica",
    imagen: imgDeshidratacion,
  },
  {
    id: "Intoxicacion leve",
    nombre: "Intoxicación leve",
    tipo: "Toxicológica",
    imagen: imgIntoxicacion,
  },
  {
    id: "Quemadura leve",
    nombre: "Quemadura leve",
    tipo: "Lesión física",
    imagen: imgQuemadura,
  },
]
export default function EmergenciasLeve() {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState("")

  const filtradas = emergencias.filter(
    (emergencia) =>
      emergencia.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      emergencia.tipo.toLowerCase().includes(busqueda.toLowerCase()),
  )

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: "#0d1120" }}>

      {/* HEADER */}
      <div style={{ backgroundColor: "#0d1120" }} className="px-4 pt-6 pb-4">
        <div className="mb-4 flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-10 object-contain cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-2xl font-black text-white leading-tight">
            Más información sobre{" "}
            <span style={{ color: "#3EB9BC" }}>emergencias leves:</span>
          </h1>
        </div>

        {/* BUSCADOR — mismo color que el fondo */}
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

      {/* LISTA DE TARJETAS HORIZONTALES */}
      <div className="flex flex-col gap-3 px-10 pt-4">
        {filtradas.length === 0 ? (
          <p className="mt-10 text-center text-white/50">
            No se encontraron resultados
          </p>
        ) : (
          filtradas.map((emergencia) => (
            <div
              key={emergencia.id}
              onClick={() => navigate(`/emergencias/leve/${emergencia.id}`)}
              className="flex items-center overflow-hidden rounded-2xl bg-white shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              {/* Imagen cuadrada a la izquierda */}
              <img
                src={emergencia.imagen}
                alt={emergencia.nombre}
                className="h-24 w-24 shrink-0 object-cover"
              />

              {/* Texto */}
              <div className="flex-1 px-4">
                <p className="text-sm font-bold leading-snug text-gray-800">
                  {emergencia.nombre}
                </p>
                <p className="mt-1 text-xs text-gray-400">{emergencia.tipo}</p>
              </div>

              {/* Flecha */}
              <span className="pr-4 text-2xl font-bold text-gray-300">›</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}