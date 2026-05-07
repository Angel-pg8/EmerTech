import { useState } from "react"
import { useNavigate } from "react-router-dom"
import graveIcono from "../assets/grave_icono.png"
import leveIcono from "../assets/leve_icono.png"
import Logo from "../assets/logo.png"
import muyGraveIcono from "../assets/muy_grave_icono.png"
import imgDeshidratacion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/deshidratacion-LEVE.png"
import imgDolorCabeza from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/dolordecabeza-LEVE.png"
import imgDolorOido from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/dolordeoido-LEVE.png"
import imgIntoxicacionLeve from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/intoxicacionleve-LEVE.png"
import imgConvulsionGrave from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/convulsionleve-GRAVE.png"
import imgFractura from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/fracturadebrazo-GRAVES.png"
import imgIntoxicacionAlimentaria from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/intoxicacionalimentaria-GRAVE.png"
import imgMordida from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/mordidadeanimal-GRAVE.png"
import imgBajoAzucar from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/bajoazucar-MUYGRAVE.png"
import imgConvulsionMuyGrave from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/convulsionsevera-MUYGRAVE.png"
import imgDolorPecho from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/dolorenelpecho-MUYGRAVE.png"
import imgFiebre from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_muygraves/fiebrealta-MUYGRAVE.png"

const categorias = [
  {
    id: "leve",
    nivel: "LEVES",
    descripcion: "Incidentes leves",
    color: "text-emerald-400",
    barColor: "bg-emerald-400",
    icono: leveIcono,
    ruta: "/emergencias/leve",
  },
  {
    id: "grave",
    nivel: "GRAVES",
    descripcion: "Situaciones serias",
    color: "text-yellow-400",
    barColor: "bg-yellow-400",
    icono: graveIcono,
    ruta: "/emergencias/grave",
  },
  {
    id: "muy-grave",
    nivel: "MUY GRAVES",
    descripcion: "Emergencias criticas",
    color: "text-red-500",
    barColor: "bg-red-500",
    icono: muyGraveIcono,
    ruta: "/emergencias/muygraves",
  },
]

// Todas las emergencias de las 3 categorías juntas
const todasLasEmergencias = [
  {
    id: "Dolor de oido",
    nombre: "Dolor de oído",
    tipo: "Otológica",
    imagen: imgDolorOido,
    ruta: "/emergencias/leve/Dolor de oido",
    nivel: "LEVE",
    color: "text-emerald-400",
  },
  {
    id: "Dolor de cabeza",
    nombre: "Dolor de cabeza",
    tipo: "Neurológica",
    imagen: imgDolorCabeza,
    ruta: "/emergencias/leve/Dolor de cabeza",
    nivel: "LEVE",
    color: "text-emerald-400",
  },
  {
    id: "Deshidratacion",
    nombre: "Deshidratación",
    tipo: "Metabólica",
    imagen: imgDeshidratacion,
    ruta: "/emergencias/leve/Deshidratacion",
    nivel: "LEVE",
    color: "text-emerald-400",
  },
  {
    id: "Intoxicacion leve",
    nombre: "Intoxicación leve",
    tipo: "Toxicológica",
    imagen: imgIntoxicacionLeve,
    ruta: "/emergencias/leve/Intoxicacion leve",
    nivel: "LEVE",
    color: "text-emerald-400",
  },
  {
    id: "Convulcion leve",
    nombre: "Convulsión",
    tipo: "Sanitaria",
    imagen: imgConvulsionGrave,
    ruta: "/emergencias/grave/Convulción leve",
    nivel: "GRAVE",
    color: "text-yellow-400",
  },
  {
    id: "Fractura de brazo",
    nombre: "Fractura de brazo",
    tipo: "Lesión física",
    imagen: imgFractura,
    ruta: "/emergencias/grave/Fractura de brazo",
    nivel: "GRAVE",
    color: "text-yellow-400",
  },
  {
    id: "intoxicacion alimentaria",
    nombre: "Intoxicación alimentaria",
    tipo: "Sanitaria",
    imagen: imgIntoxicacionAlimentaria,
    ruta: "/emergencias/grave/intoxicacion alimentaria",
    nivel: "GRAVE",
    color: "text-yellow-400",
  },
  {
    id: "Mordedura de animal",
    nombre: "Mordida de animal",
    tipo: "Lesión física",
    imagen: imgMordida,
    ruta: "/emergencias/grave/Mordedura de animal",
    nivel: "GRAVE",
    color: "text-yellow-400",
  },
  {
    id: "Convulsion",
    nombre: "Convulsión severa",
    tipo: "Sanitaria",
    imagen: imgConvulsionMuyGrave,
    ruta: "/emergencias/muygraves/Convulsion",
    nivel: "MUY GRAVE",
    color: "text-red-500",
  },
  {
    id: "Dolor-en-el-pecho",
    nombre: "Dolor de pecho",
    tipo: "Sanitaria",
    imagen: imgDolorPecho,
    ruta: "/emergencias/muygraves/Dolor-en-el-pecho",
    nivel: "MUY GRAVE",
    color: "text-red-500",
  },
  {
    id: "Fiebre-alta-persistente",
    nombre: "Fiebre alta persistente",
    tipo: "Sanitaria",
    imagen: imgFiebre,
    ruta: "/emergencias/muygraves/Fiebre-alta-persistente",
    nivel: "MUY GRAVE",
    color: "text-red-500",
  },
  {
    id: "Hipoglucemia",
    nombre: "Hipoglucemia",
    tipo: "Metabólica",
    imagen: imgBajoAzucar,
    ruta: "/emergencias/muygraves/Hipoglucemia",
    nivel: "MUY GRAVE",
    color: "text-red-500",
  },
]

export default function Emergencias() {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState("")

  const resultados = busqueda.trim()
    ? todasLasEmergencias.filter(
        (e) =>
          e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          e.tipo.toLowerCase().includes(busqueda.toLowerCase()),
      )
    : []

  const buscando = busqueda.trim().length > 0

  return (
    <div
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-6 pt-10 pb-24"
      style={{ backgroundColor: "#0d1120" }}
    >
      
        <img src={Logo} alt="Logo" className="h-62 w-62 object-contain" />
      

      <h1 className="mb-6 text-center text-3xl font-bold text-white">
        <span style={{ color: "#3EB9BC" }}>Selecciona</span> una categoria
      </h1>

      {/* BARRA DE BUSQUEDA */}
      <div
        className="mb-6 flex w-full max-w-sm items-center gap-2 rounded-xl px-3 py-2"
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
          placeholder="Buscar en todas las emergencias..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
        />
        {buscando && (
          <button
            onClick={() => setBusqueda("")}
            className="text-white/40 text-lg leading-none"
          >
            x
          </button>
        )}
      </div>

      {/* RESULTADOS DE BUSQUEDA */}
      {buscando ? (
        <div className="w-full max-w-sm">
          {resultados.length === 0 ? (
            <p className="text-center text-white/50 mt-6">
              No se encontraron resultados
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {resultados.map((e) => (
                <div
                  key={e.id}
                  onClick={() => navigate(e.ruta)}
                  className="overflow-hidden rounded-2xl bg-white shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  <img
                    src={e.imagen}
                    alt={e.nombre}
                    className="w-full h-28 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs font-bold leading-snug text-gray-800">
                      {e.nombre}
                    </p>
                    <p className={`mt-1 text-[10px] font-bold ${e.color}`}>
                      {e.nivel}
                    </p>
                    <p className="mt-0.5 text-[10px] text-gray-400">{e.tipo}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* CATEGORIAS NORMALES */
        <div className="flex w-full max-w-sm flex-col gap-4">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => navigate(categoria.ruta)}
              className="relative flex w-full items-center overflow-hidden rounded-3xl bg-white text-left shadow-md transition-transform duration-150 active:scale-95"
            >
              <div className={`w-2 self-stretch shrink-0 ${categoria.barColor}`} />
              <div className="flex flex-1 items-center gap-4 px-5 py-5">
                <img
                  src={categoria.icono}
                  alt=""
                  className="relative h-16 w-16 shrink-0 object-contain"
                  aria-hidden="true"
                />
                <div className="relative flex-1">
                  <p className={`text-xl font-black tracking-wide ${categoria.color}`}>
                    {categoria.nivel}
                  </p>
                  <p className="mt-1 text-base font-bold text-gray-700">
                    {categoria.descripcion}
                  </p>
                </div>
                <span className="relative text-2xl font-bold text-[#0d1120]">
                  &rsaquo;
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}