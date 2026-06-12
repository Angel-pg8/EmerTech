import { useNavigate, useParams } from "react-router-dom"
import OpenStreetMapEmbed from "../components/OpenStreetMapEmbed"
import pinIcono from "../assets/pin.png"
import Logo from "../assets/loguito.png"
import BackButton from "../components/BackButton"
import { obtenerOrganizacion, obtenerZona } from "../data/organizaciones"
import sos_icono from "../assets/sos_icono.png"

function extraerTelefonoMarcable(valor = "") {
  const texto = String(valor).split("/")[0].trim()
  if (!texto) {
    return ""
  }

  const limpio = texto.replace(/[^+\d]/g, "")
  return limpio.startsWith("+") ? limpio : limpio
}

function DatoClave({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/8 bg-[#1a2744] px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#7bd0d8]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold leading-snug text-white">{value}</p>
    </div>
  )
}

function OrganizacionDetalle() {
  const navigate = useNavigate()
  const { zona, id } = useParams()
  const datosZona = obtenerZona(zona)
  const organizacion = obtenerOrganizacion(zona, id)
  const mapsQuery = `${organizacion?.direccion || organizacion?.nombre || ""}, ${datosZona?.nombre || ""}, El Salvador`
  const telefonoMarcable = extraerTelefonoMarcable(organizacion?.numero)

  if (!datosZona || !organizacion) {
    return (
      <main
        className="min-h-screen px-4 py-8 pb-20 text-white"
        style={{
          background:
            "radial-gradient(circle at top, rgba(22, 75, 120, 0.35), transparent 32%), linear-gradient(180deg, #0d1120 0%, #08101d 100%)",
        }}
      >
        <BackButton onClick={() => navigate("/organizaciones")} className="mb-6" />
        <div className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-6 text-white/75 backdrop-blur-sm">
          <p className="text-base font-semibold">
            Esta organización todavía no tiene información disponible.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden px-4 py-5 pb-24 text-white"
      style={{
        background: "#0d1120",
      }}
    >
      <div className="relative">
        <div className="mb-5 flex flex-col items-center text-center">
          <div className="w-full mb-4 flex items-start">
            <BackButton onClick={() => navigate(`/organizaciones/${zona}`)} className="shrink-0" />
          </div>

          <div className="flex items-start gap-3">
            <img src={Logo} alt="Logo" className="h-12 w-12 object-contain shrink-0" />
            <div className="min-w-0 flex-1 text-left">
              <h1 className="text-2xl font-black uppercase tracking-widest text-white leading-tight">
                {organizacion.nombre}
              </h1>
              <p className="mt-1 text-xs text-white/60 leading-snug max-w-xs">
                {datosZona.descripcion}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4 overflow-hidden rounded-3xl bg-[#1a2744] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
          <OpenStreetMapEmbed
            query={mapsQuery}
            coordinates={organizacion.coordenadas}
            title={`Mapa de ${organizacion.nombre}`}
          />
        </div>

        <button
          type="button"
          className="mb-3 flex w-full items-center gap-4 rounded-3xl px-4 py-3 text-left transition-transform active:scale-95"
          style={{ backgroundColor: "#1a2744" }}
          onClick={() => {
            if (telefonoMarcable) {
              window.location.href = `tel:${telefonoMarcable}`
            }
          }}
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/5">
            <img src={sos_icono} alt="" className="h-16 w-16 object-contain" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black leading-snug text-white">
              Llamar a:
            </p>
            <p className="mt-1 break-words text-sm font-bold leading-snug text-white/80">
              {organizacion.numero || "Numero de telefono no disponible"}
            </p>
          </div>
          <span className="text-2xl font-bold text-white/40">&rsaquo;</span>
        </button>

        <div className="mb-3 flex w-full items-center gap-4 rounded-3xl px-4 py-3 text-left cursor-default" style={{ backgroundColor: "#1a2744" }}>
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/5">
            <img src={pinIcono} alt="" className="h-16 w-16 object-contain" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-black leading-snug text-white">
              {organizacion.tipo || "Direccion no disponible"}
            </p>
            <p className="mt-1 text-sm font-bold leading-snug text-white/80">
              {organizacion.direccion || "Direccion no disponible"}
            </p>
          </div>
        </div>

                <div className="mb-3 flex w-full items-center gap-4 rounded-3xl px-4 py-3 text-left cursor-default" style={{ backgroundColor: "#1a2744" }}>
          <div className="flex-1">
            <p className="mt-1 text-sm font-bold leading-snug text-white/80">
              {organizacion.descripcion || "Direccion no disponible"}
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default OrganizacionDetalle
