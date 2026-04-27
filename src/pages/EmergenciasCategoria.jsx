import { useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { obtenerCategoriaEmergencias } from "../data/emergencias"

function EmergenciasCategoria() {
  const navigate = useNavigate()
  const { categoria } = useParams()
  const [busqueda, setBusqueda] = useState("")

  const datosCategoria = useMemo(
    () => obtenerCategoriaEmergencias(categoria),
    [categoria],
  )

  const filtradas = useMemo(() => {
    if (!datosCategoria) {
      return []
    }

    return datosCategoria.items.filter(
      (emergencia) =>
        emergencia.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        emergencia.tipo.toLowerCase().includes(busqueda.toLowerCase()),
    )
  }, [busqueda, datosCategoria])

  if (!datosCategoria) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-24 text-white">
        <button
          onClick={() => navigate("/emergencias")}
          className="mb-6 rounded-full bg-white/10 px-4 py-2 text-sm"
        >
          Regresar
        </button>
        <section className="rounded-[28px] bg-white p-6 text-gray-900 shadow-xl">
          <h1 className="text-2xl font-black">Categoria no encontrada</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Esta categoria no existe en el flujo actual de la aplicacion.
          </p>
        </section>
      </main>
    )
  }

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: "#0d1120" }}>
      <div className="bg-[#1e3a8a] px-4 pt-4 pb-3">
        <div className="mb-3 flex items-center gap-3">
          <button onClick={() => navigate("/emergencias")} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-black text-white">{datosCategoria.titulo}</h1>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white/60"
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
            placeholder="Buscar..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4">
        {filtradas.length === 0 ? (
          <p className="col-span-2 mt-10 text-center text-white/50">
            No se encontraron resultados
          </p>
        ) : (
          filtradas.map((emergencia) => (
            <div
              key={emergencia.id}
              onClick={() => navigate(`/emergencias/${categoria}/${emergencia.id}`)}
              className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-transform active:scale-95"
            >
              <img
                src={emergencia.imagen}
                alt={emergencia.nombre}
                className="h-32 w-full object-cover"
              />
              <div className="p-2">
                <p className="text-sm font-bold leading-tight text-gray-800">
                  {emergencia.nombre}
                </p>
                <p className="mt-1 text-xs text-gray-400">{emergencia.tipo}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default EmergenciasCategoria
