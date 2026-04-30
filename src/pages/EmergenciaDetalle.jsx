import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

import imgDeshidratacion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/deshidratacion-LEVE.png"
import imgDolorCabeza from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/dolordecabeza-LEVE.png"
import imgDolorOido from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/dolordeoido-LEVE.png"
import imgIntoxicacion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_leves/intoxicacionleve-LEVE.png"

// Imágenes de pasos
import pasosDeshidratacion from "../assets/Emergencias/Leves/deshidratacion_pasos.jpeg"
import pasosDolorCabeza from "../assets/Emergencias/Leves/dolor_cabeza_pasos.jpeg"
import pasosDolorOido from "../assets/Emergencias/Leves/dolor_oido_pasos.jpeg"
import pasosIntoxicacion from "../assets/Emergencias/Leves/intoxicacon_leve_pasos.jpeg"

const imagenesLocales = {
  "Deshidratacion": imgDeshidratacion,
  "Dolor de cabeza": imgDolorCabeza,
  "Dolor de oido": imgDolorOido,
  "Intoxicacion leve": imgIntoxicacion,
}

const imagenesPasos = {
  "Deshidratacion": pasosDeshidratacion,
  "Dolor de cabeza": pasosDolorCabeza,
  "Dolor de oido": pasosDolorOido,
  "Intoxicacion leve": pasosIntoxicacion,
}

function EmergenciaDetalle() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [emergencia, setEmergencia] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchEmergencia = async () => {
      try {
        const docRef = doc(db, "Emergencias leves", id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setEmergencia({ id: docSnap.id, ...docSnap.data() })
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setCargando(false)
      }
    }
    fetchEmergencia()
  }, [id])

  if (cargando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d1120]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[#3EB9BC]" />
      </main>
    )
  }

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
        </div>
      </main>
    )
  }

  const nombreEmergencia = emergencia["Nombre de la emergencia"]
  const imagen = imagenesLocales[nombreEmergencia] || null
  const imagenPasos = imagenesPasos[nombreEmergencia] || null

  return (
    <main className="min-h-screen bg-[#0d1120] pb-24 text-white">

      {/* Imagen header con botón volver encima */}
      <div className="relative">
        {imagen && (
          <img
            src={imagen}
            alt={nombreEmergencia}
            className="h-48 w-full object-cover"
          />
        )}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Contenido */}
      <div className="rounded-t-[28px] bg-white -mt-4 relative text-gray-900 px-5 pt-6 pb-10 min-h-screen">

        {/* Nombre y tipo */}
        <p className="text-sm text-gray-400 font-semibold">
          {emergencia["Tipo de emergencia"]}
        </p>
        <h1 className="mt-1 text-2xl font-black text-gray-900">
          {nombreEmergencia}
        </h1>

        <div className="my-4 h-px bg-gray-100" />

        {/* Entidades a contactar */}
        <div className="flex gap-4">
          <p className="w-32 shrink-0 text-sm text-gray-400 font-medium">
            Entidades a contactar
          </p>
          <p className="text-sm text-gray-800 font-semibold leading-6 whitespace-pre-line">
            {emergencia["Entidades a contactar"]}
          </p>
        </div>

        {/* Imagen de pasos */}
        {imagenPasos && (
          <div className="mt-6">
            <img
              src={imagenPasos}
              alt={`Pasos para ${nombreEmergencia}`}
              className="w-full rounded-2xl object-contain"
            />
          </div>
        )}

      </div>
    </main>
  )
}

export default EmergenciaDetalle