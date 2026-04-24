import { useState } from "react"
import { useNavigate } from "react-router-dom"
import imgEjemplo from "../assets/ejemplo.jpg"

const emergencias = [
  { id: 1, nombre: "Heridas leves con sangrado", tipo: "Lesión física", imagen: imgEjemplo },
  { id: 2, nombre: "Intoxicación alimentaria", tipo: "Sanitaria", imagen: imgEjemplo },
  { id: 3, nombre: "Fracturas o esguinces", tipo: "Lesión física", imagen: imgEjemplo },
  { id: 4, nombre: "Reacción alérgica leve", tipo: "Sanitaria", imagen: imgEjemplo },
  { id: 5, nombre: "Quemadura leve", tipo: "Lesión física", imagen: imgEjemplo },
  { id: 6, nombre: "Dolor de cabeza", tipo: "Neurológica", imagen: imgEjemplo },
]

export default function EmergenciasLeve() {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState("")

  const filtradas = emergencias.filter(e =>
    e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    e.tipo.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: "#0d1120" }}>

      {/* HEADER */}
      <div className="bg-[#1e3a8a] px-4 pt-4 pb-3">
  <div className="flex items-center gap-3 mb-3">
    <button onClick={() => navigate(-1)} className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <h1 className="text-white text-2xl font-black">Emergencias Leves</h1>
  </div>
        {/* Barra de búsqueda */}
        <div className="flex items-center bg-white/10 rounded-xl px-3 py-2 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="bg-transparent text-white placeholder-white/50 outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-3 p-4">
        {filtradas.length === 0 ? (
          <p className="text-white/50 text-center col-span-2 mt-10">No se encontraron resultados</p>
        ) : (
          filtradas.map(e => (
            <div
              key={e.id}
              onClick={() => navigate(`/emergencias/leve/${e.id}`)}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer active:scale-95 transition-transform shadow-md"
            >
              <img src={e.imagen} alt={e.nombre} className="w-full h-32 object-cover" />
              <div className="p-2">
                <p className="text-gray-800 font-bold text-sm leading-tight">{e.nombre}</p>
                <p className="text-gray-400 text-xs mt-1">{e.tipo}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}