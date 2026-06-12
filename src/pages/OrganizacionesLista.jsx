import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import organizacionesIcono from "../assets/pin.png"
import Logo from "../assets/loguito.png"
import BackButton from "../components/BackButton"
import { obtenerZona } from "../data/organizaciones"

function OrganizacionesLista() {
  const navigate = useNavigate()
  const { zona } = useParams()
  const datosZona = obtenerZona(zona)
  const [busqueda, setBusqueda] = useState("")

  const organizacionesFiltradas =
    datosZona?.items.filter((organizacion) => {
      const texto = [organizacion.nombre, organizacion.tipo, organizacion.direccion]
        .join(" ")
        .toLowerCase()
      return texto.includes(busqueda.trim().toLowerCase())
    }) || []

  if (!datosZona) {
    return (
      <main className="min-h-screen px-4 py-8 pb-20 text-white" style={{ backgroundColor: "#0d1120" }}>
        <BackButton onClick={() => navigate("/organizaciones")} className="mb-6" />
        <p className="text-white/60">No hay información disponible para esta zona.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-4 py-6 pb-20 text-white" style={{ backgroundColor: "#0d1120" }}>

      {/* HEADER */}
      <div className="mb-6 flex items-start gap-4">
        <BackButton onClick={() => navigate("/organizaciones")} className="shrink-0 mt-1" />
        <div className="flex items-start gap-3">
          <img src={Logo} alt="Logo" className="h-12 w-12 object-contain shrink-0" />
          <div>
            <h1 className="text-2xl font-black uppercase tracking-wide text-white">
              {datosZona.nombre}
            </h1>
            <p className="mt-1 text-xs text-white/60 leading-snug">
              {datosZona.descripcion}
            </p>
          </div>
        </div>
      </div>

      {/* BUSCADOR */}
      <div
        className="mb-5 flex items-center gap-2 rounded-3xl px-3 py-2"
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
          placeholder="Buscar organizacion..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
        />
        {busqueda.trim() && (
          <button
            type="button"
            onClick={() => setBusqueda("")}
            className="text-lg leading-none text-white/40"
          >
            ×
          </button>
        )}
      </div>

      {/* LISTA */}
      <section className="flex flex-col gap-3">
        {organizacionesFiltradas.length === 0 ? (
          <p className="text-center text-sm text-white/50 mt-6">
            No se encontraron organizaciones
          </p>
        ) : (
          organizacionesFiltradas.map((organizacion) => (
            <button
              key={organizacion.id}
              onClick={() => navigate(`/organizaciones/${zona}/${organizacion.id}`)}
              className="flex w-full items-center gap-4 rounded-3xl px-4 py-3 text-left transition-transform active:scale-95"
              style={{ backgroundColor: "#1a2744" }}
            >
              
                <img
                  src={organizacionesIcono}
                  alt=""
                  className="h-20 w-20 object-contain"
                  aria-hidden="true"
                />

              <div className="flex-1">
                <h2 className="text-sm font-black text-white leading-snug">
                  {organizacion.nombre}
                </h2>
                <p className="mt-0.5 text-xs text-white/50">
                  {organizacion.tipo}
                </p>
              </div>
              <span className="text-2xl font-bold text-white/40">&rsaquo;</span>
            </button>
          ))
        )}
      </section>
    </main>
  )
}

export default OrganizacionesLista