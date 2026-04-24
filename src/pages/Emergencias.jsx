import { useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"

const categorias = [
  {
    id: "leve",
    nivel: "LEVE",
    descripcion: "Incidentes leves",
    color: "text-emerald-400",
    ruta: "/emergencias/leve",
  },
  {
    id: "grave",
    nivel: "GRAVE",
    descripcion: "Situaciones serias",
    color: "text-yellow-400",
    ruta: "/emergencias/grave",
  },
  {
    id: "muy-grave",
    nivel: "MUY GRAVE",
    descripcion: "Emergencias críticas",
    color: "text-red-500",
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
      <svg
        className="absolute left-0 w-full"
        style={{ top: "15%", height: "120px", opacity: 0.15 }}
        viewBox="130 0 10 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="0,30 30,30 40,30 45,8 48,52 51,30 65,30 68,2 71,58 74,30 90,30 94,24 98,36 102,30 130,30 160,30 190,30 195,8 198,52 201,30 215,30 218,2 221,58 224,30 240,30 244,24 248,36 252,30 280,30 310,30 340,30 345,8 348,52 351,30 365,30 368,2 371,58 374,30 390,30 400,30"
          fill="none"
          stroke="#3ddcb0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mb-10 self-start">
        <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
      </div>

      <h1 className="mb-10 text-center text-2xl font-bold text-white">
        Selecciona una categoría
      </h1>

      <div className="flex w-full max-w-sm flex-col gap-4">
        {categorias.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => navigate(categoria.ruta)}
            className="relative w-full overflow-hidden rounded-3xl bg-white px-6 py-5 text-center shadow-md transition-transform duration-150 active:scale-95"
          >
            <p className={`relative text-xl font-black tracking-wide ${categoria.color}`}>
              {categoria.nivel}
            </p>
            <p className="relative mt-1 text-base font-bold text-gray-700">
              {categoria.descripcion}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}
