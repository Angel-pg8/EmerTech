import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import organizacionesIcono from "../assets/pin.png"
import Logo from "../assets/loguito.png"
import BackButton from "../components/BackButton"
import {
  normalizarTexto,
  obtenerTodasLasOrganizaciones,
  zonasOrganizaciones,
} from "../data/organizaciones"

function Organizaciones() {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState("")
  const termino = normalizarTexto(busqueda)

  const organizacionesFiltradas = useMemo(() => {
    if (!termino) {
      return []
    }

    return obtenerTodasLasOrganizaciones().filter((organizacion) => {
      const texto = [
        organizacion.nombre,
        organizacion.tipo,
        organizacion.direccion,
        organizacion.zonaNombre,
      ].join(" ")

      return normalizarTexto(texto).includes(termino)
    })
  }, [termino])

  return (
    <main
      className="min-h-screen px-5 py-6 pb-24 text-white"
      style={{ backgroundColor: "#0d1120" }}
    >
      {/* HEADER */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="w-full flex items-start mb-4">
          <BackButton onClick={() => navigate("/")} className="shrink-0" />
        </div>

        <img src={Logo} alt="Logo" className="h-14 w-14 object-contain mb-4" />

        <h1 className="text-2xl font-black uppercase tracking-widest text-white">
          Organizaciones
        </h1>
        <p className="mt-2 text-sm font-semibold text-white/60 leading-snug max-w-xs">
          Selecciona tu municipio para ver las organizaciones disponibles.
        </p>
      </div>

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
          placeholder="Buscar en todas las organizaciones..."
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
            x
          </button>
        )}
      </div>

      {/* LISTA */}
      <section className="flex flex-col gap-4">
        {termino ? (
          organizacionesFiltradas.length === 0 ? (
            <p className="mt-6 text-center text-sm text-white/50">
              No se encontraron organizaciones
            </p>
          ) : (
            organizacionesFiltradas.map((organizacion) => (
              <button
                key={`${organizacion.zonaSlug}-${organizacion.id}`}
                onClick={() =>
                  navigate(`/organizaciones/${organizacion.zonaSlug}/${organizacion.id}`)
                }
                className="flex w-full items-center gap-4 rounded-full px-4 py-3 text-left transition-transform active:scale-95"
                style={{ backgroundColor: "#1a2744" }}
              >
                <img
                  src={organizacionesIcono}
                  alt=""
                  className="h-20 w-20 object-contain"
                  aria-hidden="true"
                />

                <div className="flex-1">
                  <h2 className="text-sm font-black leading-snug text-white">
                    {organizacion.nombre}
                  </h2>
                  <p className="mt-0.5 text-xs text-white/50">
                    {organizacion.tipo} | {organizacion.zonaNombre}
                  </p>
                </div>
                <span className="text-2xl font-bold text-white/40">&rsaquo;</span>
              </button>
            ))
          )
        ) : (
          zonasOrganizaciones.map((zona) => (
          <button
            key={zona.slug}
            onClick={() => navigate(`/organizaciones/${zona.slug}`)}
            className="flex w-full items-center gap-4 rounded-full px-4 py-3 text-left transition-transform active:scale-95"
            style={{ backgroundColor: "#1a2744" }}
          >
           
            <img
              src={organizacionesIcono}
              alt=""
              className="h-20 w-20 object-contain"
              aria-hidden="true"
            />
          

            <div className="flex-1">
              <h2 className="text-base font-black uppercase tracking-wider text-white">
                {zona.nombre}
              </h2>
            </div>
            <span className="text-2xl font-bold text-white/60">&rsaquo;</span>
          </button>
          ))
        )}
      </section>
    </main>
  )
}

export default Organizaciones
