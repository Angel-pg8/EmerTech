import { useNavigate } from "react-router-dom"
import BackButton from "./BackButton"
import { obtenerOrganizacionPorContacto, normalizarTexto } from "../data/organizaciones"

function EntidadContacto({ linea }) {
  const navigate = useNavigate()
  const organizacion = obtenerOrganizacionPorContacto(linea)

  if (!organizacion) {
    return <span>{linea}</span>
  }

  const detalle = obtenerDetalleContacto(linea, organizacion.nombre)

  return (
    <span className="flex flex-wrap items-center justify-end gap-x-1 gap-y-0.5 text-right">
      <button
        type="button"
        onClick={() => navigate(`/organizaciones/${organizacion.zonaSlug}/${organizacion.id}`)}
        className="font-extrabold text-[#1a56db] underline-offset-2 active:scale-95"
      >
        {organizacion.nombre}
      </button>
      {detalle && <span className="text-gray-800">{detalle}</span>}
    </span>
  )
}

function EntidadesContacto({ valor }) {
  const lineas = String(valor || "No disponible")
    .split(/\r?\n/)
    .map((linea) => linea.trim())
    .filter(Boolean)

  return (
    <div className="flex flex-col items-end gap-1 text-sm font-bold leading-6">
      {lineas.map((linea) => (
        <EntidadContacto key={linea} linea={linea} />
      ))}
    </div>
  )
}

function PasoCard({ paso }) {
  return (
    <div className="flex flex-col gap-2 bg-white px-3 py-3.5">
      <div className="flex items-start gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1a3a6b] text-sm font-black text-white">
          {paso.numero}
        </div>
        <p className="m-0 pt-1 text-xs font-bold leading-snug text-[#0d1b2a]">
          {paso.titulo}
        </p>
      </div>

      <div className="flex min-h-[120px] items-center justify-center rounded-xl bg-white p-1">
        <img
          src={paso.icono}
          alt={`Paso ${paso.numero}`}
          className="h-[120px] w-full max-w-[140px] object-contain"
        />
      </div>

      {paso.esAlerta ? (
        <div className="flex items-start gap-1.5 rounded-lg bg-[#fff7ed] px-2 py-1.5">
          <span className="shrink-0 text-xs font-black text-[#92400e]">!</span>
          <p className="m-0 text-[11px] leading-snug text-[#92400e]">{paso.descripcion}</p>
        </div>
      ) : (
        <p className="m-0 text-center text-[11px] leading-snug text-[#4b5563]">
          {paso.descripcion}
        </p>
      )}
    </div>
  )
}

function obtenerDetalleContacto(linea, nombreOrganizacion) {
  const texto = linea.trim()
  const candidatos = [
    nombreOrganizacion,
    "FOSALUD",
    "Cruz Verde",
    "Cruz Roja",
    "Cuerpo de Bomberos",
    "Bomberos",
  ]

  const candidato = candidatos.find((valor) =>
    normalizarTexto(texto).startsWith(normalizarTexto(valor)),
  )

  if (!candidato) {
    return texto === nombreOrganizacion ? "" : texto
  }

  return texto.slice(candidato.length).trim()
}

export default function EmergenciaDetalleLayout({
  nombre,
  imagen,
  contacto,
  pasos = [],
  imagenPasos,
}) {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-screen pb-24"
      style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f0f4f8" }}
    >
      <div className="relative h-[220px] overflow-hidden rounded-b-3xl">
        {imagen && (
          <img
            src={imagen}
            alt={nombre}
            className="h-full w-full object-cover"
          />
        )}
        <BackButton onClick={() => navigate(-1)} className="absolute left-4 top-4 z-10" />
      </div>

      <div className="px-5 pb-2 pt-5">
        <h1 className="m-0 text-[26px] font-black text-[#0d1b2a]">{nombre}</h1>
      </div>

      <div className="mx-5 mb-5 flex items-center justify-between gap-3 rounded-[14px] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
        <span className="shrink-0 text-[13px] font-medium text-gray-500">
          Entidades a contactar
        </span>
        <EntidadesContacto valor={contacto} />
      </div>

      {(pasos.length > 0 || imagenPasos) && (
        <div className="mx-4 mb-5 overflow-hidden rounded-[20px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.09)]">
          <div className="bg-[#1a3a6b] px-5 py-3.5 text-center">
            <p className="m-0 text-base font-semibold text-[#93c5fd]">Que hacer?</p>
          </div>

          {pasos.length > 0 ? (
            <div className="grid grid-cols-2 gap-px bg-gray-200">
              {pasos.map((paso) => (
                <PasoCard key={paso.numero} paso={paso} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-3">
              <img
                src={imagenPasos}
                alt={`Pasos para ${nombre}`}
                className="w-full rounded-2xl object-contain"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
