import { useNavigate, useParams } from "react-router-dom"
import OpenStreetMapEmbed from "../components/OpenStreetMapEmbed"
import organizacionesIcono from "../assets/organizaciones_icono.png"
import BackButton from "../components/BackButton"
import { obtenerOrganizacion, obtenerZona } from "../data/organizaciones"

function OrganizacionDetalle() {
  const navigate = useNavigate()
  const { zona, id } = useParams()
  const datosZona = obtenerZona(zona)
  const organizacion = obtenerOrganizacion(zona, id)
  const mapsQuery = `${organizacion?.direccion || organizacion?.nombre || ""}, ${datosZona?.nombre || ""}, El Salvador`

  if (!datosZona || !organizacion) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-20 text-white">
        <BackButton onClick={() => navigate("/organizaciones")} className="mb-6" />
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
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-20 text-white">
      <BackButton onClick={() => navigate(`/organizaciones/${zona}`)} className="mb-5" />

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
              Direccion
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              {organizacion.direccion || "Direccion no disponible"}
            </p>
          </section>

          <section className="rounded-2xl bg-[#eef6ff] p-4">
            <h2 className="mb-3 text-lg font-bold text-[#0d1120]">
              Ubicacion
            </h2>
            <OpenStreetMapEmbed
              query={mapsQuery}
              coordinates={organizacion.coordenadas}
              title={`Mapa de ${organizacion.nombre}`}
            />
          </section>
        </div>
      </article>
    </main>
  )
}

export default OrganizacionDetalle
