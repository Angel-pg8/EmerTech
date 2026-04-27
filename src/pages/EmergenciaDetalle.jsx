import { useNavigate, useParams } from "react-router-dom"
import { obtenerEmergencia } from "../data/emergencias"

function EmergenciaDetalle() {
  const navigate = useNavigate()
  const { categoria, id } = useParams()
  const emergencia = obtenerEmergencia(categoria, id)

  if (!emergencia) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-24 text-white">
        <button
          onClick={() => navigate("/emergencias")}
          className="mb-6 rounded-full bg-white/10 px-4 py-2 text-sm"
        >
          Regresar
        </button>
        <div className="rounded-3xl bg-white/10 p-6 text-center">
          <h1 className="text-2xl font-bold">Emergencia no encontrada</h1>
          <p className="mt-3 text-white/70">
            La tarjeta existe en la interfaz, pero este detalle todavia no fue
            cargado.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-24 text-white">
      <button
        onClick={() => navigate(`/emergencias/${categoria}`)}
        className="mb-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"
      >
        Volver
      </button>

      <article className="overflow-hidden rounded-[28px] bg-white text-gray-900 shadow-xl">
        <img
          src={emergencia.imagen}
          alt={emergencia.nombre}
          className="h-56 w-full object-cover"
        />

        <div className="space-y-4 p-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1e3a8a]">
              {emergencia.tipo}
            </p>
            <h1 className="mt-1 text-2xl font-black">{emergencia.nombre}</h1>
          </div>

          <p className="text-sm leading-6 text-gray-700">
            {emergencia.descripcion}
          </p>

          <section className="rounded-2xl bg-[#eef6ff] p-4">
            <h2 className="text-lg font-bold text-[#0d1120]">
              Recomendacion inicial
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              Esta vista es una base funcional para mostrar instrucciones de
              primeros auxilios. Mas adelante aqui podemos conectar contenido
              real, clasificacion y apoyo con IA.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

export default EmergenciaDetalle
