import { useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton"

function EmergenciasPlaceholder({ titulo, descripcion }) {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-20 text-white">
      <BackButton onClick={() => navigate(-1)} className="mb-6" />

      <section className="rounded-[28px] bg-white p-6 text-gray-900 shadow-xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1e3a8a]">
          En construcción
        </p>
        <h1 className="mt-3 text-3xl font-black">{titulo}</h1>
        <p className="mt-4 text-sm leading-6 text-gray-600">{descripcion}</p>
      </section>
    </main>
  )
}

export default EmergenciasPlaceholder
