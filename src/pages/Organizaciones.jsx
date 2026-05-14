import { useNavigate } from "react-router-dom"
import organizacionesIcono from "../assets/pin.png"
import Logo from "../assets/loguito.png"
import BackButton from "../components/BackButton"
import { zonasOrganizaciones } from "../data/organizaciones"

function Organizaciones() {
  const navigate = useNavigate()

  return (
    <main
      className="min-h-screen px-5 py-6 pb-24 text-white"
      style={{ backgroundColor: "#0d1120" }}
    >
      {/* HEADER */}
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="w-full flex items-start mb-4">
          <BackButton onClick={() => navigate(-1)} className="shrink-0" />
        </div>

        <img src={Logo} alt="Logo" className="h-14 w-14 object-contain mb-4" />

        <h1 className="text-2xl font-black uppercase tracking-widest text-white">
          Organizaciones
        </h1>
        <p className="mt-2 text-sm font-semibold text-white/60 leading-snug max-w-xs">
          Selecciona tu municipio para ver las organizaciones disponibles.
        </p>
      </div>

      {/* LISTA */}
      <section className="flex flex-col gap-4">
        {zonasOrganizaciones.map((zona) => (
          <button
            key={zona.slug}
            onClick={() => navigate(`/organizaciones/${zona.slug}`)}
            className="flex w-full items-center gap-4 rounded-full px-4 py-3 text-left transition-transform active:scale-95"
            style={{ backgroundColor: "#1a2744" }}
          >
            {/* Icono con fondo circular */}
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "#2a3f6f" }}
            >
              <img
                src={organizacionesIcono}
                alt=""
                className="h-30 w-30 object-contain"
                aria-hidden="true"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-base font-black uppercase tracking-wider text-white">
                {zona.nombre}
              </h2>
            </div>
            <span className="text-2xl font-bold text-white/60">&rsaquo;</span>
          </button>
        ))}
      </section>
    </main>
  )
}

export default Organizaciones