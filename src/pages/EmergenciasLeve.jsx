import { useState } from "react"
import { useNavigate } from "react-router-dom"
import imgEjemplo from "../assets/ejemplo.jpg"

const emergencias = [
  {
    id: 1,
    nombre: "Heridas leves con sangrado",
    tipo: "Lesión física",
    imagen: imgEjemplo,
  },
  {
    id: 2,
    nombre: "Intoxicación alimentaria",
    tipo: "Sanitaria",
    imagen: imgEjemplo,
  },
  {
    id: 3,
    nombre: "Fracturas o esguinces",
    tipo: "Lesión física",
    imagen: imgEjemplo,
  },
  {
    id: 4,
    nombre: "Reacción alérgica leve",
    tipo: "Sanitaria",
    imagen: imgEjemplo,
  },
  {
    id: 5,
    nombre: "Quemadura leve",
    tipo: "Lesión física",
    imagen: imgEjemplo,
  },
  {
    id: 6,
    nombre: "Dolor de cabeza",
    tipo: "Neurológica",
    imagen: imgEjemplo,
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
      <div className="bg-[#1e3a8a] px-4 pt-4 pb-3">
        <div className="mb-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-black text-white">Emergencias Leves</h1>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white/60"
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
            placeholder="Buscar..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        {filtradas.length === 0 ? (
          <p className="col-span-2 mt-10 text-center text-white/50">
            No se encontraron resultados
          </p>
        ) : (
          filtradas.map((emergencia) => (
            <div
              key={emergencia.id}
              onClick={() => navigate(`/emergencias/leve/${emergencia.id}`)}
              className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-transform active:scale-95"
            >
              <img
                src={emergencia.imagen}
                alt={emergencia.nombre}
                className="h-32 w-full object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-bold leading-tight text-gray-800">
                  {emergencia.nombre}
                </p>
                <p className="mt-1 text-xs text-gray-400">{emergencia.tipo}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
