import { useNavigate } from "react-router-dom"
import organizacionesIcono from "../assets/organizaciones_icono.png"
import { zonasOrganizaciones } from "../data/organizaciones"

function Organizaciones() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-24 text-white">
      <header className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7ce9d8]">
          Organizaciones
        </p>
        <h1 className="mt-2 text-3xl font-black">Selecciona un departamento</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">
          Sigue el flujo del app para ver la lista de organizaciones y luego la
          informacion detallada de cada una.
        </p>
      </header>

      <section className="space-y-4">
        {zonasOrganizaciones.map((zona) => (
          <button
            key={zona.slug}
            onClick={() => navigate(`/organizaciones/${zona.slug}`)}
            className="flex w-full items-center gap-4 rounded-[28px] bg-white px-5 py-5 text-left text-gray-900 shadow-xl transition-transform active:scale-95"
          >
            <img
              src={organizacionesIcono}
              alt=""
              className="h-14 w-14 shrink-0 object-contain"
              aria-hidden="true"
            />
            <div className="flex-1">
              <h2 className="text-lg font-black text-[#0d6e7a]">{zona.nombre}</h2>
              <p className="mt-1 text-sm font-semibold text-gray-600">
                Lista de organizaciones
              </p>
            </div>
            <span className="text-2xl font-bold text-[#0d1120]">&rsaquo;</span>
          </button>
        ))}
      </section>
    </main>
  )
}

export default Organizaciones
