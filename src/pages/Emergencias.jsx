import { useNavigate } from "react-router-dom"
import graveIcono from "../assets/grave_icono.png"
import leveIcono from "../assets/leve_icono.png"
import Logo from "../assets/loguito.png"
import muyGraveIcono from "../assets/muy_grave_icono.png"

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
    ruta: "/emergencias/muy-grave",
  },
]

export default function Emergencias() {
  const navigate = useNavigate()

  return (
    <div
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-6 pt-10 pb-24"
      style={{ backgroundColor: "#0d1120" }}
    >
      

      <div className="mb-10 self-start">
        <img src={Logo} alt="Logo" className="h-20 w-20 object-contain" />
      </div>

      <h1 className="mb-10 text-center text-3xl font-bold text-white">
        <span style={{ color: "#3EB9BC" }}>Selecciona</span> una categoria
      </h1>
      <br />
      <div className="flex w-full max-w-sm flex-col gap-4">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => navigate(categoria.ruta)}
            className="relative flex w-full items-center overflow-hidden rounded-3xl bg-white text-left shadow-md transition-transform duration-150 active:scale-95"
          >
            {/* ← BARRA LATERAL */}
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
              <br />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}