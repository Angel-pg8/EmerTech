import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import imgEjemplo from "../assets/ejemplo.jpg"

const emergencias = [
  {
    id: "1",
    nombre: "Heridas leves con sangrado",
    tipo: "Lesión física",
    descripcion:
      "Limpia la zona con agua, aplica presión suave con un paño limpio y revisa si el sangrado disminuye.",
  },
  {
    id: "2",
    nombre: "Intoxicación alimentaria",
    tipo: "Sanitaria",
    descripcion:
      "Mantén hidratación constante, evita alimentos pesados y vigila señales de deshidratación.",
  },
  {
    id: "3",
    nombre: "Fracturas o esguinces",
    tipo: "Lesión física",
    descripcion:
      "Inmoviliza la zona, aplica frío local y evita apoyar peso hasta recibir atención profesional.",
  },
  {
    id: "4",
    nombre: "Reacción alérgica leve",
    tipo: "Sanitaria",
    descripcion:
      "Aléjate del desencadenante, observa la respiración y busca ayuda si los síntomas empeoran.",
  },
  {
    id: "5",
    nombre: "Quemadura leve",
    tipo: "Lesión física",
    descripcion:
      "Enfría la zona con agua corriente durante varios minutos y no apliques hielo directo.",
  },
  {
    id: "6",
    nombre: "Dolor de cabeza",
    tipo: "Neurológica",
    descripcion:
      "Descansa en un lugar tranquilo, hidrátate y observa si hay fiebre, vómitos o visión borrosa.",
  },
]

function EmergenciaDetalle() {
  const navigate = useNavigate()
  const { id } = useParams()

  const emergencia = useMemo(
    () => emergencias.find((item) => item.id === id),
    [id],
  )

  if (!emergencia) {
    return (
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-24 text-white">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 rounded-full bg-white/10 px-4 py-2 text-sm"
        >
          Regresar
        </button>
        <div className="rounded-3xl bg-white/10 p-6 text-center">
          <h1 className="text-2xl font-bold">Emergencia no encontrada</h1>
          <p className="mt-3 text-white/70">
            La tarjeta existe en la interfaz, pero este detalle todavía no fue
            cargado.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-6 pb-24 text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm"
      >
        Volver
      </button>

      <article className="overflow-hidden rounded-[28px] bg-white text-gray-900 shadow-xl">
        <img
          src={imgEjemplo}
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
              Recomendación inicial
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              Esta vista es una base funcional para mostrar instrucciones de
              primeros auxilios. Más adelante aquí podemos conectar contenido
              real, clasificación y apoyo con IA.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

export default EmergenciaDetalle
