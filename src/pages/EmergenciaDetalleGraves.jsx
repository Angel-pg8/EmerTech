import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import BackButton from "../components/BackButton"
import EmergenciaDetalleLayout from "../components/EmergenciaDetalleLayout"
import { normalizarTexto } from "../data/organizaciones"

import imgIntoxicacion from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/intoxicacionalimentaria-GRAVE.png"
import imgMordida from "../assets/Portada_emergencias/Emergencias_leves/Emergencias_graves/mordidadeanimal-GRAVE.png"

import pasosConvulsion from "../assets/Emergencias/Graves/convulsionleve_pasos.jpeg"
import pasosFractura from "../assets/Emergencias/Graves/fractura_brazo_pasos.jpeg"
import pasosIntoxicacion from "../assets/Emergencias/Graves/intoxicacion_alimentaria_pasos.jpeg"
import pasosMordida from "../assets/Emergencias/Graves/mordedura_animal_pasos.jpeg"

const imagenesLocales = {
  "Intoxicacion alimentaria": imgIntoxicacion,
  "Mordedura de animal": imgMordida,
}

const imagenesPasos = {
  "Convulsion leve": pasosConvulsion,
  "Fractura de brazo": pasosFractura,
  "Intoxicacion alimentaria": pasosIntoxicacion,
  "Mordedura de animal": pasosMordida,
}

function obtenerRecursoPorNombre(recursos, nombre) {
  return Object.entries(recursos).find(
    ([clave]) => normalizarTexto(clave) === normalizarTexto(nombre),
  )?.[1]
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

  return (
    <EmergenciaDetalleLayout
      nombre={nombreEmergencia}
      imagen={obtenerRecursoPorNombre(imagenesLocales, nombreEmergencia) || null}
      contacto={emergencia["Entidades a contactar"]}
      imagenPasos={obtenerRecursoPorNombre(imagenesPasos, nombreEmergencia) || null}
    />
  )
}

export default EmergenciaDetalleGrave
