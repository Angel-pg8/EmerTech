import { useNavigate, useParams } from "react-router-dom"
import OpenStreetMapEmbed from "../components/OpenStreetMapEmbed"
import pinIcono from "../assets/pin.png"
import Logo from "../assets/loguito.png"
import BackButton from "../components/BackButton"
import { obtenerOrganizacion, obtenerZona } from "../data/organizaciones"
import sos_icono from "../assets/sos_icono.png"

function OrganizacionDetalle() {
  const navigate = useNavigate()
  const { zona, id } = useParams()
  const datosZona = obtenerZona(zona)
  const organizacion = obtenerOrganizacion(zona, id)
  const mapsQuery = `${organizacion?.direccion || organizacion?.nombre || ""}, ${datosZona?.nombre || ""}, El Salvador`

  if (!datosZona || !organizacion) {
    return (
      <main className="min-h-screen px-4 py-8 pb-20 text-white" style={{ backgroundColor: "#0d1120" }}>
        <BackButton onClick={() => navigate("/organizaciones")} className="mb-6" />
        <p className="text-white/60">Esta organización todavía no tiene información disponible.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-4 py-6 pb-20 text-white" style={{ backgroundColor: "#0d1120" }}>

      {/* HEADER */}
      <div className="mb-6 flex items-start gap-3">
        <BackButton onClick={() => navigate(`/organizaciones/${zona}`)} className="shrink-0 mt-1" />
        <div className="flex items-start gap-3">
          <img src={Logo} alt="Logo" className="h-12 w-12 object-contain shrink-0" />
          <div>
            <h1 className="text-xl font-black text-white leading-tight">
              {organizacion.nombre}
            </h1>
            <p className="text-xs text-white/50 mt-0.5">{organizacion.tipo}</p>
          </div>
        </div>
      </div>

      {/* MAPA */}
      <div className="mb-4 overflow-hidden rounded-3xl" style={{ backgroundColor: "#1a2744" }}>
        <OpenStreetMapEmbed
          query={mapsQuery}
          coordinates={organizacion.coordenadas}
          title={`Mapa de ${organizacion.nombre}`}
        />
      </div>

      {/* Número*/}
      <button
        className="mb-3 flex w-full items-center gap-4 rounded-full px-4 py-4 text-left transition-transform active:scale-95"
        style={{ backgroundColor: "#1a2744" }}
        onClick={() => {
          window.location.href = `tel:${organizacion.numero}`
        }}
      >
          <img src={sos_icono} alt="" className="h-20 w-20 object-contain" />
          <p className="text-sm font-bold text-white">
            Llamar a:
          </p>
        <p className="text-sm font-bold text-white px-2">
          {organizacion.numero || "Numero de telefono no disponible"}
        </p>
      </button>

    {/* TIPO DE EMERGENCIA QUE ATIENDE */}
      <div
        className="mb-3 flex w-full items-center gap-4 rounded-full px-4 py-4 text-left transition-transform cursor-default"
        style={{ backgroundColor: "#1a2744" }}
      >
        
          <img src={pinIcono} alt="" className="h-20 w-20 object-contain" />

        <p className="text-sm font-bold text-white">
          {organizacion.tipo || "Dirección no disponible"}
        </p>

        <p className="text-sm font-bold text-white">
          {organizacion.direccion || "Dirección no disponible"}
        </p>

      </div>



    </main>
  )
}

export default OrganizacionDetalle
