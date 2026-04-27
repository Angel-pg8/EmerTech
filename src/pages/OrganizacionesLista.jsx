import { useNavigate, useParams } from "react-router-dom"
import organizacionesIcono from "../assets/organizaciones_icono.png"
import { obtenerZona } from "../data/organizaciones"

function OrganizacionesLista() {
  const navigate = useNavigate()
  const { zona } = useParams()
  const datosZona = obtenerZona(zona)

  if (!datosZona) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-24 text-white">
        <button
          onClick={() => navigate("/organizaciones")}
          className="mb-6 rounded-full bg-white/10 px-4 py-2 text-sm"
        >
          Regresar
        </button>
        <section className="rounded-[28px] bg-white p-6 text-gray-900 shadow-xl">
          <h1 className="text-2xl font-black">Zona no encontrada</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Esta zona no forma parte del flujo configurado para organizaciones.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-24 text-white">
      <button
        onClick={() => navigate("/organizaciones")}
        className="mb-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"
      >
        Volver
      </button>

      <header className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7ce9d8]">
          Lista de organizaciones
        </p>
        <h1 className="mt-2 text-3xl font-black">{datosZona.nombre}</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">{datosZona.descripcion}</p>
      </header>

      <section className="space-y-4">
        {datosZona.items.map((organizacion) => (
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
        ))}
      </section>
    </main>
  )
}

export default OrganizacionesLista
