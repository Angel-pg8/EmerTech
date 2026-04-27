import { useNavigate, useParams } from "react-router-dom"
import organizacionesIcono from "../assets/organizaciones_icono.png"
import { obtenerOrganizacion, obtenerZona } from "../data/organizaciones"

function OrganizacionDetalle() {
  const navigate = useNavigate()
  const { zona, id } = useParams()
  const datosZona = obtenerZona(zona)
  const organizacion = obtenerOrganizacion(zona, id)

  if (!datosZona || !organizacion) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-24 text-white">
        <button
          onClick={() => navigate("/organizaciones")}
          className="mb-6 rounded-full bg-white/10 px-4 py-2 text-sm"
        >
          Regresar
        </button>
        <section className="rounded-[28px] bg-white p-6 text-gray-900 shadow-xl">
          <h1 className="text-2xl font-black">Organizacion no encontrada</h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Esta organizacion todavia no tiene informacion disponible.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-24 text-white">
      <button
        onClick={() => navigate(`/organizaciones/${zona}`)}
        className="mb-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"
      >
        Volver
      </button>

      <article className="overflow-hidden rounded-[28px] bg-white text-gray-900 shadow-xl">
        <div className="flex items-center justify-center bg-[#eaf8fb] px-6 py-8">
          <img
            src={organizacionesIcono}
            alt=""
            className="h-28 w-28 object-contain"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-4 p-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0d6e7a]">
              {datosZona.nombre}
            </p>
            <h1 className="mt-1 text-2xl font-black">{organizacion.nombre}</h1>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              {organizacion.tipo}
            </p>
          </div>

          <p className="text-sm leading-6 text-gray-700">{organizacion.detalle}</p>

          <section className="rounded-2xl bg-[#eef6ff] p-4">
            <h2 className="text-lg font-bold text-[#0d1120]">
              Informacion sobre la organizacion
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              Esta vista sigue el workflow definido para que cada departamento
              lleve a una lista y luego a la ficha informativa de la organizacion.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

export default OrganizacionDetalle
