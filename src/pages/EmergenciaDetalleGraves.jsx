import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import BackButton from "../components/BackButton"

import imgConvulsion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/convulsionleve-GRAVE.png"
import imgFractura from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/fracturadebrazo-GRAVES.png"
import imgIntoxicacion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/intoxicacionalimentaria-GRAVE.png"
import imgMordida from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/mordidadeanimal-GRAVE.png"

// Imágenes de pasos
import pasosConvulsion from "../assets/Emergencias/Graves/convulsionleve_pasos.jpeg"
import pasosFractura from "../assets/Emergencias/Graves/fractura_brazo_pasos.jpeg"
import pasosIntoxicacion from "../assets/Emergencias/Graves/intoxicacion_alimentaria_pasos.jpeg"
import pasosMordida from "../assets/Emergencias/Graves/mordedura_animal_pasos.jpeg"

const imagenesLocales = {
  "Convulsión leve": imgConvulsion,
  "Fractura de brazo": imgFractura,
  "Intoxicación alimentaria": imgIntoxicacion,
  "Mordedura de animal": imgMordida,
}

const imagenesPasos = {
  "Convulsión leve": pasosConvulsion,
  "Fractura de brazo": pasosFractura,
  "Intoxicación alimentaria": pasosIntoxicacion,
  "Mordedura de animal": pasosMordida,
}

function EmergenciaDetalleGrave() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [emergencia, setEmergencia] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchEmergencia = async () => {
      try {
        const docRef = doc(db, "Emergencias graves", id)
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
      <main className="min-h-screen bg-[#0d1120] px-4 py-8 pb-20 text-white">
        <BackButton onClick={() => navigate(-1)} className="mb-6" />
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
    <main className="min-h-screen bg-white pb-20 text-white">

      {/* Imagen header con botón volver encima */}
      <div className="relative">
        {imagen && (
          <img
            src={imagen}
            alt={nombreEmergencia}
            className="h-48 w-full object-cover"
          />
        )}
        <BackButton onClick={() => navigate(-1)} className="absolute left-4 top-4" />
      </div>

      {/* Contenido */}
      <div className="rounded-t-[28px] bg-white -mt-4 relative text-gray-900 px-5 pt-6 pb-8 min-h-[calc(100vh-12rem)]">

        {/* Nombre y tipo */}
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

export default EmergenciaDetalleGrave
