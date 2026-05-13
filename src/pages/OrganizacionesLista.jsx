import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import organizacionesIcono from "../assets/organizaciones_icono.png"
import BackButton from "../components/BackButton"
import { obtenerZona } from "../data/organizaciones"

function OrganizacionesLista() {
  const navigate = useNavigate()
  const { zona } = useParams()
  const datosZona = obtenerZona(zona)
  const [busqueda, setBusqueda] = useState("")
  const organizacionesFiltradas =
    datosZona?.items.filter((organizacion) => {
      const texto = [
        organizacion.nombre,
        organizacion.tipo,
        organizacion.direccion,
      ]
        .join(" ")
        .toLowerCase()

      return texto.includes(busqueda.trim().toLowerCase())
    }) || []

  if (!datosZona) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-20 text-white">
        <BackButton onClick={() => navigate("/organizaciones")} className="mb-6" />
        <section className="rounded-[28px] bg-white p-6 text-gray-900 shadow-xl">
          <h1 className="text-2xl font-black">Zona no encontrada</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            No hay informacion disponible para esta zona.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-20 text-white">
      <BackButton onClick={() => navigate("/organizaciones")} className="mb-5" />

      <header className="mb-4">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7ce9d8]">
          Lista de organizaciones
        </p>
        <h1 className="mt-2 text-3xl font-black">{datosZona.nombre}</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">{datosZona.descripcion}</p>
      </header>

      <div
        className="mb-5 flex items-center gap-2 rounded-xl px-3 py-2"
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
          onChange={(evento) => setBusqueda(evento.target.value)}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
        />
        {busqueda.trim() ? (
          <button
            type="button"
            onClick={() => setBusqueda("")}
            className="text-lg leading-none text-white/40"
            aria-label="Limpiar busqueda"
          >
            x
          </button>
        ) : null}
      </div>

      <section className="space-y-4">
        {organizacionesFiltradas.length === 0 ? (
          <p className="rounded-2xl bg-white/10 px-4 py-5 text-center text-sm text-white/60">
            No se encontraron organizaciones
          </p>
        ) : (
          organizacionesFiltradas.map((organizacion) => (
            <button
              key={organizacion.id}
              onClick={() => navigate(`/organizaciones/${zona}/${organizacion.id}`)}
              className="flex w-full items-center gap-4 rounded-[28px] bg-white px-5 py-5 text-left text-gray-900 shadow-xl transition-transform active:scale-95"
            >
              <img
                src={organizacionesIcono}
                alt=""
                className="h-14 w-14 shrink-0 object-contain"
                aria-hidden="true"
              />
              <div className="flex-1">
                <h2 className="text-lg font-black text-[#1e3a8a]">
                  {organizacion.nombre}
                </h2>
                <p className="mt-1 text-sm font-semibold text-gray-600">
                  {organizacion.tipo}
                </p>
              </div>
              <span className="text-2xl font-bold text-[#0d1120]">&rsaquo;</span>
            </button>
          ))
        )}
      </section>
    </main>
  )
}

export default OrganizacionesLista
